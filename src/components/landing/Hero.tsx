
"use client"

import React from 'react'
import { Button } from "@/components/ui/button"
import { CheckCircle2, Sparkles, Zap, RefreshCw, ClipboardPaste, Laptop } from "lucide-react"
import Image from 'next/image'
import { PlaceHolderImages } from '@/lib/placeholder-images'

export function Hero() {
  const heroMockup = PlaceHolderImages.find(img => img.id === 'hero-dashboard');

  return (
    <section className="relative pt-44 pb-20 px-6 overflow-hidden">
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[1000px] h-[500px] bg-primary/10 blur-[150px] -z-10 rounded-full" />
      
      <div className="max-w-7xl mx-auto text-center flex flex-col items-center">
        <div className="flex flex-wrap justify-center gap-3 mb-8">
          <div className="flex items-center gap-2 glass px-4 py-2 rounded-full border border-white/10 text-[10px] md:text-xs font-semibold uppercase tracking-wider text-primary">
            <Sparkles className="w-4 h-4 animate-pulse" />
            Oferta de lançamento por tempo limitado
          </div>
        </div>

        <div className="flex flex-col items-center mb-6">
          <h1 className="font-headline text-5xl md:text-8xl lg:text-9xl font-black mb-2 leading-none tracking-tighter text-white">
            KIT IA
          </h1>
          <p className="font-headline text-xl md:text-3xl font-bold uppercase tracking-[0.3em] text-primary mb-6">
            para negócios
          </p>
        </div>
        
        <p className="text-lg md:text-2xl text-muted-foreground max-w-3xl mb-8 leading-relaxed font-medium">
          Copie, cole e gere anúncios, reels e scripts de vendas em segundos com a tecnologia das maiores startups de IA do mundo.
        </p>

        <div className="flex flex-col items-center mb-16">
          <div className="flex flex-col items-center gap-1 mb-8">
            <span className="text-muted-foreground line-through text-lg opacity-50">De R$ 97,00</span>
            <div className="flex items-center gap-4">
              <span className="text-5xl md:text-7xl font-black text-white">R$ 19,90</span>
              <div className="bg-primary/20 text-primary text-[10px] font-bold px-3 py-1 rounded-full border border-primary/30 uppercase tracking-widest">
                80% OFF
              </div>
            </div>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-12 gap-y-4 text-sm text-muted-foreground mb-12 text-left max-w-2xl bg-white/5 p-6 rounded-3xl border border-white/5 backdrop-blur-sm">
            <div className="flex items-center gap-3">
              <div className="w-6 h-6 rounded-full bg-primary/20 flex items-center justify-center">
                <CheckCircle2 className="w-4 h-4 text-primary" />
              </div>
              <span className="font-semibold text-white/90">Acesso imediato</span>
            </div>
            <div className="flex items-center gap-3">
              <div className="w-6 h-6 rounded-full bg-primary/20 flex items-center justify-center">
                <RefreshCw className="w-4 h-4 text-primary" />
              </div>
              <span className="font-semibold text-white/90">Atualizações frequentes</span>
            </div>
            <div className="flex items-center gap-3">
              <div className="w-6 h-6 rounded-full bg-primary/20 flex items-center justify-center">
                <Zap className="w-4 h-4 text-primary" />
              </div>
              <span className="font-semibold text-white/90">Qualquer nicho</span>
            </div>
            <div className="flex items-center gap-3">
              <div className="w-6 h-6 rounded-full bg-primary/20 flex items-center justify-center">
                <ClipboardPaste className="w-4 h-4 text-primary" />
              </div>
              <span className="font-semibold text-white/90">Copie e cole no ChatGPT</span>
            </div>
          </div>
          
          <Button 
            size="lg" 
            className="h-20 px-14 text-2xl font-black rounded-2xl glow-purple hover:scale-105 transition-all duration-300 group shadow-[0_0_50px_rgba(157,80,255,0.3)]"
            onClick={() => document.getElementById('pricing')?.scrollIntoView({ behavior: 'smooth' })}
          >
            LIBERAR MEU ACESSO AGORA
          </Button>
        </div>

        <div className="relative w-full max-w-6xl mx-auto group">
          <div className="absolute -inset-1 bg-gradient-to-r from-primary/50 to-secondary/50 rounded-[2.5rem] blur opacity-25 group-hover:opacity-50 transition duration-1000"></div>
          <div className="relative glass p-3 md:p-6 rounded-[2.5rem] border border-white/10 shadow-2xl overflow-hidden bg-[#0D0D12]">
             <div className="absolute inset-0 bg-gradient-to-b from-primary/5 to-transparent pointer-events-none" />
             <Image 
                src={heroMockup?.imageUrl || ''} 
                alt="AI SaaS Dashboard KIT IA"
                width={1400}
                height={900}
                className="rounded-[1.5rem] border border-white/5 opacity-90 shadow-inner"
                data-ai-hint="futuristic SaaS dashboard notebook"
             />
             
             {/* Tech Overlays */}
             <div className="absolute top-12 left-12 glass p-5 rounded-2xl border border-white/10 hidden lg:block backdrop-blur-2xl">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-2.5 h-2.5 rounded-full bg-green-500 animate-pulse shadow-[0_0_10px_rgba(34,197,94,0.5)]" />
                  <span className="text-[11px] font-black uppercase tracking-[0.2em] text-white/90">SISTEMA ATIVO</span>
                </div>
                <div className="space-y-2">
                  <div className="h-1.5 w-40 bg-white/5 rounded-full overflow-hidden">
                    <div className="h-full w-4/5 bg-primary rounded-full" />
                  </div>
                  <div className="flex justify-between text-[9px] text-muted-foreground font-bold tracking-widest">
                    <span>PROCESSANDO</span>
                    <span>89%</span>
                  </div>
                </div>
             </div>

             <div className="absolute bottom-12 right-12 glass p-5 rounded-2xl border border-white/10 hidden lg:block backdrop-blur-2xl">
                <div className="flex items-center gap-3 mb-2">
                  <Laptop className="w-4 h-4 text-primary" />
                  <span className="text-[11px] font-black uppercase tracking-[0.2em] text-white/90">INTERFACE IA</span>
                </div>
                <p className="text-[10px] text-muted-foreground/80 font-medium">ChatGPT 4.0 Conectado</p>
             </div>
          </div>
        </div>
      </div>
    </section>
  )
}
