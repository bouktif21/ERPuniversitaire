import { DashboardSidebar } from "@/components/dashboard/sidebar"
import { DashboardHeader } from "@/components/dashboard/header"
import { Outlet } from "react-router-dom"
import { LayoutDashboard, FileCheck, BarChart3, Calendar, Brain, BookOpen, CreditCard } from "lucide-react"

const sidebarItems = [
  { label: "Tableau de bord",  href: "/student/dashboard", icon: LayoutDashboard },
  { label: "Inscription",      href: "/student/enrollment", icon: FileCheck },
  { label: "Mes Notes",        href: "/student/grades",     icon: BarChart3 },
  { label: "Emploi du temps",  href: "/student/timetable",  icon: Calendar },
  { label: "Conseiller IA",    href: "/student/advisor",    icon: Brain },
  { label: "Cours",            href: "/student/courses",    icon: BookOpen },
  { label: "Paiements",        href: "/student/payments",   icon: CreditCard },
]

export default function StudentLayout() {
  return (
    <div className="min-h-screen bg-background">
      <DashboardSidebar items={sidebarItems} title="Portail Étudiant" subtitle="Tableau de Bord Académique" />
      <div className="ml-64">
        <DashboardHeader userName="Alex Thompson" userRole="Informatique – Année 2" />
        <Outlet />
      </div>
    </div>
  )
}
