"use client"

import { useState } from "react"
import Link from "next/link"

export function Header() {
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 bg-background border-b border-border">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        <Link href="/" className="text-2xl font-extrabold text-accent ">
          The Daily Dish
        </Link>

        <div className="hidden md:flex items-center gap-8">
          <Link href="/categorias/desporto" className="text-sm font-medium text-foreground hover:text-accent transition-colors">
            Desporto
          </Link>
          <Link href="/categorias/nutricao" className="text-sm font-medium text-foreground hover:text-accent transition-colors">
            Nutrição
          </Link>
          <Link href="/categorias/informatica" className="text-sm font-medium text-foreground hover:text-accent transition-colors">
            Informática
          </Link>
          <Link href="#" className="text-sm font-medium text-foreground hover:text-accent transition-colors">
            Direitos humanos
          </Link>
          <Link href="#" className="text-sm font-medium text-foreground hover:text-accent transition-colors">
            Educação
          </Link>
          <Link href="#" className="text-sm font-medium text-foreground hover:text-accent transition-colors">
            Notícias globais
          </Link>
            <Link href="#" className="text-sm font-medium text-foreground hover:text-accent transition-colors">
            Direito
          </Link>
            <Link href="#" className="text-sm font-medium text-foreground hover:text-accent transition-colors">
            Saúde e bem estar
          </Link>
            <Link href="#" className="text-sm font-medium text-foreground hover:text-accent transition-colors">
            Política
          </Link>
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
        <div className="md:hidden border-t border-border bg-card">
          <div className="px-4 py-4 space-y-4 text-center">
            <Link href="/" className="block text-sm font-medium text-foreground hover:text-accent transition-colors">
              Início
            </Link>
            <Link href="/categorias/desporto" className="block text-sm font-medium text-foreground hover:text-accent transition-colors">
              Desporto
            </Link>
            <Link href="/categorias/nutricao" className="block text-sm font-medium text-foreground hover:text-accent transition-colors">
              Nutrição
            </Link>
            <Link href="/categorias/informatica" className="block text-sm font-medium text-foreground hover:text-accent transition-colors">
              Informática
            </Link>
            <Link href="#" className="block text-sm font-medium text-foreground hover:text-accent transition-colors">
            Direitos humanos
          </Link>
          <Link href="#" className="block text-sm font-medium text-foreground hover:text-accent transition-colors">
            Educação
          </Link>
          <Link href="#" className="block text-sm font-medium text-foreground hover:text-accent transition-colors">
            Notícias globais
          </Link>
            <Link href="#" className="block text-sm font-medium text-foreground hover:text-accent transition-colors">
            Direito
          </Link>
            <Link href="#" className="block text-sm font-medium text-foreground hover:text-accent transition-colors">
            Saúde e bem estar
          </Link>
            <Link href="#" className="block text-sm font-medium text-foreground hover:text-accent transition-colors">
            Política
          </Link>
          </div>
        </div>
      )}
    </header>
  )
}
