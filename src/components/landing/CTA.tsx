
"use client"

import React from 'react'
import { Button } from "@/components/ui/button"
import { ShieldCheck, Calendar, Trophy, Lock } from "lucide-react"

export function CTA() {
  return (
    <section id="pricing" className="py-24 px-6 relative overflow-hidden">
      <div className="absolute inset-0 bg-primary/10 -z-10 blur-[150px] rounded-full translate-y-1/2" />
      
      <div className="max-w-5xl mx-auto glass p-8 md:p-20 rounded-[3rem] border border-white/10 text-center relative">
        <div className="inline-flex items-center gap-2 glass px-4 py-2 rounded-full border border-white/10 text-xs font-bold uppercase tracking-widest text-primary mb-8">
           <Trophy className="w-4 h-4" />
           Últimas Vagas com Desconto
        </div>

        <h2 className="font-headline text-4xl md:text-7xl font-bold mb-6 tracking-tight">
          Tenha o Sistema em Segundos
        </h2>
        
        <div className="mb-12">
          <p className="text-muted-foreground line-through text-lg">De R$ 97,00</p>
          <div className="text-5xl md:text-8xl font-black text-white mb-2">R$ 19,90</div>
          <p className="text-primary font-bold tracking-[0.2em] uppercase text-sm">Acesso vitalício + atualizações</p>
        </div>

        <Button size="lg" className="h-16 px-12 text-xl font-bold rounded-2xl glow-purple mb-16 hover:scale-105 transition-all w-full md:w-auto">
          QUERO OS 150 COMANDOS
        </Button>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-start border-t border-white/10 pt-16">
          <div className="flex flex-col items-center">
            <div className="w-16 h-16 rounded-full glass flex items-center justify-center mb-4 border border-white/20">
               <ShieldCheck className="w-8 h-8 text-primary" />
            </div>
            <p className="font-bold">Garantia de 7 Dias</p>
            <p className="text-sm text-muted-foreground">Risco zero, satisfação total</p>
          </div>
          
          <div className="flex flex-col items-center">
            <div className="w-16 h-16 rounded-full glass flex items-center justify-center mb-4 border border-white/20">
               <Calendar className="w-8 h-8 text-primary" />
            </div>
            <p className="font-bold">Acesso Imediato</p>
            <p className="text-sm text-muted-foreground">No seu e-mail após a compra</p>
          </div>

          <div className="flex flex-col items-center">
            <div className="w-16 h-16 rounded-full glass flex items-center justify-center mb-4 border border-white/20">
               <Lock className="w-8 h-8 text-primary" />
            </div>
            <p className="font-bold">Compra 100% Segura</p>
            <p className="text-sm text-muted-foreground">Dados criptografados SSL</p>
          </div>
        </div>
      </div>
    </section>
  )
}
