// components/sections/Navbar.tsx
import { useTranslations } from "next-intl";
import { Link } from "@/i18n/routing";
import { Button } from "@/components/ui/button";
import { LanguageSwitcher } from "@/components/LanguageSwitcher";

export function Navbar() {
  const t = useTranslations("nav");

  return (
    <nav className="fixed top-0 w-full z-50 bg-background/80 backdrop-blur-md border-b border-border/40">
      <div className="container mx-auto px-4 h-20 flex items-center justify-between">
        <Link href="/" className="font-bold text-xl tracking-tight transition-all duration-300 hover:text-primary hover:-translate-y-0.5">
          {t("portfolio")}
        </Link>

        <div className="hidden md:flex items-center gap-10 text-base font-medium text-muted-foreground">
          <Link href="/#work" className="relative py-1 transition-all duration-300 hover:text-foreground after:absolute after:left-0 after:bottom-0 after:h-[2px] after:w-full after:origin-left after:scale-x-0 after:bg-primary after:transition-transform after:duration-300 hover:after:scale-x-100">{t("work")}</Link>
          <Link href="/#expertise" className="relative py-1 transition-all duration-300 hover:text-foreground after:absolute after:left-0 after:bottom-0 after:h-[2px] after:w-full after:origin-left after:scale-x-0 after:bg-primary after:transition-transform after:duration-300 hover:after:scale-x-100">{t("expertise")}</Link>
          <Link href="/#experience" className="relative py-1 transition-all duration-300 hover:text-foreground after:absolute after:left-0 after:bottom-0 after:h-[2px] after:w-full after:origin-left after:scale-x-0 after:bg-primary after:transition-transform after:duration-300 hover:after:scale-x-100">{t("experience")}</Link>
          <Link href="/#contact" className="relative py-1 transition-all duration-300 hover:text-foreground after:absolute after:left-0 after:bottom-0 after:h-[2px] after:w-full after:origin-left after:scale-x-0 after:bg-primary after:transition-transform after:duration-300 hover:after:scale-x-100">{t("contact")}</Link>
        </div>

        <div className="flex items-center gap-3">
          <LanguageSwitcher />
          <Button
            asChild
            variant="default"
            className="rounded-full h-11 px-6 text-base bg-primary hover:bg-primary/90 text-primary-foreground hover:shadow-[0_10px_30px_-10px_hsl(var(--primary)/0.7)]"
          >
            <a href="/CV.pdf" download="CV.pdf">
              {t("cv")}
            </a>
          </Button>
        </div>
      </div>
    </nav>
  );
}
