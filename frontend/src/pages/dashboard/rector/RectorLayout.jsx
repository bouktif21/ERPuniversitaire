import { DashboardSidebar } from "@/components/dashboard/sidebar"
import { DashboardHeader } from "@/components/dashboard/header"
import { Outlet } from "react-router-dom"
import { LayoutDashboard, BarChart3, Brain, FileText, Building2, DollarSign } from "lucide-react"

const sidebarItems = [
  { label: "Tableau de bord",       href: "/rector/dashboard",    icon: LayoutDashboard },
  { label: "Analytique stratégique", href: "/rector/analytics",   icon: BarChart3 },
  { label: "Prédictions IA",        href: "/rector/predictions",  icon: Brain },
  { label: "Rapports de performance", href: "/rector/reports",    icon: FileText },
  { label: "Départements",          href: "/rector/departments",  icon: Building2 },
  { label: "Aperçu budgétaire",     href: "/rector/budget",       icon: DollarSign },
]

export default function RectorLayout() {
  return (
    <div className="min-h-screen bg-background">
      <DashboardSidebar items={sidebarItems} title="Portail Recteur" subtitle="Vue Stratégique" />
      <div className="ml-64">
        <DashboardHeader userName="Dr. Robert Wilson" userRole="Recteur d'Université" />
        <Outlet />
      </div>
    </div>
  )
}
