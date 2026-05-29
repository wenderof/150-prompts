
"use client"

import React from 'react'
import { Star, Quote } from "lucide-react"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"

const testimonials = [
  {
    name: "Marcelo Santos",
    role: "Empreendedor Digital",
    comment: "Economizei horas criando conteúdo. Os prompts são muito bem estruturados e o resultado é impressionante.",
    rating: 5,
    avatar: "MS"
  },
  {
    name: "Ana Oliveira",
    role: "Social Media",
    comment: "Os prompts de anúncios já me deram ideias que eu nunca teria sozinha. Vale cada centavo pela produtividade.",
    rating: 5,
    avatar: "AO"
  },
  {
    name: "Ricardo Lima",
    role: "Infoprodutor",
    comment: "Muito mais profissional que qualquer prompt gratuito que você encontra por aí. É conteúdo de especialista.",
    rating: 5,
    avatar: "RL"
  }
]

export function Testimonials() {
  return (
    <section className="py-24 px-6 bg-[#050507]">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="font-headline text-4xl font-bold tracking-tight mb-4">Quem Usa, Recomenda</h2>
          <p className="text-muted-foreground">Mais de 1.000 profissionais já aceleraram sua criação com o Kit.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((t, i) => (
            <div key={i} className="glass p-8 rounded-3xl border border-white/5 relative group">
              <Quote className="absolute top-6 right-8 w-8 h-8 text-primary/10 group-hover:text-primary/20 transition-colors" />
              <div className="flex gap-1 mb-6">
                {[...Array(t.rating)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-primary text-primary" />
                ))}
              </div>
              <p className="text-white/80 leading-relaxed mb-8 italic">"{t.comment}"</p>
              <div className="flex items-center gap-4">
                <Avatar className="w-12 h-12 border border-primary/20">
                  <AvatarFallback className="bg-primary/10 text-primary font-bold">{t.avatar}</AvatarFallback>
                </Avatar>
                <div>
                  <h4 className="font-bold text-sm text-white">{t.name}</h4>
                  <p className="text-xs text-muted-foreground">{t.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
