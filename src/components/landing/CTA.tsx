
"use client"

import React from 'react'
import { Button } from "@/components/ui/button"
import Image from 'next/image'
import { PlaceHolderImages } from '@/lib/placeholder-images'
import { ShieldCheck, Calendar, Trophy } from "lucide-react"

export function CTA() {
  const guaranteeSeal = PlaceHolderImages.find(img => img.id === 'guarantee-seal');

  return (
    <section className="py-24 px-6 relative overflow-hidden">
      <div className="absolute inset-0 bg-primary/10 -z-10 blur-[150px] rounded-full translate-y-1/2" />
      
      <div className="max-w-5xl mx-auto glass p-12 md:p-20 rounded-[3rem] border border-white/10 text-center relative">
        <div className="inline-flex items-center gap-2 glass px-4 py-2 rounded-full border border-white/10 text-xs font-bold uppercase tracking-widest text-primary mb-8">
           <Trophy className="w-4 h-4" />
           Oferta Especial de Lançamento
        </div>

        <h2 className="font-headline text-5xl md:text-7xl font-bold mb-6 tracking-tight">
          Comece Agora a Usar IA no Seu Negócio
        </h2>
        
        <p className="text-xl md:text-2xl text-muted-foreground mb-12 max-w-2xl mx-auto">
          Tenha acesso imediato aos 150 comandos inteligentes e transforme sua produção de conteúdo hoje.
        </p>

        <Button size="lg" className="h-16 px-12 text-xl font-bold rounded-2xl glow-purple mb-16">
          QUERO ACESSAR AGORA
        </Button>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center border-t border-white/10 pt-16">
          <div className="flex flex-col items-center">
            <div className="w-16 h-16 rounded-full glass flex items-center justify-center mb-4 border border-white/20">
               <Calendar className="w-8 h-8 text-primary" />
            </div>
            <p className="font-bold">Acesso Vitalício</p>
            <p className="text-sm text-muted-foreground">Pague uma vez, use sempre</p>
          </div>
          
          <div className="flex flex-col items-center">
            <Image 
              src={guaranteeSeal?.imageUrl || ''} 
              alt="Selo de Garantia" 
              width={120} 
              height={120}
              className="mb-4 drop-shadow-2xl"
              data-ai-hint="premium badge seal"
            />
            <p className="font-bold">Garantia de 7 Dias</p>
            <p className="text-sm text-muted-foreground">Risco zero para você</p>
          </div>

          <div className="flex flex-col items-center">
            <div className="w-16 h-16 rounded-full glass flex items-center justify-center mb-4 border border-white/20">
               <ShieldCheck className="w-8 h-8 text-primary" />
            </div>
            <p className="font-bold">Compra Segura</p>
            <p className="text-sm text-muted-foreground">Dados 100% criptografados</p>
          </div>
        </div>
      </div>
    </section>
  )
}
