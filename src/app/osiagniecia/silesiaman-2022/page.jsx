import Image from 'next/image'
import Link from 'next/link'

import { Container } from '@/components/Container'
import { PhotoGallery, Zoomable } from '@/components/PhotoGallery'
import medalImage from '@/images/silesiaman-2022/medal.jpeg'
import pucharImage from '@/images/silesiaman-2022/puchar.jpeg'
import podiumImage from '@/images/silesiaman-2022/podium.jpeg'
import bratImage from '@/images/silesiaman-2022/brat.jpeg'
import piankaImage from '@/images/silesiaman-2022/pianka.jpeg'
import basenImage from '@/images/silesiaman-2022/basen.jpeg'

export const metadata = {
  title: 'Silesiaman Triathlon Pszczyna 2022 - II miejsce',
  description:
    'Relacja Aleksandry Kost z triathlonu Silesiaman Pszczyna 2022 w Łące - 500 m pływania, 20 km roweru, 5 km biegu. II miejsce w kategorii kobiet z gminy Pszczyna.',
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

export default function Silesiaman2022() {
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
                  22 maja 2022 · Łąka, Pszczyna
                </p>
                <h1 className="mt-6 text-4xl font-bold tracking-tight text-zinc-800 sm:text-5xl dark:text-zinc-100">
                  Silesiaman Triathlon Pszczyna 2022 - dzień spełnionego marzenia
                </h1>
                <p className="mt-6 text-base text-zinc-600 dark:text-zinc-400">
                  22 maja 2022 roku stanęłam na starcie{' '}
                  <strong className="font-semibold text-zinc-800 dark:text-zinc-200">
                    Silesiaman Triathlon Pszczyna 2022
                  </strong>{' '}
                  w Łące. To był dzień, który na zawsze zostanie w mojej
                  pamięci. Dzień spełnionego marzenia, ale też ogromnego
                  strachu, z którym musiałam się zmierzyć.
                </p>
              </header>

              <div className="mt-10 overflow-hidden rounded-2xl bg-zinc-100 dark:bg-zinc-800">
                <Zoomable image={piankaImage}>
                  <Image
                    src={piankaImage}
                    alt="Aleksandra Kost w piance triathlonowej przed startem zawodów Silesiaman"
                    sizes="(min-width: 768px) 42rem, 100vw"
                    className="aspect-4/3 w-full cursor-zoom-in object-cover transition hover:opacity-95"
                    placeholder="blur"
                  />
                </Zoomable>
              </div>

              <div className="mt-10 space-y-7 text-base text-zinc-600 dark:text-zinc-400">
                <h2 className="text-2xl font-bold tracking-tight text-zinc-800 dark:text-zinc-100">
                  Na starcie nie byłam sama
                </h2>

                <p>
                  Na starcie nie byłam sama - obok mnie stał mój brat. W
                  powietrzu czuć było emocje, napięcie i respekt przed tym, co
                  miało nadejść.
                </p>

                <div className="overflow-hidden rounded-2xl bg-zinc-100 dark:bg-zinc-800">
                  <Zoomable image={bratImage}>
                    <Image
                      src={bratImage}
                      alt="Aleksandra Kost z bratem po ukończeniu zawodów Silesiaman Triathlon Pszczyna 2022"
                      sizes="(min-width: 768px) 42rem, 100vw"
                      className="aspect-4/3 w-full cursor-zoom-in object-cover object-top transition hover:opacity-95"
                      placeholder="blur"
                    />
                  </Zoomable>
                </div>

                <h2 className="mt-12 text-2xl font-bold tracking-tight text-zinc-800 dark:text-zinc-100">
                  Walka w wodzie
                </h2>

                <p>
                  Najtrudniejszym etapem okazała się{' '}
                  <strong className="font-semibold text-zinc-800 dark:text-zinc-200">
                    woda
                  </strong>
                  . Silny wiatr wzburzył taflę jeziora i sprawił, że pływanie
                  było prawdziwą walką. Fale uderzały z każdej strony, ciężko
                  było złapać spokojny rytm oddechu, a momentami miałam
                  wrażenie, że woda odbiera mi całą pewność siebie. Każdy metr
                  wymagał ogromnej koncentracji i opanowania strachu.
                </p>

                <p className="border-l-2 border-lime-500 pl-4 text-lg font-medium text-zinc-800 italic dark:text-zinc-200">
                  To właśnie tam, w tej zimnej i niespokojnej wodzie, musiałam
                  najbardziej walczyć sama ze sobą.
                </p>

                <p>
                  Były chwile zwątpienia. Chwile, w których głowa podpowiadała,
                  że mogę odpuścić. Ale serce mówiło coś zupełnie innego - że po
                  to trenowałam, po to marzyłam, żeby właśnie teraz udowodnić
                  sobie, że potrafię.
                </p>

                <div className="overflow-hidden rounded-2xl bg-zinc-100 dark:bg-zinc-800">
                  <Zoomable image={basenImage}>
                    <Image
                      src={basenImage}
                      alt="Aleksandra Kost podczas treningu pływackiego na basenie - podwodne ujęcie z czepkiem i okularami"
                      sizes="(min-width: 768px) 42rem, 100vw"
                      className="aspect-4/3 w-full cursor-zoom-in object-cover transition hover:opacity-95"
                      placeholder="blur"
                    />
                  </Zoomable>
                </div>

                <p>
                  Kiedy wyszłam z wody, poczułam ogromną ulgę. Wiedziałam, że
                  pokonałam najtrudniejszy moment całego wyścigu. Dalej był już
                  tylko ruch do przodu - krok po kroku, kilometr po kilometrze.
                </p>

                <h2 className="mt-12 text-2xl font-bold tracking-tight text-zinc-800 dark:text-zinc-100">
                  Siła rodzi się w chwilach lęku
                </h2>

                <p>
                  Ten triathlon zmienił mnie bardziej, niż mogłam przypuszczać.
                  Pokazał mi, że{' '}
                  <strong className="font-semibold text-zinc-800 dark:text-zinc-200">
                    siła rodzi się w chwilach największego lęku
                  </strong>
                  . Że odwaga nie oznacza braku strachu, ale działanie mimo
                  niego.
                </p>

                <h2 className="mt-12 text-2xl font-bold tracking-tight text-zinc-800 dark:text-zinc-100">
                  Na mecie - II miejsce
                </h2>

                <p>
                  Na mecie czekała na mnie ogromna radość i wzruszenie.
                  Zdobyłam{' '}
                  <strong className="font-semibold text-zinc-800 dark:text-zinc-200">
                    II miejsce w kategorii kobiet mieszkających w powiecie
                    pszczyńskim
                  </strong>
                  . To był moment, który uświadomił mi, że warto było przejść
                  przez cały wysiłek, stres i walkę z własnymi słabościami.
                </p>

                <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                  <div className="overflow-hidden rounded-2xl bg-zinc-100 dark:bg-zinc-800">
                    <Zoomable image={medalImage}>
                      <Image
                        src={medalImage}
                        alt="Medal Silesiaman Triathlon Pszczyna 2022 z dystansami 500 m / 20 km / 5 km"
                        sizes="(min-width: 640px) 20rem, 100vw"
                        className="aspect-4/3 w-full cursor-zoom-in object-cover transition hover:opacity-95"
                        placeholder="blur"
                      />
                    </Zoomable>
                  </div>
                  <div className="overflow-hidden rounded-2xl bg-zinc-100 dark:bg-zinc-800">
                    <Zoomable image={pucharImage}>
                      <Image
                        src={pucharImage}
                        alt="Aleksandra Kost z pucharem za II miejsce w kategorii Mieszkanka Gminy Pszczyna"
                        sizes="(min-width: 640px) 20rem, 100vw"
                        className="aspect-4/3 w-full cursor-zoom-in object-cover object-top transition hover:opacity-95"
                        placeholder="blur"
                      />
                    </Zoomable>
                  </div>
                </div>

                <div className="overflow-hidden rounded-2xl bg-zinc-100 dark:bg-zinc-800">
                  <Zoomable image={podiumImage}>
                    <Image
                      src={podiumImage}
                      alt="Aleksandra Kost z bratem na podium zawodów Silesiaman Triathlon Pszczyna 2022"
                      sizes="(min-width: 768px) 42rem, 100vw"
                      className="aspect-4/3 w-full cursor-zoom-in object-cover object-center transition hover:opacity-95"
                      placeholder="blur"
                    />
                  </Zoomable>
                </div>

                <h2 className="mt-12 text-2xl font-bold tracking-tight text-zinc-800 dark:text-zinc-100">
                  Coś więcej niż zawody
                </h2>

                <p>
                  Silesiaman w Łące był czymś więcej niż zawodami. To był
                  moment, który ruszył mnie z miejsca i sprawił, że stałam się
                  silniejsza - nie tylko jako zawodniczka, ale przede wszystkim
                  jako człowiek.
                </p>

                <div className="mt-12 rounded-2xl bg-lime-50 p-6 dark:bg-lime-500/10">
                  <p className="text-base text-zinc-700 dark:text-zinc-300">
                    Ciekawi Cię historia kolejnych startów i wypraw?{' '}
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
