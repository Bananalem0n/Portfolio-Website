"use client"

import { Menu, X } from "lucide-react"
import { useState } from "react"

export default function Navigation({ activeSection }: { activeSection: string }) {
  const [isOpen, setIsOpen] = useState(false)

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    element?.scrollIntoView({ behavior: "smooth" })
    setIsOpen(false)
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

        <button className="md:hidden" onClick={() => setIsOpen(!isOpen)} aria-label="Toggle menu">
          {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>

        {/* Desktop navigation */}
        <div className="hidden md:flex gap-8 items-center">
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => scrollToSection(item.id)}
              className={`text-sm font-medium transition-all duration-300 ${
                activeSection === item.id
                  ? "text-primary underline underline-offset-4"
                  : "text-foreground/60 hover:text-foreground"
              }`}
            >
              {item.label}
            </button>
          ))}
          <a
            href="https://blog.example.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm font-medium text-foreground/60 hover:text-primary transition-colors flex items-center gap-1"
          >
            Blog
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
              />
            </svg>
          </a>
        </div>

        {/* Mobile navigation */}
        {isOpen && (
          <div className="absolute top-full left-0 right-0 bg-background border-b border-accent/20 md:hidden">
            <div className="flex flex-col p-4 gap-3">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className={`text-sm font-medium text-left py-2 px-3 rounded transition-all ${
                    activeSection === item.id ? "text-primary bg-accent/10" : "text-foreground/60 hover:text-foreground"
                  }`}
                >
                  {item.label}
                </button>
              ))}
              <a
                href="https://blog.example.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm font-medium text-foreground/60 hover:text-primary transition-colors py-2 px-3 flex items-center gap-1"
              >
                Blog
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                  />
                </svg>
              </a>
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}
