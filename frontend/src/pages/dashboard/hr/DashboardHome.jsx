import { StatCard } from "@/components/dashboard/stat-card"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Users, FileText, Calendar, UserPlus, Clock, Briefcase, CheckCircle, XCircle, AlertCircle } from "lucide-react"

const leaveRequests = [
  { name: "Dr. Emily Chen",  type: "Congé annuel",    dates: "20-24 jan.", status: "pending" },
  { name: "Prof. David Lee", type: "Congé maladie",   dates: "18 jan.",    status: "approved" },
  { name: "Sarah Wilson",    type: "Congé personnel", dates: "22-23 jan.", status: "pending" },
  { name: "James Brown",     type: "Conférence",      dates: "1-3 fév.",   status: "approved" },
]

const recentHires = [
  { name: "Dr. Maria Garcia", position: "Maître de Conférences", department: "Physique",   startDate: "15 jan. 2026" },
  { name: "John Smith",       position: "Technicien de Labo",    department: "Chimie",     startDate: "10 jan. 2026" },
  { name: "Lisa Wang",        position: "Assistant Administratif", department: "Ingénierie", startDate: "8 jan. 2026" },
]

const contractsExpiring = [
  { name: "Prof. Robert Taylor",  type: "Temps plein",  expires: "28 fév. 2026" },
  { name: "Dr. Amanda White",     type: "Temps partiel", expires: "15 mar. 2026" },
  { name: "Michael Johnson",      type: "Contrat",       expires: "31 jan. 2026" },
]

export default function DashboardHome() {
  return (
    <main className="p-6 space-y-6">
      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
        <StatCard title="Total Employés"     value="1 847" change="12" changeType="positive" icon={Users} />
        <StatCard title="Postes Ouverts"     value="23"    icon={Briefcase} />
        <StatCard title="Demandes en Attente" value="8"    icon={Clock} />
        <StatCard title="Contrats Expirant"  value="15"    icon={FileText} />
      </div>

      <div className="grid lg:grid-cols-2 gap-6">
        <Card className="border-border">
          <CardHeader className="flex flex-row items-center justify-between">
            <div>
              <CardTitle>Demandes de Congés</CardTitle>
              <CardDescription>En attente d'approbation</CardDescription>
            </div>
            <Button size="sm">Voir tout</Button>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {leaveRequests.map((request, index) => (
                <div key={index} className="flex items-center justify-between p-3 rounded-lg bg-muted/50">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                      <Users className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <p className="font-medium text-foreground">{request.name}</p>
                      <p className="text-sm text-muted-foreground">{request.type} | {request.dates}</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-2">
                    {request.status === "pending" ? (
                      <>
                        <Button size="icon" variant="ghost" className="h-8 w-8 text-green-600">
                          <CheckCircle className="w-4 h-4" />
                        </Button>
                        <Button size="icon" variant="ghost" className="h-8 w-8 text-red-600">
                          <XCircle className="w-4 h-4" />
                        </Button>
                      </>
                    ) : (
                      <Badge variant="outline" className="text-green-600">Approuvé</Badge>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        <Card className="border-border">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <AlertCircle className="w-5 h-5 text-yellow-500" />
              Contrats Expirant Bientôt
            </CardTitle>
            <CardDescription>Nécessitent votre attention</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {contractsExpiring.map((contract, index) => (
                <div key={index} className="flex items-center justify-between p-3 rounded-lg bg-muted/50">
                  <div>
                    <p className="font-medium text-foreground">{contract.name}</p>
                    <p className="text-sm text-muted-foreground">{contract.type}</p>
                  </div>
                  <div className="text-right">
                    <p className="text-sm text-yellow-600">Expire le</p>
                    <p className="text-sm text-muted-foreground">{contract.expires}</p>
                  </div>
                </div>
              ))}
            </div>
            <Button className="w-full mt-4 bg-transparent" variant="outline">
              Gérer les contrats
            </Button>
          </CardContent>
        </Card>
      </div>

      <Card className="border-border">
        <CardHeader className="flex flex-row items-center justify-between">
          <div>
            <CardTitle>Nouvelles Recrues</CardTitle>
            <CardDescription>Nouveaux employés ce mois-ci</CardDescription>
          </div>
          <Button>
            <UserPlus className="w-4 h-4 mr-2" />
            Ajouter un employé
          </Button>
        </CardHeader>
        <CardContent>
          <div className="grid sm:grid-cols-3 gap-4">
            {recentHires.map((hire, index) => (
              <div key={index} className="p-4 rounded-lg border border-border">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                    <Users className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <p className="font-medium text-foreground">{hire.name}</p>
                    <p className="text-sm text-muted-foreground">{hire.position}</p>
                  </div>
                </div>
                <div className="text-sm">
                  <p className="text-muted-foreground">Département : {hire.department}</p>
                  <p className="text-muted-foreground">Date de début : {hire.startDate}</p>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      <div className="grid sm:grid-cols-4 gap-4">
        <Button className="h-auto py-4 flex flex-col gap-2">
          <UserPlus className="w-6 h-6" />
          <span>Ajouter un employé</span>
        </Button>
        <Button variant="outline" className="h-auto py-4 flex flex-col gap-2 bg-transparent">
          <FileText className="w-6 h-6" />
          <span>Créer un contrat</span>
        </Button>
        <Button variant="outline" className="h-auto py-4 flex flex-col gap-2 bg-transparent">
          <Calendar className="w-6 h-6" />
          <span>Gérer les congés</span>
        </Button>
        <Button variant="outline" className="h-auto py-4 flex flex-col gap-2 bg-transparent">
          <Briefcase className="w-6 h-6" />
          <span>Publier un poste</span>
        </Button>
      </div>
    </main>
  )
}
