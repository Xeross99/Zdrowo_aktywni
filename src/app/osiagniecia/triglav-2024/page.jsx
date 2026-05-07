import Image from 'next/image'
import Link from 'next/link'

import { Container } from '@/components/Container'
import { PhotoGallery, Zoomable } from '@/components/PhotoGallery'
import szczytWidokImage from '@/images/triglav-2024/szczyt-widok.jpeg'
import viaFerrataImage from '@/images/triglav-2024/via-ferrata.jpeg'
import podejscieImage from '@/images/triglav-2024/podejscie.jpeg'
import drogowskazImage from '@/images/triglav-2024/drogowskaz.jpeg'
import skalyImage from '@/images/triglav-2024/skaly.jpeg'
import uprzazImage from '@/images/triglav-2024/uprzaz.jpeg'
import aljazevStolpImage from '@/images/triglav-2024/aljazev-stolp.jpeg'
import radoscImage from '@/images/triglav-2024/radosc.jpeg'
import kaskImage from '@/images/triglav-2024/kask.jpeg'

export const metadata = {
  title: 'Triglav 2863 m - między skałami a słońcem',
  description:
    'Relacja Aleksandry Kost z wyprawy na Triglav (2863 m) - najwyższy szczyt Słowenii. Pierwsza via ferrata, dolina Kama, chata Prgarca i Dom Planika w Alpach Julijskich.',
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

export default function Triglav2024() {
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
                  Słowenia · Alpy Julijskie
                </p>
                <h1 className="mt-6 text-4xl font-bold tracking-tight text-zinc-800 sm:text-5xl dark:text-zinc-100">
                  Między skałami a słońcem - nasz Triglav (2863 m n.p.m.)
                </h1>
                <p className="mt-6 text-base text-zinc-600 dark:text-zinc-400">
                  Wyprawę na{' '}
                  <strong className="font-semibold text-zinc-800 dark:text-zinc-200">
                    Triglav
                  </strong>{' '}
                  rozpoczęłyśmy bardzo wcześnie rano w dolinie Kama, z parkingu
                  Pri Lesi. Ruszyłyśmy jeszcze po ciemku, kiedy góry dopiero
                  budziły się do życia. W powietrzu czuć było chłód i ciszę, a
                  światło czołówek prowadziło nas przez pierwsze kilometry
                  szlaku. To był jeden z tych momentów, kiedy człowiek czuje
                  ekscytację, ale też ogromny szacunek do góry i tego, co przed
                  nim.
                </p>
              </header>

              <div className="mt-10 overflow-hidden rounded-2xl bg-zinc-100 dark:bg-zinc-800">
                <Zoomable image={szczytWidokImage}>
                  <Image
                    src={szczytWidokImage}
                    alt="Aleksandra Kost na szczycie Triglavu z panoramą Alp Julijskich w tle"
                    sizes="(min-width: 768px) 42rem, 100vw"
                    className="aspect-4/3 w-full cursor-zoom-in object-cover transition hover:opacity-95"
                    placeholder="blur"
                  />
                </Zoomable>
              </div>

              <div className="mt-10 space-y-7 text-base text-zinc-600 dark:text-zinc-400">
                <h2 className="text-2xl font-bold tracking-tight text-zinc-800 dark:text-zinc-100">
                  Szlak przez chatę Prgarca
                </h2>

                <p>
                  Szlak prowadzący przez{' '}
                  <strong className="font-semibold text-zinc-800 dark:text-zinc-200">
                    chatę Prgarca
                  </strong>{' '}
                  był piękny i różnorodny. Początkowo otaczał nas las, później
                  krajobraz zaczął zmieniać się w bardziej surowy i skalisty.
                  Gdy wzeszło słońce, całe góry nabrały niesamowitych kolorów, a
                  widoki z każdą godziną robiły coraz większe wrażenie.
                  Szliśmy swoim tempem, spokojnie łapiąc rytm i ciesząc się
                  każdą chwilą.
                </p>

                <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                  <div className="overflow-hidden rounded-2xl bg-zinc-100 dark:bg-zinc-800">
                    <Zoomable image={podejscieImage}>
                      <Image
                        src={podejscieImage}
                        alt="Podejście skalistym szlakiem w Alpach Julijskich z widokiem na zieloną dolinę"
                        sizes="(min-width: 640px) 20rem, 100vw"
                        className="aspect-4/3 w-full cursor-zoom-in object-cover transition hover:opacity-95"
                        placeholder="blur"
                      />
                    </Zoomable>
                  </div>
                  <div className="overflow-hidden rounded-2xl bg-zinc-100 dark:bg-zinc-800">
                    <Zoomable image={skalyImage}>
                      <Image
                        src={skalyImage}
                        alt="Surowe wapienne skały Alp Julijskich na trasie wyprawy"
                        sizes="(min-width: 640px) 20rem, 100vw"
                        className="aspect-4/3 w-full cursor-zoom-in object-cover transition hover:opacity-95"
                        placeholder="blur"
                      />
                    </Zoomable>
                  </div>
                </div>

                <h2 className="mt-12 text-2xl font-bold tracking-tight text-zinc-800 dark:text-zinc-100">
                  Dom Planika pod Triglavem
                </h2>

                <p>
                  Podejście do{' '}
                  <strong className="font-semibold text-zinc-800 dark:text-zinc-200">
                    Domu Planika
                  </strong>{' '}
                  pod Triglavem było wymagające, ale dawało ogromną satysfakcję.
                </p>

                <p className="border-l-2 border-lime-500 pl-4 text-lg font-medium text-zinc-800 italic dark:text-zinc-200">
                  Co ciekawe, ten odcinek można spokojnie przejść nawet będąc
                  na oknie żywieniowym - organizm naprawdę potrafi więcej, niż
                  nam się wydaje.
                </p>

                <h2 className="mt-12 text-2xl font-bold tracking-tight text-zinc-800 dark:text-zinc-100">
                  Pierwszy raz z uprzężą i via ferratą
                </h2>

                <p>
                  Największe emocje zaczęły się powyżej schroniska. To był nasz{' '}
                  <strong className="font-semibold text-zinc-800 dark:text-zinc-200">
                    pierwszy raz z uprzężą i via ferratą
                  </strong>
                  , więc pojawił się respekt, ale też ogromna ekscytacja.
                  Stalowe liny, ekspozycja i świadomość, że każdy krok wymaga
                  skupienia, sprawiły, że jeszcze mocniej przeżywałyśmy tę
                  drogę i obserwowaliśmy innych.
                </p>

                <div className="overflow-hidden rounded-2xl bg-zinc-100 dark:bg-zinc-800">
                  <Zoomable image={viaFerrataImage}>
                    <Image
                      src={viaFerrataImage}
                      alt="Aleksandra Kost na via ferracie z stalowymi linami w drodze na Triglav"
                      sizes="(min-width: 768px) 42rem, 100vw"
                      className="aspect-4/3 w-full cursor-zoom-in object-cover object-top transition hover:opacity-95"
                      placeholder="blur"
                    />
                  </Zoomable>
                </div>

                <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                  <div className="overflow-hidden rounded-2xl bg-zinc-100 dark:bg-zinc-800">
                    <Zoomable image={uprzazImage}>
                      <Image
                        src={uprzazImage}
                        alt="Aleksandra Kost w uprzęży i kasku tuż przed kluczowym odcinkiem via ferraty"
                        sizes="(min-width: 640px) 20rem, 100vw"
                        className="aspect-4/3 w-full cursor-zoom-in object-cover object-top transition hover:opacity-95"
                        placeholder="blur"
                      />
                    </Zoomable>
                  </div>
                  <div className="overflow-hidden rounded-2xl bg-zinc-100 dark:bg-zinc-800">
                    <Zoomable image={kaskImage}>
                      <Image
                        src={kaskImage}
                        alt="Selfie z via ferraty - Aleksandra Kost w kasku Altitude Activities"
                        sizes="(min-width: 640px) 20rem, 100vw"
                        className="aspect-4/3 w-full cursor-zoom-in object-cover transition hover:opacity-95"
                        placeholder="blur"
                      />
                    </Zoomable>
                  </div>
                </div>

                <h2 className="mt-12 text-2xl font-bold tracking-tight text-zinc-800 dark:text-zinc-100">
                  Granice istnieją głównie w głowie
                </h2>

                <p>
                  Im bliżej szczytu, tym bardziej czułam, że nie chodzi tylko o
                  zdobycie góry. Chodziło o doświadczenie, o odwagę i o wyjście
                  poza własny komfort. Kiedy stanęliśmy na{' '}
                  <strong className="font-semibold text-zinc-800 dark:text-zinc-200">
                    szczycie Triglavu
                  </strong>
                  , pojawiła się ogromna radość i wdzięczność. Widoki były
                  niesamowite, a słońce nad Alpami Julijskimi sprawiło, że ten
                  moment stał się naprawdę wyjątkowy.
                </p>

                <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                  <div className="overflow-hidden rounded-2xl bg-zinc-100 dark:bg-zinc-800">
                    <Zoomable image={drogowskazImage}>
                      <Image
                        src={drogowskazImage}
                        alt="Aleksandra Kost przy drogowskazach na szlaku Triglavu"
                        sizes="(min-width: 640px) 20rem, 100vw"
                        className="aspect-4/3 w-full cursor-zoom-in object-cover transition hover:opacity-95"
                        placeholder="blur"
                      />
                    </Zoomable>
                  </div>
                  <div className="overflow-hidden rounded-2xl bg-zinc-100 dark:bg-zinc-800">
                    <Zoomable image={radoscImage}>
                      <Image
                        src={radoscImage}
                        alt="Radość po zdobyciu szczytu Triglavu - ręce uniesione w geście triumfu"
                        sizes="(min-width: 640px) 20rem, 100vw"
                        className="aspect-4/3 w-full cursor-zoom-in object-cover transition hover:opacity-95"
                        placeholder="blur"
                      />
                    </Zoomable>
                  </div>
                </div>

                <div className="overflow-hidden rounded-2xl bg-zinc-100 dark:bg-zinc-800">
                  <Zoomable image={aljazevStolpImage}>
                    <Image
                      src={aljazevStolpImage}
                      alt="Aljažev Stolp na szczycie Triglavu (2864 m) - charakterystyczna metalowa wieża z flagą Słowenii"
                      sizes="(min-width: 768px) 42rem, 100vw"
                      className="aspect-4/3 w-full cursor-zoom-in object-cover transition hover:opacity-95"
                      placeholder="blur"
                    />
                  </Zoomable>
                </div>

                <p className="border-l-2 border-lime-500 pl-4 text-lg font-medium text-zinc-800 italic dark:text-zinc-200">
                  To była podróż, która pokazała mi, że granice istnieją
                  głównie w głowie. A prawdziwa siła zaczyna się tam, gdzie
                  decydujesz się zrobić krok dalej.
                </p>

                <div className="mt-12 rounded-2xl bg-lime-50 p-6 dark:bg-lime-500/10">
                  <p className="text-base text-zinc-700 dark:text-zinc-300">
                    Ciekawi Cię historia kolejnych wypraw górskich?{' '}
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
