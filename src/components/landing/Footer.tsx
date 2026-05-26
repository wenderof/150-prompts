
"use client"

import React from 'react'

export function Footer() {
  return (
    <footer className="py-12 px-6 border-t border-white/5 bg-background">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-8">
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 rounded-lg bg-primary flex items-center justify-center">
            <span className="font-headline font-bold text-white text-xl">V</span>
          </div>
          <span className="font-headline font-bold text-xl tracking-tight">Vanguarda IA</span>
        </div>
        
        <p className="text-muted-foreground text-sm">
          © {new Date().getFullYear()} Vanguarda IA. Todos os direitos reservados.
        </p>

        <div className="flex gap-6 text-sm text-muted-foreground">
          <a href="#" className="hover:text-primary transition-colors">Termos de Uso</a>
          <a href="#" className="hover:text-primary transition-colors">Privacidade</a>
        </div>
      </div>
    </footer>
  )
}
