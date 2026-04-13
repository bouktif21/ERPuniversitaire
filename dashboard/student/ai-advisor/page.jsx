'use client';

import { useState, useRef, useEffect, useCallback } from 'react';
import {
  Send, Lightbulb, User, RefreshCw, Wifi, WifiOff, ChevronDown,
} from 'lucide-react';
import DashboardHeader from '@/components/dashboard/header';
import Sidebar from '@/components/dashboard/sidebar';

const API_URL = 'http://localhost:8000';

const SUGGESTIONS = [
  { text: 'Quelles sont mes notes ce semestre ?', icon: '📊' },
  { text: "Montre-moi mon emploi du temps", icon: '📅' },
  { text: 'Qui enseigne mes cours ?', icon: '👨‍🏫' },
  { text: 'Quel est mon GPA et mon évolution ?', icon: '🎓' },
  { text: 'Mon statut de paiement', icon: '💳' },
  { text: 'Quels cours suis-je inscrit ce semestre ?', icon: '📚' },
  { text: 'Donne-moi des conseils de révision', icon: '💡' },
];

const INTENT_LABELS = {
  grades: '📊 Notes',
  courses: '📚 Cours',
  professors: '👨‍🏫 Professeurs',
  schedule: '📅 Emploi du temps',
  student_info: '👤 Profil',
  payment: '💳 Paiement',
  exam: '📝 Examens',
  general: '💬 Général',
};

function GradeTag({ grade }) {
  const color = grade?.startsWith('A')
    ? 'text-green-600 bg-green-50'
    : grade?.startsWith('B')
    ? 'text-blue-600 bg-blue-50'
    : 'text-orange-600 bg-orange-50';
  return (
    <span className={`text-xs font-bold px-1.5 py-0.5 rounded ${color}`}>
      {grade}
    </span>
  );
}

function MessageBubble({ msg }) {
  const isUser = msg.type === 'user';
  return (
    <div className={`flex ${isUser ? 'justify-end' : 'justify-start'} gap-2`}>
      {!isUser && (
        <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0 mt-1">
          <Lightbulb className="h-4 w-4 text-primary" />
        </div>
      )}
      <div className="max-w-[75%] space-y-1">
        <div
          className={`px-4 py-3 rounded-2xl text-sm whitespace-pre-wrap leading-relaxed ${
            isUser
              ? 'bg-primary text-primary-foreground rounded-tr-sm'
              : 'bg-muted text-foreground rounded-tl-sm'
          }`}
        >
          {msg.text}
          {msg.streaming && (
            <span className="inline-block w-1 h-4 bg-current ml-1 animate-pulse rounded" />
          )}
        </div>
        {msg.intent && (
          <p className="text-xs text-muted-foreground px-1">
            {INTENT_LABELS[msg.intent] || msg.intent} · {Math.round((msg.confidence || 0) * 100)}%
          </p>
        )}
      </div>
    </div>
  );
}

