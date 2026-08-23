import Image from 'next/image'
import Link from 'next/link'

import { Container } from '@/components/Container'
import spotkanieImage from '@/images/akademia-kgw-lyszczanki/spotkanie.jpg'

export const metadata = {
  title: 'Akademia Zdrowia z KGW Łyszczanki',
  description:
    'Relacja ze spotkania Akademii Zdrowia poprowadzonego przez Aleksandrę Kost dla Koła Gospodyń Wiejskich Łyszczanki w Łyskach - o zdrowiu „od wewnątrz”, zdrowych nawykach i oczyszczaniu organizmu.',
}

function ArrowLeftIcon(props) {
  return (
    <svg viewBox="0 0 16 16" fill="none" aria-hidden="true" {...props}>
      <path
        d="M7.25 11.25 3.75 8m0 0 3.5-3.25M3.75 8h8.5"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}

export default function AkademiaZdrowiaKgwLyszczanki() {
  return (
    <Container className="mt-16 sm:mt-32">
      <div className="xl:relative">
        <div className="mx-auto max-w-2xl">
          <Link
            href="/publikacje"
            aria-label="Wróć do publikacji"
            className="group mb-8 flex h-10 w-10 items-center justify-center rounded-full bg-white shadow-md ring-1 shadow-zinc-800/5 ring-zinc-900/5 transition lg:absolute lg:-left-5 lg:-mt-2 lg:mb-0 xl:-top-1.5 xl:left-0 xl:mt-0 dark:border dark:border-zinc-700/50 dark:bg-zinc-800 dark:ring-0 dark:ring-white/10 dark:hover:border-zinc-700 dark:hover:ring-white/20"
          >
            <ArrowLeftIcon className="h-4 w-4 stroke-zinc-500 transition group-hover:stroke-zinc-700 dark:stroke-zinc-500 dark:group-hover:stroke-zinc-400" />
          </Link>

          <article>
            <header className="flex flex-col">
              <p className="flex items-center text-base text-zinc-400 dark:text-zinc-500">
                <span className="mr-3 h-4 w-0.5 rounded-full bg-zinc-200 dark:bg-zinc-500" />
                23 kwietnia 2025 · KGW Łyszczanki, Łyski
              </p>
              <h1 className="mt-6 text-4xl font-bold tracking-tight text-zinc-800 sm:text-5xl dark:text-zinc-100">
                Akademia Zdrowia z KGW Łyszczanki
              </h1>
              <p className="mt-6 text-base text-zinc-600 dark:text-zinc-400">
                23 kwietnia miałam przyjemność poprowadzić spotkanie Akademii
                Zdrowia dla pań z{' '}
                <strong className="font-semibold text-zinc-800 dark:text-zinc-200">
                  Koła Gospodyń Wiejskich Łyszczanki
                </strong>{' '}
                w Łyskach.
              </p>
            </header>

            <div className="mt-10 overflow-hidden rounded-2xl bg-zinc-100 dark:bg-zinc-800">
              <Image
                src={spotkanieImage}
                alt="Aleksandra Kost podczas spotkania Akademii Zdrowia z KGW Łyszczanki w Łyskach"
                sizes="(min-width: 768px) 42rem, 100vw"
                className="w-full object-cover"
                placeholder="blur"
              />
            </div>

            <div className="mt-10 space-y-7 text-base text-zinc-600 dark:text-zinc-400">
              <p>
                Rozmawiałyśmy o tym, jak zadbać o zdrowie{' '}
                <strong className="font-semibold text-zinc-800 dark:text-zinc-200">
                  „od wewnątrz”
                </strong>{' '}
                - nie zabrakło praktycznych wskazówek dotyczących budowania
                zdrowych nawyków, oczyszczania organizmu oraz dbania o dobre
                samopoczucie na co dzień.
              </p>

              <div className="rounded-2xl border border-zinc-100 p-5 dark:border-zinc-700/40">
                <p className="relative inline-block text-sm font-semibold text-zinc-800 dark:text-zinc-200">
                  <span className="absolute inset-0 -rotate-1 -skew-y-1 rounded bg-lime-300/60 dark:bg-lime-500/25" />
                  <span className="relative px-1">
                    Co działo się podczas spotkania
                  </span>
                </p>
                <ul className="mt-3 space-y-2 text-sm">
                  <li className="flex items-center gap-2">
                    <span className="h-1.5 w-1.5 flex-none rounded-full bg-lime-500" />
                    pomiar pH organizmu dla każdej z uczestniczek
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="h-1.5 w-1.5 flex-none rounded-full bg-lime-500" />
                    wspólny eksperyment i test wiedzy zakończony losowaniem
                    herbatek
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="h-1.5 w-1.5 flex-none rounded-full bg-lime-500" />
                    degustacja Aloe Vera - pysznego i świetnego dla zdrowia
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="h-1.5 w-1.5 flex-none rounded-full bg-lime-500" />
                    czas na pytania, rozmowy - i to wszystko przy kawie i
                    ciastku
                  </li>
                </ul>
              </div>

              <p>
                Tak spotkanie podsumowały same uczestniczki na profilu{' '}
                <a
                  href="https://www.facebook.com/profile.php?id=61571907993417"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-semibold text-lime-700 underline decoration-lime-500/40 underline-offset-4 transition hover:decoration-lime-500 dark:text-lime-400"
                >
                  KGW Łyszczanki
                </a>
                :
              </p>

              <blockquote className="border-l-2 border-lime-500 pl-4 text-base text-zinc-600 italic dark:text-zinc-400">
                „Podczas spotkania rozmawiałyśmy, jak zadbać o zdrowie «od
                wewnątrz». Nie zabrakło cennych wskazówek dotyczących budowania
                zdrowych nawyków, oczyszczania organizmu oraz dbania o dobre
                samopoczucie na co dzień. Dodatkowo mogłyśmy skorzystać z
                pomiaru pH organizmu - nasze Panie zadowolone! Każda z pań
                spróbowała też Aloe Vera - pyszne i bardzo dobre dla zdrowia.
                Atmosfera spotkania była miła - przy kawce i ciastku Panie się
                nie nudziły.”
              </blockquote>

              <div className="mt-12 rounded-2xl bg-lime-50 p-6 dark:bg-lime-500/10">
                <p className="text-base text-zinc-700 dark:text-zinc-300">
                  Chcesz zorganizować podobne spotkanie dla swojego koła,
                  organizacji lub grupy?{' '}
                  <Link
                    href="/kontakt"
                    className="font-semibold text-lime-700 underline decoration-lime-500/40 underline-offset-4 transition hover:decoration-lime-500 dark:text-lime-400"
                  >
                    Zapraszam do kontaktu
                  </Link>
                  .
                </p>
              </div>
            </div>
          </article>
        </div>
      </div>
    </Container>
  )
}
