import Image from 'next/image'
import Link from 'next/link'

import { Container } from '@/components/Container'
import { PhotoGallery, Zoomable } from '@/components/PhotoGallery'
import rudawiecImage from '@/images/korona-gor-polski/rudawiec.jpeg'
import wielkaSowaImage from '@/images/korona-gor-polski/wielka-sowa.jpeg'
import snieznikImage from '@/images/korona-gor-polski/snieznik.jpeg'
import slonImage from '@/images/korona-gor-polski/slon.jpeg'
import skyBridgeImage from '@/images/korona-gor-polski/sky-bridge.jpeg'
import orlicaImage from '@/images/korona-gor-polski/orlica.jpeg'
import jagodnaImage from '@/images/korona-gor-polski/jagodna.jpeg'
import waligoraImage from '@/images/korona-gor-polski/waligora.jpeg'
import skalnikImage from '@/images/korona-gor-polski/skalnik.jpeg'

export const metadata = {
  title: 'Korona Gór Polski - 14 lat, 28 szczytów',
  description:
    'Relacja Aleksandry Kost ze zdobywania Korony Gór Polski - od pierwszych Rysów w 2012 roku do ostatniego Lubomira w styczniu 2026. 28 najwyższych szczytów polskich pasm górskich.',
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

const szczyty = [
  { data: '01.05.2012', pasmo: 'Karkonosze', szczyt: 'Śnieżka', wysokosc: 1603 },
  {
    data: '12.05.2012',
    pasmo: 'Góry Stołowe',
    szczyt: 'Szczeliniec Wielki',
    wysokosc: 919,
  },
  { data: '30.06.2012', pasmo: 'Tatry', szczyt: 'Rysy', wysokosc: 2499 },
  { data: '21.06.2014', pasmo: 'Bieszczady', szczyt: 'Tarnica', wysokosc: 1346 },
  {
    data: '11.07.2015',
    pasmo: 'Beskid Żywiecki',
    szczyt: 'Babia Góra',
    wysokosc: 1725,
  },
  {
    data: '30.01.2016',
    pasmo: 'Beskid Śląski',
    szczyt: 'Skrzyczne',
    wysokosc: 1257,
  },
  { data: '29.04.2018', pasmo: 'Beskid Mały', szczyt: 'Czupel', wysokosc: 934 },
  {
    data: '27.05.2018',
    pasmo: 'Góry Opawskie',
    szczyt: 'Biskupia Kopa',
    wysokosc: 889,
  },
  {
    data: '16.09.2018',
    pasmo: 'Beskid Wyspowy',
    szczyt: 'Mogielica',
    wysokosc: 1170,
  },
  {
    data: '13.10.2018',
    pasmo: 'Beskid Niski',
    szczyt: 'Lackowa',
    wysokosc: 997,
  },
  { data: '14.04.2019', pasmo: 'Gorce', szczyt: 'Turbacz', wysokosc: 1310 },
  {
    data: '26.05.2019',
    pasmo: 'Góry Izerskie',
    szczyt: 'Wysoka Kopa',
    wysokosc: 1126,
  },
  {
    data: '26.05.2019',
    pasmo: 'Góry Kaczawskie',
    szczyt: 'Skopiec',
    wysokosc: 724,
  },
  { data: '23.06.2019', pasmo: 'Masyw Ślęży', szczyt: 'Ślęża', wysokosc: 718 },
  {
    data: '04.09.2022',
    pasmo: 'Góry Świętokrzyskie',
    szczyt: 'Łysica',
    wysokosc: 612,
  },
  { data: '20.08.2025', pasmo: 'Góry Złote', szczyt: 'Kowadło', wysokosc: 989 },
  {
    data: '20.08.2025',
    pasmo: 'Góry Bystrzyckie',
    szczyt: 'Jagodna',
    wysokosc: 977,
  },
  {
    data: '20.08.2025',
    pasmo: 'Góry Orlickie',
    szczyt: 'Orlica',
    wysokosc: 1084,
  },
  {
    data: '20.08.2025',
    pasmo: 'Góry Bialskie',
    szczyt: 'Rudawiec',
    wysokosc: 1112,
  },
  {
    data: '21.08.2025',
    pasmo: 'Góry Bardzkie',
    szczyt: 'Kłodzka Góra',
    wysokosc: 765,
  },
  {
    data: '22.08.2025',
    pasmo: 'Masyw Śnieżnika',
    szczyt: 'Śnieżnik',
    wysokosc: 1425,
  },
  {
    data: '23.08.2025',
    pasmo: 'Góry Wałbrzyskie',
    szczyt: 'Chełmiec',
    wysokosc: 869,
  },
  {
    data: '23.08.2025',
    pasmo: 'Góry Sowie',
    szczyt: 'Wielka Sowa',
    wysokosc: 1015,
  },
  {
    data: '23.08.2025',
    pasmo: 'Góry Kamienne',
    szczyt: 'Waligóra',
    wysokosc: 936,
  },
  {
    data: '24.08.2025',
    pasmo: 'Rudawy Janowickie',
    szczyt: 'Skalnik',
    wysokosc: 945,
  },
  {
    data: '03.01.2026',
    pasmo: 'Beskid Sądecki',
    szczyt: 'Radziejowa',
    wysokosc: 1262,
  },
  { data: '03.01.2026', pasmo: 'Pieniny', szczyt: 'Wysoka', wysokosc: 1050 },
  {
    data: '04.01.2026',
    pasmo: 'Beskid Makowski',
    szczyt: 'Lubomir',
    wysokosc: 912,
  },
]

export default function KoronaGorPolski() {
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
                2012 – styczeń 2026 · Polska
              </p>
              <h1 className="mt-6 text-4xl font-bold tracking-tight text-zinc-800 sm:text-5xl dark:text-zinc-100">
                Korona Gór Polski — 14 lat, 28 szczytów
              </h1>
              <p className="mt-6 text-base text-zinc-600 dark:text-zinc-400">
                Pomysł zdobycia{' '}
                <strong className="font-semibold text-zinc-800 dark:text-zinc-200">
                  Korony Gór Polski
                </strong>{' '}
                narodził się zupełnie spontanicznie. Bez wielkiego planu, bez
                presji czasu — po prostu z potrzeby ruchu, ciekawości i chęci
                przeżycia czegoś więcej. To, co zaczęło się w 2012 roku jako
                luźna idea, z czasem przerodziło się w wieloletnią przygodę,
                która zakończyła się dopiero w styczniu 2026 roku.
              </p>
            </header>

            <div className="mt-10 overflow-hidden rounded-2xl bg-zinc-100 dark:bg-zinc-800">
              <Zoomable image={rudawiecImage}>
                <Image
                  src={rudawiecImage}
                  alt="Zdobyty szczyt Rudawiec w Górach Bialskich — moment radości na szlaku"
                  sizes="(min-width: 768px) 42rem, 100vw"
                  className="aspect-4/3 w-full cursor-zoom-in object-cover transition hover:opacity-95"
                  placeholder="blur"
                />
              </Zoomable>
            </div>

            <div className="mt-10 space-y-7 text-base text-zinc-600 dark:text-zinc-400">
              <h2 className="text-2xl font-bold tracking-tight text-zinc-800 dark:text-zinc-100">
                Droga, która uczy pokory
              </h2>

              <p>
                Ta droga nauczyła mnie jednego — wszystko, co wartościowe,
                wymaga{' '}
                <strong className="font-semibold text-zinc-800 dark:text-zinc-200">
                  czasu, zaangażowania i determinacji
                </strong>
                . Nie zawsze było łatwo. Życie potrafi zaskoczyć, pojawiają się
                momenty, które zatrzymują, zmieniają kierunek albo każą na
                chwilę odpuścić. Ale to nie koniec drogi — to jej część.
              </p>

              <p className="border-l-2 border-lime-500 pl-4 text-lg font-medium text-zinc-800 italic dark:text-zinc-200">
                Bo niezależnie od wszystkiego… czas i tak płynie. I tylko od nas
                zależy, co z nim zrobimy.
              </p>

              <h2 className="mt-12 text-2xl font-bold tracking-tight text-zinc-800 dark:text-zinc-100">
                Różnorodność naszego kraju
              </h2>

              <p>
                Korona Gór Polski pokazała różnorodność naszego kraju. Każda
                góra była inna — inne ukształtowanie terenu, inne widoki, inna
                energia. Od łagodnych podejść po wymagające szlaki, od ciszy i
                spokoju po surowe, górskie warunki. Zdobywaliśmy je w każdej
                porze roku — w upale, deszczu, śniegu i mrozie. Każda wyprawa
                miała swój charakter i zostawiła po sobie wspomnienia, których
                nie da się zastąpić niczym innym.
              </p>

              <h2 className="mt-12 text-2xl font-bold tracking-tight text-zinc-800 dark:text-zinc-100">
                Pierwszy szczyt — Rysy
              </h2>

              <p>
                Najlepsze wspomnienia?{' '}
                <strong className="font-semibold text-zinc-800 dark:text-zinc-200">
                  Pierwszy szczyt — Rysy.
                </strong>{' '}
                Wyjeżdżaliśmy z domu w kompletnej ulewie, pokłóceni, że nie ma
                sensu tam jechać. Ja jednak trwałam przy swoim, coś mnie tam
                ciągnęło. Zdobyliśmy Rysy, chociaż widoki zostawiły wiele do
                życzenia.
              </p>

              <h2 className="mt-12 text-2xl font-bold tracking-tight text-zinc-800 dark:text-zinc-100">
                Moje ulubione schronisko — Chatka Górzystów
              </h2>

              <p>
                Co polecam?{' '}
                <strong className="font-semibold text-zinc-800 dark:text-zinc-200">
                  Schronisko Chatka Górzystów
                </strong>{' '}
                na Hali Izerskiej w Górach Izerskich, niedaleko Jakuszyc.
                Poznałam tam klimat dawnych górskich schronisk — brak prądu,
                kąpiele w strumieniu i samodzielne palenie w piecach. Smak
                gofrów z jagodami pozostanie ze mną na długo.
              </p>

              <p className="border-l-2 border-lime-500 pl-4 text-lg font-medium text-zinc-800 italic dark:text-zinc-200">
                Wisząca gitara na ścianie, cały regał książek do czytania i
                świeczki palone na wieczór. Niech ten klimat pozostanie w tym
                miejscu jak najdłużej.
              </p>

              <h2 className="mt-12 text-2xl font-bold tracking-tight text-zinc-800 dark:text-zinc-100">
                Największe zaskoczenie — Góry Sowie
              </h2>

              <p>
                Które góry najlepsze? Wszystkie są piękne, jedne znałam lepiej,
                na innych byłam po raz pierwszy.{' '}
                <strong className="font-semibold text-zinc-800 dark:text-zinc-200">
                  Góry Sowie bardzo mnie zaskoczyły.
                </strong>{' '}
                Są piękne, mają swój klimat. Na szczycie można zapalić ognisko,
                schować się pod daszkiem oraz wejść na wieżę widokową. Jest tam
                również miejsce na modlitwę — kaplica, gdzie w okresie letnim
                odbywają się msze św. Do tych gór chętnie wrócę.
              </p>

              <div className="overflow-hidden rounded-2xl bg-zinc-100 dark:bg-zinc-800">
                <Zoomable image={wielkaSowaImage}>
                  <Image
                    src={wielkaSowaImage}
                    alt="Aleksandra Kost z mężem na szczycie Wielkiej Sowy w Górach Sowich"
                    sizes="(min-width: 768px) 42rem, 100vw"
                    className="aspect-4/3 w-full cursor-zoom-in object-cover transition hover:opacity-95"
                    placeholder="blur"
                  />
                </Zoomable>
              </div>

              <h2 className="mt-12 text-2xl font-bold tracking-tight text-zinc-800 dark:text-zinc-100">
                Najtrudniej — Śnieżnik
              </h2>

              <p>
                Gdzie było najtrudniej? Myślę, że na{' '}
                <strong className="font-semibold text-zinc-800 dark:text-zinc-200">
                  Śnieżniku
                </strong>
                , ale tylko dlatego, że trasa, którą wybraliśmy, rozpoczynała
                się w Czechach i tam się też kończyła.{' '}
                <strong className="font-semibold text-zinc-800 dark:text-zinc-200">
                  Była bardzo długa, podzielona na dwa dni z noclegiem.
                </strong>{' '}
                Spaliśmy w schronisku na Śnieżniku im. Zbigniewa Fastnachta.
                Poznaliśmy dawnych rezydentów i gospodarzy tego obiektu,
                rozmów nie było końca. Pogoda była piękna, widoki również —
                skorzystaliśmy z nich na 100%.
              </p>

              <div className="overflow-hidden rounded-2xl bg-zinc-100 dark:bg-zinc-800">
                <Zoomable image={snieznikImage}>
                  <Image
                    src={snieznikImage}
                    alt="Widok ze szlaku na Masyw Śnieżnika z drogowskazem kierującym w stronę Sky Bridge"
                    sizes="(min-width: 768px) 42rem, 100vw"
                    className="aspect-4/3 w-full cursor-zoom-in object-cover transition hover:opacity-95"
                    placeholder="blur"
                  />
                </Zoomable>
              </div>

              <p>
                Ciekawostką jest również to, że przeszliśmy przez{' '}
                <strong className="font-semibold text-zinc-800 dark:text-zinc-200">
                  Sky Bridge
                </strong>{' '}
                — najdłuższy wiszący most dla pieszych, mierzący 721 m. Po
                drodze mijaliśmy kamiennego Słonia — charakterystyczną rzeźbę
                strzegącą szlaku.
              </p>

              <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                <div className="overflow-hidden rounded-2xl bg-zinc-100 dark:bg-zinc-800">
                  <Zoomable image={slonImage}>
                    <Image
                      src={slonImage}
                      alt="Kamienna rzeźba Słonia na kamiennym cokole w masywie Śnieżnika"
                      sizes="(min-width: 640px) 20rem, 100vw"
                      className="aspect-4/3 w-full cursor-zoom-in object-cover transition hover:opacity-95"
                      placeholder="blur"
                    />
                  </Zoomable>
                </div>
                <div className="overflow-hidden rounded-2xl bg-zinc-100 dark:bg-zinc-800">
                  <Zoomable image={skyBridgeImage}>
                    <Image
                      src={skyBridgeImage}
                      alt="Aleksandra Kost na Sky Bridge — najdłuższym wiszącym moście dla pieszych"
                      sizes="(min-width: 640px) 20rem, 100vw"
                      className="aspect-4/3 w-full cursor-zoom-in object-cover transition hover:opacity-95"
                      placeholder="blur"
                    />
                  </Zoomable>
                </div>
              </div>

              <h2 className="mt-12 text-2xl font-bold tracking-tight text-zinc-800 dark:text-zinc-100">
                Galeria szlaków
              </h2>

              <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                <div className="overflow-hidden rounded-2xl bg-zinc-100 dark:bg-zinc-800">
                  <Zoomable image={orlicaImage}>
                    <Image
                      src={orlicaImage}
                      alt="Szczyt Orlica w Górach Orlickich — obelisk graniczny"
                      sizes="(min-width: 640px) 20rem, 100vw"
                      className="aspect-4/3 w-full cursor-zoom-in object-cover transition hover:opacity-95"
                      placeholder="blur"
                    />
                  </Zoomable>
                </div>
                <div className="overflow-hidden rounded-2xl bg-zinc-100 dark:bg-zinc-800">
                  <Zoomable image={jagodnaImage}>
                    <Image
                      src={jagodnaImage}
                      alt="Tabliczka szczytowa Jagodnej (977 m) w Górach Bystrzyckich"
                      sizes="(min-width: 640px) 20rem, 100vw"
                      className="aspect-4/3 w-full cursor-zoom-in object-cover transition hover:opacity-95"
                      placeholder="blur"
                    />
                  </Zoomable>
                </div>
                <div className="overflow-hidden rounded-2xl bg-zinc-100 dark:bg-zinc-800">
                  <Zoomable image={waligoraImage}>
                    <Image
                      src={waligoraImage}
                      alt="Szczyt Waligóra (936 m) w Górach Kamiennych"
                      sizes="(min-width: 640px) 20rem, 100vw"
                      className="aspect-4/3 w-full cursor-zoom-in object-cover transition hover:opacity-95"
                      placeholder="blur"
                    />
                  </Zoomable>
                </div>
                <div className="overflow-hidden rounded-2xl bg-zinc-100 dark:bg-zinc-800">
                  <Zoomable image={skalnikImage}>
                    <Image
                      src={skalnikImage}
                      alt="Tablica informacyjna na szczycie Skalnika (945 m) w Rudawach Janowickich"
                      sizes="(min-width: 640px) 20rem, 100vw"
                      className="aspect-4/3 w-full cursor-zoom-in object-cover transition hover:opacity-95"
                      placeholder="blur"
                    />
                  </Zoomable>
                </div>
              </div>

              <h2 className="mt-12 text-2xl font-bold tracking-tight text-zinc-800 dark:text-zinc-100">
                Wszystkie 28 szczytów
              </h2>

              <div className="overflow-hidden rounded-2xl border border-zinc-100 dark:border-zinc-700/40">
                <table className="w-full text-left text-sm">
                  <thead className="bg-zinc-50 text-xs tracking-wide text-zinc-500 uppercase dark:bg-zinc-800/50 dark:text-zinc-400">
                    <tr>
                      <th className="px-4 py-3 font-semibold">Data</th>
                      <th className="px-4 py-3 font-semibold">Pasmo</th>
                      <th className="px-4 py-3 font-semibold">Szczyt</th>
                      <th className="px-4 py-3 text-right font-semibold">
                        m n.p.m.
                      </th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-zinc-100 dark:divide-zinc-700/40">
                    {szczyty.map((s, i) => (
                      <tr
                        key={i}
                        className="text-zinc-600 dark:text-zinc-400"
                      >
                        <td className="px-4 py-3 whitespace-nowrap tabular-nums">
                          {s.data}
                        </td>
                        <td className="px-4 py-3">{s.pasmo}</td>
                        <td className="px-4 py-3 font-medium text-zinc-800 dark:text-zinc-200">
                          {s.szczyt}
                        </td>
                        <td className="px-4 py-3 text-right tabular-nums">
                          {s.wysokosc}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>

              <h2 className="mt-12 text-2xl font-bold tracking-tight text-zinc-800 dark:text-zinc-100">
                Podsumowując…
              </h2>

              <p>
                To nie był tylko cel do odhaczenia.{' '}
                <strong className="font-semibold text-zinc-800 dark:text-zinc-200">
                  To była droga, która uczyła pokory, cierpliwości i konsekwencji.
                </strong>{' '}
                I właśnie dlatego ma dla mnie tak ogromną wartość.
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
