"use client"

import { Menu, X, Sun, Moon } from "lucide-react"
import { useState, useEffect } from "react"
import { useTheme } from "next-themes"

export default function Navigation({ activeSection }: { activeSection: string }) {
  const [isOpen, setIsOpen] = useState(false)
  const [mounted, setMounted] = useState(false)
  const { theme, setTheme } = useTheme()

  // Avoid hydration mismatch
  useEffect(() => {
    setMounted(true)
  }, [])

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    element?.scrollIntoView({ behavior: "smooth" })
    setIsOpen(false)
  }

  const toggleTheme = () => {
    setTheme(theme === "dark" ? "light" : "dark")
  }

  const navItems = [
    { id: "about", label: "About" },
    { id: "projects", label: "Projects" },
    { id: "skills", label: "Skills" },
    { id: "contact", label: "Contact" },
  ]

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-sm border-b border-accent/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-4 flex items-center justify-between">
        <button
          onClick={() => scrollToSection("hero")}
          className="text-lg sm:text-xl font-bold text-primary hover:text-accent transition-colors"
        >
          Portfolio
        </button>

        <div className="flex items-center gap-2">
          {/* Theme toggle - mobile */}
          <button
            onClick={toggleTheme}
            className="md:hidden p-2 rounded-lg hover:bg-accent/10 transition-colors"
            aria-label="Toggle theme"
          >
            {mounted && (theme === "dark" ? (
              <Sun className="w-5 h-5 text-foreground" />
            ) : (
              <Moon className="w-5 h-5 text-foreground" />
            ))}
          </button>

          <button className="md:hidden" onClick={() => setIsOpen(!isOpen)} aria-label="Toggle menu">
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Desktop navigation */}
        <div className="hidden md:flex gap-6 items-center">
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => scrollToSection(item.id)}
              className={`text-sm font-medium transition-all duration-300 ${activeSection === item.id
                ? "text-primary underline underline-offset-4"
                : "text-foreground/60 hover:text-foreground"
                }`}
            >
              {item.label}
            </button>
          ))}


          {/* Theme toggle - desktop */}
          <button
            onClick={toggleTheme}
            className="p-2 rounded-lg hover:bg-accent/10 transition-colors border border-accent/20"
            aria-label="Toggle theme"
          >
            {mounted && (theme === "dark" ? (
              <Sun className="w-4 h-4 text-foreground" />
            ) : (
              <Moon className="w-4 h-4 text-foreground" />
            ))}
          </button>
        </div>

        {/* Mobile navigation */}
        {isOpen && (
          <div className="absolute top-full left-0 right-0 bg-background border-b border-accent/20 md:hidden">
            <div className="flex flex-col p-4 gap-3">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className={`text-sm font-medium text-left py-2 px-3 rounded transition-all ${activeSection === item.id ? "text-primary bg-accent/10" : "text-foreground/60 hover:text-foreground"
                    }`}
                >
                  {item.label}
                </button>
              ))}

            </div>
          </div>
        )}
      </div>
    </nav>
  )
}
