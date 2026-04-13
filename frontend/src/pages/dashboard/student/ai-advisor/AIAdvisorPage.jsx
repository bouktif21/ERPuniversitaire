'use client';

import { useState, useRef, useEffect } from 'react';
import {
  Send, Lightbulb, Brain, User, GraduationCap,
  BookOpen, TrendingUp, CreditCard, Calendar, Server, ServerOff,
} from 'lucide-react';
import { DashboardHeader } from '@/components/dashboard/header';
import { DashboardSidebar } from '@/components/dashboard/sidebar';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';

const API_BASE = 'http://localhost:8000';

// ─────────────────────────────────────────────────────────────────────────────
// Données étudiants intégrées (fonctionnent SANS le backend Python)
// ─────────────────────────────────────────────────────────────────────────────
const STUDENTS_DATA = [
  {
    id: 'STU-2024-001',
    nom: 'Ahmed Ben Ali',
    initiales: 'AB',
    filiere: 'Informatique',
    annee: '2ème année',
    gpa: '3.72',
    date_inscription: '15 septembre 2023',
    statut: 'Actif',
    email: 'a.benali@univ.tn',
    telephone: '+216 22 345 678',
    credits: '72/120',
    paiement: 'À jour',
    cours: [
      { code: 'CS301',   nom: 'Algorithmes',          prof: 'Dr. Ahmed Hassan',  horaire: 'Lun/Mer 10:00–11:30', salle: 'B101',       grade: 'A',  note: '17.2/20' },
      { code: 'MATH201', nom: 'Algèbre Linéaire',      prof: 'Dr. Laila Mansour', horaire: 'Mar/Jeu 14:00–15:30', salle: 'A205',       grade: 'B+', note: '15.0/20' },
      { code: 'CS302',   nom: 'Bases de Données',      prof: 'Dr. Rim Bouaziz',   horaire: 'Mar/Ven 08:30–10:00', salle: 'Labo C203',  grade: 'A-', note: '17.0/20' },
      { code: 'PHYS101', nom: 'Physique Générale I',   prof: 'Prof. Omar Zayani', horaire: 'Lun/Jeu 13:00–14:30', salle: 'Amphi D',    grade: 'B',  note: '14.0/20' },
    ],
  },
  {
    id: 'STU-2023-047',
    nom: 'Fatima Benali',
    initiales: 'FB',
    filiere: 'Gestion',
    annee: '3ème année',
    gpa: '3.85',
    date_inscription: '10 septembre 2022',
    statut: 'Actif',
    email: 'f.benali@univ.tn',
    telephone: '+216 25 678 901',
    credits: '95/120',
    paiement: 'À jour',
    cours: [
      { code: 'GES301', nom: 'Comptabilité Avancée', prof: 'Dr. Nadia Gharbi',      horaire: 'Mar/Jeu 10:00–11:30', salle: 'D205',  grade: 'A',  note: '18.8/20' },
      { code: 'ECO201', nom: 'Macroéconomie',         prof: 'Dr. Nadia Gharbi',      horaire: 'Lun/Mer 14:00–15:30', salle: 'Amphi B', grade: 'A-', note: '16.8/20' },
      { code: 'MKT101', nom: 'Marketing Fondamental', prof: 'Dr. Khalil Ferchichi',  horaire: 'Ven 08:30–10:00',     salle: 'D110',  grade: 'B+', note: '15.2/20' },
    ],
  },
  {
    id: 'STU-2024-089',
    nom: 'Mohamed Trabelsi',
    initiales: 'MT',
    filiere: 'Électronique',
    annee: '1ère année',
    gpa: '3.20',
    date_inscription: '05 octobre 2024',
    statut: 'Actif',
    email: 'm.trabelsi@univ.tn',
    telephone: '+216 27 111 222',
    credits: '28/120',
    paiement: 'En attente',
    cours: [
      { code: 'ELE101',  nom: 'Circuits Électriques',           prof: 'Prof. Sami Ben Amor', horaire: 'Lun/Mer 08:30–10:00', salle: 'Labo E101', grade: 'B+', note: '15.0/20' },
      { code: 'MATH101', nom: 'Calcul Différentiel et Intégral', prof: 'Dr. Laila Mansour',   horaire: 'Mer/Ven 10:00–11:30', salle: 'A101',      grade: 'B',  note: '13.0/20' },
      { code: 'PHYS101', nom: 'Physique Générale I',             prof: 'Prof. Omar Zayani',   horaire: 'Lun/Jeu 13:00–14:30', salle: 'Amphi D',   grade: 'A-', note: '15.8/20' },
    ],
  },
  {
    id: 'STU-2022-015',
    nom: 'Sonia Mejri',
    initiales: 'SM',
    filiere: 'Médecine',
    annee: '4ème année',
    gpa: '3.95',
    date_inscription: '01 septembre 2021',
    statut: 'Actif',
    email: 's.mejri@univ.tn',
    telephone: '+216 29 333 444',
    credits: '110/180',
    paiement: 'À jour',
    cours: [
      { code: 'MED401', nom: 'Anatomie Avancée', prof: 'Dr. Amina Dridi', horaire: 'Lun/Mer/Ven 08:00–10:00', salle: 'Amphi Méd.',  grade: 'A',  note: '18.8/20' },
      { code: 'BIO301', nom: 'Biochimie',         prof: 'Dr. Amina Dridi', horaire: 'Mar/Jeu 13:00–14:30',     salle: 'Labo Bio F201', grade: 'A-', note: '17.4/20' },
    ],
  },
  {
    id: 'STU-2023-102',
    nom: 'Karim Slimani',
    initiales: 'KS',
    filiere: 'Informatique',
    annee: '3ème année',
    gpa: '3.45',
    date_inscription: '12 septembre 2022',
    statut: 'Actif',
    email: 'k.slimani@univ.tn',
    telephone: '+216 23 456 789',
    credits: '88/120',
    paiement: 'À jour',
    cours: [
      { code: 'CS301',   nom: 'Algorithmes',                     prof: 'Dr. Ahmed Hassan',  horaire: 'Lun/Mer 10:00–11:30', salle: 'B101',      grade: 'A-', note: '15.8/20' },
      { code: 'CS302',   nom: 'Bases de Données',                 prof: 'Dr. Rim Bouaziz',   horaire: 'Mar/Ven 08:30–10:00', salle: 'Labo C203', grade: 'B+', note: '14.8/20' },
      { code: 'CS401',   nom: 'Intelligence Artificielle',        prof: 'Dr. Ahmed Hassan',  horaire: 'Jeu/Ven 10:00–11:30', salle: 'Labo IA',   grade: 'A-', note: '16.8/20' },
      { code: 'MATH201', nom: 'Algèbre Linéaire',                 prof: 'Dr. Laila Mansour', horaire: 'Mar/Jeu 14:00–15:30', salle: 'A205',      grade: 'B',  note: '13.6/20' },
    ],
  },
];

