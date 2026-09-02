// components/sections/Footer.tsx
import { useTranslations } from "next-intl";

export function Footer() {
  const t = useTranslations("footer");
  const nav = useTranslations("nav");
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-border/40 py-10 bg-background mt-auto">
      <div className="container mx-auto px-4 flex flex-col md:flex-row justify-between items-center gap-4">
        <div className="text-muted-foreground text-sm font-medium">
          <span className="text-foreground font-bold mr-2">{nav("portfolio")}</span>
          © {currentYear} {t("tagline")}
        </div>

        <div className="flex items-center gap-6 text-sm font-medium text-muted-foreground">
          <a href="https://github.com/Radzik23" className="hover:text-foreground transition-colors">GitHub</a>
          <a href="https://www.linkedin.com/in/jakub-radzik-wroclaw/" className="hover:text-foreground transition-colors">LinkedIn</a>
        </div>
      </div>
    </footer>
  );
}
