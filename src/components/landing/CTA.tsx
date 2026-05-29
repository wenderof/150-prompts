
"use client"

import React from 'react'
import { Button } from "@/components/ui/button"
import { ShieldCheck, Calendar, Lock, Trophy, Check, Sparkles } from "lucide-react"

export function CTA() {
  return (
    <section id="pricing" className="py-24 px-6 relative overflow-hidden">
      <div className="absolute inset-0 bg-primary/10 -z-10 blur-[150px] rounded-full translate-y-1/2" />
      
      <div className="max-w-4xl mx-auto glass p-8 md:p-16 rounded-[3rem] border border-white/10 text-center relative">
        <div className="inline-flex items-center gap-2 glass px-4 py-2 rounded-full border border-white/10 text-xs font-bold uppercase tracking-widest text-primary mb-8">
           <Trophy className="w-4 h-4" />
           Oferta de Lançamento
        </div>

        <h2 className="font-headline text-4xl md:text-6xl font-bold mb-6 tracking-tight">
          Tenha a Biblioteca Completa Agora
        </h2>
        
        <div className="mb-10">
          <p className="text-muted-foreground text-lg mb-2 uppercase tracking-widest font-bold opacity-50">Preço Promocional por Tempo Limitado</p>
          <div className="text-7xl md:text-9xl font-black text-white mb-6">R$ 19,90</div>
          
          {/* Main Benefits List */}
          <div className="flex flex-wrap justify-center gap-x-8 gap-y-4 max-w-2xl mx-auto mb-12">
            {[
              "Acesso imediato",
              "Funciona em qualquer nicho",
              "Copie e cole no ChatGPT",
              "Fácil de usar"
            ].map((benefit, i) => (
              <div key={i} className="flex items-center gap-2 text-sm font-semibold text-white/90">
                <div className="w-5 h-5 rounded-full bg-primary/20 flex items-center justify-center">
                  <Check className="w-3 h-3 text-primary" />
                </div>
                {benefit}
              </div>
            ))}
          </div>
        </div>

        <Button 
          size="lg" 
          className="h-24 px-12 text-2xl md:text-3xl font-black rounded-2xl glow-purple mb-16 hover:scale-[1.03] active:scale-[0.98] transition-all w-full md:max-w-xl mx-auto flex flex-col items-center justify-center gap-1 shadow-[0_0_40px_rgba(157,80,255,0.4)]"
          onClick={() => {}}
        >
          <span>LIBERAR ACESSO AGORA</span>
          <span className="text-[10px] font-bold opacity-70 uppercase tracking-[0.3em]">Clique para garantir sua vaga</span>
        </Button>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-start border-t border-white/10 pt-16">
          <div className="flex flex-col items-center">
            <div className="w-14 h-14 rounded-full glass flex items-center justify-center mb-4 border border-white/10">
               <ShieldCheck className="w-7 h-7 text-primary" />
            </div>
            <p className="font-bold text-sm">Garantia de 7 dias</p>
            <p className="text-xs text-muted-foreground">Risco zero, satisfação total</p>
          </div>
          
          <div className="flex flex-col items-center">
            <div className="w-14 h-14 rounded-full glass flex items-center justify-center mb-4 border border-white/10">
               <Calendar className="w-7 h-7 text-primary" />
            </div>
            <p className="font-bold text-sm">Acesso Imediato</p>
            <p className="text-xs text-muted-foreground">No seu e-mail agora mesmo</p>
          </div>

          <div className="flex flex-col items-center">
            <div className="w-14 h-14 rounded-full glass flex items-center justify-center mb-4 border border-white/10">
               <Lock className="w-7 h-7 text-primary" />
            </div>
            <p className="font-bold text-sm">Compra 100% Segura</p>
            <p className="text-xs text-muted-foreground">Checkout criptografado</p>
          </div>
        </div>
      </div>
    </section>
  )
}
