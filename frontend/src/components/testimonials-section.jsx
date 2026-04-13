const testimonials = [
  {
    quote:
      "UniERP a transformé la gestion de notre campus en quelques semaines. Le conseiller IA a aidé nos étudiants à prendre de meilleures décisions académiques et notre taux de réussite a progressé de 18 %.",
    author: "Dr. Rachid Hamdi",
    role: "Recteur, Université de Sfax",
    initials: "RH",
    gradient: "stat-gradient-1",
    rating: 5,
  },
  {
    quote:
      "Le module de gestion financière seul nous a fait économiser 40 % du temps administratif. Le retour sur investissement était visible dès le premier semestre.",
    author: "Mme Sana Karray",
    role: "Directrice Administrative, ISET Tunis",
    initials: "SK",
    gradient: "stat-gradient-2",
    rating: 5,
  },
  {
    quote:
      "En tant que chef de département, j'ai enfin une visibilité complète sur les emplois du temps, les notes et les charges des enseignants. Les décisions sont désormais fondées sur des données réelles.",
    author: "Prof. Kamel Boukadi",
    role: "Chef de Département Informatique, ENIT",
    initials: "KB",
    gradient: "stat-gradient-3",
    rating: 5,
  },
]

function StarRating({ count = 5 }) {
  return (
    <div className="flex items-center gap-0.5 mb-4">
      {[...Array(count)].map((_, i) => (
        <svg key={i} className="w-4 h-4 text-amber-400 fill-amber-400" viewBox="0 0 20 20">
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
        </svg>
      ))}
    </div>
  )
}

export function TestimonialsSection() {
  return (
    <section className="py-24 px-4 sm:px-6 lg:px-8 relative overflow-hidden bg-slate-50">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            "radial-gradient(ellipse 60% 60% at 50% 100%, rgba(99,102,241,0.08) 0%, transparent 70%)",
        }}
      />

      <div className="relative max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <p className="text-sm font-semibold uppercase tracking-widest text-indigo-500 mb-3">
            Témoignages
          </p>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-foreground mb-4 tracking-tight">
            La confiance des{" "}
            <span className="gradient-text">Meilleures Institutions</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Découvrez ce que les dirigeants universitaires du monde entier disent d'UniERP.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {testimonials.map((t, index) => (
            <div
              key={index}
              className="group relative flex flex-col p-7 rounded-2xl bg-white border border-slate-100 shadow-sm glow-on-hover overflow-hidden"
            >
              <div
                aria-hidden
                className={`absolute top-0 left-0 right-0 h-1 ${t.gradient} opacity-80`}
              />
              <svg
                className="w-8 h-8 text-indigo-100 mb-4"
                fill="currentColor"
                viewBox="0 0 32 32"
              >
                <path d="M10 8C6.134 8 3 11.134 3 15v9h9v-9H6c0-2.206 1.794-4 4-4V8zm14 0c-3.866 0-7 3.134-7 7v9h9v-9h-6c0-2.206 1.794-4 4-4V8z" />
              </svg>
              <StarRating count={t.rating} />
              <p className="text-slate-700 leading-relaxed flex-1 text-sm">{t.quote}</p>
              <div className="flex items-center gap-3 mt-6 pt-5 border-t border-slate-100">
                <div
                  className={`w-11 h-11 rounded-full ${t.gradient} flex items-center justify-center text-white font-bold text-sm shadow-md`}
                >
                  {t.initials}
                </div>
                <div>
                  <p className="font-semibold text-sm text-foreground">{t.author}</p>
                  <p className="text-xs text-muted-foreground">{t.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Badges de certification */}
        <div className="mt-14 flex flex-wrap justify-center gap-6">
          {[
            { label: "SOC 2 Type II", icon: "🔒" },
            { label: "Conforme RGPD", icon: "🇪🇺" },
            { label: "ISO 27001", icon: "✅" },
            { label: "SLA 99,9% disponibilité", icon: "⚡" },
          ].map(({ label, icon }) => (
            <div
              key={label}
              className="flex items-center gap-2 px-4 py-2 rounded-full border border-slate-200 bg-white text-sm font-medium text-slate-600 shadow-sm"
            >
              <span>{icon}</span>
              {label}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
