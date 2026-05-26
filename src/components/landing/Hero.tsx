
"use client"

import React from 'react'
import { Button } from "@/components/ui/button"
import { CheckCircle2, Sparkles, Zap, Smartphone, RefreshCw, ClipboardPaste } from "lucide-react"
import Image from 'next/image'
import { PlaceHolderImages } from '@/lib/placeholder-images'

export function Hero() {
  const heroMockup = PlaceHolderImages.find(img => img.id === 'hero-dashboard');

  return (
    <section className="relative pt-40 pb-20 px-6 overflow-hidden">
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-primary/20 blur-[120px] -z-10 rounded-full" />
      
      <div className="max-w-7xl mx-auto text-center flex flex-col items-center">
        <div className="flex flex-wrap justify-center gap-3 mb-8">
          <div className="flex items-center gap-2 glass px-4 py-2 rounded-full border border-white/10 text-[10px] md:text-xs font-semibold uppercase tracking-wider text-primary animate-pulse">
            <Sparkles className="w-4 h-4" />
            Oferta de lançamento por tempo limitado
          </div>
        </div>

        <h1 className="font-headline text-4xl md:text-7xl lg:text-8xl font-bold mb-6 leading-[1.1] max-w-5xl tracking-tight text-gradient text-white">
          150 Comandos Inteligentes de IA Para Vender Mais
        </h1>
        
        <p className="text-lg md:text-2xl text-muted-foreground max-w-3xl mb-8 leading-relaxed">
          Copie, cole e gere anúncios, reels e scripts de vendas em segundos com a tecnologia das maiores startups de IA do mundo.
        </p>

        <div className="flex flex-col items-center mb-12">
          <div className="flex items-baseline gap-3 mb-6">
            <span className="text-muted-foreground line-through text-xl">R$ 97,00</span>
            <span className="text-4xl md:text-6xl font-bold text-white">R$ 19,90</span>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-3 text-sm text-muted-foreground mb-10 text-left max-w-xl">
            <div className="flex items-center gap-2.5">
              <div className="w-5 h-5 rounded-full bg-primary/10 flex items-center justify-center">
                <CheckCircle2 className="w-3.5 h-3.5 text-primary" />
              </div>
              <span className="font-medium text-white/80">Acesso imediato</span>
            </div>
            <div className="flex items-center gap-2.5">
              <div className="w-5 h-5 rounded-full bg-primary/10 flex items-center justify-center">
                <RefreshCw className="w-3.5 h-3.5 text-primary" />
              </div>
              <span className="font-medium text-white/80">Atualizações frequentes</span>
            </div>
            <div className="flex items-center gap-2.5">
              <div className="w-5 h-5 rounded-full bg-primary/10 flex items-center justify-center">
                <Zap className="w-3.5 h-3.5 text-primary" />
              </div>
              <span className="font-medium text-white/80">Qualquer nicho</span>
            </div>
            <div className="flex items-center gap-2.5">
              <div className="w-5 h-5 rounded-full bg-primary/10 flex items-center justify-center">
                <ClipboardPaste className="w-3.5 h-3.5 text-primary" />
              </div>
              <span className="font-medium text-white/80">Copie e cole no ChatGPT</span>
            </div>
          </div>
          
          <Button 
            size="lg" 
            className="h-16 px-10 text-xl font-bold rounded-2xl glow-purple hover:scale-105 transition-all duration-300 group"
            onClick={() => document.getElementById('pricing')?.scrollIntoView({ behavior: 'smooth' })}
          >
            LIBERAR MEU ACESSO AGORA
          </Button>
        </div>

        <div className="relative w-full max-w-5xl mx-auto">
          <div className="relative glass p-2 md:p-4 rounded-[2rem] border border-white/10 shadow-2xl animate-float overflow-hidden">
             <Image 
                src={heroMockup?.imageUrl || ''} 
                alt="AI Dashboard Mockup"
                width={1200}
                height={800}
                className="rounded-2xl border border-white/5 opacity-80"
                data-ai-hint="SaaS dashboard"
             />
             
             {/* Tech Overlays */}
             <div className="absolute top-10 left-10 glass p-4 rounded-xl border border-white/10 hidden md:block">
                <div className="flex items-center gap-2 mb-2">
                  <div className="w-2 h-2 rounded-full bg-green-500 animate-ping" />
                  <span className="text-[10px] font-bold uppercase tracking-widest text-white/90">Sistema Ativo</span>
                </div>
                <div className="h-1.5 w-32 bg-white/10 rounded-full">
                  <div className="h-full w-2/3 bg-primary rounded-full" />
                </div>
             </div>
          </div>
        </div>
      </div>
    </section>
  )
}
