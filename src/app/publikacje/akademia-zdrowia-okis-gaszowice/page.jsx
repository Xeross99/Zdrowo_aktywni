import Image from 'next/image'
import Link from 'next/link'

import { Container } from '@/components/Container'
import { BreadcrumbJsonLd } from '@/components/BreadcrumbJsonLd'
import plakatImage from '@/images/akademia-gaszowice/plakat.jpg'

export const metadata = {
  title: 'Sprawny metabolizm kluczem do sukcesu - OKiS Gaszowice',
  description:
    'Relacja z prelekcji Aleksandry Kost „Sprawny metabolizm kluczem do sukcesu. Jak zadbać o swoje zdrowie od wewnątrz?” w Ośrodku Kultury i Sportu w Gaszowicach - z bezpłatną analizą składu ciała dla uczestników.',
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

export default function AkademiaZdrowiaOkisGaszowice() {
  return (
    <Container className="mt-16 sm:mt-32">
      <BreadcrumbJsonLd
        parent={{ name: 'Publikacje & Wykłady', href: '/publikacje' }}
        name={metadata.title}
      />
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
                18 lutego 2026 · Ośrodek Kultury i Sportu w Gaszowicach
              </p>
              <h1 className="mt-6 text-4xl font-bold tracking-tight text-zinc-800 sm:text-5xl dark:text-zinc-100">
                Sprawny metabolizm kluczem do sukcesu
              </h1>
              <p className="mt-6 text-base text-zinc-600 dark:text-zinc-400">
                W ramach współpracy z{' '}
                <strong className="font-semibold text-zinc-800 dark:text-zinc-200">
                  Ośrodkiem Kultury i Sportu w Gaszowicach
                </strong>{' '}
                miałam przyjemność wystąpić jako prelegentka dla miejscowej
                społeczności.
              </p>
            </header>

            <div className="mt-10 space-y-7 text-base text-zinc-600 dark:text-zinc-400">
              <p>
                Rozmawialiśmy o{' '}
                <strong className="font-semibold text-zinc-800 dark:text-zinc-200">
                  metabolizmie
                </strong>{' '}
                oraz wspólnie szukaliśmy najlepszego rozwiązania na poprawę
                zdrowia i dobrego samopoczucia - od resetu organizmu, przez
                oczyszczanie i odkwaszanie, po budowanie nowych nawyków, które
                dają zdrowie i sprawność na lata.
              </p>

              <div className="mt-10 overflow-hidden rounded-2xl bg-zinc-100 dark:bg-zinc-800">
                <Image
                  src={plakatImage}
                  alt="Plakat prelekcji Akademii Zdrowia „Sprawny metabolizm kluczem do sukcesu” w OKiS Gaszowice"
                  sizes="(min-width: 768px) 42rem, 100vw"
                  className="w-full object-cover"
                  placeholder="blur"
                />
              </div>

              <div className="rounded-2xl border border-zinc-100 p-5 dark:border-zinc-700/40">
                <p className="relative inline-block text-sm font-semibold text-zinc-800 dark:text-zinc-200">
                  <span className="absolute inset-0 -rotate-1 -skew-y-1 rounded bg-lime-300/60 dark:bg-lime-500/25" />
                  <span className="relative px-1">
                    Bezpłatne badania dla uczestników
                  </span>
                </p>
                <p className="mt-3 text-sm text-zinc-600 dark:text-zinc-400">
                  Uczestnicy mogli nieodpłatnie sprawdzić parametry swojego
                  ciała, w tym:
                </p>
                <ul className="mt-3 space-y-2 text-sm">
                  <li className="flex items-center gap-2">
                    <span className="h-1.5 w-1.5 flex-none rounded-full bg-lime-500" />
                    poziom nawodnienia organizmu
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="h-1.5 w-1.5 flex-none rounded-full bg-lime-500" />
                    poziom tłuszczu wisceralnego
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="h-1.5 w-1.5 flex-none rounded-full bg-lime-500" />
                    masę mięśniową i kostną
                  </li>
                </ul>
              </div>

              <p className="border-l-2 border-lime-500 pl-4 text-lg font-medium text-zinc-800 italic dark:text-zinc-200">
                Sprawny metabolizm to klucz do sukcesu - zdrowie buduje się od
                wewnątrz.
              </p>

              <div className="mt-12 rounded-2xl bg-lime-50 p-6 dark:bg-lime-500/10">
                <p className="text-base text-zinc-700 dark:text-zinc-300">
                  Chcesz zorganizować podobną prelekcję w swoim ośrodku kultury,
                  firmie lub organizacji?{' '}
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
