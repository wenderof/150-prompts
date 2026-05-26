
"use client"

import React from 'react'
import { Frown, Clock, HelpCircle, TrendingDown, ImageOff } from "lucide-react"

const pains = [
  { icon: Frown, title: "Sem ideias do que postar?", desc: "Perca horas encarando uma tela em branco sem saber por onde começar." },
  { icon: TrendingDown, title: "Anúncios que não convertem?", desc: "Rasgue dinheiro com propagandas que ninguém clica e não geram vendas." },
  { icon: ImageOff, title: "Instagram parado?", desc: "Veja seu engajamento despencar e seu perfil se tornar um deserto de clientes." },
  { icon: Clock, title: "Demora para criar conteúdo?", desc: "Gaste o dia todo tentando criar um post simples enquanto seus concorrentes avançam." },
  { icon: HelpCircle, title: "Dificuldade para vender?", desc: "Sinta a frustração de ter um bom produto mas não saber como ofertar." }
]

export function PainPoints() {
  return (
    <section className="py-24 px-6 bg-[#09090D]">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <span className="text-primary font-bold tracking-widest uppercase text-sm mb-4 block">O Problema</span>
          <h2 className="font-headline text-4xl md:text-5xl font-bold mb-4 tracking-tight">
            Chega de Perder Tempo e Dinheiro
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {pains.map((pain, i) => (
            <div key={i} className="glass p-8 rounded-3xl border border-white/5 bg-gradient-to-b from-white/5 to-transparent">
              <pain.icon className="w-10 h-10 text-red-500/50 mb-6" />
              <h3 className="text-xl font-headline font-bold mb-3">{pain.title}</h3>
              <p className="text-muted-foreground leading-relaxed">{pain.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
