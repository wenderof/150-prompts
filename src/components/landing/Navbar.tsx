
"use client"

import React from 'react'
import { Button } from "@/components/ui/button"
import { ShieldCheck } from "lucide-react"

export function Navbar() {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 flex justify-center p-6">
      <div className="w-full max-w-7xl flex items-center justify-between glass px-8 py-3 rounded-full border border-white/5 shadow-2xl">
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 rounded-lg bg-primary flex items-center justify-center glow-purple">
            <span className="font-headline font-bold text-white text-xl">V</span>
          </div>
          <span className="font-headline font-bold text-xl tracking-tight hidden sm:block">Vanguarda IA</span>
        </div>
        
        <div className="hidden md:flex items-center gap-8 text-sm font-medium text-muted-foreground">
          <a href="#features" className="hover:text-primary transition-colors">O Que Você Recebe</a>
          <a href="#demo" className="hover:text-primary transition-colors">Demonstração</a>
          <a href="#workflow" className="hover:text-primary transition-colors">Como Funciona</a>
          <a href="#faq" className="hover:text-primary transition-colors">FAQ</a>
        </div>

        <Button variant="default" className="rounded-full px-6 font-semibold glow-purple">
          ACESSAR AGORA
        </Button>
      </div>
    </nav>
  )
}