// ─────────────────────────────────────────────────────────────────────────────
// System prompt pour le mode fallback (appel direct Anthropic depuis le browser)
// ─────────────────────────────────────────────────────────────────────────────
function buildFallbackPrompt(student) {
  if (!student) {
    const liste = STUDENTS_DATA.map(
      (s) => `• ${s.nom} (ID: ${s.id}, ${s.filiere} – ${s.annee})`
    ).join('\n');
    return (
      `Tu es l'assistant IA d'un ERP universitaire. Réponds toujours en français.\n\n` +
      `Aucun étudiant n'est sélectionné. Voici les étudiants disponibles :\n${liste}\n\n` +
      `Invite l'utilisateur à sélectionner son profil dans le menu déroulant.`
    );
  }

  const coursListe = student.cours
    .map(
      (c) =>
        `  • ${c.code} – ${c.nom} | Note: ${c.note} (${c.grade}) | Prof: ${c.prof} | ${c.horaire} | Salle: ${c.salle}`
    )
    .join('\n');

  return (
    `Tu es l'assistant IA d'un ERP universitaire tunisien. Réponds TOUJOURS en français, de façon concise et bienveillante.\n\n` +
    `=== PROFIL ÉTUDIANT ===\n` +
    `Nom : ${student.nom}\n` +
    `ID  : ${student.id}\n` +
    `Filière : ${student.filiere} – ${student.annee}\n` +
    `GPA : ${student.gpa}  |  Crédits : ${student.credits}\n` +
    `Statut : ${student.statut}  |  Paiement : ${student.paiement}\n` +
    `Email : ${student.email}  |  Tél : ${student.telephone}\n\n` +
    `=== COURS ET NOTES (Printemps 2025) ===\n` +
    coursListe + '\n\n' +
    `Réponds uniquement à partir de ces données. Si une information est absente, dis-le poliment.`
  );
}

