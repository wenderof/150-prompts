
"use client"

import React from 'react'
import { Instagram, Video, Megaphone, Sparkles, Terminal, Tag } from "lucide-react"
import { Badge } from "@/components/ui/badge"

const examples = [
  {
    category: "Instagram",
    icon: Instagram,
    title: "Legenda pronta para vender",
    prompt: "Crie uma legenda persuasiva para uma loja de roupas femininas promovendo uma liquidação de verão.",
    result: `✨ VERÃO CHEGOU COM DESCONTOS IMPERDÍVEIS

Renove seu guarda-roupa com peças leves, elegantes e cheias de estilo.

💜 Até 50% OFF
🚚 Envio rápido
🔥 Últimas unidades disponíveis

Clique no link da bio e aproveite antes que acabe.`,
    tags: ["Instagram", "Legenda", "Promoção"]
  },
  {
    category: "Reels",
    icon: Video,
    title: "Roteiro curto com gancho forte",
    prompt: "Crie um roteiro curto para Reels de uma loja de maquiagem com foco em prender atenção nos primeiros 3 segundos.",
    result: `Cena 1:
“Seu rosto muda completamente com esse truque…”

Cena 2:
Mostre o antes e depois.

Cena 3:
“Essa maquiagem deixa a pele mais bonita em poucos minutos.”

CTA:
Comente QUERO para receber os produtos.`,
    tags: ["Reels", "Gancho", "Retenção"]
  },
  {
    category: "Anúncios",
    icon: Megaphone,
    title: "Copy pronta para tráfego pago",
    prompt: "Crie uma copy para anúncio vendendo um produto digital de prompts de IA para pequenos negócios.",
    result: `Pare de perder horas pensando no que postar.

Com o KIT IA PARA NEGÓCIOS você recebe 150 prompts prontos para criar posts, reels, anúncios e vendas usando IA.

Copie, cole e gere conteúdos profissionais em segundos.

🔥 Acesso imediato por R$14,90.`,
    tags: ["Meta Ads", "Copy", "Vendas"]
  }
]

export function AIDemo() {
  return (
    <section id="demo" className="py-24 px-6 relative bg-primary/5">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 glass px-4 py-2 rounded-full border border-white/10 text-xs font-bold uppercase tracking-widest text-primary mb-4">
             <Terminal className="w-4 h-4" />
             Aplicações Práticas
          </div>
          <h2 className="font-headline text-4xl md:text-5xl font-bold mb-4 tracking-tight text-white">
            Exemplos Reais do Kit
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Veja como um simples prompt pode virar conteúdo pronto para postar, anunciar ou vender.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {examples.map((item, i) => (
            <div 
              key={i} 
              className="glass p-8 rounded-[2.5rem] border border-white/10 flex flex-col h-full hover:border-primary/50 transition-all duration-500 group relative overflow-hidden animate-in fade-in slide-in-from-bottom-8 duration-700"
              style={{ animationDelay: `${i * 150}ms` }}
            >
              {/* Background Glow */}
              <div className="absolute -top-10 -right-10 w-32 h-32 bg-primary/5 blur-3xl group-hover:bg-primary/10 transition-all duration-500" />
              
              {/* Category Header */}
              <div className="flex items-center justify-between mb-6">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-primary/20 flex items-center justify-center">
                    <item.icon className="w-5 h-5 text-primary" />
                  </div>
                  <span className="text-xs font-bold text-white/70 uppercase tracking-widest">{item.category}</span>
                </div>
                <div className="w-2 h-2 rounded-full bg-primary animate-pulse" />
              </div>

              <h3 className="font-headline text-2xl font-bold text-white mb-6 leading-tight group-hover:text-primary transition-colors">
                {item.title}
              </h3>

              <div className="flex-grow flex flex-col gap-6">
                {/* Prompt Section */}
                <div className="bg-black/40 rounded-2xl p-5 border border-white/5 relative">
                  <span className="absolute -top-3 left-4 px-2 bg-[#0D0D12] text-[9px] font-black uppercase tracking-widest text-muted-foreground">Prompt utilizado</span>
                  <p className="text-sm italic text-white/60 leading-relaxed">
                    "{item.prompt}"
                  </p>
                </div>

                {/* Result Section */}
                <div className="bg-primary/5 rounded-2xl p-5 border border-primary/10 relative mt-2">
                  <span className="absolute -top-3 left-4 px-2 bg-[#0D0D12] text-[9px] font-black uppercase tracking-widest text-primary flex items-center gap-1">
                    <Sparkles className="w-3 h-3" /> Resultado
                  </span>
                  <div className="text-sm text-white/90 whitespace-pre-wrap leading-relaxed">
                    {item.result}
                  </div>
                </div>
              </div>

              {/* Footer Tags */}
              <div className="mt-8 pt-6 border-t border-white/5 flex flex-wrap gap-2">
                {item.tags.map((tag, idx) => (
                  <Badge 
                    key={idx} 
                    variant="outline" 
                    className="bg-white/5 border-white/10 text-[9px] uppercase font-bold tracking-widest px-3 py-1 text-muted-foreground/80 hover:text-primary hover:border-primary/50 transition-colors"
                  >
                    <Tag className="w-2.5 h-2.5 mr-1 opacity-50" />
                    {tag}
                  </Badge>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
