
"use client"

import React from 'react'
import { Copy, ClipboardCheck, Settings2, Sparkles, Share2 } from "lucide-react"

const steps = [
  { icon: Copy, title: "Copie o comando", desc: "Escolha um dos 150 prompts validados no portal." },
  { icon: ClipboardCheck, title: "Cole no ChatGPT", desc: "Insira o comando na ferramenta de IA de sua preferência." },
  { icon: Settings2, title: "Personalize", desc: "Ajuste os detalhes específicos do seu nicho ou produto." },
  { icon: Sparkles, title: "Gere conteúdo", desc: "A IA cria o conteúdo profissional em poucos segundos." },
  { icon: Share2, title: "Publique", desc: "Pronto! É só postar e ver os resultados chegarem." }
]

export function HowItWorks() {
  return (
    <section id="workflow" className="py-24 px-6 relative overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-20">
          <h2 className="font-headline text-4xl md:text-5xl font-bold tracking-tight">Como Funciona o Método</h2>
        </div>

        <div className="relative">
          {/* Timeline Line */}
          <div className="absolute top-1/2 left-0 w-full h-1 bg-gradient-to-r from-transparent via-primary/20 to-transparent -translate-y-1/2 hidden lg:block" />
          
          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-8">
            {steps.map((step, i) => (
              <div key={i} className="relative flex flex-col items-center text-center group">
                <div className="w-16 h-16 rounded-full bg-primary flex items-center justify-center mb-6 glow-purple relative z-10 group-hover:scale-110 transition-transform">
                  <step.icon className="w-8 h-8 text-white" />
                  <div className="absolute -top-2 -right-2 w-8 h-8 rounded-full glass flex items-center justify-center font-bold text-sm">
                    {i + 1}
                  </div>
                </div>
                <h3 className="font-headline text-lg font-bold mb-3">{step.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
