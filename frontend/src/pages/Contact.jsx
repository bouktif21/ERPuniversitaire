import { useState } from "react"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Mail, Phone, MapPin, Clock, ArrowRight, CheckCircle2 } from "lucide-react"

const contactInfo = [
  {
    icon: Mail,
    label: "E-mail",
    lines: ["support@unierp.edu", "commercial@unierp.edu"],
  },
  {
    icon: Phone,
    label: "Téléphone",
    lines: ["+216 71 234 567", "Lun – Ven, 9h – 18h"],
  },
  {
    icon: MapPin,
    label: "Adresse",
    lines: ["Avenue de l'Université", "Tunis, Tunisie 1002"],
  },
  {
    icon: Clock,
    label: "Disponibilité",
    lines: ["Lundi – Vendredi", "9h00 – 18h00"],
  },
]

const subjects = [
  { value: "demo",        label: "Demande de démonstration" },
  { value: "pricing",     label: "Renseignement sur les tarifs" },
  { value: "support",     label: "Support technique" },
  { value: "partnership", label: "Partenariat" },
  { value: "other",       label: "Autre" },
]

const roles = [
  { value: "admin",      label: "Administrateur" },
  { value: "rector",     label: "Recteur / Doyen" },
  { value: "department", label: "Chef de Département" },
  { value: "professor",  label: "Professeur" },
  { value: "hr",         label: "Responsable RH" },
  { value: "finance",    label: "Responsable Finances" },
  { value: "other",      label: "Autre" },
]

