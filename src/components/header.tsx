"use client"

import { useState } from "react"
import Link from "next/link"

export function Header() {
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 bg-background border-b border-border">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        <a href="/" className="text-2xl font-extrabold text-accent ">
          The Daily Dish
        </a>
        <div className="hidden md:flex items-center gap-8">
          <a href="/categorias/desporto" className="text-sm font-medium text-foreground hover:text-accent transition-colors">
            Desporto
          </a>
          <a href="/categorias/nutricao" className="text-sm font-medium text-foreground hover:text-accent transition-colors">
            Nutrição
          </a>
          <a href="/categorias/tecnologia" className="text-sm font-medium text-foreground hover:text-accent transition-colors">
            Tecnologia
          </a>
          <a href="#" className="text-sm font-medium text-foreground hover:text-accent transition-colors">
            Direitos humanos
          </a>
          <a href="#" className="text-sm font-medium text-foreground hover:text-accent transition-colors">
            Educação
          </a>
          <a href="#" className="text-sm font-medium text-foreground hover:text-accent transition-colors">
            Notícias globais
          </a>
            <a href="#" className="text-sm font-medium text-foreground hover:text-accent transition-colors">
            Direito
          </a>
            <a href="#" className="text-sm font-medium text-foreground hover:text-accent transition-colors">
            Saúde e bem estar
          </a>
            <a href="/categorias/politica" className="text-sm font-medium text-foreground hover:text-accent transition-colors">
            Política
          </a>
        </div>

        <button
          className="md:hidden p-2 hover:bg-muted rounded-lg transition-colors"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Menu"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>
      </nav>

      {menuOpen && (
        <div className="md:hidden border-t border-border bg-card border-b">
          <div className="px-4 py-4 space-y-4 text-center">
            <a href="/" className="block text-sm font-medium text-foreground hover:text-accent transition-colors">
              Início
            </a>
            <a href="/categorias/desporto" className="block text-sm font-medium text-foreground hover:text-accent transition-colors">
              Desporto
            </a>
            <a href="/categorias/nutricao" className="block text-sm font-medium text-foreground hover:text-accent transition-colors">
              Nutrição
            </a>
            <a href="/categorias/informatica" className="block text-sm font-medium text-foreground hover:text-accent transition-colors">
              Informática
            </a>
            <a href="#" className="block text-sm font-medium text-foreground hover:text-accent transition-colors">
            Direitos humanos
          </a>
          <a href="#" className="block text-sm font-medium text-foreground hover:text-accent transition-colors">
            Educação
          </a>
          <a href="#" className="block text-sm font-medium text-foreground hover:text-accent transition-colors">
            Notícias globais
          </a>
            <a href="#" className="block text-sm font-medium text-foreground hover:text-accent transition-colors">
            Direito
          </a>
            <a href="#" className="block text-sm font-medium text-foreground hover:text-accent transition-colors">
            Saúde e bem estar
          </a>
            <a href="/categorias/politica" className="block text-sm font-medium text-foreground hover:text-accent transition-colors">
            Política
          </a>
          </div>
        </div>
      )}
    </header>
  )
}
