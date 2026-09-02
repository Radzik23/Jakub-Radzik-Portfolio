// components/sections/BeyondCode.tsx
import { useTranslations } from "next-intl";
import { HOBBIES_META } from "@/lib/data";
import { Card } from "@/components/ui/card";
import { Gauge, Aperture, Zap } from "lucide-react";
import Image from "next/image";

const HOBBY_ICONS = [Gauge, Aperture, Zap];

type HobbyTranslation = {
  title: string;
  description: string;
};

export function BeyondCode() {
  const t = useTranslations("beyondCode");
  const hobbies = t.raw("hobbies") as HobbyTranslation[];

  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-4 max-w-[1200px]">
        <div className="flex flex-col mb-16">
          <h2 className="text-4xl md:text-5xl font-semibold tracking-tight mb-4 text-foreground">{t("title")}</h2>
          <p className="text-muted-foreground text-lg">{t("subtitle")}</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          {hobbies.map((hobby, index) => {
            const Icon = HOBBY_ICONS[index];
            const meta = HOBBIES_META[index];

            return (
              <Card
                key={index}
                className="group overflow-hidden bg-card border border-border/40 shadow-[0px_10px_30px_-5px_rgba(45,45,45,0.05)] hover:shadow-[0px_20px_50px_-10px_rgba(45,45,45,0.1)] transition-all duration-500 rounded-3xl flex flex-col h-full py-0 gap-0"
              >
                <div className="p-8 flex flex-col flex-grow">
                  <div className="h-12 w-12 rounded-2xl bg-primary/10 text-primary flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-500">
                    <Icon className="h-6 w-6" />
                  </div>
                  <h3 className="text-2xl font-semibold mb-3 text-foreground">{hobby.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {hobby.description}
                  </p>
                </div>

                <div className="relative w-full h-56 mt-auto overflow-hidden">
                  <Image
                    src={meta.image}
                    alt={hobby.title}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    className={`object-cover ${meta.imagePosition} group-hover:scale-105 transition-transform duration-700`}
                  />
                </div>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
}
