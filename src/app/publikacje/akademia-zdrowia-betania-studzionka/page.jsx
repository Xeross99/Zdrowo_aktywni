import Image from 'next/image'
import Link from 'next/link'

import { Container } from '@/components/Container'
import plakatImage from '@/images/akademia-betania-studzionka/plakat.jpg'

export const metadata = {
  title: 'Małe zmiany - wielkie efekty. Akademia Zdrowia w Studzionce',
  description:
    'Relacja z cyklu trzech spotkań Akademii Zdrowia poprowadzonych przez Aleksandrę Kost w kawiarence „Betania” w Studzionce - o biohackingu, metabolizmie, równowadze kwasowo-zasadowej i odżywianiu komórkowym.',
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

export default function AkademiaZdrowiaBetaniaStudzionka() {
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
                28 maja 2026 · Kawiarenka „Betania”, Studzionka
              </p>
              <h1 className="mt-6 text-4xl font-bold tracking-tight text-zinc-800 sm:text-5xl dark:text-zinc-100">
                Małe zmiany - wielkie efekty. Cykl spotkań Akademii Zdrowia
              </h1>
              <p className="mt-6 text-base text-zinc-600 dark:text-zinc-400">
                Trzy cykliczne spotkania w ramach{' '}
                <strong className="font-semibold text-zinc-800 dark:text-zinc-200">
                  Akademii Zdrowia
                </strong>
                , które odbyły się w kawiarence „Betania” w Studzionce.
              </p>
            </header>

            <div className="mt-10 space-y-7 text-base text-zinc-600 dark:text-zinc-400">
              <p>
                Podczas wystąpień mogłam wprowadzić uczestników w temat{' '}
                <strong className="font-semibold text-zinc-800 dark:text-zinc-200">
                  biohackingu
                </strong>{' '}
                w prosty sposób, bez skomplikowanych teorii. Pokazałam, co
                naprawdę działa i co można wprowadzić u siebie od zaraz, aby
                mieć więcej energii i czuć się lepiej na co dzień.
              </p>

              <p>
                Poruszyłam również bardzo istotną kwestię związaną z{' '}
                <strong className="font-semibold text-zinc-800 dark:text-zinc-200">
                  metabolizmem oraz równowagą kwasowo-zasadową
                </strong>
                . Mieliśmy możliwość w praktyce sprawdzić poziom naszego
                zakwaszenia oraz wykonać test pH organizmu. Rozmawialiśmy także
                o insulinooporności oraz o tym, dlaczego tak wiele osób jest
                przejedzonych, a jednocześnie niedożywionych na poziomie
                komórkowym.
              </p>

              <div className="mt-10 overflow-hidden rounded-2xl bg-zinc-100 dark:bg-zinc-800">
                <Image
                  src={plakatImage}
                  alt="Plakat spotkania Akademii Zdrowia „Małe zmiany - wielkie efekty” w kawiarence Betania w Studzionce"
                  sizes="(min-width: 768px) 42rem, 100vw"
                  className="w-full object-cover"
                  placeholder="blur"
                />
              </div>

              <div className="rounded-2xl border border-zinc-100 p-5 dark:border-zinc-700/40">
                <p className="relative inline-block text-sm font-semibold text-zinc-800 dark:text-zinc-200">
                  <span className="absolute inset-0 -rotate-1 -skew-y-1 rounded bg-lime-300/60 dark:bg-lime-500/25" />
                  <span className="relative px-1">
                    Tematy, które dokładnie omówiliśmy
                  </span>
                </p>
                <ul className="mt-3 space-y-2 text-sm">
                  <li className="flex items-center gap-2">
                    <span className="h-1.5 w-1.5 flex-none rounded-full bg-lime-500" />
                    okno żywieniowe
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="h-1.5 w-1.5 flex-none rounded-full bg-lime-500" />
                    regeneracja organizmu
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="h-1.5 w-1.5 flex-none rounded-full bg-lime-500" />
                    energia i metabolizm
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="h-1.5 w-1.5 flex-none rounded-full bg-lime-500" />
                    odżywianie komórkowe
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="h-1.5 w-1.5 flex-none rounded-full bg-lime-500" />
                    codzienne nawyki
                  </li>
                </ul>
              </div>

              <p className="border-l-2 border-lime-500 pl-4 text-lg font-medium text-zinc-800 italic dark:text-zinc-200">
                Bo właśnie o to chodzi w tym projekcie: małe zmiany - wielkie
                efekty.
              </p>

              <div className="mt-12 rounded-2xl bg-lime-50 p-6 dark:bg-lime-500/10">
                <p className="text-base text-zinc-700 dark:text-zinc-300">
                  Chcesz zorganizować podobny cykl spotkań w swojej
                  miejscowości, kawiarni lub organizacji?{' '}
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
