
"use client"

import React, { useState, useEffect } from 'react'

export function Footer() {
  const [year, setYear] = useState<number | null>(null);

  useEffect(() => {
    setYear(new Date().getFullYear());
  }, []);

  return (
    <footer className="py-16 px-6 border-t border-white/5 bg-[#050507]">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-10">
        <div className="flex items-center gap-3">
          <div className="w-9 h-9 rounded-lg bg-primary flex items-center justify-center">
            <span className="font-headline font-bold text-white text-xl">K</span>
          </div>
          <div className="flex flex-col leading-none">
            <span className="font-headline font-bold text-xl tracking-tight text-white">KIT IA</span>
            <span className="text-[10px] uppercase tracking-widest text-muted-foreground font-medium">para negócios</span>
          </div>
        </div>
        
        <p className="text-muted-foreground text-sm font-medium">
          © {year} KIT IA. Todos os direitos reservados.
        </p>

        <div className="flex gap-8 text-sm text-muted-foreground font-medium">
          <a href="#" className="hover:text-primary transition-colors">Termos de Uso</a>
          <a href="#" className="hover:text-primary transition-colors">Privacidade</a>
        </div>
      </div>
    </footer>
  )
}
