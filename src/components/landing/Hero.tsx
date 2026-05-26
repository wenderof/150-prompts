
"use client"

import React from 'react'
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { CheckCircle2, Sparkles, Zap, Smartphone, LayoutDashboard } from "lucide-react"
import Image from 'next/image'
import { PlaceHolderImages } from '@/lib/placeholder-images'

export function Hero() {
  const heroMockup = PlaceHolderImages.find(img => img.id === 'hero-mockup');

  return (
    <section className="relative pt-32 pb-20 px-6 overflow-hidden">
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-primary/20 blur-[120px] -z-10 rounded-full" />
      
      <div className="max-w-7xl mx-auto text-center flex flex-col items-center">
        <div className="flex flex-wrap justify-center gap-3 mb-8">
          {['Sistema Premium', 'IA Avançada', 'Pronto Para Usar', 'Qualquer Negócio'].map((text, i) => (
            <div key={i} className="flex items-center gap-2 glass px-4 py-2 rounded-full border border-white/10 text-xs font-semibold uppercase tracking-wider text-muted-foreground">
              <CheckCircle2 className="w-4 h-4 text-primary" />
              {text}
            </div>
          ))}
        </div>

        <h1 className="font-headline text-5xl md:text-7xl lg:text-8xl font-bold mb-8 leading-[1.1] max-w-5xl tracking-tight text-gradient">
          150 Comandos Inteligentes de IA Para Criar Conteúdo e Vender Mais
        </h1>
        
        <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mb-12 leading-relaxed">
          Copie, cole e gere posts, anúncios, reels e vendas em segundos usando inteligência artificial.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 mb-20 w-full max-w-md">
          <Button size="lg" className="flex-1 h-14 text-lg font-bold rounded-xl glow-purple shadow-xl">
            QUERO ACESSO IMEDIATO
          </Button>
        </div>

        <div className="relative w-full max-w-6xl mx-auto perspective-1000">
          <div className="relative glass p-4 rounded-3xl border border-white/10 shadow-2xl animate-float">
             <Image 
                src={heroMockup?.imageUrl || ''} 
                alt={heroMockup?.description || ''}
                width={1200}
                height={800}
                className="rounded-2xl border border-white/5"
                data-ai-hint="laptop mockup AI dashboard"
             />
             
             {/* Floating UI elements for premium feel */}
             <div className="absolute -top-10 -left-10 glass p-6 rounded-2xl border border-white/10 shadow-2xl hidden lg:block max-w-[200px] text-left">
                <LayoutDashboard className="w-8 h-8 text-primary mb-3" />
                <p className="text-sm font-semibold mb-1">Copywriting Pro</p>
                <div className="h-2 w-full bg-white/10 rounded-full overflow-hidden">
                  <div className="h-full w-4/5 bg-primary" />
                </div>
             </div>

             <div className="absolute -bottom-10 -right-10 glass p-6 rounded-2xl border border-white/10 shadow-2xl hidden lg:block max-w-[240px] text-left">
                <Smartphone className="w-8 h-8 text-primary mb-3" />
                <p className="text-xs text-muted-foreground">"IA gerou este roteiro de Reels que converteu 15% mais..."</p>
             </div>
          </div>
        </div>
      </div>
    </section>
  )
}
