"use client";

import { useLocale } from "next-intl";
import { usePathname, useRouter } from "@/i18n/routing";

export function LanguageSwitcher() {
  const locale = useLocale();
  const router = useRouter();
  const pathname = usePathname();

  function switchLocale(nextLocale: "en" | "pl") {
    router.replace(pathname, { locale: nextLocale });
  }

  return (
    <div className="flex items-center gap-1 rounded-full border border-border/50 bg-background/80 p-1 text-sm font-medium">
      <button
        type="button"
        onClick={() => switchLocale("en")}
        className={`rounded-full px-3 py-1.5 transition-colors ${
          locale === "en"
            ? "bg-primary text-primary-foreground"
            : "text-muted-foreground hover:text-foreground"
        }`}
        aria-label="Switch to English"
      >
        EN
      </button>
      <button
        type="button"
        onClick={() => switchLocale("pl")}
        className={`rounded-full px-3 py-1.5 transition-colors ${
          locale === "pl"
            ? "bg-primary text-primary-foreground"
            : "text-muted-foreground hover:text-foreground"
        }`}
        aria-label="Przełącz na polski"
      >
        PL
      </button>
    </div>
  );
}
