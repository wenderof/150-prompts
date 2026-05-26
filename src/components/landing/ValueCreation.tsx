
"use client"

import React from 'react'
import { Card, CardContent } from "@/components/ui/card"
import { Megaphone, FileText, Smartphone, Instagram, Mail, MessageSquare } from "lucide-react"

const examples = [
  { icon: Instagram, title: "Legendas para Posts", desc: "Textos que retêm a atenção e geram comentários em massa." },
  { icon: Megaphone, title: "Anúncios (Ads)", desc: "Scripts prontos para Meta Ads, Google e TikTok Ads." },
  { icon: Smartphone, title: "Roteiros de Reels", desc: "Estruturas virais (Gancho + Conteúdo + CTA) validadas." },
  { icon: MessageSquare, title: "Vendas no WhatsApp", desc: "Quebra de objeções e fechamentos automáticos." },
  { icon: FileText, title: "Páginas de Vendas", desc: "Copy completa para sua landing page ou VSL." },
  { icon: Mail, title: "E-mail Marketing", desc: "Sequências de aquecimento e oferta direta." }
]

export function ValueCreation() {
  return (
    <section className="py-24 px-6 bg-background">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="font-headline text-4xl md:text-5xl font-bold mb-4 tracking-tight">O Que Você Consegue Criar</h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Não é apenas um PDF de comandos. É uma máquina de produção de conteúdo profissional para qualquer canal.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {examples.map((item, i) => (
            <div key={i} className="glass group p-8 rounded-3xl border border-white/5 hover:border-primary/40 transition-all duration-300">
              <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-6 group-hover:bg-primary/20 transition-colors">
                <item.icon className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-xl font-bold mb-3">{item.title}</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
