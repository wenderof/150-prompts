
"use client"

import React from 'react'
import { Button } from "@/components/ui/button"
import { Rocket } from "lucide-react"

export function Navbar() {
  return (
    <nav className="fixed top-10 left-0 right-0 z-50 flex justify-center p-4 md:p-6">
      <div className="w-full max-w-7xl flex items-center justify-between glass px-6 py-3 rounded-full border border-white/5 shadow-2xl">
        <div className="flex items-center gap-2 group cursor-pointer">
          <div className="w-9 h-9 rounded-lg bg-primary flex items-center justify-center glow-purple transition-transform group-hover:scale-105">
            <span className="font-headline font-bold text-white text-xl">K</span>
          </div>
          <div className="flex flex-col leading-none">
            <span className="font-headline font-bold text-lg tracking-tight text-white">KIT IA</span>
            <span className="text-[10px] uppercase tracking-widest text-muted-foreground font-medium">para negócios</span>
          </div>
        </div>
        
        <div className="hidden lg:flex items-center gap-8 text-sm font-medium text-muted-foreground">
          <a href="#features" className="hover:text-primary transition-colors">Recursos</a>
          <a href="#demo" className="hover:text-primary transition-colors">Sistema</a>
          <a href="#faq" className="hover:text-primary transition-colors">FAQ</a>
        </div>

        <Button 
          variant="default" 
          className="rounded-full px-6 font-bold glow-purple text-xs md:text-sm h-10 md:h-11 hover:scale-105 transition-transform"
          onClick={() => document.getElementById('pricing')?.scrollIntoView({ behavior: 'smooth' })}
        >
          <Rocket className="w-4 h-4 mr-2 hidden md:block" />
          COMEÇAR AGORA
        </Button>
      </div>
    </nav>
  )
}
