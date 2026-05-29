
"use client"

import React from 'react'
import { Button } from "@/components/ui/button"
import { Sparkles, MessageSquare, Infinity, Clock, Target } from "lucide-react"
import Image from 'next/image'
import { PlaceHolderImages } from '@/lib/placeholder-images'

export function Hero() {
  const heroMockup = PlaceHolderImages.find(img => img.id === 'hero-dashboard');

  return (
    <section className="relative pt-44 pb-20 px-6 overflow-hidden bg-[#05010A]">
      {/* Background Glows */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1200px] h-[600px] bg-primary/20 blur-[180px] -z-10 rounded-full opacity-50" />
      
      <div className="max-w-7xl mx-auto text-center flex flex-col items-center">
        {/* Launch Badge */}
        <div className="inline-flex items-center gap-2 glass px-4 py-2 rounded-full border border-white/10 text-[10px] md:text-xs font-black uppercase tracking-[0.2em] text-primary mb-8 animate-in fade-in slide-in-from-top-4 duration-1000">
          <Sparkles className="w-4 h-4" />
          Oferta de lançamento por tempo limitado
        </div>

        {/* Brand Header */}
        <div className="flex flex-col items-center mb-6 animate-in fade-in zoom-in duration-1000">
          <h1 className="font-headline text-5xl md:text-8xl font-black mb-4 leading-tight tracking-tighter text-white max-w-5xl">
            Tenha a Inteligência dos Maiores Especialistas no seu <span className="text-primary">ChatGPT</span>
          </h1>
        </div>
        
        <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mb-12 leading-relaxed font-medium opacity-80">
          150 prompts premium prontos para você copiar, colar e gerar posts, anúncios, reels e vendas em segundos. Esqueça a tela em branco para sempre.
        </p>

        {/* Price & CTA */}
        <div className="flex flex-col items-center mb-16 z-20">
          <div className="flex flex-col items-center gap-1 mb-6">
            <div className="flex items-center gap-4">
              <span className="text-4xl md:text-6xl font-black text-white">R$ 19,90</span>
              <div className="bg-primary/20 text-primary text-[10px] font-black px-3 py-1 rounded-full border border-primary/30 uppercase tracking-widest">
                PREÇO PROMOCIONAL
              </div>
            </div>
            <p className="text-xs text-muted-foreground font-bold uppercase tracking-widest opacity-60">Acesso imediato • Funciona no ChatGPT grátis</p>
          </div>
          
          <Button 
            size="lg" 
            className="h-20 px-16 text-2xl font-black rounded-2xl glow-purple hover:scale-105 active:scale-95 transition-all duration-300 group shadow-[0_0_50px_rgba(157,80,255,0.4)]"
            onClick={() => document.getElementById('pricing')?.scrollIntoView({ behavior: 'smooth' })}
          >
            QUERO OS 150 PROMPTS
          </Button>
        </div>

        {/* Mockup Container */}
        <div className="relative w-full max-w-5xl mx-auto group">
          <div className="absolute -inset-4 bg-primary/20 rounded-[3rem] blur-[80px] opacity-30 group-hover:opacity-50 transition duration-1000" />
          
          <div className="relative glass p-2 md:p-3 rounded-[2.5rem] border border-white/10 shadow-2xl overflow-hidden bg-[#0D0D12]">
             {/* Static Mockup Area */}
             <div className="aspect-video w-full bg-black/40 rounded-[2rem] border border-white/5 relative overflow-hidden">
                <Image 
                  src="/kit-ia-mockup.jpg" 
                  alt="Demonstração KIT IA"
                  fill
                  className="object-cover group-hover:scale-105 transition-all duration-700"
                  priority
                />
             </div>
          </div>
        </div>

        {/* Micro Provas Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12 mt-20 max-w-4xl mx-auto border-t border-white/5 pt-12">
          {[
            { icon: MessageSquare, label: "150+", sub: "PROMPTS" },
            { icon: Infinity, label: "ILIMITADO", sub: "USO" },
            { icon: Clock, label: "IMEDIATO", sub: "ACESSO" },
            { icon: Target, label: "VALIDADO", sub: "QUALQUER NICHO" },
          ].map((item, i) => (
            <div key={i} className="flex flex-col items-center">
              <span className="text-2xl font-black text-white leading-none mb-1">{item.label}</span>
              <span className="text-[9px] font-bold text-primary tracking-widest text-center uppercase">{item.sub}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
