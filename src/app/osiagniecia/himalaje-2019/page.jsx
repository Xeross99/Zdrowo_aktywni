import Image from 'next/image'
import Link from 'next/link'

import { Container } from '@/components/Container'
import { PhotoGallery, Zoomable } from '@/components/PhotoGallery'
import dzieckoImage from '@/images/himalaje-2019/dziecko-balonik.jpeg'
import mulyImage from '@/images/himalaje-2019/muly-juczne.jpeg'
import panoramaImage from '@/images/himalaje-2019/panorama-gor.jpeg'
import szczytImage from '@/images/himalaje-2019/szczyt.jpeg'
import mostImage from '@/images/himalaje-2019/most-wiszacy.jpeg'
import bazaImage from '@/images/himalaje-2019/baza-everest.jpeg'

export const metadata = {
  title: 'Himalaje 2019 - Everest Base Camp i Kalapatthar',
  description:
    'Relacja z wyprawy Aleksandry Kost w Himalaje w październiku 2019 roku - trekking do Everest Base Camp (5364 m) i zdobycie Kalapatthar (5643 m).',
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

export default function Himalaje2019() {
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
                14 października 2019 · Nepal, Himalaje
              </p>
              <h1 className="mt-6 text-4xl font-bold tracking-tight text-zinc-800 sm:text-5xl dark:text-zinc-100">
                Himalaje - trekking do Everest Base Camp i zdobycie Kalapatthar
              </h1>
              <p className="mt-6 text-base text-zinc-600 dark:text-zinc-400">
                14 października 2019 roku wraz z{' '}
                <strong className="font-semibold text-zinc-800 dark:text-zinc-200">
                  13-osobową grupą z Pszczyny
                </strong>{' '}
                wyruszyliśmy w Himalaje. Celem było dotarcie do znajdującego się
                na wysokości 5364 m{' '}
                <strong className="font-semibold text-zinc-800 dark:text-zinc-200">
                  Everest Base Camp
                </strong>{' '}
                oraz zdobycie{' '}
                <strong className="font-semibold text-zinc-800 dark:text-zinc-200">
                  Kalapatthar (5643 m)
                </strong>
                .
              </p>
            </header>

            <div className="mt-10 overflow-hidden rounded-2xl bg-zinc-100 dark:bg-zinc-800">
              <Zoomable image={panoramaImage}>
                <Image
                  src={panoramaImage}
                  alt="Aleksandra Kost na tle panoramy ośnieżonych szczytów Himalajów"
                  sizes="(min-width: 768px) 42rem, 100vw"
                  className="aspect-4/3 w-full cursor-zoom-in object-cover transition hover:opacity-95"
                  placeholder="blur"
                />
              </Zoomable>
            </div>

            <div className="mt-10 space-y-7 text-base text-zinc-600 dark:text-zinc-400">
              <h2 className="text-2xl font-bold tracking-tight text-zinc-800 dark:text-zinc-100">
                Najniebezpieczniejsze lotnisko świata
              </h2>

              <p>
                Najpierw polecieliśmy do{' '}
                <strong className="font-semibold text-zinc-800 dark:text-zinc-200">
                  Katmandu
                </strong>
                , stolicy Nepalu, a następnie do{' '}
                <strong className="font-semibold text-zinc-800 dark:text-zinc-200">
                  Lukli
                </strong>
                , skąd wyruszyliśmy na kilkunastodniowy trekking. Lotnisko w
                Lukli to najbardziej niebezpieczne lotnisko świata - sama
                świadomość tego działa na wyobraźnię.
              </p>

              <p className="border-l-2 border-lime-500 pl-4 text-lg font-medium text-zinc-800 italic dark:text-zinc-200">
                Pas startowy jest bardzo krótki. Na jednym jego końcu znajduje
                się skała, a na drugim przepaść. Samolot, podchodząc do
                lądowania, wyłącza silniki i ślizgiem wjeżdża na pas. Na jego
                końcu musi wyhamować - inaczej zderzy się z górą.
              </p>

              <h2 className="mt-12 text-2xl font-bold tracking-tight text-zinc-800 dark:text-zinc-100">
                Trasa wyprawy
              </h2>

              <p>
                Zgodnie z planem udało się nam dotrzeć do bazy u stóp najwyższej
                góry świata - Everest Base Camp. Oprócz bazy odwiedziliśmy
                również osady{' '}
                <strong className="font-semibold text-zinc-800 dark:text-zinc-200">
                  Phakding, Khumjung, Dingboche, Doliny Chhukung
                </strong>
                , a także zdobyliśmy{' '}
                <strong className="font-semibold text-zinc-800 dark:text-zinc-200">
                  Kalapatthar
                </strong>{' '}
                - najwyższy punkt całej wyprawy.
              </p>

              <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                <div className="overflow-hidden rounded-2xl bg-zinc-100 dark:bg-zinc-800">
                  <Zoomable image={szczytImage}>
                    <Image
                      src={szczytImage}
                      alt="Ośnieżony szczyt himalajski widziany z trasy wyprawy"
                      sizes="(min-width: 640px) 20rem, 100vw"
                      className="aspect-4/3 w-full cursor-zoom-in object-cover transition hover:opacity-95"
                      placeholder="blur"
                    />
                  </Zoomable>
                </div>
                <div className="overflow-hidden rounded-2xl bg-zinc-100 dark:bg-zinc-800">
                  <Zoomable image={bazaImage}>
                    <Image
                      src={bazaImage}
                      alt="Aleksandra Kost w okolicach Everest Base Camp podczas opadów śniegu"
                      sizes="(min-width: 640px) 20rem, 100vw"
                      className="aspect-4/3 w-full cursor-zoom-in object-cover transition hover:opacity-95"
                      placeholder="blur"
                    />
                  </Zoomable>
                </div>
              </div>

              <h2 className="mt-12 text-2xl font-bold tracking-tight text-zinc-800 dark:text-zinc-100">
                Rytm każdego dnia
              </h2>

              <p>
                Każdy dzień zaczynał się bardzo wcześnie. Aby dojść zgodnie z
                planem do bazy, obowiązywała duża dyscyplina. Pobudkę
                zaliczaliśmy około 6.00, a wychodziliśmy na szlak o 7.00 lub
                8.00. Przed wejściem na Kalapatthar trzeba było wstać już o
                3.00, by na szlak wyjść o 4 rano. Każdego dnia pokonywaliśmy
                kilka kilometrów, a wędrówka kończyła się około 16.00 dotarciem
                do lodży.
              </p>

              <p className="border-l-2 border-lime-500 pl-4 text-lg font-medium text-zinc-800 italic dark:text-zinc-200">
                Szliśmy po kilka kilometrów dziennie, ale mieliśmy ciężkie,
                prawie 20-kilogramowe plecaki, które nieśliśmy sami.
              </p>

              <h2 className="mt-12 text-2xl font-bold tracking-tight text-zinc-800 dark:text-zinc-100">
                Aklimatyzacja - klucz do wysokości
              </h2>

              <p>
                Na takiej wyprawie wysokogórskiej kluczowa jest{' '}
                <strong className="font-semibold text-zinc-800 dark:text-zinc-200">
                  aklimatyzacja
                </strong>
                . Polega ona na stopniowym przyzwyczajaniu się do dużej
                wysokości, odbywaniu wolnych spacerów i odpoczynku w lodżach. W
                dzień wychodzi się wysoko, a na nocleg schodzi niżej. W ten
                sposób organizm przyzwyczaja się do coraz mniejszej ilości
                tlenu.
              </p>

              <p>
                Byliśmy już bardzo wysoko, kiedy dolecieliśmy do Lukli (2800 m
                n.p.m.). By się zaaklimatyzować, schodziliśmy na 2600 m, po czym
                wychodziliśmy na 2900 m. W{' '}
                <strong className="font-semibold text-zinc-800 dark:text-zinc-200">
                  Namche Bazaar
                </strong>{' '}
                przebywaliśmy 2 dni - pierwszego dnia poszliśmy na spacer do
                miejsca położonego powyżej 4000 m, a na nocleg wracaliśmy do
                miasteczka. Drugie dwudniowe wyjście aklimatyzacyjne odbyliśmy w
                osadzie{' '}
                <strong className="font-semibold text-zinc-800 dark:text-zinc-200">
                  Dingboche
                </strong>
                . Tam jednego dnia wychodziliśmy na 5-tysięcznik{' '}
                <strong className="font-semibold text-zinc-800 dark:text-zinc-200">
                  Nangkartshang (5073 m)
                </strong>
                .
              </p>

              <h2 className="mt-12 text-2xl font-bold tracking-tight text-zinc-800 dark:text-zinc-100">
                Jaki, muły i nepalscy nosicze
              </h2>

              <p>
                Co ciekawe, na himalajskich szlakach na każdym kroku mija się
                jaki. Musieliśmy je przepuszczać, a czasem nawet schodzić w tym
                celu ze szlaków, które bywają bardzo wąskie. Podobnie było z
                wiszącymi mostami nad przepaściami - nieraz trzeba było się
                cofnąć, gdy z naprzeciwka nadchodził jak ze swoim pasterzem.
              </p>

              <div className="overflow-hidden rounded-2xl bg-zinc-100 dark:bg-zinc-800">
                <Zoomable image={mostImage}>
                  <Image
                    src={mostImage}
                    alt="Karawana zwierząt jucznych przechodząca przez wiszący most z modlitewnymi flagami"
                    sizes="(min-width: 768px) 42rem, 100vw"
                    className="aspect-4/3 w-full cursor-zoom-in object-cover transition hover:opacity-95"
                    placeholder="blur"
                  />
                </Zoomable>
              </div>

              <div className="rounded-2xl border border-zinc-100 p-5 dark:border-zinc-700/40">
                <p className="relative inline-block text-sm font-semibold text-zinc-800 dark:text-zinc-200">
                  <span className="absolute inset-0 -rotate-1 -skew-y-1 rounded bg-lime-300/60 dark:bg-lime-500/25" />
                  <span className="relative px-1">
                    Nepalscy nosicze - siła i pokora
                  </span>
                </p>
                <p className="mt-3 text-sm text-zinc-600 dark:text-zinc-400">
                  Pierwszeństwo na szlakach mają także zawodowi nepalscy
                  nosicze, którzy zrobili na wyprawie ogromne wrażenie. Potrafią
                  przenosić nawet{' '}
                  <strong className="font-semibold text-zinc-800 dark:text-zinc-200">
                    100-140 kg
                  </strong>
                  . Tak zarabiają na życie. To czasami bardzo stare osoby.
                  Towary taszczą w zwykłych koszach, pod które podkładają
                  wielkie poduchy, by nie poobijać ciała. Dla utrzymania
                  równowagi przez czoło przewieszają szarfę przypiętą do
                  ładunku. Czasami chodzą po szlakach w klapkach (japonkach!),
                  zwykłych tenisówkach czy sandałach.
                </p>
              </div>

              <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                <div className="overflow-hidden rounded-2xl bg-zinc-100 dark:bg-zinc-800">
                  <Zoomable image={mulyImage}>
                    <Image
                      src={mulyImage}
                      alt="Muły juczne niosące towary po himalajskim szlaku"
                      sizes="(min-width: 640px) 20rem, 100vw"
                      className="aspect-4/3 w-full cursor-zoom-in object-cover transition hover:opacity-95"
                      placeholder="blur"
                    />
                  </Zoomable>
                </div>
                <div className="overflow-hidden rounded-2xl bg-zinc-100 dark:bg-zinc-800">
                  <Zoomable image={dzieckoImage}>
                    <Image
                      src={dzieckoImage}
                      alt="Aleksandra Kost z nepalskim dzieckiem bawiącym się zielonym balonikiem"
                      sizes="(min-width: 640px) 20rem, 100vw"
                      className="aspect-4/3 w-full cursor-zoom-in object-cover transition hover:opacity-95"
                      placeholder="blur"
                    />
                  </Zoomable>
                </div>
              </div>

              <h2 className="mt-12 text-2xl font-bold tracking-tight text-zinc-800 dark:text-zinc-100">
                Magia Himalajów
              </h2>

              <p>
                Himalaje to magiczne miejsce. Kogoś, kto kocha góry, przyciągają
                jak magnes. Ta wyprawa była dla mnie nie tylko ogromnym
                przeżyciem, ale{' '}
                <strong className="font-semibold text-zinc-800 dark:text-zinc-200">
                  otwarciem na nowe możliwości i wyjściem ze strefy komfortu
                </strong>
                . Uczucia, jakich tam doznałam, pozostaną ze mną na zawsze.
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
