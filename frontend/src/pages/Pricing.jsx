import { Link } from "react-router-dom"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Check, GraduationCap, ArrowLeft } from "lucide-react"
import { Footer } from "@/components/footer"

const plans = [
  {
    name: "Starter",
    description: "Idéal pour les petits établissements",
    price: "2 999",
    period: "/mois",
    features: [
      "Jusqu'à 1 000 étudiants",
      "5 utilisateurs administrateurs",
      "Tableau de bord analytique de base",
      "Support par e-mail",
      "Modules essentiels (Académique, RH)",
      "SLA disponibilité 99,5 %",
    ],
    highlighted: false,
  },
  {
    name: "Professionnel",
    description: "Pour les universités en croissance",
    price: "7 999",
    period: "/mois",
    features: [
      "Jusqu'à 10 000 étudiants",
      "25 utilisateurs administrateurs",
      "Tableau de bord BI avancé",
      "Support prioritaire",
      "Tous les modules inclus",
      "Conseiller Académique IA",
      "Accès API",
      "SLA disponibilité 99,9 %",
    ],
    highlighted: true,
  },
  {
    name: "Entreprise",
    description: "Pour les grandes institutions",
    price: "Sur mesure",
    period: "",
    features: [
      "Étudiants illimités",
      "Administrateurs illimités",
      "Tableaux de bord BI personnalisés",
      "Support dédié 24h/7j",
      "Tous les modules + développements personnalisés",
      "Suite IA complète",
      "Option déploiement on-premise",
      "SLA disponibilité 99,99 %",
      "Gestionnaire de compte dédié",
    ],
    highlighted: false,
  },
]

const faqs = [
  {
    q: "Puis-je changer de formule plus tard ?",
    a: "Oui, vous pouvez passer à une formule supérieure ou inférieure à tout moment. Les changements prennent effet au début de votre prochain cycle de facturation.",
  },
  {
    q: "Y a-t-il un essai gratuit ?",
    a: "Nous proposons un essai gratuit de 30 jours pour les formules Professionnelles. Contactez-nous pour les options d'essai Entreprise.",
  },
  {
    q: "Quels modes de paiement acceptez-vous ?",
    a: "Nous acceptons toutes les principales cartes bancaires, les virements et pouvons mettre en place une facturation pour les clients Entreprise.",
  },
  {
    q: "Offrez-vous des remises pour l'éducation ?",
    a: "Oui ! En tant que plateforme dédiée à l'éducation, nous offrons des remises significatives pour les universités publiques et les organisations à but non lucratif.",
  },
]

export function Pricing() {
  return (
    <div className="min-h-screen bg-background">
      <header className="border-b border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <Link to="/" className="flex items-center gap-2">
              <div
                className="w-9 h-9 rounded-xl flex items-center justify-center shadow"
                style={{ background: "linear-gradient(135deg, #4f46e5, #2563eb)" }}
              >
                <GraduationCap className="w-5 h-5 text-white" />
              </div>
              <span className="font-extrabold text-xl"><span className="gradient-text">Uni</span>ERP</span>
            </Link>
            <Link to="/" className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors">
              <ArrowLeft className="w-4 h-4" />
              Retour à l'accueil
            </Link>
          </div>
        </div>
      </header>

      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <p className="text-sm font-semibold uppercase tracking-widest text-indigo-500 mb-3">Tarifs</p>
            <h1 className="text-4xl sm:text-5xl font-extrabold text-foreground mb-4">
              Tarification simple et <span className="gradient-text">transparente</span>
            </h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Choisissez la formule adaptée à votre établissement. Toutes les formules incluent l'installation, la formation et la migration de données gratuites.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {plans.map((plan, index) => (
              <Card key={index} className={`border-border relative ${plan.highlighted ? "border-primary shadow-lg scale-105" : ""}`}>
                {plan.highlighted && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                    <span
                      className="text-sm font-semibold px-4 py-1 rounded-full text-white shadow"
                      style={{ background: "linear-gradient(135deg, #4f46e5, #2563eb)" }}
                    >
                      Plus populaire
                    </span>
                  </div>
                )}
                <CardHeader>
                  <CardTitle className="text-2xl">{plan.name}</CardTitle>
                  <CardDescription>{plan.description}</CardDescription>
                  <div className="pt-4">
                    <span className="text-4xl font-extrabold text-foreground">
                      {plan.price === "Sur mesure" ? "" : "€"}{plan.price}
                    </span>
                    <span className="text-muted-foreground">{plan.period}</span>
                  </div>
                </CardHeader>
                <CardContent className="space-y-6">
                  <ul className="space-y-3">
                    {plan.features.map((f, i) => (
                      <li key={i} className="flex items-start gap-3">
                        <Check className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                        <span className="text-muted-foreground">{f}</span>
                      </li>
                    ))}
                  </ul>
                  <Button
                    className="w-full"
                    variant={plan.highlighted ? "default" : "outline"}
                    size="lg"
                    style={plan.highlighted ? { background: "linear-gradient(135deg, #4f46e5, #2563eb)" } : {}}
                  >
                    {plan.price === "Sur mesure" ? "Contacter les ventes" : "Commencer"}
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="mt-20">
            <h2 className="text-3xl font-extrabold text-foreground text-center mb-12">
              Questions <span className="gradient-text">fréquentes</span>
            </h2>
            <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
              {faqs.map((faq, i) => (
                <div key={i} className="space-y-2 p-6 rounded-2xl border border-slate-100 bg-white shadow-sm">
                  <h3 className="font-semibold text-foreground">{faq.q}</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">{faq.a}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
