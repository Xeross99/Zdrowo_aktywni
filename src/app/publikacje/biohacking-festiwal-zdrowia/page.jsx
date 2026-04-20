import Image from 'next/image'
import Link from 'next/link'

import { Container } from '@/components/Container'
import wykladImage from '@/images/biohacking-festiwal/wyklad.jpg'
import identyfikatorImage from '@/images/biohacking-festiwal/identyfikator.jpg'
import publicznoscImage from '@/images/biohacking-festiwal/publicznosc.jpg'

export const metadata = {
  title: 'Biohacking - wykład na III Festiwalu Zdrowia',
  description:
    'Relacja z wykładu Aleksandry Kost „Biohacking - jak świadome nawyki optymalizują metabolizm i polepszają jakość życia" wygłoszonego 7 marca 2026 r. podczas III Festiwalu Kultury Zdrowia „Pełnia zdrowia bez leków" w Katowicach.',
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

export default function BiohackingFestiwalZdrowia() {
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
                7 marca 2026 · Międzynarodowe Centrum Kongresowe, Katowice
              </p>
              <h1 className="mt-6 text-4xl font-bold tracking-tight text-zinc-800 sm:text-5xl dark:text-zinc-100">
                Biohacking - jak świadome nawyki optymalizują metabolizm i
                polepszają jakość życia
              </h1>
              <p className="mt-6 text-base text-zinc-600 dark:text-zinc-400">
                Relacja z wykładu, który miałam przyjemność wygłosić jako jedna
                ze 160 prelegentów podczas{' '}
                <strong className="font-semibold text-zinc-800 dark:text-zinc-200">
                  III Festiwalu Kultury Zdrowia „Pełnia zdrowia bez leków"
                </strong>
                .
              </p>
            </header>

            <div className="mt-10 overflow-hidden rounded-2xl bg-zinc-100 dark:bg-zinc-800">
              <Image
                src={wykladImage}
                alt="Aleksandra Kost podczas wykładu o biohackingu na III Festiwalu Zdrowia w Katowicach"
                sizes="(min-width: 768px) 42rem, 100vw"
                className="aspect-[4/3] w-full object-cover"
                placeholder="blur"
              />
            </div>

            <div className="mt-10 space-y-7 text-base text-zinc-600 dark:text-zinc-400">
              <p>
                Na początku wyjaśniłam, czym właściwie jest{' '}
                <strong className="font-semibold text-zinc-800 dark:text-zinc-200">
                  biohacking
                </strong>
                . To nic innego jak świadome „hakowanie" własnego organizmu
                poprzez codzienne decyzje - takie, które wspierają zdrowie,
                energię i długowieczność. To nie magia ani chwilowa moda, tylko
                praktyczne podejście oparte na zrozumieniu, jak działa nasze
                ciało.
              </p>

              <p>
                Podkreśliłam bardzo ważną rzecz: jeśli chcemy zapobiegać
                chorobom, musimy znać ich przyczynę. Nie skupiamy się tylko na
                objawach, ale docieramy do źródła problemu.
              </p>

              <div className="rounded-2xl border border-zinc-100 p-5 dark:border-zinc-700/40">
                <p className="relative inline-block text-sm font-semibold text-zinc-800 dark:text-zinc-200">
                  <span className="absolute inset-0 -rotate-1 -skew-y-1 rounded bg-lime-300/60 dark:bg-lime-500/25" />
                  <span className="relative px-1">
                    Fundamenty zdrowia - piramida zdrowia
                  </span>
                </p>
                <ul className="mt-3 space-y-2 text-sm">
                  <li className="flex items-center gap-2">
                    <span className="h-1.5 w-1.5 flex-none rounded-full bg-lime-500" />
                    odpowiednia dieta
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="h-1.5 w-1.5 flex-none rounded-full bg-lime-500" />
                    sen i regeneracja
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="h-1.5 w-1.5 flex-none rounded-full bg-lime-500" />
                    kontrola masy ciała i nawodnienie
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="h-1.5 w-1.5 flex-none rounded-full bg-lime-500" />
                    regularna aktywność fizyczna
                  </li>
                </ul>
                <p className="mt-4 text-sm text-zinc-600 dark:text-zinc-400">
                  Na samym szczycie tej piramidy znajdują się{' '}
                  <strong className="font-semibold text-zinc-800 dark:text-zinc-200">
                    lekarz, leki i chirurgia
                  </strong>{' '}
                  - ale to ostateczność. My działamy dużo wcześniej, na poziomie
                  profilaktyki i prewencji. To styl życia decyduje o tym, jak
                  się czujemy i jak funkcjonuje nasz organizm.
                </p>
              </div>

              <p>
                Zwróciłam uwagę, że aż{' '}
                <strong className="font-semibold text-zinc-800 dark:text-zinc-200">
                  90% chorób ma swoje źródło w zaburzonym metabolizmie
                </strong>
                . Na jego pogorszenie wpływa wiele czynników:
              </p>

              <ul className="list-disc space-y-2 pl-6 text-base text-zinc-600 dark:text-zinc-400">
                <li>wysoko przetworzona żywność,</li>
                <li>nadmierne stosowanie antybiotyków i sterydów,</li>
                <li>niedobory składników odżywczych,</li>
                <li>nadmiar cukru,</li>
                <li>długotrwałe stosowanie leków przeciwbólowych,</li>
                <li>przewlekły stres,</li>
                <li>toksyny obecne w środowisku.</li>
              </ul>

              <p className="border-l-2 border-lime-500 pl-4 text-lg font-medium text-zinc-800 italic dark:text-zinc-200">
                Zdrowie to nie jednorazowy zryw. To suma małych decyzji
                podejmowanych każdego dnia przez lata.
              </p>

              <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                <div className="overflow-hidden rounded-2xl bg-zinc-100 dark:bg-zinc-800">
                  <Image
                    src={publicznoscImage}
                    alt="Publiczność III Festiwalu Kultury Zdrowia w Międzynarodowym Centrum Kongresowym w Katowicach"
                    sizes="(min-width: 640px) 20rem, 100vw"
                    className="aspect-[4/3] w-full object-cover"
                    placeholder="blur"
                  />
                </div>
                <div className="overflow-hidden rounded-2xl bg-zinc-100 dark:bg-zinc-800">
                  <Image
                    src={identyfikatorImage}
                    alt="Identyfikator prelegenta Aleksandry Kost na III Festiwalu Zdrowia"
                    sizes="(min-width: 640px) 20rem, 100vw"
                    className="aspect-[4/3] w-full object-cover"
                    placeholder="blur"
                  />
                </div>
              </div>

              <h2 className="mt-12 text-2xl font-bold tracking-tight text-zinc-800 dark:text-zinc-100">
                Metabolizm jelit - klucz do zdrowia
              </h2>

              <p>
                Dużo miejsca poświęciłam{' '}
                <strong className="font-semibold text-zinc-800 dark:text-zinc-200">
                  metabolizmowi jelit
                </strong>{' '}
                - czyli m.in. problemowi nieszczelności jelit oraz znaczeniu
                mikrobioty jelitowej. To właśnie jelita są jednym z kluczowych
                elementów naszego zdrowia. W ich wsparciu pomocne mogą być m.in.
                dobrej jakości Colostrum oraz odpowiednio dobrane probiotyki.
              </p>

              <p>Nie można zapominać także o:</p>

              <ul className="list-disc space-y-2 pl-6 text-base text-zinc-600 dark:text-zinc-400">
                <li>metabolizmie wątroby,</li>
                <li>równowadze kwasowo-zasadowej,</li>
                <li>metabolizmie komórkowym.</li>
              </ul>

              <div className="rounded-2xl border border-zinc-100 p-5 dark:border-zinc-700/40">
                <p className="relative inline-block text-sm font-semibold text-zinc-800 dark:text-zinc-200">
                  <span className="absolute inset-0 -rotate-1 rounded bg-lime-300/60 dark:bg-lime-500/25" />
                  <span className="relative px-1">
                    Aloes - cud natury, który piję od prawie 5 lat
                  </span>
                </p>
                <p className="mt-3 text-sm text-zinc-600 dark:text-zinc-400">
                  Jednym z naturalnych sposobów ratowania organizmu jest{' '}
                  <strong className="font-semibold text-zinc-800 dark:text-zinc-200">
                    aloes wysokiej jakości
                  </strong>
                  , który może wspierać procesy metaboliczne. Oczyszcza,
                  odkwasza i odżywia na poziomie komórkowym. To niezwykle
                  istotne, gdyż właśnie na tym poziomie tworzą się choroby.
                </p>
              </div>

              <p>
                Podczas wykładu zwróciłam także uwagę na rozwiązania wspierające
                zdrowy styl życia. Pokazałam, na czym polega zakwaszenie
                organizmu oraz jak można odwrócić ten proces.
              </p>

              <h2 className="mt-12 text-2xl font-bold tracking-tight text-zinc-800 dark:text-zinc-100">
                Podsumowanie
              </h2>

              <p>
                Biohacking to{' '}
                <strong className="font-semibold text-zinc-800 dark:text-zinc-200">
                  świadome życie
                </strong>
                . To wybór codziennych nawyków, które budują nasze zdrowie,
                zamiast je niszczyć. To inwestycja w siebie, która zawsze się
                zwraca.
              </p>

              <div className="mt-12 rounded-2xl bg-lime-50 p-6 dark:bg-lime-500/10">
                <p className="text-base text-zinc-700 dark:text-zinc-300">
                  Jeżeli interesuje Cię naturalne wsparcie organizmu,{' '}
                  <Link
                    href="/kontakt"
                    className="font-semibold text-lime-700 underline decoration-lime-500/40 underline-offset-4 transition hover:decoration-lime-500 dark:text-lime-400"
                  >
                    zapraszam do kontaktu
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
