import { StatCard } from "@/components/dashboard/stat-card"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { BookOpen, ClipboardCheck, Users, Calendar, FileText, GraduationCap, Clock, AlertCircle } from "lucide-react"

const myCourses = [
  { code: "CS101", name: "Introduction à la Programmation", students: 120, nextClass: "Aujourd'hui, 10h00" },
  { code: "CS301", name: "Algorithmes",                     students: 72,  nextClass: "Aujourd'hui, 14h00" },
  { code: "CS501", name: "Machine Learning Avancé",         students: 35,  nextClass: "Demain, 9h00" },
]

const pendingTasks = [
  { task: "Corriger les examens de mi-parcours – CS101", due: "Aujourd'hui",  priority: "high" },
  { task: "Déposer les diapositives – CS301",            due: "Demain",       priority: "medium" },
  { task: "Soumettre les présences – CS501",             due: "Dans 2 jours", priority: "low" },
]

const upcomingClasses = [
  { course: "CS101", topic: "Fonctions et Boucles",   time: "10h00", room: "Amphi A-201" },
  { course: "CS301", topic: "Algorithmes sur graphes", time: "14h00", room: "Labo B-105" },
  { course: "CS101", topic: "Tableaux et Listes",     time: "10h00", room: "Amphi A-201" },
]

export default function DashboardHome() {
  return (
    <main className="p-6 space-y-6">
      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
        <StatCard title="Mes Cours"            value="3"   icon={BookOpen} />
        <StatCard title="Total Étudiants"      value="227" icon={GraduationCap} />
        <StatCard title="Cours cette Semaine"  value="12"  icon={Calendar} />
        <StatCard title="Notes en Attente"     value="45"  icon={ClipboardCheck} />
      </div>

      <div className="grid lg:grid-cols-3 gap-6">
        <Card className="lg:col-span-2 border-border">
          <CardHeader>
            <CardTitle>Mes Cours</CardTitle>
            <CardDescription>Affectations du semestre en cours</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {myCourses.map((course, index) => (
                <div key={index} className="flex items-center justify-between p-4 rounded-lg bg-muted/50">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center">
                      <BookOpen className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <p className="font-semibold text-foreground">{course.code}</p>
                      <p className="text-sm text-muted-foreground">{course.name}</p>
                      <p className="text-xs text-muted-foreground">{course.students} étudiants inscrits</p>
                    </div>
                  </div>
                  <div className="text-right">
                    <p className="text-sm font-medium text-foreground">Prochain cours</p>
                    <p className="text-sm text-muted-foreground">{course.nextClass}</p>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        <Card className="border-border">
          <CardHeader>
            <CardTitle>Tâches en Attente</CardTitle>
            <CardDescription>Actions nécessitant votre attention</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-3">
              {pendingTasks.map((task, index) => (
                <div key={index} className="flex items-start gap-3 p-3 rounded-lg bg-muted/50">
                  {task.priority === "high"
                    ? <AlertCircle className="w-5 h-5 text-red-500 shrink-0 mt-0.5" />
                    : <Clock className="w-5 h-5 text-muted-foreground shrink-0 mt-0.5" />
                  }
                  <div className="flex-1">
                    <p className="text-sm font-medium text-foreground">{task.task}</p>
                    <p className="text-xs text-muted-foreground">Échéance : {task.due}</p>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>

      <Card className="border-border">
        <CardHeader className="flex flex-row items-center justify-between">
          <div>
            <CardTitle>Emploi du Temps du Jour</CardTitle>
            <CardDescription>Vos prochains cours</CardDescription>
          </div>
          <Button variant="outline">Voir le planning complet</Button>
        </CardHeader>
        <CardContent>
          <div className="grid sm:grid-cols-3 gap-4">
            {upcomingClasses.map((classItem, index) => (
              <div key={index} className="p-4 rounded-lg border border-border">
                <div className="flex items-center justify-between mb-3">
                  <Badge>{classItem.course}</Badge>
                  <span className="text-sm text-muted-foreground">{classItem.time}</span>
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
          <ClipboardCheck className="w-6 h-6" />
          <span>Soumettre les notes</span>
        </Button>
        <Button variant="outline" className="h-auto py-4 flex flex-col gap-2 bg-transparent">
          <Users className="w-6 h-6" />
          <span>Faire l'appel</span>
        </Button>
        <Button variant="outline" className="h-auto py-4 flex flex-col gap-2 bg-transparent">
          <FileText className="w-6 h-6" />
          <span>Déposer des supports</span>
        </Button>
        <Button variant="outline" className="h-auto py-4 flex flex-col gap-2 bg-transparent">
          <Calendar className="w-6 h-6" />
          <span>Heures de permanence</span>
        </Button>
      </div>
    </main>
  )
}
