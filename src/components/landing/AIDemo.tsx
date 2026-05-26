
"use client"

import React, { useState } from 'react'
import { Button } from "@/components/ui/button"
import { Textarea } from "@/components/ui/textarea"
import { demonstrateAIOutput } from "@/ai/flows/ai-output-demonstrator-flow"
import { Loader2, Sparkles, Send, Copy, ArrowRight, Layout, Terminal } from "lucide-react"

export function AIDemo() {
  const [prompt, setPrompt] = useState("Crie um anúncio persuasivo para um curso de marketing digital focando em pessoas que não têm tempo.")
  const [result, setResult] = useState("")
  const [loading, setLoading] = useState(false)

  const handleRun = async () => {
    setLoading(true)
    try {
      const { generatedContent } = await demonstrateAIOutput({ command: prompt })
      setResult(generatedContent)
    } catch (error) {
      setResult("Erro ao gerar conteúdo. Tente novamente.")
    } finally {
      setLoading(false)
    }
  }

  return (
    <section id="demo" className="py-24 px-6 relative bg-primary/5">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 glass px-4 py-2 rounded-full border border-white/10 text-xs font-bold uppercase tracking-widest text-primary mb-4">
             <Terminal className="w-4 h-4" />
             Interface do Sistema
          </div>
          <h2 className="font-headline text-4xl md:text-5xl font-bold mb-4 tracking-tight">
            Tecnologia de Ponta ao seu Lado
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Experimente a potência dos nossos comandos agora mesmo. O sistema entrega resultados prontos para usar.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-stretch">
          {/* Input Side */}
          <div className="glass p-8 rounded-[2.5rem] border border-white/10 flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 rounded-xl bg-primary/20 flex items-center justify-center">
                  <Sparkles className="w-5 h-5 text-primary" />
                </div>
                <h3 className="font-headline text-xl font-bold">Entrada Inteligente</h3>
              </div>
              <Textarea 
                value={prompt}
                onChange={(e) => setPrompt(e.target.value)}
                className="min-h-[200px] bg-black/20 border-white/10 rounded-2xl mb-6 text-base focus:ring-primary resize-none"
                placeholder="Insira seu comando..."
              />
            </div>
            <Button 
              onClick={handleRun} 
              disabled={loading}
              className="w-full h-16 rounded-xl text-lg font-bold glow-purple hover:scale-[1.02] transition-transform"
            >
              {loading ? <Loader2 className="animate-spin mr-2" /> : <Send className="mr-2 w-5 h-5" />}
              ACESSAR O SISTEMA IA
            </Button>
          </div>

          {/* Output Side */}
          <div className="bg-[#0D0D12] p-8 rounded-[2.5rem] border border-white/5 min-h-[450px] relative overflow-hidden">
            <div className="flex items-center justify-between mb-6">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-green-500/10 flex items-center justify-center">
                  <Layout className="w-5 h-5 text-green-500" />
                </div>
                <h3 className="font-headline text-xl font-bold">Saída de Alta Conversão</h3>
              </div>
              {result && <Copy className="w-5 h-5 text-muted-foreground cursor-pointer hover:text-primary transition-colors" />}
            </div>

            {loading ? (
              <div className="flex flex-col items-center justify-center h-[320px] text-muted-foreground">
                <div className="relative">
                  <div className="w-20 h-20 rounded-full border-t-2 border-primary animate-spin" />
                  <Sparkles className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-8 h-8 text-primary" />
                </div>
                <p className="mt-6 text-sm tracking-widest uppercase opacity-50">Processando Rede Neural...</p>
              </div>
            ) : result ? (
              <div className="bg-white/5 p-6 rounded-2xl border border-white/5 whitespace-pre-wrap leading-relaxed animate-in fade-in zoom-in duration-500 max-h-[320px] overflow-auto custom-scrollbar">
                {result}
              </div>
            ) : (
              <div className="flex flex-col items-center justify-center h-[320px] text-muted-foreground/30 border-2 border-dashed border-white/5 rounded-2xl">
                <Terminal className="w-12 h-12 mb-4 opacity-10" />
                <p>Aguardando comando de entrada...</p>
              </div>
            )}
            
            {/* SaaS detail */}
            <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex items-center gap-4 text-[10px] text-muted-foreground/40 uppercase tracking-[0.2em]">
              <span>Powered by Gemini 2.0</span>
              <div className="w-1 h-1 rounded-full bg-white/20" />
              <span>99.9% Accuracy</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