export function Contact() {
  const [formData, setFormData] = useState({
    name: "", email: "", institution: "", role: "", subject: "", message: "",
  })
  const [sent, setSent] = useState(false)

  const handleSubmit = (e) => {
    e.preventDefault()
    setSent(true)
  }

  const set = (key) => (e) =>
    setFormData((prev) => ({ ...prev, [key]: typeof e === "string" ? e : e.target.value }))

  return (
    <div className="min-h-screen bg-background">
      <Header />

      {/* ── Hero étroit ───────────────────────────────────────────────────── */}
      <section className="relative pt-32 pb-20 px-4 overflow-hidden">
        {/* Fond dégradé subtil */}
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0"
          style={{
            background:
              "radial-gradient(ellipse 80% 60% at 50% -10%, rgba(99,102,241,0.12) 0%, transparent 70%)",
          }}
        />
        {/* Grille décorative */}
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage:
              "linear-gradient(rgba(99,102,241,1) 1px, transparent 1px), linear-gradient(90deg, rgba(99,102,241,1) 1px, transparent 1px)",
            backgroundSize: "48px 48px",
          }}
        />

        <div className="relative max-w-3xl mx-auto text-center">
          <span className="inline-block text-xs font-bold uppercase tracking-[0.2em] text-indigo-500 mb-4">
            Contactez-nous
          </span>
          <h1 className="text-5xl sm:text-6xl font-extrabold tracking-tight text-foreground leading-tight">
            Parlons de{" "}
            <span
              className="relative"
              style={{
                background: "linear-gradient(135deg, #4f46e5, #06b6d4)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
              }}
            >
              votre projet
            </span>
          </h1>
          <p className="mt-5 text-lg text-muted-foreground max-w-xl mx-auto leading-relaxed">
            Notre équipe vous répond sous 24 heures pour vous aider à déployer UniERP
            dans votre établissement.
          </p>
        </div>
      </section>

      {/* ── Corps principal ────────────────────────────────────────────────── */}
      <section className="pb-24 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-5 gap-0 rounded-3xl overflow-hidden shadow-2xl shadow-slate-200/60 border border-slate-100">

            {/* ─ Panneau gauche sombre ─ */}
            <div
              className="lg:col-span-2 relative flex flex-col justify-between p-10 overflow-hidden"
              style={{ background: "linear-gradient(155deg, #1e1b4b 0%, #1e3a5f 50%, #0f172a 100%)" }}
            >
              {/* Motif décoratif */}
              <div
                aria-hidden
                className="pointer-events-none absolute inset-0"
                style={{
                  backgroundImage:
                    "radial-gradient(circle, rgba(99,102,241,0.15) 1px, transparent 1px)",
                  backgroundSize: "28px 28px",
                }}
              />
              {/* Blob flou */}
              <div
                aria-hidden
                className="pointer-events-none absolute -bottom-20 -left-20 w-72 h-72 rounded-full blur-3xl opacity-20"
                style={{ background: "#6366f1" }}
              />
              <div
                aria-hidden
                className="pointer-events-none absolute top-10 right-0 w-48 h-48 rounded-full blur-3xl opacity-10"
                style={{ background: "#06b6d4" }}
              />

              {/* Contenu */}
              <div className="relative z-10 space-y-8">
                <div>
                  <h2 className="text-2xl font-bold text-white mb-2">Informations de contact</h2>
                  <p className="text-sm text-white/50 leading-relaxed">
                    Plusieurs façons de nous joindre — choisissez celle qui vous convient.
                  </p>
                </div>

                <div className="space-y-7">
                  {contactInfo.map(({ icon: Icon, label, lines }) => (
                    <div key={label} className="flex items-start gap-4">
                      <div className="w-9 h-9 rounded-xl bg-white/10 border border-white/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                        <Icon className="w-4 h-4 text-indigo-300" />
                      </div>
                      <div>
                        <p className="text-xs font-semibold uppercase tracking-widest text-white/40 mb-1">{label}</p>
                        {lines.map((line) => (
                          <p key={line} className="text-sm text-white/80 leading-relaxed">{line}</p>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Quote bas */}
              <div className="relative z-10 mt-10 pt-8 border-t border-white/10">
                <p className="text-sm text-white/40 italic leading-relaxed">
                  "UniERP a transformé la gestion de notre campus en quelques semaines."
                </p>
                <div className="flex items-center gap-3 mt-3">
                  <div
                    className="w-8 h-8 rounded-full flex items-center justify-center text-xs font-bold text-white"
                    style={{ background: "linear-gradient(135deg, #6366f1, #2563eb)" }}
                  >
                    R
                  </div>
                  <div>
                    <p className="text-xs font-semibold text-white/70">Dr. Rachid Hamdi</p>
                    <p className="text-xs text-white/35">Recteur, Université de Sfax</p>
                  </div>
                </div>
              </div>
            </div>

            {/* ─ Panneau droit — formulaire ─ */}
            <div className="lg:col-span-3 bg-white p-10">
              {sent ? (
                <div className="flex flex-col items-center justify-center h-full text-center py-16 space-y-5">
                  <div
                    className="w-16 h-16 rounded-2xl flex items-center justify-center shadow-lg"
                    style={{ background: "linear-gradient(135deg, #4f46e5, #06b6d4)" }}
                  >
                    <CheckCircle2 className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-2xl font-extrabold text-foreground">Message envoyé !</h3>
                  <p className="text-muted-foreground max-w-xs leading-relaxed">
                    Nous avons bien reçu votre demande. Un de nos conseillers vous contactera
                    dans les <strong>24 heures</strong>.
                  </p>
                  <button
                    onClick={() => { setSent(false); setFormData({ name:"",email:"",institution:"",role:"",subject:"",message:"" }) }}
                    className="mt-2 text-sm text-indigo-600 hover:text-indigo-700 font-medium underline-offset-2 hover:underline transition-colors"
                  >
                    Envoyer un autre message
                  </button>
                </div>
              ) : (
                <>
                  <div className="mb-8">
                    <h2 className="text-2xl font-extrabold text-foreground tracking-tight">
                      Envoyez-nous un message
                    </h2>
                    <p className="text-sm text-muted-foreground mt-1">
                      Tous les champs marqués <span className="text-red-400">*</span> sont obligatoires.
                    </p>
                  </div>

                  <form onSubmit={handleSubmit} className="space-y-5">
                    {/* Nom + Email */}
                    <div className="grid sm:grid-cols-2 gap-4">
                      <div className="space-y-1.5">
                        <Label htmlFor="name" className="text-xs font-semibold uppercase tracking-wide text-slate-500">
                          Nom complet <span className="text-red-400">*</span>
                        </Label>
                        <Input
                          id="name"
                          required
                          placeholder="Ahmed Ben Salah"
                          value={formData.name}
                          onChange={set("name")}
                          className="h-11 bg-slate-50 border-slate-200 focus:bg-white focus:border-indigo-400 transition-colors rounded-xl"
                        />
                      </div>
                      <div className="space-y-1.5">
                        <Label htmlFor="email" className="text-xs font-semibold uppercase tracking-wide text-slate-500">
                          E-mail <span className="text-red-400">*</span>
                        </Label>
                        <Input
                          id="email"
                          type="email"
                          required
                          placeholder="ahmed@universite.tn"
                          value={formData.email}
                          onChange={set("email")}
                          className="h-11 bg-slate-50 border-slate-200 focus:bg-white focus:border-indigo-400 transition-colors rounded-xl"
                        />
                      </div>
                    </div>

                    {/* Établissement + Rôle */}
                    <div className="grid sm:grid-cols-2 gap-4">
                      <div className="space-y-1.5">
                        <Label htmlFor="institution" className="text-xs font-semibold uppercase tracking-wide text-slate-500">
                          Établissement
                        </Label>
                        <Input
                          id="institution"
                          placeholder="Université de Tunis"
                          value={formData.institution}
                          onChange={set("institution")}
                          className="h-11 bg-slate-50 border-slate-200 focus:bg-white focus:border-indigo-400 transition-colors rounded-xl"
                        />
                      </div>
                      <div className="space-y-1.5">
                        <Label className="text-xs font-semibold uppercase tracking-wide text-slate-500">
                          Votre rôle
                        </Label>
                        <Select value={formData.role} onValueChange={set("role")}>
                          <SelectTrigger className="h-11 bg-slate-50 border-slate-200 focus:border-indigo-400 rounded-xl">
                            <SelectValue placeholder="Sélectionnez…" />
                          </SelectTrigger>
                          <SelectContent>
                            {roles.map(({ value, label }) => (
                              <SelectItem key={value} value={value}>{label}</SelectItem>
                            ))}
                          </SelectContent>
                        </Select>
                      </div>
                    </div>

                    {/* Objet */}
                    <div className="space-y-1.5">
                      <Label className="text-xs font-semibold uppercase tracking-wide text-slate-500">
                        Objet <span className="text-red-400">*</span>
                      </Label>
                      <Select value={formData.subject} onValueChange={set("subject")} required>
                        <SelectTrigger className="h-11 bg-slate-50 border-slate-200 focus:border-indigo-400 rounded-xl">
                          <SelectValue placeholder="Comment pouvons-nous vous aider ?" />
                        </SelectTrigger>
                        <SelectContent>
                          {subjects.map(({ value, label }) => (
                            <SelectItem key={value} value={value}>{label}</SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    </div>

                    {/* Message */}
                    <div className="space-y-1.5">
                      <Label htmlFor="message" className="text-xs font-semibold uppercase tracking-wide text-slate-500">
                        Message <span className="text-red-400">*</span>
                      </Label>
                      <Textarea
                        id="message"
                        required
                        placeholder="Décrivez vos besoins, le nombre d'étudiants, votre calendrier…"
                        className="min-h-[120px] bg-slate-50 border-slate-200 focus:bg-white focus:border-indigo-400 transition-colors rounded-xl resize-none"
                        value={formData.message}
                        onChange={set("message")}
                      />
                    </div>

                    <div className="flex items-center justify-between pt-2">
                      <p className="text-xs text-muted-foreground">
                        Réponse garantie sous 24h
                      </p>
                      <Button
                        type="submit"
                        size="lg"
                        className="gap-2 px-8 font-semibold rounded-xl shadow-lg shadow-indigo-500/25 hover:shadow-indigo-500/40 hover:-translate-y-0.5 transition-all"
                        style={{ background: "linear-gradient(135deg, #4f46e5, #2563eb)" }}
                      >
                        Envoyer
                        <ArrowRight className="w-4 h-4" />
                      </Button>
                    </div>
                  </form>
                </>
              )}
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
