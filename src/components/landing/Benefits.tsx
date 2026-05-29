
"use client"

import React from 'react'
import { Zap, Clock, Target, ShieldCheck, RefreshCw, Layers } from "lucide-react"

const benefits = [
  { icon: Zap, title: "Velocidade Máxima", desc: "Crie em segundos o que levava horas." },
  { icon: Clock, title: "Economia de Tempo", desc: "Foque no que importa: vender seu produto." },
  { icon: Layers, title: "Prompts Organizados", desc: "Tudo categorizado por tipo de conteúdo." },
  { icon: Target, title: "Qualquer Nicho", desc: "Adaptável para serviços ou produtos físicos." },
  { icon: ShieldCheck, title: "Fácil de Usar", desc: "Copie, cole e veja a mágica acontecer." },
  { icon: RefreshCw, title: "Acesso Imediato", desc: "Receba tudo no seu e-mail agora mesmo." }
]

export function Benefits() {
  return (
    <section className="py-24 px-6 relative overflow-hidden bg-background">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-2 md:grid-cols-3 gap-8 md:gap-12">
          {benefits.map((b, i) => (
            <div key={i} className="flex flex-col items-center text-center group">
              <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center mb-6 group-hover:bg-primary group-hover:text-white transition-all duration-300">
                <b.icon className="w-6 h-6 text-primary group-hover:text-white" />
              </div>
              <h3 className="text-lg font-bold mb-2">{b.title}</h3>
              <p className="text-muted-foreground text-sm max-w-[200px] leading-relaxed">{b.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
