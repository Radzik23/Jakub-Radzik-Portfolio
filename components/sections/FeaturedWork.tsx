// components/sections/FeaturedWork.tsx
import { PROJECTS } from "@/lib/data";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowRight } from "lucide-react"; 
import Link from "next/link";
import Image from "next/image";

function GithubIcon(props: React.SVGProps<SVGSVGElement>) {
    return (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        {...props}
      >
        <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
        <path d="M9 18c-4.51 2-5-2-7-2" />
      </svg>
    );
}

export function FeaturedWork() {
  // Bierzemy tylko 3 pierwsze projekty
  const displayProjects = PROJECTS.slice(0, 3);

  return (
    <section id="work" className="py-24 bg-background">
      <div className="container mx-auto px-4 max-w-[1200px]">
        
        {/* Nagłówek sekcji */}
        <div className="flex flex-col mb-16">
          <h2 className="text-4xl md:text-5xl font-semibold tracking-tight mb-4 text-foreground">Selected Works</h2>
          <p className="text-muted-foreground text-lg">A collection of projects built with intentionality.</p>
        </div>

        {/* HERO BENTO GRID */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 lg:gap-8">
          {displayProjects.map((project, index) => {
            const isMain = index === 0;

            return (
              <Card 
                key={project.id} 
                className={`group overflow-hidden bg-card border border-border/40 
                  shadow-[0px_10px_30px_-5px_rgba(45,45,45,0.05)] hover:shadow-[0px_20px_50px_-10px_rgba(45,45,45,0.1)] 
                  transition-all duration-500 rounded-3xl flex flex-col h-full py-0 gap-0
                  ${isMain ? 'lg:col-span-2 lg:row-span-2' : 'lg:col-span-1 lg:row-span-1'}
                `}
              >
                
                {/* Kontener na zdjęcie z wdrożonym komponentem Image */}
                <div className={`relative w-full bg-muted/30 flex items-center justify-center overflow-hidden border-b border-border/40
                  ${isMain ? 'h-72 lg:h-[800px]' : 'h-64 lg:h-56'}
                `}>
                  {project.image ? (
                    <Image 
                      src={project.image}
                      alt={project.title}
                      fill
                      sizes={
                        isMain
                          ? "(max-width: 1024px) 100vw, 66vw"
                          : "(max-width: 1024px) 100vw, 33vw"
                      }
                      priority={index === 0}
                      className="object-cover group-hover:scale-105 transition-transform duration-700"
                    />
                  ) : (
                    <div className="absolute inset-0 flex items-center justify-center text-muted-foreground group-hover:scale-105 transition-transform duration-700">
                       <span className="text-xs font-semibold uppercase tracking-widest text-primary/60">
                         {isMain ? "Main Project Image" : "Image Placeholder"}
                       </span>
                    </div>
                  )}
                </div>

                {/* Kontener na treść */}
                <div className="p-8 flex flex-col flex-grow">
                  <h3 className={`font-semibold mb-3 group-hover:text-primary transition-colors text-foreground ${isMain ? 'text-3xl' : 'text-xl'}`}>
                    {project.title}
                  </h3>
                  <p className="text-muted-foreground text-lg mb-8 line-clamp-2 leading-relaxed">
                    {project.description}
                  </p>

                  <div className="flex flex-wrap gap-2 mb-8">
                    {project.tech.map((tech) => (
                      <Badge key={tech} variant="secondary" className="rounded-md font-medium px-3.5 py-1.5 bg-muted text-muted-foreground border-none shadow-none text-sm">
                        {tech}
                      </Badge>
                    ))}
                  </div>

                  <div className="flex items-center justify-between mt-auto pt-4 border-t border-border/30">
                    <Link href={project.liveUrl} className="text-base font-semibold text-primary hover:opacity-80 flex items-center transition-opacity">
                      View Project <ArrowRight className="ml-1.5 h-5 w-5" />
                    </Link>
                    
                    <Link href={project.githubUrl} target="_blank" className="text-muted-foreground hover:text-foreground transition-colors">
                      <GithubIcon className="h-6 w-6" />
                    </Link>
                  </div>
                </div>
              </Card>
            )
          })}
        </div>
      </div>
    </section>
  );
}