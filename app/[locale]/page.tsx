import { setRequestLocale } from "next-intl/server";
import { Navbar } from "@/components/sections/Navbar";
import { Hero } from "@/components/sections/Hero";
import { FeaturedWork } from "@/components/sections/FeaturedWork";
import { Journey } from "@/components/sections/Journey";
import { TechArsenal } from "@/components/sections/TechArsenal";
import { FadeIn } from "@/components/animations/FadeIn";
import { Contact } from "@/components/sections/Contact";
import { BeyondCode } from "@/components/sections/BeyondCode";
import { routing } from "@/i18n/routing";

type Props = {
  params: Promise<{ locale: string }>;
};

export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }));
}

export default async function Home({ params }: Props) {
  const { locale } = await params;
  setRequestLocale(locale);

  return (
    <main className="min-h-screen bg-background text-foreground overflow-hidden">
      <Navbar />

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
