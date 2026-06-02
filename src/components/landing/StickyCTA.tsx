
"use client"

import React, { useEffect, useState } from 'react'
import { Button } from "@/components/ui/button"
import { Sparkles } from "lucide-react"

export function StickyCTA() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      // Show sticky CTA after scrolling past hero (approx 600px)
      setIsVisible(window.scrollY > 600)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  if (!isVisible) return null

  return (
    <div className="fixed bottom-0 left-0 right-0 z-[100] md:hidden p-4 bg-gradient-to-t from-background via-background/90 to-transparent">
      <Button 
        className="w-full h-16 rounded-2xl text-lg font-bold glow-purple shadow-[0_-10px_30px_rgba(157,80,255,0.3)] animate-in slide-in-from-bottom-full duration-300"
        onClick={() => document.getElementById('pricing')?.scrollIntoView({ behavior: 'smooth' })}
      >
        <Sparkles className="w-5 h-5 mr-2" />
        QUERO ACESSO POR R$14,90
      </Button>
    </div>
  )
}
