
"use client"

import React from 'react'
import { Instagram, Video, Megaphone, MessageCircle, CheckCircle2, Copy, Zap, Target, Clock, Sparkles } from "lucide-react"

const benefits = [
  { icon: Copy, text: "Prompts prontos para copiar" },
  { icon: Zap, text: "Funciona no ChatGPT grátis" },
  { icon: Target, text: "Ideal para qualquer negócio" },
  { icon: Clock, text: "Acesso imediato" }
]

const categories = [
  { icon: Instagram, label: "Instagram", color: "text-pink-500" },
  { icon: Video, label: "Reels", color: "text-purple-500" },
  { icon: Megaphone, label: "Anúncios", color: "text-blue-500" },
  { icon: MessageCircle, label: "WhatsApp", color: "text-green-500" }
]

export function ValueCreation() {
  return (
    <section className="py-24 px-6 relative overflow-hidden bg-background">
      {/* Background Glows */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-primary/5 blur-[120px] rounded-full -z-10" />

      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          {/* Left Side: Content */}
          <div className="flex flex-col gap-8 order-2 lg:order-1">
            <div className="space-y-4 text-center lg:text-left">
              <h2 className="font-headline text-4xl md:text-5xl font-black tracking-tight text-white leading-tight">
                Transforme Ideias em <span className="text-primary">Conteúdos Prontos</span>
              </h2>
              <p className="text-muted-foreground text-lg font-medium leading-relaxed max-w-xl">
                Use prompts organizados para criar posts, anúncios, roteiros e ofertas em poucos segundos usando IA.
              </p>
            </div>

            <div className="glass p-8 rounded-[2rem] border border-white/10 relative">
              <div className="absolute -top-4 -right-4 w-24 h-24 bg-primary/10 blur-2xl -z-10" />
              <p className="text-white/80 leading-relaxed font-medium">
                Com o <span className="text-primary font-bold">KIT IA PARA NEGÓCIOS</span>, você não começa do zero. Basta escolher um prompt, copiar, colar na IA e adaptar ao seu negócio.
              </p>
            </div>

            {/* Benefits Grid */}
            <div className="grid grid-cols-2 gap-4">
              {benefits.map((b, i) => (
                <div key={i} className="flex items-center gap-3 bg-white/5 border border-white/5 p-4 rounded-2xl hover:border-primary/30 transition-colors group">
                  <div className="w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                    <b.icon className="w-4 h-4 text-primary" />
                  </div>
                  <span className="text-xs font-bold text-white/90">{b.text}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Right Side: Mockup */}
          <div className="relative order-1 lg:order-2 animate-in fade-in zoom-in duration-1000">
            <div className="absolute -inset-10 bg-primary/20 blur-[100px] opacity-20" />
            
            <div className="relative glass rounded-[2.5rem] border border-white/10 overflow-hidden shadow-2xl bg-[#0D0D12]">
              {/* Header Bar */}
              <div className="h-10 border-b border-white/5 bg-white/5 flex items-center px-6 justify-between">
                <div className="flex gap-1.5">
                  <div className="w-2.5 h-2.5 rounded-full bg-red-500/50" />
                  <div className="w-2.5 h-2.5 rounded-full bg-yellow-500/50" />
                  <div className="w-2.5 h-2.5 rounded-full bg-green-500/50" />
                </div>
                <div className="flex items-center gap-2">
                  <Sparkles className="w-3 h-3 text-primary" />
                  <span className="text-[9px] font-black uppercase tracking-[0.2em] text-white/40">AI Studio v.4.0</span>
                </div>
              </div>

              <div className="p-6 md:p-8 space-y-6">
                {/* Category Selector */}
                <div className="grid grid-cols-4 gap-2">
                  {categories.map((c, i) => (
                    <div key={i} className={`flex flex-col items-center gap-2 p-3 rounded-xl border border-white/5 bg-white/5 ${i === 0 ? 'border-primary/50 bg-primary/10' : ''}`}>
                      <c.icon className={`w-4 h-4 ${c.color} ${i === 0 ? 'text-primary' : ''}`} />
                      <span className="text-[8px] font-bold uppercase tracking-widest text-white/50">{c.label}</span>
                    </div>
                  ))}
                </div>

                {/* Prompt Block */}
                <div className="space-y-3">
                  <div className="flex items-center gap-2">
                    <div className="w-6 h-6 rounded-full bg-primary/20 flex items-center justify-center">
                      <Copy className="w-3 h-3 text-primary" />
                    </div>
                    <span className="text-[10px] font-black uppercase tracking-widest text-primary">Prompt Selecionado</span>
                  </div>
                  <div className="bg-black/60 rounded-2xl p-5 border border-white/10 italic text-white/60 text-xs leading-relaxed">
                    "Atue como um especialista em tráfego pago. Crie 3 variações de anúncios de alta conversão para meu produto digital focado em produtividade..."
                  </div>
                </div>

                {/* Response Visualizer */}
                <div className="space-y-3">
                  <div className="flex items-center gap-2">
                    <div className="w-6 h-6 rounded-full bg-green-500/20 flex items-center justify-center">
                      <CheckCircle2 className="w-3 h-3 text-green-500" />
                    </div>
                    <span className="text-[10px] font-black uppercase tracking-widest text-green-500">Resultado Gerado</span>
                  </div>
                  <div className="bg-primary/5 rounded-2xl p-5 border border-primary/10 space-y-2">
                    <div className="h-1.5 w-1/3 bg-primary/40 rounded-full" />
                    <div className="h-1.5 w-full bg-white/10 rounded-full" />
                    <div className="h-1.5 w-full bg-white/10 rounded-full" />
                    <div className="h-1.5 w-4/5 bg-white/10 rounded-full" />
                  </div>
                </div>

                {/* Floating Elements */}
                <div className="absolute -bottom-6 -right-6 glass p-4 rounded-2xl border border-primary/30 shadow-2xl animate-bounce duration-[3000ms] hidden md:block">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-xl bg-primary flex items-center justify-center">
                      <Copy className="w-5 h-5 text-white" />
                    </div>
                    <div>
                      <p className="text-[10px] font-black text-white leading-none">PRONTO!</p>
                      <p className="text-[9px] text-primary font-bold uppercase tracking-widest">Copiado com sucesso</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
