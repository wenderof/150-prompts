
import { Navbar } from "@/components/landing/Navbar"
import { Hero } from "@/components/landing/Hero"
import { Features } from "@/components/landing/Features"
import { AIDemo } from "@/components/landing/AIDemo"
import { ValueCreation } from "@/components/landing/ValueCreation"
import { Bonus } from "@/components/landing/Bonus"
import { PainPoints } from "@/components/landing/PainPoints"
import { HowItWorks } from "@/components/landing/HowItWorks"
import { FAQ } from "@/components/landing/FAQ"
import { CTA } from "@/components/landing/CTA"
import { Footer } from "@/components/landing/Footer"
import { StickyCTA } from "@/components/landing/StickyCTA"

export default function Home() {
  return (
    <main className="min-h-screen relative">
      <Navbar />
      <Hero />
      <Features />
      <AIDemo />
      <ValueCreation />
      <Bonus />
      
      {/* Solution Section (Contextual Divider) */}
      <section className="py-24 px-6 text-center bg-primary/5">
        <h2 className="font-headline text-4xl md:text-6xl font-bold mb-6 tracking-tight text-gradient">
          A IA Faz o Trabalho Difícil Por Você
        </h2>
        <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
          Chega de perder tempo tentando descobrir o que funciona. O KIT já contém a inteligência necessária para vender qualquer produto.
        </p>
      </section>

      <PainPoints />
      <HowItWorks />
      <FAQ />
      <CTA />
      <Footer />
      <StickyCTA />
    </main>
  )
}
