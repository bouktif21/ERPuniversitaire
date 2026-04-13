"use client"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import {
  Shield, Award, Building2, BookOpen, GraduationCap, Users, Wallet,
  Settings, BarChart3, Brain, FileText, Calendar, ClipboardCheck,
  CreditCard, UserCog, Clock, PieChart,
} from "lucide-react"

const roles = [
  {
    id: "admin",
    label: "Admin",
    icon: Shield,
    title: "Administrateur Système",
    description: "Contrôle complet de l'ensemble du système universitaire",
    features: [
      { icon: Users,     name: "Gestion des utilisateurs",  desc: "Créer, gérer et surveiller tous les comptes utilisateurs" },
      { icon: Settings,  name: "Paramètres système",        desc: "Configurer les préférences et politiques à l'échelle du système" },
      { icon: BarChart3, name: "Tableau de bord BI complet", desc: "Accéder aux analyses et rapports complets" },
    ],
  },
  {
    id: "rector",
    label: "Recteur/Doyen",
    icon: Award,
    title: "Portail Recteur & Doyen",
    description: "Supervision stratégique et intelligence institutionnelle",
    features: [
      { icon: PieChart,  name: "Tableau de bord BI stratégique", desc: "Métriques de performance institutionnelle de haut niveau" },
      { icon: Brain,     name: "Prédictions IA",                  desc: "Analytique prédictive pour les inscriptions et les performances" },
      { icon: FileText,  name: "Rapports de performance",         desc: "Rapports institutionnels complets" },
    ],
  },
  {
    id: "department",
    label: "Chef Dept.",
    icon: Building2,
    title: "Chef de Département",
    description: "Gérez efficacement votre département",
    features: [
      { icon: BookOpen,  name: "Gestion des cours",       desc: "Créer et organiser les cours du département" },
      { icon: BarChart3, name: "Analytique département",  desc: "Suivre les métriques de performance du département" },
      { icon: Clock,     name: "Charge de travail",       desc: "Surveiller et équilibrer les charges de travail du corps enseignant" },
    ],
  },
  {
    id: "professor",
    label: "Professeur",
    icon: BookOpen,
    title: "Portail Professeur",
    description: "Tout ce dont vous avez besoin pour enseigner efficacement",
    features: [
      { icon: Calendar,      name: "Liste des cours",      desc: "Consulter et gérer vos cours assignés" },
      { icon: ClipboardCheck, name: "Saisie des notes",    desc: "Saisie et gestion simplifiées des notes" },
      { icon: Users,         name: "Suivi des présences",  desc: "Gestion numérique des présences" },
    ],
  },
  {
    id: "student",
    label: "Étudiant",
    icon: GraduationCap,
    title: "Portail Étudiant",
    description: "Votre parcours académique, simplifié",
    features: [
      { icon: FileText,  name: "Inscription",              desc: "Inscription aux cours facile et rapide" },
      { icon: BarChart3, name: "Notes",                    desc: "Consulter les notes et la progression académique" },
      { icon: Calendar,  name: "Emploi du temps",          desc: "Emploi du temps personnel et calendrier" },
      { icon: Brain,     name: "Conseiller Académique IA", desc: "Recommandations intelligentes pour vos études" },
    ],
  },
  {
    id: "hr",
    label: "RH",
    icon: Users,
    title: "Ressources Humaines",
    description: "Solution complète de gestion des RH",
    features: [
      { icon: UserCog,  name: "Profils du personnel",      desc: "Gérer les informations et dossiers des employés" },
      { icon: FileText, name: "Contrats",                  desc: "Gestion et suivi des contrats" },
      { icon: Calendar, name: "Gestion des congés",        desc: "Traiter les demandes de congés et les approbations" },
    ],
  },
  {
    id: "finance",
    label: "Finance",
    icon: Wallet,
    title: "Département Finances",
    description: "Gestion financière simplifiée",
    features: [
      { icon: CreditCard, name: "Paiements",      desc: "Traiter et suivre tous les paiements" },
      { icon: PieChart,   name: "Rapports budget", desc: "Suivi budgétaire et rapports complets" },
    ],
  },
]

export function RolesSection() {
  const [activeRole, setActiveRole] = useState("admin")

  return (
    <section id="roles" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <p className="text-sm font-semibold uppercase tracking-widest text-indigo-500 mb-3">
            Rôles personnalisés
          </p>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-foreground mb-4 tracking-tight">
            Interfaces Sur Mesure{" "}
            <span className="gradient-text">pour Chaque Rôle</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Chaque utilisateur bénéficie d'une expérience personnalisée conçue pour ses besoins et responsabilités spécifiques.
          </p>
        </div>

        <Tabs value={activeRole} onValueChange={setActiveRole} className="w-full">
          <TabsList className="flex flex-wrap justify-center gap-2 bg-transparent h-auto mb-8">
            {roles.map((role) => (
              <TabsTrigger
                key={role.id}
                value={role.id}
                className="flex items-center gap-2 px-4 py-2 data-[state=active]:bg-primary data-[state=active]:text-primary-foreground rounded-full border border-border data-[state=active]:border-primary"
              >
                <role.icon className="w-4 h-4" />
                {role.label}
              </TabsTrigger>
            ))}
          </TabsList>

          {roles.map((role) => (
            <TabsContent key={role.id} value={role.id} className="mt-0">
              <Card className="border-border">
                <CardHeader className="pb-4">
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center">
                      <role.icon className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <CardTitle className="text-2xl">{role.title}</CardTitle>
                      <CardDescription>{role.description}</CardDescription>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="grid lg:grid-cols-2 gap-8">
                    <div className="space-y-4">
                      {role.features.map((feature, index) => (
                        <div
                          key={index}
                          className="flex items-start gap-4 p-4 rounded-xl bg-muted/50 hover:bg-muted transition-colors"
                        >
                          <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
                            <feature.icon className="w-5 h-5 text-primary" />
                          </div>
                          <div>
                            <h4 className="font-semibold text-foreground">{feature.name}</h4>
                            <p className="text-sm text-muted-foreground">{feature.desc}</p>
                          </div>
                        </div>
                      ))}
                    </div>
                    <div className="relative">
                      <div className="absolute inset-0 bg-primary/5 rounded-2xl blur-2xl"></div>
                      <img
                        src={`/.jpg?height=400&width=600&query=${role.title} tableau de bord`}
                        alt={`Aperçu de l'interface ${role.title}`}
                        className="relative w-full h-auto rounded-xl border border-border shadow-lg"
                      />
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
          ))}
        </Tabs>
      </div>
    </section>
  )
}
