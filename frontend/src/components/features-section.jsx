import { Brain, Shield, Zap, Globe, BarChart3, Lock } from "lucide-react"

const features = [
  {
    icon: Brain,
    title: "Insights propulsés par l'IA",
    description:
      "Exploitez l'apprentissage automatique pour des analyses prédictives, des recommandations intelligentes et des flux de travail automatisés.",
    gradient: "from-indigo-500 to-violet-500",
    lightBg: "bg-indigo-50",
    textColor: "text-indigo-600",
  },
  {
    icon: Shield,
    title: "Sécurité Entreprise",
    description:
      "Chiffrement de niveau bancaire, contrôle d'accès par rôle et conformité totale aux réglementations sur les données éducatives.",
    gradient: "from-cyan-500 to-blue-500",
    lightBg: "bg-cyan-50",
    textColor: "text-cyan-600",
  },
  {
    icon: Zap,
    title: "Synchronisation en Temps Réel",
    description:
      "Synchronisation instantanée des données entre tous les modules. Les modifications se répercutent immédiatement dans tout le système.",
    gradient: "from-amber-400 to-orange-500",
    lightBg: "bg-amber-50",
    textColor: "text-amber-600",
  },
  {
    icon: Globe,
    title: "Multi-campus",
    description:
      "Gérez plusieurs campus, succursales et départements depuis une seule plateforme unifiée.",
    gradient: "from-emerald-400 to-teal-500",
    lightBg: "bg-emerald-50",
    textColor: "text-emerald-600",
  },
  {
    icon: BarChart3,
    title: "Analyses Avancées",
    description:
      "Tableaux de bord et rapports complets pour une prise de décision fondée sur les données à tous les niveaux.",
    gradient: "from-blue-500 to-indigo-500",
    lightBg: "bg-blue-50",
    textColor: "text-blue-600",
  },
  {
    icon: Lock,
    title: "Confidentialité des Données",
    description:
      "Conforme au RGPD avec pleine propriété des données. Vos données institutionnelles vous appartiennent, toujours.",
    gradient: "from-violet-500 to-pink-500",
    lightBg: "bg-violet-50",
    textColor: "text-violet-600",
  },
]

export function FeaturesSection() {
  return (
    <section id="features" className="py-24 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            "radial-gradient(ellipse 80% 50% at 50% 0%, rgba(99,102,241,0.06) 0%, transparent 60%)",
        }}
      />
      <div aria-hidden className="pointer-events-none absolute inset-0 dot-pattern opacity-30" />

      <div className="relative max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <p className="text-sm font-semibold uppercase tracking-widest text-indigo-500 mb-3">
            Pourquoi UniERP
          </p>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-foreground mb-4 tracking-tight">
            Conçu pour les Universités{" "}
            <span className="gradient-text">Modernes</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Tout ce dont vous avez besoin pour gérer un établissement de classe mondiale, propulsé par une technologie de pointe.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => {
            const Icon = feature.icon
            return (
              <div
                key={index}
                className="group relative p-6 rounded-2xl bg-white border border-slate-100 shadow-sm glow-on-hover gradient-border overflow-hidden"
              >
                <div
                  aria-hidden
                  className={`absolute top-0 left-0 right-0 h-0.5 bg-gradient-to-r ${feature.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-300`}
                />
                <div
                  className={`w-12 h-12 rounded-xl ${feature.lightBg} flex items-center justify-center mb-5 shadow-sm group-hover:scale-110 transition-transform duration-300`}
                >
                  <Icon className={`w-6 h-6 ${feature.textColor}`} />
                </div>
                <h3 className="text-lg font-bold text-foreground mb-2">{feature.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{feature.description}</p>
                <div
                  className={`mt-4 inline-flex items-center gap-1 text-xs font-semibold ${feature.textColor} opacity-0 group-hover:opacity-100 transition-all duration-300 translate-y-1 group-hover:translate-y-0`}
                >
                  En savoir plus
                  <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
