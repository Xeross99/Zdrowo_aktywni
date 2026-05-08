import Image from 'next/image'
import Link from 'next/link'

import { Container } from '@/components/Container'
import { PhotoGallery, Zoomable } from '@/components/PhotoGallery'
import szutrowaDrogaImage from '@/images/lastovo-2022/szutrowa-droga.jpeg'
import roweryPrzerwaImage from '@/images/lastovo-2022/rowery-przerwa.jpeg'
import dwojkaSzlakImage from '@/images/lastovo-2022/dwojka-szlak.jpeg'
import triumfRowerImage from '@/images/lastovo-2022/triumf-rower.jpeg'
import panoramaHumImage from '@/images/lastovo-2022/panorama-hum.jpeg'
import zatokaLodkaImage from '@/images/lastovo-2022/zatoka-lodka.jpeg'

export const metadata = {
  title: 'Hum 417 m - rowerem przez wyspę Lastovo',
  description:
    'Relacja Aleksandry Kost z całodziennej wyprawy rowerowej na Hum (417 m) - najwyższe wzniesienie chorwackiej wyspy Lastovo. Szutrowe drogi, skwar i pół litra wody na dziką wyspę.',
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

export default function Lastovo2022() {
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
                  Chorwacja · Wyspa Lastovo · 21.07.2022
                </p>
                <h1 className="mt-6 text-4xl font-bold tracking-tight text-zinc-800 sm:text-5xl dark:text-zinc-100">
                  Hum (417 m n.p.m.) - rowerem przez dziką wyspę Lastovo
                </h1>
                <p className="mt-6 text-base text-zinc-600 dark:text-zinc-400">
                  Są miejsca, które testują człowieka bardziej niż jakikolwiek
                  trening. Taka właśnie była nasza całodzienna wyprawa rowerowa
                  po wyspie{' '}
                  <strong className="font-semibold text-zinc-800 dark:text-zinc-200">
                    Lastovo
                  </strong>{' '}
                  - dzikiej, surowej i absolutnie zachwycającej.
                </p>
              </header>

              <div className="mt-10 overflow-hidden rounded-2xl bg-zinc-100 dark:bg-zinc-800">
                <Zoomable image={triumfRowerImage}>
                  <Image
                    src={triumfRowerImage}
                    alt="Aleksandra Kost unosząca rower nad głową w geście triumfu na szczycie Hum z panoramą Adriatyku w tle"
                    sizes="(min-width: 768px) 42rem, 100vw"
                    className="aspect-4/3 w-full cursor-zoom-in object-cover transition hover:opacity-95"
                    placeholder="blur"
                  />
                </Zoomable>
              </div>

              <div className="mt-10 space-y-7 text-base text-zinc-600 dark:text-zinc-400">
                <h2 className="text-2xl font-bold tracking-tight text-zinc-800 dark:text-zinc-100">
                  Z miejscowości Lastovo w stronę Žal
                </h2>

                <p>
                  Ruszyliśmy rano z miejscowości Lastovo w kierunku{' '}
                  <strong className="font-semibold text-zinc-800 dark:text-zinc-200">
                    Žal
                  </strong>
                  . Już od pierwszych kilometrów było wiadomo, że to nie będzie
                  lekka przejażdżka. Skwar lał się z nieba niemiłosiernie.
                  Powietrze stało w miejscu, asfalt parzył, a słońce odbijało
                  się od kamieni tak mocno, jakby cała wyspa była jednym wielkim
                  piecem. Im dalej jechaliśmy, tym bardziej cywilizacja znikała
                  za nami. Cisza, kamienne murki, pojedyncze drzewa i bezkres
                  natury.
                </p>

                <div className="overflow-hidden rounded-2xl bg-zinc-100 dark:bg-zinc-800">
                  <Zoomable image={zatokaLodkaImage}>
                    <Image
                      src={zatokaLodkaImage}
                      alt="Aleksandra Kost przy turkusowej zatoce Lastova z białą łódką w tle"
                      sizes="(min-width: 768px) 42rem, 100vw"
                      className="aspect-4/3 w-full cursor-zoom-in object-cover transition hover:opacity-95"
                      placeholder="blur"
                    />
                  </Zoomable>
                </div>

                <h2 className="mt-12 text-2xl font-bold tracking-tight text-zinc-800 dark:text-zinc-100">
                  Szutrówki w stronę szczytu Hum
                </h2>

                <p>
                  Później zaczęła się prawdziwa przygoda - szutrowe drogi
                  prowadzące w stronę najwyższego punktu wyspy, szczytu{' '}
                  <strong className="font-semibold text-zinc-800 dark:text-zinc-200">
                    Hum (417 m n.p.m.)
                  </strong>
                  . Kamienie strzelały spod kół, rowery podskakiwały na
                  nierównościach, a każdy kolejny podjazd wystawiał nogi i głowę
                  na próbę. Pot spływał po twarzy, gardło było suche jak
                  chorwacki kamień, ale widoki rekompensowały wszystko.
                </p>

                <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                  <div className="overflow-hidden rounded-2xl bg-zinc-100 dark:bg-zinc-800">
                    <Zoomable image={szutrowaDrogaImage}>
                      <Image
                        src={szutrowaDrogaImage}
                        alt="Szutrowa droga prowadząca w stronę szczytu Hum w pełnym słońcu"
                        sizes="(min-width: 640px) 20rem, 100vw"
                        className="aspect-4/3 w-full cursor-zoom-in object-cover transition hover:opacity-95"
                        placeholder="blur"
                      />
                    </Zoomable>
                  </div>
                  <div className="overflow-hidden rounded-2xl bg-zinc-100 dark:bg-zinc-800">
                    <Zoomable image={roweryPrzerwaImage}>
                      <Image
                        src={roweryPrzerwaImage}
                        alt="Krótka przerwa w cieniu na szutrowym szlaku Lastova"
                        sizes="(min-width: 640px) 20rem, 100vw"
                        className="aspect-4/3 w-full cursor-zoom-in object-cover transition hover:opacity-95"
                        placeholder="blur"
                      />
                    </Zoomable>
                  </div>
                </div>

                <h2 className="mt-12 text-2xl font-bold tracking-tight text-zinc-800 dark:text-zinc-100">
                  Dzikość, której nie da się zapomnieć
                </h2>

                <p>
                  Gdy dotarliśmy wyżej, naszym oczom ukazała się panorama,
                  której nie da się zapomnieć. Turkus Adriatyku kontrastował z
                  ciemną zielenią wyspy, a małe zatoki wyglądały jak miejsca
                  całkowicie odcięte od świata. W takich chwilach człowiek czuje
                  prawdziwą wolność. Dzikość Lastova jest wyjątkowa - to nie
                  jest wyspa pełna tłumów, beach barów i głośnych promenad. To
                  miejsce, gdzie natura nadal rozdaje karty.
                </p>

                <p>
                  Cały teren należy do{' '}
                  <strong className="font-semibold text-zinc-800 dark:text-zinc-200">
                    Parku Przyrody Lastovsko otočje
                  </strong>{' '}
                  - jednego z najbardziej dziewiczych obszarów Chorwacji. Można
                  tam godzinami jechać i nie spotkać nikogo. Żadnych sklepów,
                  żadnych punktów gastronomicznych, żadnego zasięgu cywilizacji.
                  I właśnie wtedy wydarzyła się sytuacja, którą będziemy
                  wspominać latami.
                </p>

                <div className="overflow-hidden rounded-2xl bg-zinc-100 dark:bg-zinc-800">
                  <Zoomable image={dwojkaSzlakImage}>
                    <Image
                      src={dwojkaSzlakImage}
                      alt="Aleksandra Kost z towarzyszem sprawdzający mapę Lastova podczas wyprawy rowerowej"
                      sizes="(min-width: 768px) 42rem, 100vw"
                      className="aspect-4/3 w-full cursor-zoom-in object-cover transition hover:opacity-95"
                      placeholder="blur"
                    />
                  </Zoomable>
                </div>

                <h2 className="mt-12 text-2xl font-bold tracking-tight text-zinc-800 dark:text-zinc-100">
                  Pół litra wody na dziką wyspę
                </h2>

                <p>
                  Mieliśmy ze sobą… tylko{' '}
                  <strong className="font-semibold text-zinc-800 dark:text-zinc-200">
                    pół litra wody
                  </strong>
                  , całe wcześniejsze zapasy zostały wypite. Początkowo wydawało
                  się, że „jakoś wystarczy". Nie wystarczyło. W pełnym słońcu
                  każdy łyk był niemal na wagę złota. Zatrzymywaliśmy się co
                  jakiś czas i dzieliliśmy wodą dosłownie po łyczku, pilnując,
                  żeby starczyło jeszcze na kolejny kilometr.
                </p>

                <p>
                  Najgorsze było to, że sklepu nie było absolutnie nigdzie. Ani
                  jednego. Żadnego baru, żadnego domu, żadnej możliwości
                  uzupełnienia zapasów. Tylko my, rowery, kurz i dzika wyspa.
                  Pierwszy sklep, który stanął nam na horyzoncie, był dla nas
                  zbawienny.
                </p>

                <p className="border-l-2 border-lime-500 pl-4 text-lg font-medium text-zinc-800 italic dark:text-zinc-200">
                  I chyba właśnie dlatego ta wyprawa była tak wyjątkowa. Bo nie
                  była wygodna. Była prawdziwa.
                </p>

                <div className="overflow-hidden rounded-2xl bg-zinc-100 dark:bg-zinc-800">
                  <Zoomable image={panoramaHumImage}>
                    <Image
                      src={panoramaHumImage}
                      alt="Panorama zalesionych wzgórz wyspy Lastovo w popołudniowym słońcu"
                      sizes="(min-width: 768px) 42rem, 100vw"
                      className="aspect-4/3 w-full cursor-zoom-in object-cover transition hover:opacity-95"
                      placeholder="blur"
                    />
                  </Zoomable>
                </div>

                <h2 className="mt-12 text-2xl font-bold tracking-tight text-zinc-800 dark:text-zinc-100">
                  Tam, gdzie kończy się komfort
                </h2>

                <p>
                  Pokazała nam piękno prostoty, siłę charakteru i to, że
                  największe przygody zaczynają się tam, gdzie kończy się
                  komfort. Lastovo nie oddaje swoich widoków za darmo - trzeba
                  je sobie wywalczyć. Ale kiedy już staniesz na{' '}
                  <strong className="font-semibold text-zinc-800 dark:text-zinc-200">
                    Hum
                  </strong>{' '}
                  i spojrzysz na Adriatyk z wysokości 417 metrów, wiesz, że było
                  warto.
                </p>

                <div className="mt-12 rounded-2xl bg-lime-50 p-6 dark:bg-lime-500/10">
                  <p className="text-base text-zinc-700 dark:text-zinc-300">
                    Ciekawi Cię historia kolejnych wypraw?{' '}
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
