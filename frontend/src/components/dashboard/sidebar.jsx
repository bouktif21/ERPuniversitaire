import { Link, useLocation, useNavigate } from "react-router-dom"
import { cn } from "@/lib/utils"
import { useAuth } from "@/contexts/AuthContext"
import { GraduationCap, LogOut, ChevronLeft } from "lucide-react"
import { Button } from "@/components/ui/button"

export function DashboardSidebar({ items, title, subtitle }) {
  const { pathname } = useLocation()
  const navigate = useNavigate()
  const { logout } = useAuth()

  const handleLogout = () => {
    logout()
    navigate("/login", { replace: true })
  }

  return (
    <aside className="fixed left-0 top-0 bottom-0 w-64 bg-card border-r border-border flex flex-col">
      {/* Logo */}
      <div className="p-6 border-b border-border">
        <Link to="/" className="flex items-center gap-2.5">
          <div
            className="w-9 h-9 rounded-xl flex items-center justify-center shadow"
            style={{ background: "linear-gradient(135deg, #4f46e5, #2563eb)" }}
          >
            <GraduationCap className="w-5 h-5 text-white" />
          </div>
          <span className="font-extrabold text-xl">
            <span className="gradient-text">Uni</span>ERP
          </span>
        </Link>
        <div className="mt-4">
          <p className="font-semibold text-foreground">{title}</p>
          <p className="text-sm text-muted-foreground">{subtitle}</p>
        </div>
      </div>

      {/* Navigation */}
      <nav className="flex-1 p-4 space-y-1 overflow-y-auto">
        {items.map((item, index) => {
          const IconComponent = item.icon
          const isActive = pathname === item.href
          return (
            <Link
              key={index}
              to={item.href}
              className={cn(
                "flex items-center gap-3 px-3 py-2 rounded-lg text-sm transition-colors",
                isActive
                  ? "bg-primary text-primary-foreground"
                  : "text-muted-foreground hover:bg-muted hover:text-foreground",
              )}
            >
              <IconComponent className="w-5 h-5" />
              {item.label}
            </Link>
          )
        })}
      </nav>

      {/* Pied de page */}
      <div className="p-4 border-t border-border space-y-2">
        <Link to="/">
          <Button variant="ghost" className="w-full justify-start gap-2">
            <ChevronLeft className="w-4 h-4" />
            Retour à l'accueil
          </Button>
        </Link>
        <Button
          variant="ghost"
          className="w-full justify-start gap-2 text-destructive hover:text-destructive"
          onClick={handleLogout}
        >
          <LogOut className="w-4 h-4" />
          Déconnexion
        </Button>
      </div>
    </aside>
  )
}
