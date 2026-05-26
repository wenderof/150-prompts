
"use client"

import React from 'react'
import { Gift, Zap, Target, Star, Rocket } from "lucide-react"

const bonuses = [
  { title: "100 Headlines Prontas", value: "R$ 47", desc: "Títulos magnéticos para seus anúncios e posts." },
  { title: "50 Hooks Virais", value: "R$ 37", desc: "Ganchos para Reels que seguram o usuário até o fim." },
  { title: "30 CTAs de Vendas", value: "R$ 27", desc: "Chamadas irresistíveis que forçam a ação do cliente." },
  { title: "Pack Extra de Ideias", value: "R$ 67", desc: "Cronograma de 30 dias de conteúdo para crescer rápido." }
]

export function Bonus() {
  return (
    <section className="py-24 px-6 relative">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-yellow-500/10 text-yellow-500 px-4 py-2 rounded-full text-xs font-bold uppercase tracking-widest mb-4 border border-yellow-500/20">
            <Gift className="w-4 h-4" />
            Bônus Exclusivos
          </div>
          <h2 className="font-headline text-4xl md:text-5xl font-bold mb-4 tracking-tight">Levando Hoje Você Ganha +</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {bonuses.map((bonus, i) => (
            <div key={i} className="glass p-8 rounded-[2rem] border border-white/10 relative overflow-hidden group">
              <div className="absolute -top-4 -right-4 w-20 h-20 bg-primary/10 blur-2xl group-hover:bg-primary/20 transition-all" />
              <div className="text-xs text-primary font-bold mb-2">GRÁTIS HOJE</div>
              <h3 className="text-lg font-bold mb-2">{bonus.title}</h3>
              <p className="text-muted-foreground text-xs leading-relaxed mb-4">{bonus.desc}</p>
              <div className="text-xs text-muted-foreground line-through">Valor: {bonus.value}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
