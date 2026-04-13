import { DashboardSidebar } from "@/components/dashboard/sidebar"
import { DashboardHeader } from "@/components/dashboard/header"
import { Outlet } from "react-router-dom"
import { LayoutDashboard, Users, FileText, Calendar, UserPlus, Clock, Briefcase, DollarSign } from "lucide-react"

const sidebarItems = [
  { label: "Tableau de bord",  href: "/hr/dashboard",    icon: LayoutDashboard },
  { label: "Profils du personnel", href: "/hr/staff",    icon: Users },
  { label: "Contrats",         href: "/hr/contracts",    icon: FileText },
  { label: "Gestion des congés", href: "/hr/leave",      icon: Calendar },
  { label: "Recrutement",      href: "/hr/recruitment",  icon: UserPlus },
  { label: "Présences",        href: "/hr/attendance",   icon: Clock },
  { label: "Départements",     href: "/hr/departments",  icon: Briefcase },
  { label: "Paie",             href: "/hr/payroll",      icon: DollarSign },
]

export default function HRLayout() {
  return (
    <div className="min-h-screen bg-background">
      <DashboardSidebar items={sidebarItems} title="Portail RH" subtitle="Ressources Humaines" />
      <div className="ml-64">
        <DashboardHeader userName="Patricia Moore" userRole="Responsable RH" />
        <Outlet />
      </div>
    </div>
  )
}
