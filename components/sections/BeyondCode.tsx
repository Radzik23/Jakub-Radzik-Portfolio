// components/sections/BeyondCode.tsx
import { Card } from "@/components/ui/card";
import { Gauge, Aperture, Zap } from "lucide-react";
import Image from "next/image";

const HOBBIES = [
  {
    title: "Automotive & Tuning",
    description: "Passionate about car mechanics and automotive culture. I appreciate the raw engineering behind high-performance vehicles and enjoy the hands-on process of tuning.",
    icon: Gauge,
    image: "/hobby1.png",
    imagePosition: "object-[center_67%]"
  },
  {
    title: "Photography & Design",
    description: "Always looking for the perfect shot. In my free time, I focus on capturing moments through the lens, photo editing, and exploring digital graphic design.",
    icon: Aperture,
    image: "/hobby2.png",
    imagePosition: "object-center"
  },
  {
    title: "Squash Enthusiast",
    description: "My favorite way to stay active and clear my mind. It’s a fast-paced, highly strategic sport that provides the perfect physical balance to my digital workflow.",
    icon: Zap,
    image: "/hobby3.png",
    imagePosition: "object-center"
  }
];

export function BeyondCode() {
  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-4 max-w-[1200px]">
        
        {/* Nagłówek sekcji */}
        <div className="flex flex-col mb-16">
          <h2 className="text-4xl md:text-5xl font-semibold tracking-tight mb-4 text-foreground">Beyond the Code</h2>
          <p className="text-muted-foreground text-lg">When I'm not pushing pixels or debugging components.</p>
        </div>

        {/* Czysty, równy Grid na 3 kolumny */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          {HOBBIES.map((hobby, index) => (
            <Card 
              key={index} 
              className="group overflow-hidden bg-card border border-border/40 shadow-[0px_10px_30px_-5px_rgba(45,45,45,0.05)] hover:shadow-[0px_20px_50px_-10px_rgba(45,45,45,0.1)] transition-all duration-500 rounded-3xl flex flex-col h-full py-0 gap-0"
            >
              {/* Sekcja Tekstowa */}
              <div className="p-8 flex flex-col flex-grow">
                <div className="h-12 w-12 rounded-2xl bg-primary/10 text-primary flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-500">
                  <hobby.icon className="h-6 w-6" />
                </div>
                <h3 className="text-2xl font-semibold mb-3 text-foreground">{hobby.title}</h3>
                <p className="text-muted-foreground leading-relaxed">
                  {hobby.description}
                </p>
              </div>
              
              {/* Sekcja Zdjęciowa - Dół każdej karty */}
              <div className="relative w-full h-56 mt-auto overflow-hidden">
                <Image 
                  src={hobby.image}
                  alt={hobby.title}
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  className={`object-cover ${hobby.imagePosition} group-hover:scale-105 transition-transform duration-700`}
                />
              </div>
            </Card>
          ))}
        </div>
        
      </div>
    </section>
  );
}