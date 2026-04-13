import { StatCard } from "@/components/dashboard/stat-card"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Users, Activity, Shield, Database, AlertTriangle, FileText, Settings, UserPlus } from "lucide-react"
import { Button } from "@/components/ui/button"

const recentActivities = [
  { user: "Dr. Smith",      action: "Nouveau cours créé",              time: "Il y a 2 min" },
  { user: "Admin",          action: "Paramètres système mis à jour",   time: "Il y a 15 min" },
  { user: "Jane Doe",       action: "Inscrite au cours CS101",         time: "Il y a 1 heure" },
  { user: "Prof. Johnson",  action: "Notes soumises",                  time: "Il y a 2 heures" },
]

export default function DashboardHome() {
  return (
    <main className="p-6 space-y-6">
      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
        <StatCard title="Total Utilisateurs"   value="12 847" change="12%" changeType="positive" icon={Users} />
        <StatCard title="Sessions Actives"     value="1 234"  change="5%"  changeType="positive" icon={Activity} />
        <StatCard title="Santé du Système"     value="99,9%"  icon={Shield} />
        <StatCard title="Stockage Utilisé"     value="78%"    icon={Database} />
      </div>

      <div className="grid lg:grid-cols-3 gap-6">
        <Card className="lg:col-span-2 border-border">
          <CardHeader>
            <CardTitle>Activité Récente</CardTitle>
            <CardDescription>Dernières activités du système</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {recentActivities.map((activity, index) => (
                <div key={index} className="flex items-center justify-between p-3 rounded-lg bg-muted/50">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                      <Activity className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <p className="font-medium text-foreground">{activity.user}</p>
                      <p className="text-sm text-muted-foreground">{activity.action}</p>
                    </div>
                  </div>
                  <span className="text-sm text-muted-foreground">{activity.time}</span>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        <Card className="border-border">
          <CardHeader>
            <CardTitle>Actions Rapides</CardTitle>
            <CardDescription>Tâches administratives courantes</CardDescription>
          </CardHeader>
          <CardContent className="space-y-3">
            <Button className="w-full justify-start gap-2 bg-transparent" variant="outline">
              <UserPlus className="w-4 h-4" />
              Ajouter un utilisateur
            </Button>
            <Button className="w-full justify-start gap-2 bg-transparent" variant="outline">
              <Settings className="w-4 h-4" />
              Configuration système
            </Button>
            <Button className="w-full justify-start gap-2 bg-transparent" variant="outline">
              <Database className="w-4 h-4" />
              Sauvegarder la base de données
            </Button>
            <Button className="w-full justify-start gap-2 bg-transparent" variant="outline">
              <FileText className="w-4 h-4" />
              Générer un rapport
            </Button>
          </CardContent>
        </Card>
      </div>

      <Card className="border-border">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <AlertTriangle className="w-5 h-5 text-yellow-500" />
            Alertes Système
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-3">
            <div className="flex items-center justify-between p-4 rounded-lg bg-yellow-500/10 border border-yellow-500/20">
              <div>
                <p className="font-medium text-foreground">Maintenance de la base de données planifiée</p>
                <p className="text-sm text-muted-foreground">Prévue dimanche, 2h00 – 4h00</p>
              </div>
              <Button size="sm" variant="outline">Voir les détails</Button>
            </div>
            <div className="flex items-center justify-between p-4 rounded-lg bg-primary/10 border border-primary/20">
              <div>
                <p className="font-medium text-foreground">Nouvelle mise à jour disponible</p>
                <p className="text-sm text-muted-foreground">La version 2.5.0 est prête à être installée</p>
              </div>
              <Button size="sm">Mettre à jour</Button>
            </div>
          </div>
        </CardContent>
      </Card>
    </main>
  )
}
