
"use client"

import React from 'react'
import { Button } from "@/components/ui/button"
import { Rocket } from "lucide-react"

export function Navbar() {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 flex justify-center p-4 md:p-6">
      <div className="w-full max-w-7xl flex items-center justify-between glass px-6 py-3 rounded-full border border-white/5 shadow-2xl">
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 rounded-lg bg-primary flex items-center justify-center glow-purple">
            <span className="font-headline font-bold text-white text-xl">V</span>
          </div>
          <span className="font-headline font-bold text-xl tracking-tight hidden sm:block">Vanguarda IA</span>
        </div>
        
        <div className="hidden lg:flex items-center gap-8 text-sm font-medium text-muted-foreground">
          <a href="#features" className="hover:text-primary transition-colors">Recursos</a>
          <a href="#demo" className="hover:text-primary transition-colors">Sistema</a>
          <a href="#faq" className="hover:text-primary transition-colors">FAQ</a>
        </div>

        <Button 
          variant="default" 
          className="rounded-full px-6 font-bold glow-purple text-xs md:text-sm h-10 md:h-11"
          onClick={() => document.getElementById('pricing')?.scrollIntoView({ behavior: 'smooth' })}
        >
          <Rocket className="w-4 h-4 mr-2 hidden md:block" />
          COMEÇAR AGORA
        </Button>
      </div>
    </nav>
  )
}
