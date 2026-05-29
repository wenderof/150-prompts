
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
import { AnnouncementBar } from "@/components/landing/AnnouncementBar"
import { Testimonials } from "@/components/landing/Testimonials"
import { Benefits } from "@/components/landing/Benefits"

export default function Home() {
  return (
    <main className="min-h-screen relative">
      <AnnouncementBar />
      <Navbar />
      <Hero />
      
      <PainPoints />
      
      <section className="py-24 px-6 text-center bg-primary/5">
        <h2 className="font-headline text-4xl md:text-6xl font-bold mb-6 tracking-tight text-gradient">
          A IA Trabalha, Você Lucra
        </h2>
        <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
          Não perca mais tempo tentando "adivinhar" o que escrever. Copie nossos prompts validados e tenha resultados profissionais em segundos.
        </p>
      </section>

      <AIDemo />
      <Features /> {/* O que o kit inclui */}
      <ValueCreation /> {/* O que consegue criar */}
      <Benefits /> {/* Benefícios Estratégicos */}
      <Bonus />
      <Testimonials />
      <HowItWorks />
      <FAQ />
      <CTA />
      <Footer />
      <StickyCTA />
    </main>
  )
}
