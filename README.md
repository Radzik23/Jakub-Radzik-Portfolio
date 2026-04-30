# Portfolio - Jakub Radzik

Nowoczesne, responsywne portfolio stworzone w `Next.js` (App Router), z naciskiem na czytelny design, wydajność i profesjonalną prezentację doświadczenia, projektów oraz kontaktu.

## Overview

Projekt zawiera:
- sekcję hero z krótkim bio i CTA,
- sekcję projektów (`Selected Works`) w układzie kart,
- sekcję doświadczeń i kompetencji,
- sekcję `Beyond the Code` z zainteresowaniami,
- formularz kontaktowy z wysyłką maila przez `Resend`,
- spójny layout oparty o `Tailwind CSS` i komponenty UI.

## Tech Stack

- `Next.js 16` (App Router)
- `React 19`
- `TypeScript`
- `Tailwind CSS 4`
- `framer-motion` (animacje)
- `lucide-react` (ikony)
- `Resend` (obsługa formularza kontaktowego)
- `ESLint` (linting)

## Project Structure

Najważniejsze katalogi i pliki:

- `app/page.tsx` - główny skład strony (sekcje)
- `app/layout.tsx` - layout aplikacji
- `app/globals.css` - style globalne
- `app/actions/sendEmail.ts` - server action wysyłająca maila
- `components/sections/*` - sekcje portfolio (`Navbar`, `Hero`, `FeaturedWork`, `Journey`, `TechArsenal`, `BeyondCode`, `Contact`, `Footer`)
- `components/ui/*` - współdzielone komponenty UI (button, card, input, badge itd.)
- `lib/data.ts` - dane statyczne: personal info, experience, education, projects, skills
- `public/*` - obrazy, CV i assety projektowe

## Local Development

### 1. Instalacja zależności

```bash
npm install
```

### 2. Uruchomienie projektu

```bash
npm run dev
```

Aplikacja będzie dostępna pod adresem:
- [http://localhost:3000](http://localhost:3000)

### 3. Build produkcyjny

```bash
npm run build
npm run start
```

### 4. Lint

```bash
npm run lint
```

## Environment Variables

Formularz kontaktowy używa `Resend`. Utwórz plik `.env.local` w katalogu głównym projektu:

```bash
RESEND_API_KEY=your_resend_api_key
```

Bez poprawnego klucza formularz nie wyśle wiadomości.

## Contact Form Flow

1. Użytkownik wypełnia formularz w sekcji `Contact`.
2. Dane trafiają do server action `sendEmail`.
3. `sendEmail` waliduje podstawowe pola (`name`, `email`, `message`).
4. Jeśli walidacja przejdzie, wiadomość jest wysyłana przez `Resend`.
5. UI pokazuje status sukcesu albo błędu.

Plik odpowiedzialny za ten flow:
- `app/actions/sendEmail.ts`

## Content Customization

Najważniejsze dane edytujesz w:
- `lib/data.ts`

Możesz tam zmienić:
- `PERSONAL_INFO` (imię, rola, headline, bio),
- `EXPERIENCE`,
- `EDUCATION`,
- `PROJECTS`,
- `SKILLS`.

## Assets

- Zdjęcia i grafiki trzymaj w `public/`.
- Dla obrazów z `next/image` używaj ścieżek zaczynających się od `/`, np. `/projects/example.png`.
- Plik CV jest dostępny z `public/CV.pdf`.

## Deployment

Najwygodniej wdrożyć na Vercel:

1. Podłącz repozytorium do Vercel.
2. Ustaw zmienną środowiskową `RESEND_API_KEY`.
3. Uruchom deployment.

Po wdrożeniu sprawdź:
- działanie sekcji i linków anchor,
- formularz kontaktowy (wysyłka maila),
- responsywność (mobile/tablet/desktop),
- wydajność obrazów.

## Notes

- Projekt jest przygotowany pod dalszy rozwój (kolejne sekcje, więcej projektów, integracje).
- UI i dane są odseparowane, dzięki czemu edycja treści nie wymaga dużych zmian w komponentach.
