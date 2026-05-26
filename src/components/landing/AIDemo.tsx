
"use client"

import React, { useState } from 'react'
import { Button } from "@/components/ui/button"
import { Textarea } from "@/components/ui/textarea"
import { demonstrateAIOutput } from "@/ai/flows/ai-output-demonstrator-flow"
import { Loader2, Sparkles, Send, Copy, ArrowRight } from "lucide-react"

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
    <section id="demo" className="py-24 px-6 relative">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="font-headline text-4xl md:text-5xl font-bold mb-4 tracking-tight">
            Veja a IA em Ação
          </h2>
          <p className="text-muted-foreground text-lg">
            Experimente um de nossos comandos e veja a mágica acontecer.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
          {/* Prompt Side */}
          <div className="glass p-8 rounded-3xl border border-white/10">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 rounded-xl bg-primary/20 flex items-center justify-center">
                <Sparkles className="w-5 h-5 text-primary" />
              </div>
              <h3 className="font-headline text-xl font-bold">O Comando (Prompt)</h3>
            </div>
            
            <Textarea 
              value={prompt}
              onChange={(e) => setPrompt(e.target.value)}
              className="min-h-[150px] bg-white/5 border-white/10 rounded-2xl mb-6 text-base focus:ring-primary"
              placeholder="Digite seu comando aqui..."
            />
            
            <Button 
              onClick={handleRun} 
              disabled={loading}
              className="w-full h-14 rounded-xl text-lg font-bold glow-purple"
            >
              {loading ? <Loader2 className="animate-spin mr-2" /> : <Send className="mr-2 w-5 h-5" />}
              GERAR RESULTADO AGORA
            </Button>
          </div>

          {/* Result Side */}
          <div className="glass p-8 rounded-3xl border border-white/10 min-h-[400px] relative overflow-hidden">
            <div className="flex items-center justify-between mb-6">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-green-500/20 flex items-center justify-center">
                  <ArrowRight className="w-5 h-5 text-green-500" />
                </div>
                <h3 className="font-headline text-xl font-bold">Resultado Gerado</h3>
              </div>
              {result && <Copy className="w-5 h-5 text-muted-foreground cursor-pointer hover:text-primary transition-colors" />}
            </div>

            {loading ? (
              <div className="flex flex-col items-center justify-center h-[300px] text-muted-foreground">
                <Loader2 className="w-12 h-12 animate-spin text-primary mb-4" />
                <p className="animate-pulse">Geraldo conteúdo de alta conversão...</p>
              </div>
            ) : result ? (
              <div className="bg-white/5 p-6 rounded-2xl border border-white/5 whitespace-pre-wrap leading-relaxed animate-in fade-in slide-in-from-bottom-4 duration-700">
                {result}
              </div>
            ) : (
              <div className="flex items-center justify-center h-[300px] text-muted-foreground border-2 border-dashed border-white/5 rounded-2xl">
                O resultado aparecerá aqui...
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}