// ─────────────────────────────────────────────────────────────────────────────
// Suggestions rapides
// ─────────────────────────────────────────────────────────────────────────────
const QUICK_SUGGESTIONS = [
  'Quelles sont mes notes ce semestre ?',
  'Quel est mon emploi du temps ?',
  'Qui est mon professeur de CS301 ?',
  'Quel est mon GPA actuel ?',
  'À quelle heure commence mon cours lundi ?',
  'Dans quelle salle est le cours MATH201 ?',
  'Comment contacter mon professeur de physique ?',
  'Quels cours suis-je inscrit ce semestre ?',
];

// Sidebar
const sidebarItems = [
  { label: 'Dashboard',    href: '/dashboard/student',            icon: GraduationCap },
  { label: 'Mes Cours',    href: '/dashboard/student/enrollment', icon: BookOpen },
  { label: 'Notes',        href: '/dashboard/student/my-grades',  icon: TrendingUp },
  { label: 'Emploi temps', href: '/dashboard/student/timetable',  icon: Calendar },
  { label: 'Assistant IA', href: '/dashboard/student/ai-advisor', icon: Brain },
  { label: 'Paiements',    href: '/dashboard/student/payments',   icon: CreditCard },
];

// ─────────────────────────────────────────────────────────────────────────────
// Composants UI
// ─────────────────────────────────────────────────────────────────────────────

function gradeColor(grade) {
  if (!grade) return 'bg-gray-100 text-gray-700';
  if (grade.startsWith('A')) return 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200';
  if (grade.startsWith('B')) return 'bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200';
  return 'bg-amber-100 text-amber-800 dark:bg-amber-900 dark:text-amber-200';
}

