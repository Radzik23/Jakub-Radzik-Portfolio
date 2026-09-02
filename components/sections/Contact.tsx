// components/sections/Contact.tsx
'use client';

import { useTranslations } from "next-intl";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Send, Loader2, CheckCircle2, Mail, Phone, MapPin } from "lucide-react";
import { sendEmail } from "@/app/actions/sendEmail";
import { useState, useRef, type SVGProps } from "react";

function GithubIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
      <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
      <path d="M9 18c-4.51 2-5-2-7-2" />
    </svg>
  );
}

function LinkedinIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
      <rect x="2" y="9" width="4" height="12" />
      <circle cx="4" cy="4" r="2" />
    </svg>
  );
}

export function Contact() {
  const t = useTranslations("contact");
  const [pending, setPending] = useState(false);
  const [status, setStatus] = useState<'idle' | 'success' | 'error'>('idle');
  const formRef = useRef<HTMLFormElement>(null);

  async function actionHandler(formData: FormData) {
    setPending(true);
    setStatus('idle');

    const result = await sendEmail(formData);

    if (result?.error) {
      setStatus('error');
    } else {
      setStatus('success');
      formRef.current?.reset();
    }

    setPending(false);
  }

  return (
    <section id="contact" className="py-24 relative overflow-hidden bg-background border-t border-border/40">
      <div className="absolute top-1/2 left-1/2 -z-10 h-[500px] w-[500px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-muted blur-[100px]" />

      <div className="container mx-auto px-4 max-w-[1200px]">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-start">
          <div className="bg-card border border-border/50 shadow-[0px_10px_30px_-5px_rgba(45,45,45,0.05)] rounded-3xl p-8 md:p-10">
            <h3 className="text-2xl font-semibold mb-6 text-foreground">{t("formTitle")}</h3>
            <form ref={formRef} action={actionHandler} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <Label htmlFor="name" className="text-foreground font-medium text-base">{t("fullName")}</Label>
                  <Input
                    id="name"
                    name="name"
                    placeholder={t("fullNamePlaceholder")}
                    required
                    disabled={pending}
                    className="bg-background border-border/50 focus-visible:ring-primary rounded-xl h-14 text-base px-4"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="email" className="text-foreground font-medium text-base">{t("email")}</Label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    placeholder={t("emailPlaceholder")}
                    required
                    disabled={pending}
                    className="bg-background border-border/50 focus-visible:ring-primary rounded-xl h-14 text-base px-4"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="company" className="text-foreground font-medium text-base">
                  {t("company")} <span className="text-muted-foreground/50">{t("companyOptional")}</span>
                </Label>
                <Input
                  id="company"
                  name="company"
                  placeholder={t("companyPlaceholder")}
                  disabled={pending}
                  className="bg-background border-border/50 focus-visible:ring-primary rounded-xl h-14 text-base px-4"
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="message" className="text-foreground font-medium text-base">{t("message")}</Label>
                <Textarea
                  id="message"
                  name="message"
                  placeholder={t("messagePlaceholder")}
                  rows={4}
                  required
                  disabled={pending}
                  className="bg-background border-border/50 focus-visible:ring-primary rounded-xl resize-none text-base p-4 min-h-32"
                />
              </div>

              <Button
                type="submit"
                size="lg"
                disabled={pending}
                className={`w-full rounded-xl h-14 text-lg font-medium transition-all duration-300 ${
                  status === 'success'
                    ? 'bg-emerald-600 hover:bg-emerald-700 text-white shadow-none'
                    : 'bg-primary hover:bg-primary/90 text-primary-foreground group shadow-md'
                }`}
              >
                {pending ? (
                  <>
                    <Loader2 className="mr-2 h-5 w-5 animate-spin" />
                    {t("sending")}
                  </>
                ) : status === 'success' ? (
                  <>
                    <CheckCircle2 className="mr-2 h-5 w-5" />
                    {t("sent")}
                  </>
                ) : (
                  <>
                    {t("send")}
                    <Send className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                  </>
                )}
              </Button>

              {status === 'error' && (
                <p className="text-destructive text-sm text-center mt-2">
                  {t("error")}
                </p>
              )}
            </form>
          </div>

          <div className="flex flex-col justify-center space-y-8 lg:pl-8 lg:py-8">
            <div>
              <h2 className="text-4xl md:text-5xl font-semibold tracking-tight mb-4 text-foreground">
                {t("headline")} <span className="italic font-serif text-primary">{t("headlineAccent")}</span>
              </h2>
              <p className="text-muted-foreground text-lg max-w-[400px] leading-relaxed">
                {t("description")}
              </p>
            </div>

            <div className="space-y-6">
              <a href="mailto:radzik.jakub2003@gmail.com" className="flex items-center group">
                <div className="h-12 w-12 rounded-2xl bg-primary/10 text-primary flex items-center justify-center mr-4 group-hover:scale-110 transition-transform duration-500">
                  <Mail className="h-5 w-5" />
                </div>
                <div>
                  <p className="text-sm font-medium text-muted-foreground">{t("emailLabel")}</p>
                  <p className="text-lg font-medium text-foreground group-hover:text-primary transition-colors">radzik.jakub2003@gmail.com</p>
                </div>
              </a>

              <a href="tel:+48664851804" className="flex items-center group">
                <div className="h-12 w-12 rounded-2xl bg-primary/10 text-primary flex items-center justify-center mr-4 group-hover:scale-110 transition-transform duration-500">
                  <Phone className="h-5 w-5" />
                </div>
                <div>
                  <p className="text-sm font-medium text-muted-foreground">{t("phoneLabel")}</p>
                  <p className="text-lg font-medium text-foreground group-hover:text-primary transition-colors">+48 664 851 804</p>
                </div>
              </a>

              <div className="flex items-center group">
                <div className="h-12 w-12 rounded-2xl bg-primary/10 text-primary flex items-center justify-center mr-4 group-hover:scale-110 transition-transform duration-500">
                  <MapPin className="h-5 w-5" />
                </div>
                <div>
                  <p className="text-sm font-medium text-muted-foreground">{t("locationLabel")}</p>
                  <p className="text-lg font-medium text-foreground">{t("location")}</p>
                </div>
              </div>
            </div>

            <div className="flex flex-wrap gap-4 pt-6 border-t border-border/40">
              <a href="https://www.linkedin.com/in/jakub-radzik-wroclaw/" target="_blank" rel="noopener noreferrer" className="flex items-center justify-center h-12 px-6 rounded-xl bg-card border border-border/50 hover:border-primary hover:text-primary font-medium transition-all shadow-sm group">
                <LinkedinIcon className="h-5 w-5 mr-2 group-hover:scale-110 transition-transform" /> LinkedIn
              </a>
              <a href="https://github.com/Radzik23" target="_blank" rel="noopener noreferrer" className="flex items-center justify-center h-12 px-6 rounded-xl bg-card border border-border/50 hover:border-primary hover:text-primary font-medium transition-all shadow-sm group">
                <GithubIcon className="h-5 w-5 mr-2 group-hover:scale-110 transition-transform" /> GitHub
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
