import { DashboardSidebar } from "@/components/dashboard/sidebar"
import { DashboardHeader } from "@/components/dashboard/header"
import { Outlet } from "react-router-dom"
import { LayoutDashboard, CreditCard, PieChart, DollarSign, FileText, Receipt } from "lucide-react"

const sidebarItems = [
  { label: "Tableau de bord",  href: "/finance/dashboard",       icon: LayoutDashboard },
  { label: "Paiements",        href: "/finance/payments",        icon: CreditCard },
  { label: "Rapports budget",  href: "/finance/budget",          icon: PieChart },
  { label: "Revenus",          href: "/finance/revenue",         icon: DollarSign },
  { label: "Dépenses",         href: "/finance/expenses",        icon: Receipt },
  { label: "Factures",         href: "/finance/invoices",        icon: FileText },
]

export default function FinanceLayout() {
  return (
    <div className="min-h-screen bg-background">
      <DashboardSidebar items={sidebarItems} title="Portail Finance" subtitle="Gestion Financière" />
      <div className="ml-64">
        <DashboardHeader userName="Richard Anderson" userRole="Responsable Finances" />
        <Outlet />
      </div>
    </div>
  )
}
