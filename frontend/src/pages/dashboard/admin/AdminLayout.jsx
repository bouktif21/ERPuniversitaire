import { Outlet } from "react-router-dom"
import { DashboardSidebar } from "@/components/dashboard/sidebar"
import { DashboardHeader } from "@/components/dashboard/header"
import { LayoutDashboard, Users, Settings, BarChart3, Shield, Database, FileText } from "lucide-react"

const sidebarItems = [
  { label: "Tableau de bord",      href: "/admin/dashboard", icon: LayoutDashboard },
  { label: "Gestion des utilisateurs", href: "/admin/users",  icon: Users },
  { label: "Paramètres système",   href: "/admin/settings",  icon: Settings },
  { label: "Analytique",           href: "/admin/analytics", icon: BarChart3 },
  { label: "Sécurité",             href: "/admin/security",  icon: Shield },
  { label: "Base de données",      href: "/admin/database",  icon: Database },
  { label: "Journaux",             href: "/admin/logs",      icon: FileText },
]

export default function AdminLayout() {
  return (
    <div className="min-h-screen bg-background">
      <DashboardSidebar items={sidebarItems} title="Portail Admin" subtitle="Administrateur Système" />
      <div className="ml-64">
        <DashboardHeader userName="John Admin" userRole="Administrateur Système" />
        <Outlet />
      </div>
    </div>
  )
}
