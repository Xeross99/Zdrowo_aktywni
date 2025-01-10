import Image from 'next/image'
import Link from 'next/link'
import clsx from 'clsx'

import { Container } from '@/components/Container'
import { InstagramIcon, FacebookIcon, StravaIcon, TikTokIcon } from '@/components/SocialIcons'
import portraitImage from '@/images/sport/img3.jpg'

function SocialLink({ className, href, children, icon: Icon }) {
  return (
    <li className={clsx(className, 'flex')}>
      <Link
        href={href}
        className="group flex text-sm font-medium text-zinc-800 transition hover:text-lime-500"
      >
        <Icon className="h-6 w-6 flex-none fill-zinc-500 transition group-hover:fill-lime-500" />
        <span className="ml-4">{children}</span>
      </Link>
    </li>
  )
}

function MailIcon(props) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" {...props}>
      <path
        fillRule="evenodd"
        d="M6 5a3 3 0 0 0-3 3v8a3 3 0 0 0 3 3h12a3 3 0 0 0 3-3V8a3 3 0 0 0-3-3H6Zm.245 2.187a.75.75 0 0 0-.99 1.126l6.25 5.5a.75.75 0 0 0 .99 0l6.25-5.5a.75.75 0 0 0-.99-1.126L12 12.251 6.245 7.187Z"
      />
    </svg>
  )
}

export const metadata = {
  title:       'O mnie',
  description: 'Nazywam się Aleksandra Kost, inspiruję do zdrowych zmian i lepszej przyszłości',
}

export default function About() {
  return (
    <Container className="mt-16 sm:mt-32 pb-16 sm:pb-32">
      <div className="grid grid-cols-1 gap-y-16 lg:grid-cols-2 lg:grid-rows-[auto_1fr] lg:gap-y-12">
        <div className="lg:pl-20">
          <div className="max-w-xs px-2.5 lg:max-w-none">
            <Image
              src={portraitImage}
              alt=""
              sizes="(min-width: 1024px) 32rem, 20rem"
              className="aspect-square rotate-3 rounded-2xl bg-zinc-100 object-cover"
            />
          </div>
        </div>
        <div className="lg:order-first lg:row-span-2">
          <h1 className="text-4xl font-bold tracking-tight text-zinc-800 sm:text-5xl">
            Nazywam się Aleksandra Kost, Inspiruję do zdrowych zmian i lepszej przyszłości
          </h1>
          <div className="mt-6 space-y-7 text-base text-zinc-600">
            <p>
              Jako absolwentka Akademii Wychowania
              Fizycznego w Katowicach łączę wiedzę i pasję, by inspirować ludzi
              do pozytywnych zmian. Wierzę, że wszystko zaczyna się od nawyków –
              małych, konsekwentnych kroków prowadzących do wielkich rezultatów.
            </p>
            <p>
              Moim celem jest prowadzenie ludzi w kierunku zdrowszego, pełniejszego
              życia – pokazuję im, jak dobre nawyki, konsekwencja i dyscyplina mogą
              zmieniać rzeczywistość. Wierzę, że jednym z najważniejszych życiowych
              celów jest wykształcenie nawyków przynoszących zdrowie, szczęście i
              radość z każdego dnia.
            </p>
            <p>
              Codziennie piję aloes i biegam co najmniej 5 kilometrów– robię to nie
              tylko dla zdrowia, ale dla lepszej jakości życia. Biorę odpowiedzialność
              za swoje życie,  zdrowie i przyszłość. Na Akademiach Zdrowia które powadzę,
              to przekazuję innym.  Jestem himalaistką, triathlonistką, maratończykiem.
              Wiele jeszcze przede mną. Nowe wyzwania – traktuję jako szansę na rozwój i
              przełamywanie własnych granic.
            </p>
            <p>
              Uważam, że każdy ma w sobie potencjał do wielkich rzeczy – potrzebuje jedynie
              wsparcia, inspiracji i odpowiednich narzędzi. To właśnie staram się robić w
              swojej pracy, dzieląc się wiedzą jako nauczyciel, dietetyk,  instruktor czy
              trener.Poza pracą inwestuję w siebie i swoją rodzinę. Kocham książki, górskie
              wędrówki, dobre jedzenie i ludzi. Moje marzenia? Hm… Główny Szlak Beskidzki,
              zdobycie maratonów stolic Europy, niezależność finansowa, ale przede wszystkim
              – zdrowie, szczęście oraz dzielenie się swoją pozytywną energią z innymi.
            </p>
          </div>
        </div>
        <div className="lg:pl-20">
          <ul role="list">
            <SocialLink href="https://www.facebook.com/aleksandra.kost.90" icon={FacebookIcon}>
              Facebook
            </SocialLink>
            <SocialLink href="https://www.instagram.com/flow_by_ola/" icon={InstagramIcon} className="mt-4">
              Instagram
            </SocialLink>
            <SocialLink href="https://www.tiktok.com/@aleksandra_kost_" icon={TikTokIcon} className="mt-4">
              TikTok
            </SocialLink>
            <SocialLink href="https://www.strava.com/athletes/aleksandra_kost" icon={StravaIcon} className="mt-4">
              Strava
            </SocialLink>
            <SocialLink href="mailto:zdrowoaktywnii@gmail.com" icon={MailIcon} className="mt-8 border-t border-zinc-100 pt-8">
              zdrowoaktywnii@gmail.com
            </SocialLink>
          </ul>
        </div>
      </div>
    </Container>
  )
}
