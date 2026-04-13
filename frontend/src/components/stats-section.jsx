import { Users, GraduationCap, ThumbsUp, Clock } from "lucide-react"

const stats = [
  {
    value: "120+",
    label: "Établissements",
    sublabel: "utilisent UniERP en Tunisie & Maghreb",
    icon: GraduationCap,
    gradientClass: "stat-gradient-1",
    textColor: "text-indigo-600",
  },
  {
    value: "80K+",
    label: "Étudiants",
    sublabel: "gérés chaque jour",
    icon: Users,
    gradientClass: "stat-gradient-2",
    textColor: "text-cyan-600",
  },
  {
    value: "97%",
    label: "Satisfaction",
    sublabel: "taux de satisfaction client",
    icon: ThumbsUp,
    gradientClass: "stat-gradient-3",
    textColor: "text-emerald-600",
  },
  {
    value: "40%",
    label: "Temps Économisé",
    sublabel: "sur les tâches administratives",
    icon: Clock,
    gradientClass: "stat-gradient-4",
    textColor: "text-amber-600",
  },
]

export function StatsSection() {
  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8 relative overflow-hidden bg-white border-y border-slate-100">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 opacity-30"
        style={{
          background:
            "radial-gradient(ellipse 70% 80% at 50% 50%, rgba(99,102,241,0.07) 0%, transparent 70%)",
        }}
      />

      <div className="relative max-w-7xl mx-auto">
        <p className="text-center text-sm font-semibold uppercase tracking-widest text-indigo-500 mb-10">
          Référence mondiale
        </p>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {stats.map((stat, index) => {
            const Icon = stat.icon
            return (
              <div
                key={index}
                className="group relative flex flex-col items-center text-center p-6 rounded-2xl bg-white border border-slate-100 shadow-sm hover:shadow-md hover:-translate-y-1 transition-all duration-300"
              >
                <div
                  className={`w-12 h-12 rounded-xl flex items-center justify-center mb-4 ${stat.gradientClass} shadow-md`}
                >
                  <Icon className="w-6 h-6 text-white" />
                </div>
                <p className={`text-4xl font-extrabold tracking-tight ${stat.textColor}`}>
                  {stat.value}
                </p>
                <p className="text-base font-semibold text-foreground mt-1">{stat.label}</p>
                <p className="text-xs text-muted-foreground mt-0.5">{stat.sublabel}</p>
                <div
                  aria-hidden
                  className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"
                  style={{ boxShadow: "0 0 0 1.5px rgba(99,102,241,0.25), 0 8px 30px rgba(99,102,241,0.08)" }}
                />
              </div>
            )
          })}
        </div>

        {/* Logos partenaires */}
        <div className="mt-12 flex flex-wrap items-center justify-center gap-8 opacity-40">
          {["Univ. Tunis", "ENIT", "ISET Sfax", "FST Sousse", "ENIS", "Univ. Monastir"].map((name) => (
            <span key={name} className="text-sm font-bold uppercase tracking-widest text-slate-400">
              {name}
            </span>
          ))}
        </div>
      </div>
    </section>
  )
}
