import { useState, useEffect } from "react"
import { Link, useLocation } from "react-router-dom"
import { Button } from "@/components/ui/button"
import { Menu, X, GraduationCap } from "lucide-react"

const navLinks = [
  { href: "/#features", label: "Fonctionnalités" },
  { href: "/#roles",    label: "Solutions" },
  { href: "/pricing",   label: "Tarifs" },
  { href: "/contact",   label: "Contact" },
]

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const { pathname } = useLocation()

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12)
    window.addEventListener("scroll", onScroll, { passive: true })
    return () => window.removeEventListener("scroll", onScroll)
  }, [])

  // Ferme le menu mobile à chaque changement de route
  useEffect(() => { setIsMenuOpen(false) }, [pathname])

  const isActive = (href) => {
    if (href.startsWith("/#")) return pathname === "/"
    return pathname === href
  }

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-white/90 backdrop-blur-xl shadow-sm shadow-slate-200/60 border-b border-slate-100"
          : "bg-transparent border-b border-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">

          {/* Logo */}
          <Link to="/" className="flex items-center gap-2.5 group flex-shrink-0">
            <div
              className="w-9 h-9 rounded-xl flex items-center justify-center shadow-md group-hover:shadow-indigo-300/50 transition-shadow"
              style={{ background: "linear-gradient(135deg, #4f46e5 0%, #2563eb 60%, #06b6d4 100%)" }}
            >
              <GraduationCap className="w-5 h-5 text-white" />
            </div>
            <span className="font-extrabold text-xl tracking-tight">
              <span
                style={{
                  background: "linear-gradient(135deg, #4f46e5, #06b6d4)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                }}
              >
                Uni
              </span>
              <span className="text-foreground">ERP</span>
            </span>
          </Link>

          {/* Navigation bureau */}
          <nav className="hidden md:flex items-center gap-1">
            {navLinks.map(({ href, label }) => {
              const active = isActive(href)
              return (
                <Link
                  key={label}
                  to={href}
                  className={`relative px-4 py-2 rounded-lg text-sm font-medium transition-all ${
                    active
                      ? "text-indigo-600"
                      : "text-slate-500 hover:text-foreground hover:bg-slate-100"
                  }`}
                >
                  {label}
                  {active && (
                    <span
                      className="absolute bottom-0.5 left-1/2 -translate-x-1/2 w-4 h-0.5 rounded-full"
                      style={{ background: "linear-gradient(90deg, #4f46e5, #06b6d4)" }}
                    />
                  )}
                </Link>
              )
            })}
          </nav>

          {/* CTA bureau */}
          <div className="hidden md:flex items-center gap-2">
            <Link to="/login">
              <Button
                variant="ghost"
                size="sm"
                className="font-medium text-slate-600 hover:text-foreground hover:bg-slate-100"
              >
                Connexion
              </Button>
            </Link>
            <Link to="/contact">
              <Button
                size="sm"
                className="gap-1.5 font-semibold rounded-xl shadow-md shadow-indigo-500/20 hover:shadow-indigo-500/40 transition-shadow"
                style={{ background: "linear-gradient(135deg, #4f46e5, #2563eb)" }}
              >
                Demander une démo
              </Button>
            </Link>
          </div>

          {/* Bouton hamburger mobile */}
          <button
            className="md:hidden p-2 rounded-lg hover:bg-slate-100 transition-colors"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Menu"
          >
            {isMenuOpen
              ? <X    className="w-5 h-5 text-slate-600" />
              : <Menu className="w-5 h-5 text-slate-600" />
            }
          </button>
        </div>

        {/* Menu mobile */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t border-slate-100 bg-white/95 backdrop-blur-xl rounded-b-2xl shadow-lg">
            <nav className="flex flex-col gap-1 px-2">
              {navLinks.map(({ href, label }) => {
                const active = isActive(href)
                return (
                  <Link
                    key={label}
                    to={href}
                    className={`px-4 py-2.5 rounded-lg text-sm font-medium transition-all ${
                      active
                        ? "bg-indigo-50 text-indigo-600"
                        : "text-slate-600 hover:text-foreground hover:bg-slate-100"
                    }`}
                  >
                    {label}
                  </Link>
                )
              })}
              <div className="flex flex-col gap-2 pt-3 border-t border-slate-100 mt-2 px-2">
                <Link to="/login">
                  <Button variant="outline" size="sm" className="w-full font-medium">
                    Connexion
                  </Button>
                </Link>
                <Link to="/contact">
                  <Button
                    size="sm"
                    className="w-full font-semibold"
                    style={{ background: "linear-gradient(135deg, #4f46e5, #2563eb)" }}
                  >
                    Demander une démo
                  </Button>
                </Link>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  )
}
