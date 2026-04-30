// app/page.tsx
import { Navbar } from "@/components/sections/Navbar";
import { Hero } from "@/components/sections/Hero";
import { FeaturedWork } from "@/components/sections/FeaturedWork";
import { Journey } from "@/components/sections/Journey";
import { TechArsenal } from "@/components/sections/TechArsenal";
import { FadeIn } from "@/components/animations/FadeIn";
import { Contact } from "@/components/sections/Contact";
import { BeyondCode } from "@/components/sections/BeyondCode";

export default function Home() {
  return (
    <main className="min-h-screen bg-background text-foreground overflow-hidden">
      <Navbar />
      
      {/* Delikatne fade-in animacje dla sekcji */}
      <FadeIn delay={0.2}>
        <Hero />
      </FadeIn>
      
      <FadeIn>
        <FeaturedWork />
      </FadeIn>

      <FadeIn>
        <TechArsenal />
      </FadeIn>
      
      <FadeIn>
        <Journey />
      </FadeIn>
      
      <FadeIn>
        <BeyondCode />
      </FadeIn>

      <FadeIn>
        <Contact />
      </FadeIn>
    </main>
  );
}