
"use client"

import React from 'react'
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"

const faqs = [
  { q: "Funciona para qualquer nicho?", a: "Sim! Os comandos foram desenhados para serem adaptáveis a qualquer tipo de negócio, produto ou serviço." },
  { q: "Preciso saber usar IA?", a: "Absolutamente não. O kit é justamente para quem quer pular a curva de aprendizado e ir direto para os resultados." },
  { q: "O acesso é imediato?", a: "Sim, assim que o pagamento for confirmado, você recebe os dados de acesso no seu e-mail instantaneamente." },
  { q: "Funciona no ChatGPT grátis?", a: "Sim, todos os prompts funcionam perfeitamente tanto na versão gratuita quanto na versão Plus (GPT-4) do ChatGPT." },
  { q: "Como eu recebo o conteúdo?", a: "Você terá acesso a uma plataforma premium exclusiva onde poderá copiar todos os comandos de forma organizada." }
]

export function FAQ() {
  return (
    <section id="faq" className="py-24 px-6 bg-background">
      <div className="max-w-3xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="font-headline text-4xl font-bold tracking-tight">Perguntas Frequentes</h2>
        </div>

        <Accordion type="single" collapsible className="w-full space-y-4">
          {faqs.map((faq, i) => (
            <AccordionItem key={i} value={`item-${i}`} className="glass px-6 rounded-2xl border border-white/5">
              <AccordionTrigger className="font-headline font-semibold text-lg hover:no-underline hover:text-primary py-6">
                {faq.q}
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground text-base leading-relaxed pb-6">
                {faq.a}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  )
}
