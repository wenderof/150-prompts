
"use client"

import React from 'react'
import { Instagram, Video, MessageCircle, Megaphone, Palette, Banknote } from "lucide-react"

const features = [
  {
    title: "Instagram",
    description: "Comandos para legendas que engajam e bio magnética.",
    icon: Instagram,
    color: "from-purple-500/20 to-pink-500/20"
  },
  {
    title: "Reels",
    description: "Roteiros virais validados para atrair seguidores qualificados.",
    icon: Video,
    color: "from-blue-500/20 to-purple-500/20"
  },
  {
    title: "WhatsApp",
    description: "Scripts de fechamento que transformam contatos em clientes.",
    icon: MessageCircle,
    color: "from-green-500/20 to-emerald-500/20"
  },
  {
    title: "Meta Ads",
    description: "Prompts para anúncios que vendem sem parecer anúncios.",
    icon: Megaphone,
    color: "from-blue-600/20 to-indigo-600/20"
  },
  {
    title: "Canva IA",
    description: "Gere artes e designs profissionais usando comandos de IA.",
    icon: Palette,
    color: "from-cyan-500/20 to-blue-500/20"
  },
  {
    title: "Vendas",
    description: "Estratégias completas de lançamento e conversão direta.",
    icon: Banknote,
    color: "from-yellow-500/20 to-orange-500/20"
  }
]

export function Features() {
  return (
    <section id="features" className="py-24 px-6 relative bg-background/50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="font-headline text-4xl md:text-5xl font-bold mb-4 tracking-tight">
            O Que Você Recebe No Kit
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Uma biblioteca completa de prompts profissionais organizados por plataforma.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, i) => (
            <div 
              key={i} 
              className="group relative p-8 rounded-3xl glass border border-white/5 hover:border-primary/50 transition-all duration-500 hover:-translate-y-2"
            >
              <div className={`absolute inset-0 bg-gradient-to-br ${feature.color} opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-3xl -z-10`} />
              <div className="w-12 h-12 rounded-2xl bg-primary/10 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-500">
                <feature.icon className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-xl font-headline font-bold mb-3 group-hover:text-primary transition-colors">
                {feature.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
