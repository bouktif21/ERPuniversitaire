import { DashboardSidebar } from "@/components/dashboard/sidebar"
import { DashboardHeader } from "@/components/dashboard/header"
import { Outlet } from "react-router-dom"
import { LayoutDashboard, BookOpen, BarChart3, Clock, Users, FileText } from "lucide-react"

const sidebarItems = [
  { label: "Tableau de bord",  href: "/department",              icon: LayoutDashboard },
  { label: "Cours",            href: "/department/courses",      icon: BookOpen },
  { label: "Corps enseignant", href: "/department/faculty",      icon: Users },
  { label: "Analytique",       href: "/department/analytics",    icon: BarChart3 },
  { label: "Charge de travail", href: "/department/workload",    icon: Clock },
  { label: "Rapports",         href: "/department/reports",      icon: FileText },
]

export default function DepartmentLayout() {
  return (
    <div className="min-h-screen bg-background">
      <DashboardSidebar items={sidebarItems} title="Chef de Département" subtitle="Informatique" />
      <div className="ml-64">
        <DashboardHeader userName="Dr. Jennifer Adams" userRole="Chef de Département" />
        <Outlet />
      </div>
    </div>
  )
}
