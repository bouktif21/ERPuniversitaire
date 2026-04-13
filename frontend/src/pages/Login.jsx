// src/pages/Login.jsx
import { useState } from "react"
import { Link, useNavigate, useLocation } from "react-router-dom"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { GraduationCap, Eye, EyeOff, ArrowLeft, Sparkles, ShieldCheck, Users, BarChart3 } from "lucide-react"
import { useAuth } from "@/contexts/AuthContext"

const roleRedirects = {
  admin:      "/admin",
  student:    "/student",
  professor:  "/professor",
  rector:     "/rector",
  department: "/department",
  hr:         "/hr",
  finance:    "/finance",
}

const highlights = [
  { icon: ShieldCheck, text: "Sécurité de niveau entreprise" },
  { icon: Users,       text: "+2M d'utilisateurs actifs" },
  { icon: BarChart3,   text: "Analyses en temps réel" },
]

export function Login() {
  const [showPassword, setShowPassword] = useState(false)
  const [role, setRole] = useState("")
  const { login } = useAuth()
  const navigate = useNavigate()
  const location = useLocation()
  const from = location.state?.from?.pathname || null

  const handleSubmit = (e) => {
    e.preventDefault()
    if (!role) return
    login({ role })
    navigate(from || roleRedirects[role] || "/", { replace: true })
  }

  return (
    <div className="min-h-screen flex">

      {/* ── Panneau gauche ──────────────────────────────── */}
      <div className="hidden lg:flex lg:w-1/2 relative flex-col justify-between p-12 overflow-hidden">
        <div className="absolute inset-0 animated-gradient-bg" />
        <div
          aria-hidden
          className="absolute inset-0 dot-pattern opacity-10"
          style={{ backgroundImage: "radial-gradient(circle, rgba(255,255,255,0.25) 1px, transparent 1px)" }}
        />
        <div
          aria-hidden
          className="pointer-events-none absolute top-1/4 -left-16 w-64 h-64 rounded-full blur-3xl opacity-30"
          style={{ background: "rgba(139,92,246,0.7)" }}
        />
        <div
          aria-hidden
          className="pointer-events-none absolute bottom-1/4 -right-16 w-64 h-64 rounded-full blur-3xl opacity-30 animate-float-slow"
          style={{ background: "rgba(6,182,212,0.7)" }}
        />

        <div className="relative z-10">
          <Link to="/" className="flex items-center gap-2.5">
            <div className="w-11 h-11 rounded-xl bg-white/20 backdrop-blur-sm border border-white/30 flex items-center justify-center shadow-lg">
              <GraduationCap className="w-6 h-6 text-white" />
            </div>
            <span className="font-extrabold text-2xl text-white tracking-tight">UniERP</span>
          </Link>
        </div>

        <div className="relative z-10 space-y-8">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/15 border border-white/20 text-white/90 text-xs font-medium">
            <Sparkles className="w-3.5 h-3.5" />
            Fait confiance par 500+ Universités
          </div>

          <h1 className="text-4xl xl:text-5xl font-extrabold text-white leading-tight tracking-tight">
            Gérez votre université
            <br />
            <span className="text-white/80">en toute confiance.</span>
          </h1>

          <p className="text-lg text-white/70 leading-relaxed max-w-sm">
            Accédez à votre tableau de bord personnalisé et rationalisez vos tâches quotidiennes grâce à notre solution ERP complète.
          </p>

          <div className="space-y-3">
            {highlights.map(({ icon: Icon, text }) => (
              <div key={text} className="flex items-center gap-3 text-white/80">
                <div className="w-8 h-8 rounded-lg bg-white/15 flex items-center justify-center">
                  <Icon className="w-4 h-4 text-white" />
                </div>
                <span className="text-sm font-medium">{text}</span>
              </div>
            ))}
          </div>

          <div className="flex items-center gap-4 pt-2">
            <div className="flex -space-x-3">
              {["#6366f1", "#0891b2", "#7c3aed", "#059669"].map((color, i) => (
                <div
                  key={i}
                  className="w-9 h-9 rounded-full border-2 border-white/40 flex items-center justify-center text-white text-xs font-bold shadow"
                  style={{ background: color }}
                >
                  {["A", "B", "C", "D"][i]}
                </div>
              ))}
            </div>
            <p className="text-sm text-white/70">Rejoignez +2M d'utilisateurs dans le monde</p>
          </div>
        </div>

        <p className="relative z-10 text-sm text-white/40">© 2026 UniERP. Tous droits réservés.</p>
      </div>

      {/* ── Formulaire de connexion droite ──────────────── */}
      <div className="w-full lg:w-1/2 flex items-center justify-center p-8 bg-white relative">
        <div
          aria-hidden
          className="pointer-events-none absolute top-0 left-0 right-0 h-1"
          style={{ background: "linear-gradient(90deg, #4f46e5, #2563eb, #06b6d4)" }}
        />

        <div className="w-full max-w-md space-y-8">
          <Link
            to="/"
            className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors group"
          >
            <ArrowLeft className="w-4 h-4 group-hover:-translate-x-0.5 transition-transform" />
            Retour à l'accueil
          </Link>

          <div className="bg-white border border-slate-100 rounded-2xl shadow-xl shadow-slate-200/40 p-8 space-y-6">

            {/* Logo mobile */}
            <div className="lg:hidden flex items-center gap-2.5 mb-2">
              <div
                className="w-10 h-10 rounded-xl flex items-center justify-center shadow"
                style={{ background: "linear-gradient(135deg, #4f46e5, #2563eb)" }}
              >
                <GraduationCap className="w-5 h-5 text-white" />
              </div>
              <span className="font-extrabold text-xl tracking-tight">
                <span className="gradient-text">Uni</span>ERP
              </span>
            </div>

            <div>
              <h2 className="text-2xl font-extrabold text-foreground tracking-tight">Bon retour</h2>
              <p className="text-sm text-muted-foreground mt-1">Entrez vos identifiants pour accéder à votre tableau de bord</p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-5">

              {/* Rôle */}
              <div className="space-y-1.5">
                <Label htmlFor="role" className="text-sm font-semibold text-slate-700">
                  Sélectionner un rôle
                </Label>
                <Select value={role} onValueChange={setRole}>
                  <SelectTrigger className="h-11 border-slate-200 focus:ring-indigo-500 focus:border-indigo-400 bg-slate-50 hover:bg-white transition-colors">
                    <SelectValue placeholder="Choisissez votre rôle" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="admin">Administrateur</SelectItem>
                    <SelectItem value="rector">Recteur / Doyen</SelectItem>
                    <SelectItem value="department">Chef de Département</SelectItem>
                    <SelectItem value="professor">Professeur</SelectItem>
                    <SelectItem value="student">Étudiant</SelectItem>
                    <SelectItem value="hr">Responsable RH</SelectItem>
                    <SelectItem value="finance">Responsable Finances</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              {/* Email */}
              <div className="space-y-1.5">
                <Label htmlFor="email" className="text-sm font-semibold text-slate-700">
                  Adresse e-mail
                </Label>
                <Input
                  id="email"
                  type="email"
                  placeholder="votre.email@universite.fr"
                  className="h-11 border-slate-200 focus:ring-indigo-500 focus:border-indigo-400 bg-slate-50 hover:bg-white transition-colors"
                />
              </div>

              {/* Mot de passe */}
              <div className="space-y-1.5">
                <div className="flex items-center justify-between">
                  <Label htmlFor="password" className="text-sm font-semibold text-slate-700">
                    Mot de passe
                  </Label>
                  <Link
                    to="#"
                    className="text-xs font-medium text-indigo-600 hover:text-indigo-700 hover:underline transition-colors"
                  >
                    Mot de passe oublié ?
                  </Link>
                </div>
                <div className="relative">
                  <Input
                    id="password"
                    type={showPassword ? "text" : "password"}
                    placeholder="Entrez votre mot de passe"
                    className="h-11 pr-10 border-slate-200 focus:ring-indigo-500 focus:border-indigo-400 bg-slate-50 hover:bg-white transition-colors"
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-600 transition-colors"
                  >
                    {showPassword
                      ? <EyeOff className="w-4 h-4" />
                      : <Eye className="w-4 h-4" />
                    }
                  </button>
                </div>
              </div>

              <Button
                type="submit"
                className="w-full h-11 text-base font-semibold shadow-lg shadow-indigo-500/25 hover:shadow-indigo-500/40 transition-all hover:-translate-y-0.5 disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:translate-y-0"
                style={{ background: "linear-gradient(135deg, #4f46e5, #2563eb)" }}
                disabled={!role}
              >
                Se connecter
              </Button>
            </form>

            <div className="flex items-center gap-3">
              <div className="flex-1 h-px bg-slate-100" />
              <span className="text-xs text-slate-400 font-medium">ou continuer avec</span>
              <div className="flex-1 h-px bg-slate-100" />
            </div>

            <Button
              type="button"
              variant="outline"
              className="w-full h-11 gap-2 border-slate-200 text-slate-700 font-medium hover:bg-slate-50"
            >
              <svg className="w-4 h-4" viewBox="0 0 24 24">
                <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
                <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
                <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"/>
                <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/>
              </svg>
              Se connecter avec Google
            </Button>
          </div>

          <p className="text-center text-xs text-slate-400">
            En vous connectant, vous acceptez nos{" "}
            <Link to="#" className="text-indigo-600 hover:underline">Conditions d'utilisation</Link>
            {" "}et notre{" "}
            <Link to="#" className="text-indigo-600 hover:underline">Politique de confidentialité</Link>.
          </p>
        </div>
      </div>
    </div>
  )
}