function StudentCard({ card }) {
  if (!card) return null;
  const gpaColor =
    card.gpa >= 3.7 ? 'text-green-600' : card.gpa >= 3.0 ? 'text-blue-600' : 'text-orange-500';

  return (
    <div className="bg-card border border-border rounded-xl p-5 space-y-4">
      <div className="flex items-center gap-3">
        <div className="w-12 h-12 rounded-full bg-primary/15 flex items-center justify-center text-lg font-bold text-primary">
          {card.initials}
        </div>
        <div>
          <p className="font-semibold text-sm">{card.name}</p>
          <p className="text-xs text-muted-foreground">{card.email}</p>
          <p className="text-xs text-muted-foreground">{card.major} · {card.year}</p>
        </div>
      </div>

      <div className="grid grid-cols-2 gap-3">
        <div className="bg-muted/50 rounded-lg p-2 text-center">
          <p className="text-xs text-muted-foreground">GPA</p>
          <p className={`text-lg font-bold ${gpaColor}`}>{card.gpa}</p>
        </div>
        <div className="bg-muted/50 rounded-lg p-2 text-center">
          <p className="text-xs text-muted-foreground">Crédits</p>
          <p className="text-lg font-bold">{card.credits}</p>
        </div>
      </div>

      <div className="space-y-1.5">
        <div className="flex items-center justify-between text-xs">
          <span className="text-muted-foreground">Statut</span>
          <span className={`font-medium ${card.status === 'Actif' ? 'text-green-600' : 'text-yellow-600'}`}>
            {card.status}
          </span>
        </div>
        <div className="flex items-center justify-between text-xs">
          <span className="text-muted-foreground">Paiement</span>
          <span className={`font-medium ${card.payment === 'À jour' ? 'text-green-600' : 'text-orange-500'}`}>
            {card.payment}
          </span>
        </div>
      </div>

      {card.courses?.length > 0 && (
        <div>
          <p className="text-xs font-semibold text-muted-foreground mb-2">Notes actuelles</p>
          <div className="space-y-1.5">
            {card.courses.map((c) => (
              <div key={c.code} className="flex items-center justify-between">
                <span className="text-xs font-mono text-muted-foreground">{c.code}</span>
                <div className="flex items-center gap-1.5">
                  <span className="text-xs">{c.score}</span>
                  <GradeTag grade={c.grade} />
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}

export default function AIAdvisorPage() {
  const [messages, setMessages] = useState([
    {
      id: 1,
      type: 'assistant',
      text: "Bonjour ! Je suis ARIA, votre assistant académique IA.\n\nJe peux vous aider avec :\n📊 Vos notes et GPA\n📅 Votre emploi du temps\n📚 Vos cours inscrits\n👨‍🏫 Vos professeurs\n💳 Votre situation de paiement\n\nCommencez par sélectionner votre profil étudiant ci-dessus !",
    },
  ]);
  const [input, setInput] = useState('');
  const [isLoading] = useState(false);
  const [isStreaming, setIsStreaming] = useState(false);
  const [students, setStudents] = useState([]);
  const [selectedStudent, setSelectedStudent] = useState(null);
  const [studentCard, setStudentCard] = useState(null);
  const [serverOnline, setServerOnline] = useState(null);
  const [history, setHistory] = useState([]);
  const [showScrollBtn, setShowScrollBtn] = useState(false);

  const messagesEndRef = useRef(null);
  const chatContainerRef = useRef(null);
  const abortControllerRef = useRef(null);

  // Vérification du serveur + chargement des étudiants
  useEffect(() => {
    const init = async () => {
      try {
        const res = await fetch(`${API_URL}/api/health`);
        if (res.ok) {
          setServerOnline(true);
          await fetchStudents();
        } else {
          setServerOnline(false);
        }
      } catch {
        setServerOnline(false);
      }
    };
    init();
  }, []);

  // Auto-scroll
  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  const handleScroll = () => {
    if (!chatContainerRef.current) return;
    const { scrollTop, scrollHeight, clientHeight } = chatContainerRef.current;
    setShowScrollBtn(scrollHeight - scrollTop - clientHeight > 100);
  };

  const fetchStudents = async () => {
    try {
      const res = await fetch(`${API_URL}/api/students`);
      if (!res.ok) return;
      setStudents(await res.json());
    } catch {
      // silently fail
    }
  };

  const handleStudentSelect = (student) => {
    setSelectedStudent(student);
    setStudentCard(null);
    setHistory([]);
    setMessages([
      {
        id: 1,
        type: 'assistant',
        text: `Bonjour ${student.nom.split(' ')[0]} ! 👋\n\nJe suis ARIA, ton assistant académique. Je vois que tu es en ${student.filiere}, ${student.annee}.\n\nComment puis-je t'aider aujourd'hui ?`,
      },
    ]);
  };

  const sendMessage = useCallback(async (text) => {
    if (!text.trim() || isLoading || isStreaming) return;

    const userMessage = text.trim();
    const userMsg = { id: Date.now(), type: 'user', text: userMessage };
    const assistantId = Date.now() + 1;

    setMessages((prev) => [...prev, userMsg]);
    setInput('');
    setIsStreaming(true);

    // Placeholder de streaming
    setMessages((prev) => [
      ...prev,
      { id: assistantId, type: 'assistant', text: '', streaming: true },
    ]);

    try {
      abortControllerRef.current = new AbortController();

      const res = await fetch(`${API_URL}/api/chat/stream`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          message: userMessage,
          student_id: selectedStudent?.id || null,
          history: history,
        }),
        signal: abortControllerRef.current.signal,
      });

      if (!res.ok) throw new Error('Erreur serveur');

      const reader = res.body.getReader();
      const decoder = new TextDecoder();
      let fullText = '';
      let intentData = {};

      while (true) {
        const { done, value } = await reader.read();
        if (done) break;

        const raw = decoder.decode(value, { stream: true });
        const lines = raw.split('\n');

        for (const line of lines) {
          if (!line.startsWith('data: ')) continue;
          try {
            const data = JSON.parse(line.slice(6));

            if (data.type === 'meta') {
              intentData = { intent: data.intent, confidence: data.confidence };
              if (data.student_card) setStudentCard(data.student_card);
            } else if (data.type === 'text') {
              fullText += data.chunk;
              setMessages((prev) =>
                prev.map((m) =>
                  m.id === assistantId ? { ...m, text: fullText } : m
                )
              );
            } else if (data.type === 'done') {
              setMessages((prev) =>
                prev.map((m) =>
                  m.id === assistantId
                    ? { ...m, text: fullText, streaming: false, ...intentData }
                    : m
                )
              );
            }
          } catch {
            // skip malformed SSE
          }
        }
      }

      // Mettre à jour l'historique
      setHistory((prev) => [
        ...prev,
        { role: 'user', content: userMessage },
        { role: 'assistant', content: fullText },
      ]);
    } catch (err) {
      if (err.name === 'AbortError') {
        setMessages((prev) =>
          prev.map((m) =>
            m.id === assistantId
              ? { ...m, text: m.text || '⏹️ Réponse interrompue.', streaming: false }
              : m
          )
        );
      } else {
        setMessages((prev) =>
          prev.map((m) =>
            m.id === assistantId
              ? {
                  ...m,
                  text: '⚠️ Impossible de contacter le serveur. Vérifiez que le backend est lancé sur le port 8000.',
                  streaming: false,
                }
              : m
          )
        );
      }
    } finally {
      setIsStreaming(false);
    }
  }, [isLoading, isStreaming, selectedStudent, history]);

  const handleSend = () => sendMessage(input);

  const handleSuggestion = (text) => sendMessage(text);

  const handleStop = () => {
    abortControllerRef.current?.abort();
  };

  const handleClearChat = () => {
    setHistory([]);
    setStudentCard(null);
    setMessages([
      {
        id: Date.now(),
        type: 'assistant',
        text: selectedStudent
          ? `Discussion réinitialisée. Comment puis-je t'aider, ${selectedStudent.nom.split(' ')[0]} ?`
          : 'Discussion réinitialisée. Comment puis-je vous aider ?',
      },
    ]);
  };

  return (
    <div className="flex min-h-screen bg-background">
      <Sidebar role="student" />
      <div className="flex-1 ml-64">
        <DashboardHeader role="Student" currentPage="Conseiller IA" />
        <main className="p-6">
          <div className="space-y-5">

            {/* En-tête */}
            <div className="flex items-center justify-between">
              <div>
                <h1 className="text-2xl font-bold">Conseiller Académique IA</h1>
                <p className="text-sm text-muted-foreground">Propulsé par Claude · Modèle claude-sonnet-4-6</p>
              </div>
              <div className="flex items-center gap-3">
                {serverOnline !== null && (
                  <div className={`flex items-center gap-1.5 text-xs px-2.5 py-1 rounded-full border ${
                    serverOnline
                      ? 'text-green-600 border-green-200 bg-green-50'
                      : 'text-red-500 border-red-200 bg-red-50'
                  }`}>
                    {serverOnline ? <Wifi className="h-3 w-3" /> : <WifiOff className="h-3 w-3" />}
                    {serverOnline ? 'Serveur en ligne' : 'Serveur hors ligne'}
                  </div>
                )}
                <button
                  onClick={handleClearChat}
                  className="flex items-center gap-1.5 px-3 py-1.5 text-xs border border-border rounded-lg hover:bg-muted transition"
                >
                  <RefreshCw className="h-3.5 w-3.5" />
                  Réinitialiser
                </button>
              </div>
            </div>

            {/* Sélecteur d'étudiants */}
            {students.length > 0 && (
              <div className="bg-card border border-border rounded-xl p-4">
                <p className="text-xs font-semibold text-muted-foreground uppercase tracking-wide mb-3">
                  Sélectionner votre profil
                </p>
                <div className="flex flex-wrap gap-2">
                  {students.map((student) => (
                    <button
                      key={student.id}
                      onClick={() => handleStudentSelect(student)}
                      className={`flex items-center gap-2.5 px-3 py-2 rounded-xl text-sm border transition-all ${
                        selectedStudent?.id === student.id
                          ? 'bg-primary text-primary-foreground border-primary shadow-sm'
                          : 'bg-muted/50 border-border hover:border-primary/40 hover:bg-muted'
                      }`}
                    >
                      <div className="w-8 h-8 rounded-full bg-primary/20 flex items-center justify-center text-xs font-bold">
                        {student.initiales}
                      </div>
                      <div className="text-left">
                        <p className="font-medium leading-tight">{student.nom}</p>
                        <p className="text-xs opacity-70">{student.filiere} · GPA {student.gpa}</p>
                      </div>
                    </button>
                  ))}
                </div>
              </div>
            )}

            {!serverOnline && serverOnline !== null && (
              <div className="p-4 bg-destructive/10 text-destructive border border-destructive/20 rounded-xl text-sm">
                ⚠️ Le serveur backend n'est pas accessible. Lancez le backend avec{' '}
                <code className="bg-destructive/10 px-1 rounded">python main.py</code> dans le dossier{' '}
                <code className="bg-destructive/10 px-1 rounded">chatbot/</code>.
              </div>
            )}

            {/* Grille principale */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-5">

              {/* Zone de chat */}
              <div className="lg:col-span-2 flex flex-col gap-3">
                <div
                  ref={chatContainerRef}
                  onScroll={handleScroll}
                  className="bg-card border border-border rounded-xl p-5 overflow-y-auto space-y-4 relative"
                  style={{ height: '480px' }}
                >
                  {messages.map((msg) => (
                    <MessageBubble key={msg.id} msg={msg} />
                  ))}
                  {isStreaming && messages[messages.length - 1]?.streaming === false && (
                    <div className="flex justify-start gap-2">
                      <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center">
                        <Lightbulb className="h-4 w-4 text-primary" />
                      </div>
                      <div className="bg-muted px-4 py-3 rounded-2xl rounded-tl-sm">
                        <div className="flex gap-1.5">
                          <div className="w-2 h-2 bg-primary/60 rounded-full animate-bounce" />
                          <div className="w-2 h-2 bg-primary/60 rounded-full animate-bounce" style={{ animationDelay: '0.15s' }} />
                          <div className="w-2 h-2 bg-primary/60 rounded-full animate-bounce" style={{ animationDelay: '0.3s' }} />
                        </div>
                      </div>
                    </div>
                  )}
                  <div ref={messagesEndRef} />

                  {showScrollBtn && (
                    <button
                      onClick={scrollToBottom}
                      className="absolute bottom-4 right-4 p-2 bg-primary text-primary-foreground rounded-full shadow-lg hover:bg-primary/90 transition"
                    >
                      <ChevronDown className="h-4 w-4" />
                    </button>
                  )}
                </div>

                {/* Zone de saisie */}
                <div className="flex gap-2">
                  <input
                    type="text"
                    value={input}
                    onChange={(e) => setInput(e.target.value)}
                    onKeyDown={(e) => e.key === 'Enter' && !e.shiftKey && handleSend()}
                    placeholder={
                      selectedStudent
                        ? `Posez une question, ${selectedStudent.nom.split(' ')[0]}…`
                        : 'Sélectionnez un étudiant puis posez votre question…'
                    }
                    disabled={!serverOnline}
                    className="flex-1 px-4 py-2.5 border border-input rounded-xl bg-background text-sm focus:outline-none focus:ring-2 focus:ring-primary/30 disabled:opacity-50"
                  />
                  {isStreaming ? (
                    <button
                      onClick={handleStop}
                      className="px-4 py-2.5 bg-destructive text-destructive-foreground rounded-xl hover:bg-destructive/90 transition text-sm font-medium"
                    >
                      ⏹
                    </button>
                  ) : (
                    <button
                      onClick={handleSend}
                      disabled={!input.trim() || !serverOnline}
                      className="flex items-center gap-2 px-4 py-2.5 bg-primary text-primary-foreground rounded-xl hover:bg-primary/90 disabled:opacity-40 transition"
                    >
                      <Send className="h-4 w-4" />
                    </button>
                  )}
                </div>
              </div>

              {/* Panneau latéral */}
              <div className="space-y-4">

                {/* Suggestions */}
                <div className="bg-card border border-border rounded-xl p-5">
                  <h3 className="text-sm font-semibold mb-3 flex items-center gap-2">
                    <Lightbulb className="h-4 w-4 text-primary" />
                    Questions rapides
                  </h3>
                  <div className="space-y-1.5">
                    {SUGGESTIONS.map((s, idx) => (
                      <button
                        key={idx}
                        onClick={() => handleSuggestion(s.text)}
                        disabled={!serverOnline || isStreaming}
                        className="w-full text-left px-3 py-2 rounded-lg bg-muted hover:bg-muted/70 transition text-xs flex items-center gap-2 disabled:opacity-40"
                      >
                        <span>{s.icon}</span>
                        <span>{s.text}</span>
                      </button>
                    ))}
                  </div>
                </div>

                {/* Fiche étudiant */}
                {studentCard ? (
                  <StudentCard card={studentCard} />
                ) : selectedStudent ? (
                  <div className="bg-card border border-border rounded-xl p-5">
                    <h3 className="text-sm font-semibold mb-3 flex items-center gap-2">
                      <User className="h-4 w-4" />
                      Profil sélectionné
                    </h3>
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-full bg-primary/15 flex items-center justify-center font-bold text-primary">
                        {selectedStudent.initiales}
                      </div>
                      <div>
                        <p className="font-semibold text-sm">{selectedStudent.nom}</p>
                        <p className="text-xs text-muted-foreground">{selectedStudent.filiere}</p>
                        <p className="text-xs text-muted-foreground">{selectedStudent.annee}</p>
                      </div>
                    </div>
                    <p className="text-xs text-muted-foreground mt-3">
                      Posez une question sur vos notes, cours ou emploi du temps pour voir votre fiche complète.
                    </p>
                  </div>
                ) : null}
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}
