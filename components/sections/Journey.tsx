// components/sections/Journey.tsx
import { useMessages, useTranslations } from "next-intl";

type ExperienceItem = {
  id: number;
  title: string;
  company: string;
  date: string;
  description: string;
};

type EducationItem = {
  id: number;
  degree: string;
  institution: string;
  date: string;
  description: string;
};

export function Journey() {
  const t = useTranslations("journey");
  const messages = useMessages();

  const experienceItems = messages.experience as ExperienceItem[];
  const educationItems = messages.education as EducationItem[];

  return (
    <section id="experience" className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 md:gap-8 lg:gap-16">
          <div>
            <h2 className="text-3xl font-bold tracking-tight mb-10">{t("experienceTitle")}</h2>

            <div className="space-y-10 border-l border-border/70 pl-8 ml-3">
              {experienceItems.map((item) => (
                <div key={item.id} className="relative">
                  <span className="absolute -left-[37.5px] top-1.5 h-2.5 w-2.5 rounded-full bg-primary ring-4 ring-background" />
                  <div className="text-sm font-medium text-primary mb-2 flex items-center gap-2">
                    {item.date}
                  </div>
                  <h3 className="text-xl font-semibold mb-1">{item.title}</h3>
                  <h4 className="text-md font-medium text-muted-foreground mb-3">{item.company}</h4>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {item.description}
                  </p>
                </div>
              ))}
            </div>
          </div>

          <div>
            <h2 className="text-3xl font-bold tracking-tight mb-10">{t("educationTitle")}</h2>

            <div className="space-y-10 border-l border-border/70 pl-8 ml-3">
              {educationItems.map((item) => (
                <div key={item.id} className="relative">
                  <span className="absolute -left-[37.5px] top-1.5 h-2.5 w-2.5 rounded-full bg-foreground/80 ring-4 ring-background" />
                  <div className="text-sm font-medium text-muted-foreground mb-2 flex items-center gap-2">
                    {item.date}
                  </div>
                  <h3 className="text-xl font-semibold mb-1">{item.degree}</h3>
                  <h4 className="text-md font-medium text-muted-foreground mb-3">{item.institution}</h4>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {item.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
