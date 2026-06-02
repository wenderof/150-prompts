
"use client"

import React from 'react'
import { Sparkles } from "lucide-react"

export function AnnouncementBar() {
  return (
    <div className="fixed top-0 left-0 right-0 z-[60] h-10 bg-[#0A0118]/80 backdrop-blur-md border-b border-white/10 flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-primary/10 to-transparent animate-pulse pointer-events-none" />
      <div className="relative flex items-center gap-2 md:gap-3 px-6">
        <Sparkles className="w-3 h-3 text-primary" />
        <p className="text-[9px] md:text-[10px] font-bold text-white tracking-[0.2em] uppercase whitespace-nowrap">
          Oferta de Lançamento <span className="mx-1 md:mx-2 opacity-30">•</span> Acesso Liberado Hoje por <span className="text-primary font-black">R$14,90</span>
        </p>
        <Sparkles className="w-3 h-3 text-primary hidden sm:block" />
      </div>
    </div>
  )
}
