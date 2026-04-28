# Zdrowo Aktywni

Strona internetowa Aleksandry Kost — instruktorki i pasjonatki zdrowego, aktywnego stylu życia. Produkcyjnie dostępna pod adresem [zdrowo-aktywni.pl](https://zdrowo-aktywni.pl).

## Stack technologiczny

- **Framework:** Next.js 16 (App Router)
- **Język:** JavaScript (JSX)
- **Stylowanie:** Tailwind CSS v4 + PostCSS
- **UI:** Headless UI, Heroicons, Framer Motion, React Aria, React Photo View
- **Analytics:** Google Analytics (`@next/third-parties`)

## Uruchomienie lokalne

Zainstaluj zależności:

```bash
npm install
```

Uruchom serwer deweloperski:

```bash
npm run dev
```

Strona będzie dostępna pod [http://localhost:3000](http://localhost:3000).

## Skrypty

- `npm run dev` — serwer deweloperski
- `npm run build` — build produkcyjny
- `npm run lint` — ESLint
- `npx prettier --check .` — sprawdzenie formatowania

## Struktura projektu

```
src/
  app/
    (main)/page.jsx          — strona główna
    o-mnie/                  — o mnie
    kontakt/                 — kontakt
    zajecia/                 — zajęcia
    publikacje/              — publikacje (m.in. Biohacking Festiwal Zdrowia)
    osiagniecia/             — osiągnięcia (Himalaje 2019, Korona Gór Polski)
    layout.jsx               — root layout
  components/                — komponenty współdzielone (Navbar, Footer, FadeIn, Container, …)
  styles/                    — Tailwind CSS
public/                      — zasoby statyczne (zdjęcia, ikony, sitemap)
```

## Konwencje

- Wszystkie teksty w UI są po **polsku**.
- Komponenty mają rozszerzenie `.jsx`.
- Alias ścieżek: `@/` → `src/`.
- Formatowanie: Prettier z pluginem `prettier-plugin-tailwindcss`.
- Linting: ESLint z konfiguracją `next`.
