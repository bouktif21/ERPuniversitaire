import { Link } from "react-router-dom"
import { Button } from "@/components/ui/button"
import { ArrowRight, Calendar, Sparkles } from "lucide-react"

export function CTASection() {
  return (
    <section className="py-24 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      <div
        aria-hidden
        className="absolute inset-0 animated-gradient-bg"
        style={{ backgroundSize: "400% 400%" }}
      />
      <div
        aria-hidden
        className="absolute inset-0 dot-pattern opacity-10"
        style={{ backgroundImage: "radial-gradient(circle, rgba(255,255,255,0.3) 1px, transparent 1px)" }}
      />
      <div
        aria-hidden
        className="pointer-events-none absolute -top-20 -left-20 w-80 h-80 rounded-full blur-3xl opacity-30"
        style={{ background: "rgba(139,92,246,0.6)" }}
      />
      <div
        aria-hidden
        className="pointer-events-none absolute -bottom-20 -right-20 w-80 h-80 rounded-full blur-3xl opacity-30"
        style={{ background: "rgba(6,182,212,0.6)" }}
      />

      <div className="relative max-w-4xl mx-auto text-center">
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/15 border border-white/25 text-white text-sm font-medium mb-8">
          <Sparkles className="w-4 h-4" />
          Rejoignez 120+ établissements en Tunisie
        </div>

        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white mb-6 leading-tight tracking-tight">
          Prêt à Transformer
          <br />
          Votre Université ?
        </h2>

        <p className="text-lg text-white/80 mb-10 max-w-2xl mx-auto leading-relaxed">
          Rejoignez les établissements qui utilisent UniERP pour moderniser leur gestion,
          améliorer les résultats académiques et prendre des décisions fondées sur les données.
        </p>

        <div className="flex flex-wrap justify-center gap-4">
          <Link to="/contact">
            <Button
              size="lg"
              className="gap-2 px-8 py-6 text-base font-semibold bg-white text-indigo-700 hover:bg-white/95 shadow-xl shadow-black/20 hover:shadow-black/30 transition-all hover:-translate-y-0.5"
            >
              <Calendar className="w-4 h-4" />
              Planifier une démo
            </Button>
          </Link>
          <Link to="/pricing">
            <Button
              size="lg"
              variant="outline"
              className="gap-2 px-8 py-6 text-base font-semibold border-white/30 text-white hover:bg-white/10 bg-transparent transition-all hover:-translate-y-0.5"
            >
              Voir les tarifs
              <ArrowRight className="w-4 h-4" />
            </Button>
          </Link>
        </div>

        <div className="mt-12 flex flex-wrap justify-center gap-8 text-white/70 text-sm">
          {[
            "✓ Essai gratuit 30 jours",
            "✓ Aucune carte bancaire requise",
            "✓ Résiliation à tout moment",
            "✓ Accompagnement dédié",
          ].map((item) => (
            <span key={item} className="font-medium">{item}</span>
          ))}
        </div>
      </div>
    </section>
  )
}
