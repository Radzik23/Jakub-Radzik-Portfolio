// components/sections/Hero.tsx
import { Button } from "@/components/ui/button";
import { ArrowUpRight } from "lucide-react";
import Image from "next/image";
import { PERSONAL_INFO } from "@/lib/data";

export function Hero() {
  return (
    <section id="hero" className="relative pt-32 pb-20 md:pt-48 md:pb-32 overflow-hidden">
      <div className="absolute top-1/2 left-1/2 -z-10 h-[600px] w-[600px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-muted/60 blur-[80px]" />

      <div className="container mx-auto px-4 flex flex-col-reverse md:flex-row items-center gap-12">
        {/* Lewa kolumna: Tekst i Call to Action */}
        <div className="flex-1 space-y-6">
          <span className="text-sm font-semibold uppercase tracking-wider text-muted-foreground">
            {PERSONAL_INFO.role} 
          </span>
          <h1 className="text-4xl md:text-6xl font-bold tracking-tight leading-[1.1] text-foreground">
            {PERSONAL_INFO.headline} 
          </h1>
          <p className="text-lg text-muted-foreground max-w-[600px] leading-relaxed">
            {PERSONAL_INFO.bio} 
          </p>
          
          <div className="flex items-center gap-4 pt-4">
            <a href="/CV.pdf" download="Jakub_Radzik_CV.pdf">
              <Button size="lg" className="rounded-full bg-primary hover:bg-primary/90 text-primary-foreground">
                Download CV
              </Button>
            </a>
            
            <a href="https://github.com/Radzik23" target="_blank" rel="noopener noreferrer">
              <Button size="lg" variant="outline" className="rounded-full bg-background border-border/50 hover:bg-muted">
                GitHub <ArrowUpRight className="ml-2 h-4 w-4" />
              </Button>
            </a>
          </div>
        </div>

        {/* Prawa kolumna: Twoje zdjęcie */}
        <div className="flex-1 w-full max-w-[500px] aspect-square rounded-[3rem] flex items-center justify-center relative overflow-hidden shadow-[0px_20px_50px_-10px_rgba(45,45,45,0.1)] border border-border/40 bg-muted/30">
          <Image 
             src="/portfolio.png"
             alt={PERSONAL_INFO.name}
             fill
             priority 
             sizes="(max-width: 768px) 100vw, 500px"
             className="object-cover hover:scale-105 transition-transform duration-1000"
           />
        </div>
      </div>
    </section>
  );
}