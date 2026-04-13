import { Link } from "react-router-dom"
import { Button } from "@/components/ui/button"
import { ArrowRight, Play, CheckCircle2, Sparkles } from "lucide-react"

const points = [
  "Sans configuration initiale",
  "Conforme RGPD",
  "Support 24h/7j",
]

export function HeroSection() {
  return (
    <section className="relative pt-28 pb-24 px-4 sm:px-6 lg:px-8 overflow-hidden hero-gradient">
      {/* Blobs décoratifs */}
      <div
        aria-hidden
        className="pointer-events-none absolute -top-32 -left-32 w-[600px] h-[600px] rounded-full opacity-30 animate-glow-pulse"
        style={{ background: "radial-gradient(circle, #6366f1 0%, transparent 70%)" }}
      />
      <div
        aria-hidden
        className="pointer-events-none absolute top-1/4 -right-48 w-[500px] h-[500px] rounded-full opacity-20 animate-float-slow"
        style={{ background: "radial-gradient(circle, #06b6d4 0%, transparent 70%)" }}
      />

      {/* Motif de points */}
      <div aria-hidden className="pointer-events-none absolute inset-0 dot-pattern opacity-40" />

      <div className="relative max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-14 items-center">

          {/* ── Texte gauche ──────────────────────────────── */}
          <div className="space-y-8">

            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-indigo-200 bg-indigo-50/80 text-indigo-700 text-sm font-semibold shadow-sm">
              <Sparkles className="w-4 h-4 text-indigo-500 animate-pulse" />
              Nouveau — Conseiller Académique IA
            </div>

            {/* Titre */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold leading-tight tracking-tight">
              La Plateforme Complète{" "}
              <br className="hidden sm:block" />
              pour la{" "}
              <span className="gradient-text">Gestion Universitaire</span>
            </h1>

            {/* Description */}
            <p className="text-lg text-muted-foreground leading-relaxed max-w-xl">
              Optimisez l'ensemble de votre établissement avec notre solution ERP unifiée.
              Académique, administration, RH, finances —{" "}
              <span className="font-medium text-foreground">tout en un seul endroit.</span>
            </p>

            {/* Boutons CTA */}
            <div className="flex flex-wrap gap-4">
              <Link to="/contact">
                <Button
                  size="lg"
                  className="gap-2 px-7 py-6 text-base font-semibold shadow-lg shadow-indigo-500/30 hover:shadow-indigo-500/50 transition-all hover:-translate-y-0.5"
                  style={{
                    background: "linear-gradient(135deg, #4f46e5 0%, #2563eb 100%)",
                    border: "none",
                  }}
                >
                  Demander une démo
                  <ArrowRight className="w-4 h-4" />
                </Button>
              </Link>
              <Button
                size="lg"
                variant="outline"
                className="gap-2 px-7 py-6 text-base font-semibold border-slate-200 bg-white hover:bg-slate-50 hover:border-indigo-300 transition-all hover:-translate-y-0.5 shadow-sm"
              >
                <span className="flex items-center justify-center w-8 h-8 rounded-full bg-indigo-100">
                  <Play className="w-3 h-3 text-indigo-600 fill-indigo-600 ml-0.5" />
                </span>
                Voir la vidéo
              </Button>
            </div>

            {/* Ligne de confiance */}
            <div className="flex flex-col sm:flex-row sm:items-center gap-4 pt-2">
              <div className="flex -space-x-3">
                {["#6366f1", "#0891b2", "#7c3aed", "#059669"].map((color, i) => (
                  <div
                    key={i}
                    className="w-10 h-10 rounded-full border-2 border-white flex items-center justify-center text-white text-xs font-bold shadow"
                    style={{ background: color }}
                  >
                    {["A", "B", "C", "D"][i]}
                  </div>
                ))}
              </div>
              <div className="text-sm">
                <p className="font-semibold text-foreground">Fait confiance par 120+ Établissements</p>
                <p className="text-muted-foreground text-xs">Tunisie & Maghreb • +80 000 étudiants gérés</p>
              </div>
              <div className="sm:ml-4 flex items-center gap-1">
                {[...Array(5)].map((_, i) => (
                  <svg key={i} className="w-4 h-4 text-amber-400 fill-amber-400" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
                <span className="text-xs text-muted-foreground ml-1">4,9/5</span>
              </div>
            </div>

            {/* Points clés */}
            <div className="flex flex-wrap gap-4 pt-1">
              {points.map((p) => (
                <div key={p} className="flex items-center gap-1.5 text-sm text-muted-foreground">
                  <CheckCircle2 className="w-4 h-4 text-emerald-500" />
                  {p}
                </div>
              ))}
            </div>
          </div>

          {/* ── Mockup navigateur droite ────────────────── */}
          <div className="relative">
            <div
              aria-hidden
              className="absolute inset-4 rounded-3xl blur-2xl opacity-30"
              style={{ background: "linear-gradient(135deg, #4f46e5, #06b6d4)" }}
            />

            <div className="relative rounded-2xl border border-slate-200 shadow-2xl shadow-indigo-500/10 overflow-hidden bg-white animate-float">
              {/* Barre navigateur */}
              <div className="flex items-center gap-3 px-4 py-3 bg-slate-50 border-b border-slate-100">
                <div className="flex gap-1.5">
                  <div className="w-3 h-3 rounded-full bg-red-400" />
                  <div className="w-3 h-3 rounded-full bg-amber-400" />
                  <div className="w-3 h-3 rounded-full bg-emerald-400" />
                </div>
                <div className="flex-1 mx-4 px-3 py-1 rounded-md bg-white border border-slate-200 text-xs text-slate-400 font-mono">
                  tableau.unierp.edu
                </div>
                <div className="flex gap-2">
                  <div className="w-4 h-4 rounded-sm bg-slate-200" />
                  <div className="w-4 h-4 rounded-sm bg-slate-200" />
                </div>
              </div>
              {/* Aperçu tableau de bord */}
              <div className="p-4 bg-white">
                <img
                  src="/university-erp-dashboard-with-analytics-charts.jpg"
                  alt="Aperçu du tableau de bord UniERP"
                  className="w-full h-auto rounded-xl shadow-sm"
                />
              </div>

              {/* Badge métrique flottant bas */}
              <div
                className="absolute -bottom-4 -left-4 glass rounded-xl px-4 py-3 shadow-xl border border-white/60"
                style={{ backdropFilter: "blur(12px)", background: "rgba(255,255,255,0.85)" }}
              >
                <div className="flex items-center gap-2">
                  <div className="w-8 h-8 rounded-full flex items-center justify-center stat-gradient-3">
                    <svg className="w-4 h-4 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                    </svg>
                  </div>
                  <div>
                    <p className="text-xs font-bold text-emerald-600">+40% d'efficacité</p>
                    <p className="text-xs text-muted-foreground">temps administratif économisé</p>
                  </div>
                </div>
              </div>

              {/* Badge utilisateurs flottant haut */}
              <div
                className="absolute -top-4 -right-4 glass rounded-xl px-4 py-3 shadow-xl border border-white/60"
                style={{ backdropFilter: "blur(12px)", background: "rgba(255,255,255,0.85)" }}
              >
                <div className="flex items-center gap-2">
                  <div className="w-8 h-8 rounded-full flex items-center justify-center stat-gradient-1">
                    <svg className="w-4 h-4 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
                    </svg>
                  </div>
                  <div>
                    <p className="text-xs font-bold text-indigo-600">+2M utilisateurs</p>
                    <p className="text-xs text-muted-foreground">actifs aujourd'hui</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
