import { StatCard } from "@/components/dashboard/stat-card"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { FileCheck, BarChart3, Calendar, Brain, BookOpen, Clock, CreditCard, TrendingUp } from "lucide-react"

const currentCourses = [
  { code: "CS101",   name: "Introduction à la Programmation", grade: "A",  progress: 85 },
  { code: "MATH201", name: "Algèbre Linéaire",                grade: "B+", progress: 72 },
  { code: "PHYS101", name: "Physique I",                      grade: "A-", progress: 78 },
  { code: "ENG102",  name: "Rédaction Technique",             grade: "B",  progress: 65 },
]

const todaySchedule = [
  { time: "9h00",  course: "CS101",   topic: "Fonctions et Boucles",  room: "Amphi A-201" },
  { time: "11h00", course: "MATH201", topic: "Valeurs propres",       room: "Salle B-102" },
  { time: "14h00", course: "PHYS101", topic: "Lois de Newton",        room: "Labo C-301" },
]

const aiRecommendations = [
  { type: "cours",      text: "Envisagez de suivre CS201 le prochain semestre pour approfondir vos compétences en programmation" },
  { type: "révision",   text: "Vous bénéficieriez d'une pratique supplémentaire en Algèbre Linéaire – Chapitre 5" },
  { type: "carrière",   text: "Sur la base de vos intérêts, explorez les parcours de carrière en Science des Données" },
]

export default function DashboardHome() {
  return (
    <main className="p-6 space-y-6">
      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
        <StatCard title="Moyenne Générale"       value="3,65"  change="0,12" changeType="positive" icon={TrendingUp} />
        <StatCard title="Crédits Obtenus"        value="45"    icon={BookOpen} />
        <StatCard title="Cours ce Semestre"      value="4"     icon={Calendar} />
        <StatCard title="Devoirs à Rendre"       value="3"     icon={Clock} />
      </div>

      <div className="grid lg:grid-cols-3 gap-6">
        <Card className="lg:col-span-2 border-border">
          <CardHeader>
            <CardTitle>Cours Actuels</CardTitle>
            <CardDescription>Vos cours inscrits ce semestre</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {currentCourses.map((course, index) => (
                <div key={index} className="p-4 rounded-lg bg-muted/50">
                  <div className="flex items-center justify-between mb-3">
                    <div>
                      <div className="flex items-center gap-2">
                        <span className="font-semibold text-foreground">{course.code}</span>
                        <Badge variant="outline">{course.grade}</Badge>
                      </div>
                      <p className="text-sm text-muted-foreground">{course.name}</p>
                    </div>
                    <span className="text-sm text-muted-foreground">{course.progress}% terminé</span>
                  </div>
                  <div className="w-full bg-muted rounded-full h-2">
                    <div className="bg-primary h-2 rounded-full" style={{ width: `${course.progress}%` }}></div>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        <Card className="border-border">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Brain className="w-5 h-5 text-primary" />
              Conseiller IA
            </CardTitle>
            <CardDescription>Recommandations personnalisées</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {aiRecommendations.map((rec, index) => (
                <div key={index} className="p-3 rounded-lg bg-primary/5 border border-primary/10">
                  <Badge variant="outline" className="mb-2">{rec.type}</Badge>
                  <p className="text-sm text-foreground">{rec.text}</p>
                </div>
              ))}
              <Button className="w-full bg-transparent" variant="outline">
                Discuter avec le Conseiller IA
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>

      <Card className="border-border">
        <CardHeader className="flex flex-row items-center justify-between">
          <div>
            <CardTitle>Emploi du Temps du Jour</CardTitle>
            <CardDescription>Vos cours d'aujourd'hui</CardDescription>
          </div>
          <Button variant="outline">Voir l'emploi du temps complet</Button>
        </CardHeader>
        <CardContent>
          <div className="grid sm:grid-cols-3 gap-4">
            {todaySchedule.map((classItem, index) => (
              <div key={index} className="p-4 rounded-lg border border-border">
                <div className="flex items-center justify-between mb-3">
                  <Badge>{classItem.course}</Badge>
                  <span className="text-sm font-medium text-foreground">{classItem.time}</span>
                </div>
                <p className="font-medium text-foreground mb-1">{classItem.topic}</p>
                <p className="text-sm text-muted-foreground">{classItem.room}</p>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      <div className="grid sm:grid-cols-4 gap-4">
        <Button className="h-auto py-4 flex flex-col gap-2">
          <FileCheck className="w-6 h-6" />
          <span>S'inscrire à un cours</span>
        </Button>
        <Button variant="outline" className="h-auto py-4 flex flex-col gap-2 bg-transparent">
          <BarChart3 className="w-6 h-6" />
          <span>Voir les notes</span>
        </Button>
        <Button variant="outline" className="h-auto py-4 flex flex-col gap-2 bg-transparent">
          <CreditCard className="w-6 h-6" />
          <span>Payer les frais</span>
        </Button>
        <Button variant="outline" className="h-auto py-4 flex flex-col gap-2 bg-transparent">
          <Calendar className="w-6 h-6" />
          <span>Calendrier académique</span>
        </Button>
      </div>
    </main>
  )
}