function StudentCard({ student }) {
  return (
    <div className="mt-3 bg-background border border-border rounded-xl overflow-hidden shadow-sm">
      <div className="flex items-center gap-3 p-4 border-b border-border bg-muted/30">
        <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary font-semibold text-sm flex-shrink-0">
          {student.initiales}
        </div>
        <div className="min-w-0">
          <p className="font-semibold text-foreground truncate">{student.nom}</p>
          <p className="text-xs text-muted-foreground">{student.id} · {student.filiere}</p>
        </div>
        <Badge
          variant="outline"
          className={`ml-auto flex-shrink-0 text-xs ${
            student.statut === 'Actif'
              ? 'border-green-500 text-green-600'
              : 'border-red-500 text-red-600'
          }`}
        >
          {student.statut}
        </Badge>
      </div>

      <div className="grid grid-cols-2 gap-x-4 gap-y-2 p-4 text-sm border-b border-border">
        {[
          ['Filière',     student.filiere],
          ['Année',       student.annee],
          ['GPA',         student.gpa],
          ['Crédits',     student.credits],
          ['Inscription', student.date_inscription],
          ['Paiement',    student.paiement],
          ['Email',       student.email],
          ['Tél.',        student.telephone],
        ].map(([label, value]) => (
          <div key={label}>
            <p className="text-xs text-muted-foreground">{label}</p>
            <p className="font-medium text-foreground truncate" title={value}>{value}</p>
          </div>
        ))}
      </div>

      <div className="p-4">
        <p className="text-xs font-medium text-muted-foreground mb-2 uppercase tracking-wide">
          Cours en cours
        </p>
        <div className="space-y-1.5">
          {student.cours.map((c) => (
            <div key={c.code} className="flex items-center gap-2 text-sm">
              <span className="text-xs font-mono text-muted-foreground w-16 flex-shrink-0">{c.code}</span>
              <span className="flex-1 truncate text-foreground">{c.nom}</span>
              <span className={`text-xs px-2 py-0.5 rounded font-medium flex-shrink-0 ${gradeColor(c.grade)}`}>
                {c.grade} · {c.note}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

const INTENT_LABELS = {
  grades:       { label: 'Notes',           color: 'bg-green-100 text-green-700' },
  courses:      { label: 'Cours',           color: 'bg-blue-100 text-blue-700' },
  professors:   { label: 'Professeurs',     color: 'bg-purple-100 text-purple-700' },
  schedule:     { label: 'Emploi du temps', color: 'bg-orange-100 text-orange-700' },
  student_info: { label: 'Profil',          color: 'bg-pink-100 text-pink-700' },
  general:      { label: 'Général',         color: 'bg-gray-100 text-gray-600' },
};

function IntentBadge({ intent, confidence }) {
  const info = INTENT_LABELS[intent] || INTENT_LABELS.general;
  return (
    <span className={`inline-flex items-center gap-1 text-xs px-2 py-0.5 rounded-full font-medium ${info.color}`}>
      {info.label}
      {confidence != null && (
        <span className="opacity-60">{Math.round(confidence * 100)}%</span>
      )}
    </span>
  );
}

function MessageBubble({ message }) {
  const isUser = message.role === 'user';
  return (
    <div className={`flex gap-3 ${isUser ? 'flex-row-reverse' : ''}`}>
      <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0 mt-0.5">
        {isUser ? <User className="w-4 h-4 text-primary" /> : <Brain className="w-4 h-4 text-primary" />}
      </div>
      <div className={`max-w-[78%] flex flex-col ${isUser ? 'items-end' : 'items-start'}`}>
        {!isUser && message.intent && (
          <div className="mb-1">
            <IntentBadge intent={message.intent} confidence={message.confidence} />
          </div>
        )}
        <div className={`px-4 py-2.5 rounded-2xl text-sm leading-relaxed ${
          isUser
            ? 'bg-primary text-primary-foreground rounded-tr-sm'
            : 'bg-muted text-foreground rounded-tl-sm'
        }`}>
          <p className="whitespace-pre-wrap">{message.text}</p>
        </div>
        {!isUser && message.showCard && message.studentData && (
          <StudentCard student={message.studentData} />
        )}
      </div>
    </div>
  );
}

function TypingIndicator() {
  return (
    <div className="flex gap-3">
      <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
        <Brain className="w-4 h-4 text-primary" />
      </div>
      <div className="bg-muted px-4 py-3 rounded-2xl rounded-tl-sm">
        <div className="flex gap-1.5 items-center h-4">
          {[0, 150, 300].map((delay) => (
            <div
              key={delay}
              className="w-2 h-2 bg-muted-foreground rounded-full animate-bounce"
              style={{ animationDelay: `${delay}ms` }}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

// ─────────────────────────────────────────────────────────────────────────────
// Page principale
// ─────────────────────────────────────────────────────────────────────────────
export default function AIAdvisorPage() {
  const [selectedId, setSelectedId] = useState(STUDENTS_DATA[0].id);
  const [messages, setMessages]     = useState([]);
  const [input, setInput]           = useState('');
  const [isLoading, setIsLoading]   = useState(false);
  const [history, setHistory]       = useState([]);
  const [serverOk, setServerOk]     = useState(null); // null=checking, true, false
  const chatEndRef = useRef(null);
  const inputRef   = useRef(null);

  // Message de bienvenue selon l'étudiant sélectionné
  useEffect(() => {
    const s = STUDENTS_DATA.find((x) => x.id === selectedId);
    setHistory([]);
    setMessages([
      {
        id: 1,
        role: 'assistant',
        text:
          `Bonjour ${s?.nom?.split(' ')[0] ?? ''} ! 👋\n\n` +
          `Je suis ton assistant IA universitaire. Je peux répondre à tes questions sur :\n` +
          `📊 Tes notes et ton GPA\n` +
          `📚 Tes cours et leur contenu\n` +
          `👨‍🏫 Tes professeurs et leurs contacts\n` +
          `🗓️ Ton emploi du temps et les salles\n\n` +
          `Pose-moi ta question !`,
      },
    ]);
  }, [selectedId]);

  // Vérification du backend Python (non bloquant)
  useEffect(() => {
    fetch(`${API_BASE}/api/health`, { signal: AbortSignal.timeout(3000) })
      .then(() => setServerOk(true))
      .catch(() => setServerOk(false));
  }, []);

  useEffect(() => {
    chatEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages, isLoading]);

  // ── Envoi du message ───────────────────────────────────────────────────────
  const handleSend = async (text = input) => {
    const trimmed = text.trim();
    if (!trimmed || isLoading) return;

    setInput('');
    setIsLoading(true);

    const userMsg = { id: Date.now(), role: 'user', text: trimmed };
    setMessages((prev) => [...prev, userMsg]);

    const student = STUDENTS_DATA.find((s) => s.id === selectedId) ?? null;

    try {
      let aiText = '';
      let intent = null;
      let confidence = null;

      if (serverOk) {
        // ── Mode backend Python (ML + Claude côté serveur) ──
        const res = await fetch(`${API_BASE}/api/chat`, {
          method:  'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            message:    trimmed,
            student_id: selectedId,
            history,
          }),
          signal: AbortSignal.timeout(15000),
        });

        if (!res.ok) throw new Error(`Erreur serveur ${res.status}`);
        const data = await res.json();
        aiText     = data.response;
        intent     = data.intent;
        confidence = data.confidence;
      } else {
        // ── Mode fallback : appel direct Anthropic depuis le browser ──
        const apiKey = import.meta.env.VITE_ANTHROPIC_API_KEY;
        if (!apiKey) {
          aiText =
            '⚠️ Le serveur Python est hors ligne et aucune clé VITE_ANTHROPIC_API_KEY n\'est configurée.\n\n' +
            'Pour utiliser l\'assistant :\n' +
            '• Démarrez le backend : cd chatbot && uvicorn main:app --reload\n' +
            '• OU ajoutez VITE_ANTHROPIC_API_KEY dans frontend/.env';
        } else {
          const msgs = [
            ...history.map((h) => ({ role: h.role, content: h.content })),
            { role: 'user', content: trimmed },
          ];
          const resp = await fetch('https://api.anthropic.com/v1/messages', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
              'x-api-key': apiKey,
              'anthropic-version': '2023-06-01',
              'anthropic-dangerous-direct-browser-access': 'true',
            },
            body: JSON.stringify({
              model:      'claude-sonnet-4-20250514',
              max_tokens: 1024,
              system:     buildFallbackPrompt(student),
              messages:   msgs,
            }),
          });
          const data = await resp.json();
          if (data.error) throw new Error(data.error.message);
          aiText = data.content.map((b) => b.text || '').join('\n');
        }
      }

      // Détecter si on doit afficher la fiche (mots-clés dans la question)
      const showCard = /notes|gpa|cours|emploi|horaire|profil|cr[ée]dits/i.test(trimmed);

      setHistory((prev) => [
        ...prev,
        { role: 'user',      content: trimmed },
        { role: 'assistant', content: aiText },
      ]);

      setMessages((prev) => [
        ...prev,
        {
          id:          Date.now() + 1,
          role:        'assistant',
          text:        aiText,
          intent,
          confidence,
          showCard,
          studentData: student,
        },
      ]);
    } catch (err) {
      setMessages((prev) => [
        ...prev,
        {
          id:   Date.now() + 1,
          role: 'assistant',
          text: `⚠️ Erreur : ${err.message}`,
        },
      ]);
    } finally {
      setIsLoading(false);
      inputRef.current?.focus();
    }
  };

  const selectedStudent = STUDENTS_DATA.find((s) => s.id === selectedId);

  return (
    <div className="min-h-screen bg-background">
      <DashboardSidebar
        items={sidebarItems}
        title="Portail Étudiant"
        subtitle="Tableau de bord académique"
      />

      <div className="ml-64">
        <DashboardHeader
          userName="Assistant IA"
          userRole="ERP Universitaire — Assistant IA"
        />

        <main className="p-6">
          <div className="max-w-6xl mx-auto">

            {/* En-tête */}
            <div className="flex items-center gap-3 mb-5 flex-wrap">
              <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center">
                <Brain className="w-5 h-5 text-primary" />
              </div>
              <div>
                <h1 className="text-2xl font-bold text-foreground">Assistant IA Universitaire</h1>
                <p className="text-sm text-muted-foreground">Machine Learning + Claude AI</p>
              </div>

              {/* Statut backend */}
              <div className="ml-auto flex items-center gap-2 text-xs text-muted-foreground">
                {serverOk === true  && <><Server    className="w-3.5 h-3.5 text-green-500" /> Backend Python connecté</>}
                {serverOk === false && <><ServerOff className="w-3.5 h-3.5 text-amber-500" /> Mode navigateur (sans backend)</>}
                {serverOk === null  && <><span className="w-2 h-2 rounded-full bg-yellow-400 animate-pulse inline-block" /> Vérification…</>}
              </div>
            </div>

            {/* ── Sélecteur d'étudiant ── */}
            <div className="mb-5 bg-card border border-border rounded-xl p-4">
              <p className="text-xs font-semibold text-muted-foreground mb-3 uppercase tracking-wide">
                Sélectionner un profil étudiant
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-2">
                {STUDENTS_DATA.map((s) => (
                  <button
                    key={s.id}
                    onClick={() => setSelectedId(s.id)}
                    className={`flex items-center gap-2 px-3 py-2.5 rounded-lg border text-left transition-all ${
                      selectedId === s.id
                        ? 'border-primary bg-primary/10 text-primary'
                        : 'border-border bg-background hover:border-primary/40 hover:bg-muted/50 text-foreground'
                    }`}
                  >
                    <div className={`w-8 h-8 rounded-full flex items-center justify-center text-xs font-bold flex-shrink-0 ${
                      selectedId === s.id ? 'bg-primary text-primary-foreground' : 'bg-muted text-muted-foreground'
                    }`}>
                      {s.initiales}
                    </div>
                    <div className="min-w-0">
                      <p className="text-xs font-semibold truncate">{s.nom}</p>
                      <p className="text-xs text-muted-foreground truncate">{s.filiere} · {s.annee}</p>
                    </div>
                  </button>
                ))}
              </div>
              {selectedStudent && (
                <div className="mt-3 flex items-center gap-3 text-xs text-muted-foreground">
                  <span className="font-mono bg-muted px-2 py-0.5 rounded">{selectedStudent.id}</span>
                  <span>GPA : <strong className="text-foreground">{selectedStudent.gpa}</strong></span>
                  <span>Crédits : <strong className="text-foreground">{selectedStudent.credits}</strong></span>
                  <Badge
                    variant="outline"
                    className={`ml-auto text-xs ${
                      selectedStudent.paiement === 'À jour'
                        ? 'border-green-500 text-green-600'
                        : 'border-amber-500 text-amber-600'
                    }`}
                  >
                    Paiement : {selectedStudent.paiement}
                  </Badge>
                </div>
              )}
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">

              {/* ── Zone de chat ── */}
              <div
                className="lg:col-span-2 flex flex-col bg-card border border-border rounded-xl overflow-hidden"
                style={{ height: '540px' }}
              >
                <div className="flex-1 overflow-y-auto p-5 space-y-5">
                  {messages.map((msg) => (
                    <MessageBubble key={msg.id} message={msg} />
                  ))}
                  {isLoading && <TypingIndicator />}
                  <div ref={chatEndRef} />
                </div>

                <div className="p-4 border-t border-border bg-background">
                  <div className="flex gap-2">
                    <input
                      ref={inputRef}
                      type="text"
                      value={input}
                      onChange={(e) => setInput(e.target.value)}
                      onKeyDown={(e) => e.key === 'Enter' && !e.shiftKey && handleSend()}
                      placeholder="Pose ta question sur tes notes, cours, emploi du temps…"
                      className="flex-1 px-4 py-2.5 text-sm border border-input rounded-lg bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary"
                      disabled={isLoading}
                    />
                    <Button
                      onClick={() => handleSend()}
                      disabled={isLoading || !input.trim()}
                      size="sm"
                      className="px-4"
                    >
                      <Send className="w-4 h-4" />
                    </Button>
                  </div>
                </div>
              </div>

              {/* ── Panneau latéral ── */}
              <div className="space-y-4">
                <div className="bg-card border border-border rounded-xl p-5">
                  <h3 className="text-sm font-semibold mb-3 flex items-center gap-2 text-foreground">
                    <Lightbulb className="w-4 h-4 text-primary" />
                    Questions rapides
                  </h3>
                  <div className="space-y-1.5">
                    {QUICK_SUGGESTIONS.map((s, i) => (
                      <button
                        key={i}
                        onClick={() => handleSend(s)}
                        disabled={isLoading}
                        className="w-full text-left px-3 py-2 rounded-lg bg-muted hover:bg-muted/70 transition-colors text-sm text-foreground disabled:opacity-50"
                      >
                        {s}
                      </button>
                    ))}
                  </div>
                </div>

                <div className="bg-card border border-border rounded-xl p-5">
                  <h3 className="text-sm font-semibold mb-2 text-foreground">Détection ML</h3>
                  <div className="flex flex-wrap gap-1.5">
                    {Object.entries(INTENT_LABELS).map(([, info]) => (
                      <span key={info.label} className={`text-xs px-2 py-0.5 rounded-full font-medium ${info.color}`}>
                        {info.label}
                      </span>
                    ))}
                  </div>
                  <p className="text-xs text-muted-foreground mt-2">
                    TF-IDF + Régression Logistique
                  </p>
                </div>
              </div>

            </div>
          </div>
        </main>
      </div>
    </div>
  );
}
