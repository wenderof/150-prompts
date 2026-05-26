
"use client"

import React, { useState } from 'react'
import { Button } from "@/components/ui/button"
import { Checkbox } from "@/components/ui/checkbox"
import { ShieldCheck, Calendar, Trophy, Lock, Sparkles, Check, Flame } from "lucide-react"

export function CTA() {
  const [orderBump, setOrderBump] = useState(false)

  return (
    <section id="pricing" className="py-24 px-6 relative overflow-hidden">
      <div className="absolute inset-0 bg-primary/10 -z-10 blur-[150px] rounded-full translate-y-1/2" />
      
      <div className="max-w-4xl mx-auto glass p-8 md:p-16 rounded-[3rem] border border-white/10 text-center relative">
        <div className="inline-flex items-center gap-2 glass px-4 py-2 rounded-full border border-white/10 text-xs font-bold uppercase tracking-widest text-primary mb-8">
           <Trophy className="w-4 h-4" />
           Últimas Vagas com Desconto
        </div>

        <h2 className="font-headline text-4xl md:text-6xl font-bold mb-6 tracking-tight">
          Tenha o Sistema em Segundos
        </h2>
        
        <div className="mb-12">
          <p className="text-muted-foreground line-through text-lg">De R$ 97,00</p>
          <div className="text-6xl md:text-8xl font-black text-white mb-2">R$ 19,90</div>
          <p className="text-primary font-bold tracking-[0.2em] uppercase text-xs">Acesso vitalício + atualizações gratuitas</p>
        </div>

        {/* Order Bump Section */}
        <div 
          onClick={() => setOrderBump(!orderBump)}
          className={`mb-12 text-left p-6 rounded-3xl border-2 transition-all cursor-pointer group relative overflow-hidden ${
            orderBump 
              ? 'border-primary bg-primary/5 shadow-[0_0_30px_rgba(157,80,255,0.15)]' 
              : 'border-white/5 bg-white/5 hover:border-white/20'
          }`}
        >
          <div className="flex items-start gap-4">
            <div className="pt-1">
              <Checkbox 
                checked={orderBump} 
                onCheckedChange={(checked) => setOrderBump(!!checked)}
                className="w-6 h-6 border-white/20 data-[state=checked]:bg-primary"
              />
            </div>
            <div className="flex-1">
              <div className="flex flex-wrap items-center justify-between gap-2 mb-2">
                <div className="flex items-center gap-2">
                  <Flame className="w-5 h-5 text-orange-500 fill-orange-500" />
                  <h3 className="font-bold text-lg text-white">Biblioteca IA Atualizada</h3>
                </div>
                <div className="bg-primary/20 text-primary px-3 py-1 rounded-full text-xs font-bold">
                  + APENAS R$ 9,90
                </div>
              </div>
              <p className="text-muted-foreground text-sm leading-relaxed mb-4">
                Receba futuras atualizações da biblioteca com novos comandos, headlines, hooks virais e estratégias modernas de IA.
              </p>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                {[
                  "Novos comandos adicionados",
                  "Atualizações frequentes",
                  "Tendências virais",
                  "Novos hooks e headlines",
                  "Expansão contínua"
                ].map((benefit, i) => (
                  <div key={i} className="flex items-center gap-2 text-[11px] text-white/60 font-medium">
                    <Check className="w-3 h-3 text-primary" />
                    {benefit}
                  </div>
                ))}
              </div>
            </div>
          </div>
          {orderBump && (
            <div className="absolute top-0 right-0 p-2">
              <Sparkles className="w-4 h-4 text-primary animate-pulse" />
            </div>
          )}
        </div>

        <Button size="lg" className="h-20 px-12 text-xl md:text-2xl font-black rounded-2xl glow-purple mb-16 hover:scale-[1.02] transition-all w-full md:max-w-md mx-auto flex items-center justify-center gap-3">
          QUERO OS 150 COMANDOS
        </Button>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-start border-t border-white/10 pt-16">
          <div className="flex flex-col items-center">
            <div className="w-14 h-14 rounded-full glass flex items-center justify-center mb-4 border border-white/10">
               <ShieldCheck className="w-7 h-7 text-primary" />
            </div>
            <p className="font-bold text-sm">Garantia incondicional de 7 dias</p>
            <p className="text-xs text-muted-foreground">Risco zero, satisfação total</p>
          </div>
          
          <div className="flex flex-col items-center">
            <div className="w-14 h-14 rounded-full glass flex items-center justify-center mb-4 border border-white/10">
               <Calendar className="w-7 h-7 text-primary" />
            </div>
            <p className="font-bold text-sm">Acesso Imediato</p>
            <p className="text-xs text-muted-foreground">No seu e-mail após a compra</p>
          </div>

          <div className="flex flex-col items-center">
            <div className="w-14 h-14 rounded-full glass flex items-center justify-center mb-4 border border-white/10">
               <Lock className="w-7 h-7 text-primary" />
            </div>
            <p className="font-bold text-sm">Compra 100% Segura</p>
            <p className="text-xs text-muted-foreground">Dados criptografados SSL</p>
          </div>
        </div>
      </div>
    </section>
  )
}
