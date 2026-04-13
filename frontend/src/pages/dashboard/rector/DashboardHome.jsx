import { StatCard } from "@/components/dashboard/stat-card"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { BarChart3, Brain, TrendingUp, Users, GraduationCap, Award } from "lucide-react"

const departmentPerformance = [
  { name: "Informatique",          students: 1240, growth: "+12%", satisfaction: "94%" },
  { name: "Ingénierie",            students: 890,  growth: "+8%",  satisfaction: "91%" },
  { name: "Sciences de Gestion",   students: 1560, growth: "+15%", satisfaction: "89%" },
  { name: "Médecine",              students: 420,  growth: "+5%",  satisfaction: "96%" },
  { name: "Arts & Lettres",        students: 680,  growth: "+3%",  satisfaction: "88%" },
]

export default function DashboardHome() {
  return (
    <main className="p-6 space-y-6">
      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
        <StatCard title="Total Étudiants"     value="24 580"  change="8%"   changeType="positive" icon={GraduationCap} />
        <StatCard title="Membres du Corps Enseignant" value="1 847" change="3%" changeType="positive" icon={Users} />
        <StatCard title="Taux de Diplomation" value="94,2%"   change="2,1%" changeType="positive" icon={Award} />
        <StatCard title="Subventions de Recherche" value="12,5M €" change="18%" changeType="positive" icon={TrendingUp} />
      </div>

      <div className="grid lg:grid-cols-2 gap-6">
        <Card className="border-border">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Brain className="w-5 h-5 text-primary" />
              Prédictions IA
            </CardTitle>
            <CardDescription>Analyses prédictives pour le prochain semestre</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="p-4 rounded-lg bg-muted/50">
              <div className="flex items-center justify-between mb-2">
                <span className="text-sm font-medium">Prévision des inscriptions</span>
                <span className="text-sm text-primary">+12% projeté</span>
              </div>
              <div className="w-full bg-muted rounded-full h-2">
                <div className="bg-primary h-2 rounded-full" style={{ width: "78%" }}></div>
              </div>
              <p className="text-xs text-muted-foreground mt-2">27 500 étudiants prévus pour l'automne 2026</p>
            </div>
            <div className="p-4 rounded-lg bg-muted/50">
              <div className="flex items-center justify-between mb-2">
                <span className="text-sm font-medium">Risque de décrochage</span>
                <span className="text-sm text-yellow-600">Moyen</span>
              </div>
              <div className="w-full bg-muted rounded-full h-2">
                <div className="bg-yellow-500 h-2 rounded-full" style={{ width: "35%" }}></div>
              </div>
              <p className="text-xs text-muted-foreground mt-2">847 étudiants signalés pour intervention précoce</p>
            </div>
            <div className="p-4 rounded-lg bg-muted/50">
              <div className="flex items-center justify-between mb-2">
                <span className="text-sm font-medium">Utilisation du budget</span>
                <span className="text-sm text-green-600">Dans les objectifs</span>
              </div>
              <div className="w-full bg-muted rounded-full h-2">
                <div className="bg-green-500 h-2 rounded-full" style={{ width: "65%" }}></div>
              </div>
              <p className="text-xs text-muted-foreground mt-2">65% du budget annuel utilisé jusqu'au T3</p>
            </div>
          </CardContent>
        </Card>

        <Card className="border-border">
          <CardHeader>
            <CardTitle>Performance des Départements</CardTitle>
            <CardDescription>Indicateurs clés par département</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {departmentPerformance.map((dept, index) => (
                <div key={index} className="flex items-center justify-between p-3 rounded-lg bg-muted/50">
                  <div>
                    <p className="font-medium text-foreground">{dept.name}</p>
                    <p className="text-sm text-muted-foreground">{dept.students} étudiants</p>
                  </div>
                  <div className="text-right">
                    <p className="text-sm text-green-600">{dept.growth}</p>
                    <p className="text-xs text-muted-foreground">{dept.satisfaction} satisfaction</p>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>

      <Card className="border-border">
        <CardHeader>
          <CardTitle>Vue d'Ensemble Stratégique</CardTitle>
          <CardDescription>Métriques institutionnelles d'une année sur l'autre</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="h-64 flex items-center justify-center bg-muted/30 rounded-lg">
            <div className="text-center">
              <BarChart3 className="w-12 h-12 text-muted-foreground mx-auto mb-2" />
              <p className="text-muted-foreground">Tableau de Bord Analytique Interactif</p>
              <p className="text-sm text-muted-foreground">Inscriptions, Revenus et Tendances de Performance</p>
            </div>
          </div>
        </CardContent>
      </Card>
    </main>
  )
}
