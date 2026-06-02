
"use client"

import React from 'react'
import { Button } from "@/components/ui/button"
import { Sparkles, MessageSquare, Infinity, Clock, Target } from "lucide-react"
import Image from 'next/image'

export function Hero() {
  return (
    <section className="relative pt-32 md:pt-40 pb-20 px-6 overflow-hidden bg-[#05010A]">
      {/* Background Glows */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1200px] h-[600px] bg-primary/20 blur-[180px] -z-10 rounded-full opacity-50" />
      
      <div className="max-w-7xl mx-auto text-center flex flex-col items-center">
        {/* Brand Header */}
        <div className="flex flex-col items-center mb-6 animate-in fade-in zoom-in duration-1000">
          <h1 className="font-headline text-4xl md:text-7xl lg:text-8xl font-black mb-6 leading-tight tracking-tighter text-white max-w-5xl">
            150 Prompts Que Criam <span className="text-primary">Posts, Anúncios e Vendas</span> em Segundos
          </h1>
        </div>
        
        <div className="flex flex-col items-center gap-4 mb-8 md:mb-10">
          <p className="text-lg md:text-2xl text-muted-foreground max-w-3xl leading-relaxed font-medium opacity-90">
            Copie, cole e gere conteúdos profissionais usando IA mesmo sem experiência.
          </p>
          <p className="text-xs md:text-sm text-white/50 font-bold uppercase tracking-widest">
            ✓ Crie semanas de conteúdo sem contratar social media
          </p>
        </div>

        {/* Price & CTA */}
        <div className="flex flex-col items-center mb-10 md:mb-12 z-20">
          <div className="flex flex-col items-center mb-8">
            <span className="text-xl md:text-2xl text-white/70 line-through font-bold opacity-80 mb-2">
              De R$67
            </span>

            <div className="flex items-center gap-6">
              <span className="text-7xl md:text-9xl font-black text-white drop-shadow-[0_0_30px_rgba(157,80,255,0.7)]">
                R$ 14,90
              </span>
            </div>
            <p className="text-[10px] md:text-xs text-primary font-black uppercase tracking-[0.3em] mt-4">
              Preço promocional por tempo limitado
            </p>
            <p className="text-[10px] md:text-xs text-muted-foreground font-bold uppercase tracking-[0.3em] opacity-40 mt-2">
              ✓ Funciona no ChatGPT grátis • ✓ Acesso Imediato
            </p>
          </div>
          
          <div className="flex flex-col items-center gap-4">
            <Button 
              size="lg" 
              className="h-20 px-12 md:px-20 text-xl md:text-2xl font-black rounded-2xl glow-purple hover:scale-105 active:scale-95 transition-all duration-300 group shadow-[0_0_50px_rgba(157,80,255,0.4)]"
              onClick={() => document.getElementById('pricing')?.scrollIntoView({ behavior: 'smooth' })}
            >
              LIBERAR ACESSO IMEDIATO
            </Button>
            <p className="text-[10px] md:text-xs text-muted-foreground font-bold uppercase tracking-widest opacity-60">
              Acesso liberado imediatamente após o pagamento.
            </p>
          </div>
        </div>

        {/* Mockup Container - Subido para reduzir espaço vazio */}
        <div className="relative w-full max-w-5xl mx-auto group mt-4">
          <div className="absolute -inset-4 bg-primary/20 rounded-[3rem] blur-[80px] opacity-30 group-hover:opacity-50 transition duration-1000" />
          
          <div className="relative glass p-2 md:p-3 rounded-[2.5rem] border border-white/10 shadow-2xl overflow-hidden bg-[#0D0D12]">
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
