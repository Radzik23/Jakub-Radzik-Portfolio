// components/sections/Footer.tsx
import Link from "next/link";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-border/40 py-10 bg-background mt-auto">
      <div className="container mx-auto px-4 flex flex-col md:flex-row justify-between items-center gap-4">
        
        {/* Lewa strona stopki */}
        <div className="text-muted-foreground text-sm font-medium">
          <span className="text-foreground font-bold mr-2">Portfolio</span> 
          © {currentYear} Built with Precision.
        </div>

        {/* Prawa strona - linki społecznościowe */}
        <div className="flex items-center gap-6 text-sm font-medium text-muted-foreground">
          <Link href="https://github.com/Radzik23" className="hover:text-foreground transition-colors">GitHub</Link>
          <Link href="https://www.linkedin.com/in/jakub-radzik-wroclaw/" className="hover:text-foreground transition-colors">LinkedIn</Link>
        </div>
        
      </div>
    </footer>
  );
}