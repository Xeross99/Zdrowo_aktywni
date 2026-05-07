import Image from 'next/image'
import Link from 'next/link'

import { Container } from '@/components/Container'
import { PhotoGallery, Zoomable } from '@/components/PhotoGallery'
import pro300HeadbandImage from '@/images/pro300/pro300-headband.jpeg'
import sunflowerImage from '@/images/pro300/sunflower.jpeg'
import mogeWszystkoImage from '@/images/pro300/moge-wszystko.jpeg'
import poranekImage from '@/images/pro300/poranek.jpeg'
import aloesLrImage from '@/images/pro300/aloes-lr.jpeg'
import portretImage from '@/images/pro300/portret.jpeg'
import butyImage from '@/images/pro300/buty.jpeg'
import brianTracyImage from '@/images/pro300/brian-tracy.jpeg'

export const metadata = {
  title: 'PRO300 PROJECTdiscipline - Let\'s Run',
  description:
    'Historia projektu PRO300_PROJECTdiscipline Aleksandry Kost - codzienna dyscyplina biegowa, która od 18 listopada 2021 roku zmieniła wszystko: triathlon, maraton 3:56:38, firma LR i wewnętrzna przemiana.',
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

export default function Pro300() {
  return (
    <Container className="mt-16 sm:mt-32">
      <div className="xl:relative">
        <div className="mx-auto max-w-2xl">
          <Link
            href="/osiagniecia"
            aria-label="Wróć do osiągnięć"
            className="group mb-8 flex h-10 w-10 items-center justify-center rounded-full bg-white shadow-md ring-1 shadow-zinc-800/5 ring-zinc-900/5 transition lg:absolute lg:-left-5 lg:-mt-2 lg:mb-0 xl:-top-1.5 xl:left-0 xl:mt-0 dark:border dark:border-zinc-700/50 dark:bg-zinc-800 dark:ring-0 dark:ring-white/10 dark:hover:border-zinc-700 dark:hover:ring-white/20"
          >
            <ArrowLeftIcon className="h-4 w-4 stroke-zinc-500 transition group-hover:stroke-zinc-700 dark:stroke-zinc-500 dark:group-hover:stroke-zinc-400" />
          </Link>

          <PhotoGallery>
            <article>
              <header className="flex flex-col">
                <p className="flex items-center text-base text-zinc-400 dark:text-zinc-500">
                  <span className="mr-3 h-4 w-0.5 rounded-full bg-zinc-200 dark:bg-zinc-500" />
                  Od 18 listopada 2021
                </p>
                <h1 className="mt-6 text-4xl font-bold tracking-tight text-zinc-800 sm:text-5xl dark:text-zinc-100">
                  <strong className="font-extrabold text-lime-600 dark:text-lime-400">
                    L
                  </strong>
                  et&apos;s{' '}
                  <strong className="font-extrabold text-lime-600 dark:text-lime-400">
                    R
                  </strong>
                  un with PRO300_PROJECTdiscipline
                </h1>
                <p className="mt-6 text-base text-zinc-600 dark:text-zinc-400">
                  Ustawiłam swój wewnętrzny kompas na pozytywne... Na pasję,
                  prostotę i wdzięczność.
                </p>
                <p className="mt-4 text-base text-zinc-600 dark:text-zinc-400">
                  <strong className="font-semibold text-zinc-800 dark:text-zinc-200">
                    18 listopada 2021
                  </strong>{' '}
                  - dzień urodzin mojej mamy i dzień, który odmienił moje życie
                  o 180 stopni. Dzień, za który jestem wdzięczna każdego
                  jednego dnia.
                </p>
              </header>

              <div className="mt-10 overflow-hidden rounded-2xl bg-zinc-100 dark:bg-zinc-800">
                <Zoomable image={pro300HeadbandImage}>
                  <Image
                    src={pro300HeadbandImage}
                    alt="Aleksandra Kost w opasce PRO300 PROJECTdiscipline - czarno-białe ujęcie"
                    sizes="(min-width: 768px) 42rem, 100vw"
                    className="aspect-4/3 w-full cursor-zoom-in object-cover transition hover:opacity-95"
                    placeholder="blur"
                  />
                </Zoomable>
              </div>

              <div className="mt-10 space-y-7 text-base text-zinc-600 dark:text-zinc-400">
                <h2 className="text-2xl font-bold tracking-tight text-zinc-800 dark:text-zinc-100">
                  Czym jest PRO300_PROJECTdiscipline
                </h2>

                <p>
                  Głównym założeniem projektu{' '}
                  <strong className="font-semibold text-zinc-800 dark:text-zinc-200">
                    PRO300_PROJECTdiscipline
                  </strong>{' '}
                  jest codzienna aktywność - w moim wypadku bieganie -
                  niezależnie od warunków, humoru czy okoliczności. To idea
                  oparta na dyscyplinie, która z czasem zaczyna wpływać nie
                  tylko na sport, ale również na całe życie: zdrowie,
                  mentalność, relacje i sposób myślenia. PRO300 pokazuje, że
                  systematyczność potrafi zmieniać ludzi od środka.
                </p>

                <h2 className="mt-12 text-2xl font-bold tracking-tight text-zinc-800 dark:text-zinc-100">
                  Day by Day
                </h2>

                <p>
                  To był impuls, tak po prostu, kiedy zrozumiałam, że robię coś
                  w końcu dla siebie, bez obłudy, zakłamania, oszukiwania.
                  Wstaję, idę biegać z założeniem{' '}
                  <strong className="font-semibold text-zinc-800 dark:text-zinc-200">
                    Day by Day
                  </strong>
                  , rozpoczynam dzień i się uśmiecham, strzepuję wszystko to,
                  co mi przeszkadza - lenistwo, brak wiary czy niedowierzanie.
                  Pojawiły się cele, marzenia, firma i ludzie, którzy są
                  wdzięczni tak jak ja.
                </p>

                <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                  <div className="overflow-hidden rounded-2xl bg-zinc-100 dark:bg-zinc-800">
                    <Zoomable image={poranekImage}>
                      <Image
                        src={poranekImage}
                        alt="Aleksandra Kost o wschodzie słońca podczas porannego biegu - uśmiech i wdzięczność"
                        sizes="(min-width: 640px) 20rem, 100vw"
                        className="aspect-4/3 w-full cursor-zoom-in object-cover transition hover:opacity-95"
                        placeholder="blur"
                      />
                    </Zoomable>
                  </div>
                  <div className="overflow-hidden rounded-2xl bg-zinc-100 dark:bg-zinc-800">
                    <Zoomable image={butyImage}>
                      <Image
                        src={butyImage}
                        alt="Białe buty biegowe Aleksandry Kost - codzienny start projektu PRO300"
                        sizes="(min-width: 640px) 20rem, 100vw"
                        className="aspect-4/3 w-full cursor-zoom-in object-cover transition hover:opacity-95"
                        placeholder="blur"
                      />
                    </Zoomable>
                  </div>
                </div>

                <h2 className="mt-12 text-2xl font-bold tracking-tight text-zinc-800 dark:text-zinc-100">
                  Co przyniósł PRO300
                </h2>

                <ul className="space-y-4 list-disc pl-5 marker:text-lime-500">
                  <li>
                    <strong className="font-semibold text-zinc-800 dark:text-zinc-200">
                      Triathlon
                    </strong>{' '}
                    - moja strachliwa bolączka, którą pokonałam i z radości
                    ocierałam łzy na mecie. Pierwszy start i drugie miejsce na
                    podium w powiecie pszczyńskim.{' '}
                    <Link
                      href="/osiagniecia/silesiaman-2022"
                      className="font-semibold text-lime-700 underline decoration-lime-500/40 underline-offset-4 transition hover:decoration-lime-500 dark:text-lime-400"
                    >
                      Czytaj relację
                    </Link>
                    .
                  </li>
                  <li>
                    <strong className="font-semibold text-zinc-800 dark:text-zinc-200">
                      Maraton
                    </strong>{' '}
                    - zwieńczenie pracy, wysiłku i wizualizacji. Rekord z czasem{' '}
                    <strong className="font-semibold text-zinc-800 dark:text-zinc-200">
                      3:56:38 h
                    </strong>
                    .
                  </li>
                  <li>
                    Firma{' '}
                    <strong className="font-extrabold text-lime-600 dark:text-lime-400">
                      L
                    </strong>
                    <strong className="font-extrabold text-lime-600 dark:text-lime-400">
                      R
                    </strong>{' '}
                    - inspiracja, motywacja, radość, dochód i niekończąca się
                    wiedza o zdrowiu, odżywianiu i cudownym aloesie.
                  </li>
                  <li>
                    <strong className="font-semibold text-zinc-800 dark:text-zinc-200">
                      Wewnętrzna przemiana
                    </strong>{' '}
                    - doświadczam jej każdego dnia. To najlepszy skutek uboczny
                    PRO300.pl_PROJECTdiscipline.
                  </li>
                  <li>
                    <strong className="font-semibold text-zinc-800 dark:text-zinc-200">
                      Ludzie
                    </strong>{' '}
                    - łączy nas pasja, radość, sport, bieganie, praca,
                    motywacja i chęć rozwoju. Relacje, przyjaźnie, rozmowy bez
                    skrępowania.
                  </li>
                </ul>

                <div className="overflow-hidden rounded-2xl bg-zinc-100 dark:bg-zinc-800">
                  <Zoomable image={aloesLrImage}>
                    <Image
                      src={aloesLrImage}
                      alt="Aleksandra Kost z produktem aloesowym LR nad jeziorem"
                      sizes="(min-width: 768px) 42rem, 100vw"
                      className="aspect-4/3 w-full cursor-zoom-in object-cover object-top transition hover:opacity-95"
                      placeholder="blur"
                    />
                  </Zoomable>
                </div>

                <h2 className="mt-12 text-2xl font-bold tracking-tight text-zinc-800 dark:text-zinc-100">
                  Efekt domina
                </h2>

                <p>
                  PRO300 nie jest wyzwaniem z datą końcową. To sposób myślenia,
                  który uruchamia{' '}
                  <strong className="font-semibold text-zinc-800 dark:text-zinc-200">
                    efekt domina
                  </strong>{' '}
                  - jeden trening buduje kolejny, jeden krok napędza następny,
                  a codzienna dyscyplina zaczyna zmieniać całe życie. Tutaj nie
                  chodzi już tylko o bieganie. Chodzi o charakter, siłę i
                  konsekwencję, które zostają z człowiekiem na zawsze.
                </p>

                <p className="border-l-2 border-lime-500 pl-4 text-lg font-medium text-zinc-800 italic dark:text-zinc-200">
                  Najtrudniej jest wyjść pierwszy raz. Potem nie biegniesz już
                  dla wyniku - biegniesz, bo stało się to częścią Ciebie.
                </p>

                <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                  <div className="overflow-hidden rounded-2xl bg-zinc-100 dark:bg-zinc-800">
                    <Zoomable image={mogeWszystkoImage}>
                      <Image
                        src={mogeWszystkoImage}
                        alt="Aleksandra Kost z medalem i tabliczką MOGĘ WSZYSTKO"
                        sizes="(min-width: 640px) 20rem, 100vw"
                        className="aspect-4/3 w-full cursor-zoom-in object-cover transition hover:opacity-95"
                        placeholder="blur"
                      />
                    </Zoomable>
                  </div>
                  <div className="overflow-hidden rounded-2xl bg-zinc-100 dark:bg-zinc-800">
                    <Zoomable image={portretImage}>
                      <Image
                        src={portretImage}
                        alt="Portret Aleksandry Kost w opasce sportowej - uśmiech i spokój"
                        sizes="(min-width: 640px) 20rem, 100vw"
                        className="aspect-4/3 w-full cursor-zoom-in object-cover transition hover:opacity-95"
                        placeholder="blur"
                      />
                    </Zoomable>
                  </div>
                </div>

                <div className="overflow-hidden rounded-2xl bg-zinc-100 dark:bg-zinc-800">
                  <Zoomable image={sunflowerImage}>
                    <Image
                      src={sunflowerImage}
                      alt="Aleksandra Kost w opasce PRO300 ze słonecznikiem - codzienna radość"
                      sizes="(min-width: 768px) 42rem, 100vw"
                      className="aspect-4/3 w-full cursor-zoom-in object-cover transition hover:opacity-95"
                      placeholder="blur"
                    />
                  </Zoomable>
                </div>

                <p>
                  I właśnie dlatego ten projekt nie ma mety. Nie ma zakończenia.
                  To droga, która trwa dalej...
                </p>

                <div className="overflow-hidden rounded-2xl bg-zinc-100 dark:bg-zinc-800">
                  <Zoomable image={brianTracyImage}>
                    <Image
                      src={brianTracyImage}
                      alt="Cytat Briana Tracy - Twój los zależy od Twoich nawyków"
                      sizes="(min-width: 768px) 42rem, 100vw"
                      className="aspect-4/3 w-full cursor-zoom-in object-cover transition hover:opacity-95"
                      placeholder="blur"
                    />
                  </Zoomable>
                </div>

                <div className="mt-12 rounded-2xl bg-lime-50 p-6 dark:bg-lime-500/10">
                  <p className="text-base text-zinc-700 dark:text-zinc-300">
                    Ciekawi Cię, dokąd zaprowadziła mnie ta droga?{' '}
                    <Link
                      href="/osiagniecia"
                      className="font-semibold text-lime-700 underline decoration-lime-500/40 underline-offset-4 transition hover:decoration-lime-500 dark:text-lime-400"
                    >
                      Zobacz pozostałe osiągnięcia
                    </Link>
                    .
                  </p>
                </div>
              </div>
            </article>
          </PhotoGallery>
        </div>
      </div>
    </Container>
  )
}
