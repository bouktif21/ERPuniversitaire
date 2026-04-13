import { DashboardSidebar } from "@/components/dashboard/sidebar"
import { DashboardHeader } from "@/components/dashboard/header"
import { LayoutDashboard, BookOpen, ClipboardCheck, Users, Calendar, FileText } from "lucide-react"
import { Outlet } from "react-router-dom"

const sidebarItems = [
  { label: "Tableau de bord",   href: "/professor/dashboard",   icon: LayoutDashboard },
  { label: "Mes Cours",         href: "/professor/courses",     icon: BookOpen },
  { label: "Saisie des notes",  href: "/professor/grades",      icon: ClipboardCheck },
  { label: "Présences",         href: "/professor/attendance",  icon: Users },
  { label: "Emploi du temps",   href: "/professor/schedule",    icon: Calendar },
  { label: "Supports de cours", href: "/professor/materials",   icon: FileText },
]

export default function ProfessorLayout() {
  return (
    <div className="min-h-screen bg-background">
      <DashboardSidebar items={sidebarItems} title="Portail Professeur" subtitle="Tableau de Bord Enseignant" />
      <div className="ml-64">
        <DashboardHeader userName="Prof. Michael Brown" userRole="Professeur" />
        <Outlet />
      </div>
    </div>
  )
}
