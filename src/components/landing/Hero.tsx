
"use client"

import React from 'react'
import { Button } from "@/components/ui/button"
import { CheckCircle2, Sparkles, Zap, RefreshCw, ClipboardPaste, Laptop, MessageSquare, Infinity, Clock, Target, ShieldCheck } from "lucide-react"
import Image from 'next/image'
import { PlaceHolderImages } from '@/lib/placeholder-images'

export function Hero() {
  const heroMockup = PlaceHolderImages.find(img => img.id === 'hero-dashboard');

  return (
    <section className="relative pt-44 pb-20 px-6 overflow-hidden bg-[#05010A]">
      {/* Background Glows */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1200px] h-[600px] bg-primary/20 blur-[180px] -z-10 rounded-full opacity-50" />
      <div className="absolute -bottom-20 left-0 w-full h-1/2 bg-gradient-to-t from-[#05010A] to-transparent z-10" />
      
      <div className="max-w-7xl mx-auto text-center flex flex-col items-center">
        {/* Launch Badge */}
        <div className="inline-flex items-center gap-2 glass px-4 py-2 rounded-full border border-white/10 text-[10px] md:text-xs font-black uppercase tracking-[0.2em] text-primary mb-8 animate-in fade-in slide-in-from-top-4 duration-1000">
          <Sparkles className="w-4 h-4" />
          Oferta de lançamento por tempo limitado
        </div>

        {/* Brand Header */}
        <div className="flex flex-col items-center mb-6 animate-in fade-in zoom-in duration-1000">
          <h1 className="font-headline text-6xl md:text-9xl font-black mb-2 leading-none tracking-tighter text-white">
            KIT IA
          </h1>
          <p className="font-headline text-xl md:text-4xl font-bold uppercase tracking-[0.3em] text-primary">
            PARA NEGÓCIOS
          </p>
        </div>
        
        <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mb-12 leading-relaxed font-medium opacity-80">
          150 prompts premium para criar posts, anúncios, reels e vendas usando inteligência artificial.
        </p>

        {/* Benefits Grid (Matching Reference) */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-16 mb-16 max-w-4xl mx-auto">
          {[
            { icon: MessageSquare, label: "+150", sub: "PROMPTS" },
            { icon: Infinity, label: "USO", sub: "ILIMITADO" },
            { icon: Clock, label: "ACESSO", sub: "IMEDIATO" },
            { icon: Target, label: "FUNCIONA", sub: "PARA QUALQUER NEGÓCIO" },
          ].map((item, i) => (
            <div key={i} className="flex flex-col items-center group">
              <div className="w-12 h-12 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 group-hover:border-primary/30 transition-all duration-300">
                <item.icon className="w-6 h-6 text-primary" />
              </div>
              <span className="text-xl font-black text-white leading-none mb-1">{item.label}</span>
              <span className="text-[10px] font-bold text-primary tracking-widest text-center">{item.sub}</span>
            </div>
          ))}
        </div>

        {/* Price & CTA */}
        <div className="flex flex-col items-center mb-20 z-20">
          <div className="flex flex-col items-center gap-1 mb-8">
            <span className="text-muted-foreground line-through text-sm opacity-50 font-bold">DE R$ 97,00</span>
            <div className="flex items-center gap-4">
              <span className="text-5xl md:text-7xl font-black text-white">R$ 19,90</span>
              <div className="bg-primary/20 text-primary text-[10px] font-black px-3 py-1 rounded-full border border-primary/30 uppercase tracking-widest">
                80% OFF
              </div>
            </div>
          </div>
          
          <Button 
            size="lg" 
            className="h-20 px-16 text-2xl font-black rounded-2xl glow-purple hover:scale-105 active:scale-95 transition-all duration-300 group shadow-[0_0_50px_rgba(157,80,255,0.4)]"
            onClick={() => document.getElementById('pricing')?.scrollIntoView({ behavior: 'smooth' })}
          >
            LIBERAR MEU ACESSO AGORA
          </Button>

          {/* Premium Badge */}
          <div className="mt-8 flex items-center gap-3 glass px-5 py-3 rounded-2xl border border-primary/20">
            <ShieldCheck className="w-5 h-5 text-primary" />
            <div className="flex flex-col items-start leading-tight">
              <span className="text-[10px] font-black text-white uppercase tracking-widest">CONTEÚDO PREMIUM</span>
              <span className="text-[8px] font-bold text-muted-foreground uppercase tracking-wider">CRIADO POR ESPECIALISTAS EM IA</span>
            </div>
          </div>
        </div>

        {/* Main Laptop Mockup (Centered & Large) */}
        <div className="relative w-full max-w-6xl mx-auto group perspective-1000">
          <div className="absolute -inset-4 bg-primary/20 rounded-[3rem] blur-[80px] opacity-30 group-hover:opacity-50 transition duration-1000 animate-pulse" />
          <div className="relative glass p-2 md:p-4 rounded-[3rem] border border-white/10 shadow-[0_0_100px_rgba(157,80,255,0.15)] overflow-hidden bg-[#0D0D12] animate-float">
             <Image 
                src={heroMockup?.imageUrl || ''} 
                alt="KIT IA Premium Dashboard"
                width={1400}
                height={900}
                className="rounded-[2.5rem] border border-white/5 opacity-95 shadow-2xl"
                data-ai-hint="futuristic AI dashboard laptop"
             />
             
             {/* Tech Interface Elements */}
             <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent pointer-events-none" />
             
             <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-radial-gradient from-primary/5 to-transparent pointer-events-none -z-10" />
          </div>
        </div>
      </div>
    </section>
  )
}
