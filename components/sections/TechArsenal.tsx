// components/sections/TechArsenal.tsx
import { SKILLS } from "@/lib/data";
import { Terminal, Database, Wrench } from "lucide-react";

export function TechArsenal() {
  return (
    <section id="expertise" className="py-24 bg-muted/35">
      <div className="container mx-auto px-4">
        
        {/* Nagłówek sekcji */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold tracking-tight mb-4">Technical Arsenal</h2>
          <p className="text-muted-foreground text-lg">The tools and technologies I use to build scalable applications.</p>
        </div>

        {/* Kontener główny dla kategorii */}
        <div className="flex flex-col gap-12 max-w-4xl mx-auto">
          
          {/* Kategoria: Frontend */}
          <div>
            <h3 className="flex items-center gap-2.5 text-xl font-semibold mb-6 text-foreground">
              <Terminal className="h-6 w-6 text-primary" />
              Frontend Engineering
            </h3>
            <div className="flex flex-wrap gap-4">
              {SKILLS.frontend.map((skill) => (
                <div key={skill} className="flex items-center px-7 py-3.5 bg-background border border-border/50 rounded-xl shadow-sm hover:shadow-md transition-all duration-300 hover:-translate-y-0.5">
                  <span className="font-medium text-foreground/90 text-base">{skill}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Kategoria: Backend */}
          <div>
            <h3 className="flex items-center gap-2.5 text-xl font-semibold mb-6 text-foreground">
              <Database className="h-6 w-6 text-primary" />
              Backend & Architecture
            </h3>
            <div className="flex flex-wrap gap-4">
              {SKILLS.backend.map((skill) => (
                <div key={skill} className="flex items-center px-7 py-3.5 bg-background border border-border/50 rounded-xl shadow-sm hover:shadow-md transition-all duration-300 hover:-translate-y-0.5">
                  <span className="font-medium text-foreground/90 text-base">{skill}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Kategoria: Tools & AI */}
          <div>
            <h3 className="flex items-center gap-2.5 text-xl font-semibold mb-6 text-foreground">
              <Wrench className="h-6 w-6 text-primary" />
              Tools & AI Methodology
            </h3>
            <div className="flex flex-wrap gap-4">
              {SKILLS.tools.map((skill) => (
                <div key={skill} className="flex items-center px-7 py-3.5 bg-background border border-border/50 rounded-xl shadow-sm hover:shadow-md transition-all duration-300 hover:-translate-y-0.5">
                  <span className="font-medium text-foreground/90 text-base">{skill}</span>
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}