import Image from 'next/image'
import Link from 'next/link'
import clsx from 'clsx'

import { Container } from '@/components/Container'
import { Card } from '@/components/Card'
import {
  FacebookIcon,
  InstagramIcon,
  TikTokIcon,
  StravaIcon,
} from '@/components/SocialIcons'
import image1 from '@/images/sport/img1.jpg'
import image2 from '@/images/sport/img2.jpg'
import image3 from '@/images/sport/img3.jpg'
import image4 from '@/images/sport/img4.jpg'

function SocialLink({ icon: Icon, ...props }) {
  return (
    <Link className="group -m-1 p-1" {...props}>
      <Icon className="h-6 w-6 fill-zinc-500 transition group-hover:fill-zinc-600 dark:fill-zinc-400 dark:group-hover:fill-zinc-300" />
    </Link>
  )
}

function ActivityCard({ title, description, href }) {
  return (
    <Card as="article">
      <Card.Title href={href}>{title}</Card.Title>
      <Card.Description>{description}</Card.Description>
      <Card.Cta>Więcej</Card.Cta>
    </Card>
  )
}

function Photos() {
  let rotations = ['rotate-2', '-rotate-2', 'rotate-2', '-rotate-2']

  return (
    <div className="mt-16 sm:mt-20">
      <div className="-my-4 flex justify-center gap-5 overflow-hidden py-4 sm:gap-8">
        {[image1, image2, image3, image4].map((image, imageIndex) => (
          <div
            key={image.src}
            className={clsx(
              'relative w-44 flex-none overflow-hidden rounded-xl bg-zinc-100 sm:w-72 sm:rounded-2xl dark:bg-zinc-800 transition-transform duration-500 ease-out hover:rotate-0 hover:scale-105',
              rotations[imageIndex % rotations.length],
            )}
          >
            <div className="aspect-9/10">
              <Image
                src={image}
                alt=""
                sizes="(min-width: 640px) 18rem, 11rem"
                className="absolute inset-0 h-full w-full object-cover"
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

function StatCard({ value, label }) {
  return (
    <div className="rounded-2xl border border-zinc-100 p-6 text-center dark:border-zinc-700/40">
      <dd className="text-3xl font-bold text-lime-500">{value}</dd>
      <dt className="mt-2 text-sm text-zinc-600 dark:text-zinc-400">{label}</dt>
    </div>
  )
}

export default function Home() {
  return (
    <>
      <Container className="mt-9">
        <div className="max-w-2xl">
          <h1 className="text-4xl font-bold tracking-tight text-zinc-800 sm:text-5xl dark:text-zinc-100">
            Nazywam się{' '}
            <span className="relative whitespace-nowrap">
              <svg aria-hidden="true" viewBox="0 0 418 42" className="absolute top-2/3 left-0 h-[0.58em] w-full fill-lime-300/70 dark:fill-lime-500/30" preserveAspectRatio="none">
                <path d="M203.371.916c-26.013-2.078-76.686 1.963-124.73 9.946L67.3 12.749C35.421 18.062 18.2 21.766 6.004 25.934 1.244 27.561.828 27.778.874 28.61c.07 1.214.828 1.121 9.595-1.176 9.072-2.377 17.15-3.92 39.246-7.496C123.565 7.986 157.869 4.492 195.942 5.046c7.461.108 19.25 1.696 19.17 2.582-.107 1.183-7.874 4.31-25.75 10.366-21.992 7.45-35.43 12.534-36.701 13.884-2.173 2.308-.202 4.407 4.442 4.734 2.654.187 3.263.157 15.593-.78 35.401-2.686 57.944-3.488 88.365-3.143 46.327.526 75.721 2.23 130.788 7.584 19.787 1.924 20.814 1.98 24.557 1.332l.066-.011c1.201-.203 1.53-1.825.399-2.335-2.911-1.31-4.893-1.604-22.048-3.261-57.509-5.556-87.871-7.36-132.059-7.842-23.239-.254-33.617-.116-50.627.674-11.629.54-42.371 2.494-46.696 2.967-2.359.259 8.133-3.625 26.504-9.81 23.239-7.825 27.934-10.149 28.304-14.005.417-4.348-3.529-6-16.878-7.066Z" />
              </svg>
              <span className="relative">Aleksandra Kost</span>
            </span>
            .
          </h1>
          <p className="mt-6 text-lg text-zinc-600 dark:text-zinc-400">
            Trenerka, dietetyczka i&nbsp;himalaistka. Inspiruję do zdrowych zmian
            i&nbsp;aktywnego życia. Każdy krok, nawyk i&nbsp;wyzwanie przybliża nas
            do lepszej wersji siebie.
          </p>
          <div className="mt-6 flex gap-6">
            <SocialLink
              href="https://www.facebook.com/aleksandra.kost.90"
              aria-label="Facebook"
              target="_blank"
              icon={FacebookIcon}
            />
            <SocialLink
              href="https://www.instagram.com/flow_by_ola/"
              aria-label="Instagram"
              target="_blank"
              icon={InstagramIcon}
            />
            <SocialLink
              href="https://www.tiktok.com/@aleksandra_kost_"
              aria-label="TikTok"
              target="_blank"
              icon={TikTokIcon}
            />
            <SocialLink
              href="https://www.strava.com/athletes/aleksandra_kost"
              aria-label="Strava"
              target="_blank"
              icon={StravaIcon}
            />
          </div>
        </div>
      </Container>
      <Photos />
      <Container className="mt-24 md:mt-28">
        <div className="mx-auto grid max-w-xl grid-cols-1 gap-y-20 lg:max-w-none lg:grid-cols-2">
          <div className="flex flex-col gap-16">
            <ActivityCard
              title="Nordic Walking"
              description="Grupowe zajęcia nordic walking w pięknych lokalizacjach. Dla każdego, niezależnie od wieku i kondycji."
              href="/zajecia"
            />
            <ActivityCard
              title="Konsultacje dietetyczne"
              description="Indywidualne porady dietetyczne dopasowane do Twojego stylu życia i celów zdrowotnych."
              href="/zajecia"
            />
            <ActivityCard
              title="Wykłady & warsztaty"
              description="Wykłady o biohackingu, zdrowym stylu życia i budowaniu nawyków zdrowotnych."
              href="/zajecia"
            />
          </div>
          <div className="space-y-10 lg:pl-16 xl:pl-24">
            <div className="rounded-2xl border border-zinc-100 p-6 dark:border-zinc-700/40">
              <h2 className="flex text-sm font-semibold text-zinc-900 dark:text-zinc-100">
                <svg viewBox="0 0 24 24" fill="none" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" className="h-6 w-6 flex-none">
                  <path d="M6.75 7.5l3 2.25-3 2.25m4.5 0h3m-9 8.25h13.5A2.25 2.25 0 0021 18V6a2.25 2.25 0 00-2.25-2.25H5.25A2.25 2.25 0 003 6v12a2.25 2.25 0 002.25 2.25z" className="fill-zinc-100 stroke-zinc-400 dark:fill-zinc-100/10 dark:stroke-zinc-500" />
                </svg>
                <span className="ml-3">Osiągnięcia</span>
              </h2>
              <div className="mt-6 grid grid-cols-3 gap-4">
                <StatCard value="15+" label="Maratony" />
                <StatCard value="10+" label="Triatlony" />
                <StatCard value="3" label="Himalaje" />
              </div>
              <Link
                href="/osiagniecia"
                className="group mt-6 inline-flex w-full items-center justify-center gap-2 rounded-md bg-zinc-50 py-2 px-3 text-sm font-medium text-zinc-900 outline-offset-2 transition hover:bg-zinc-100 active:bg-zinc-100 active:text-zinc-900/60 dark:bg-zinc-800/50 dark:text-zinc-300 dark:hover:bg-zinc-800 dark:hover:text-zinc-50"
              >
                Wszystkie osiągnięcia
              </Link>
            </div>
            <div className="rounded-2xl border border-zinc-100 p-6 dark:border-zinc-700/40">
              <h2 className="flex text-sm font-semibold text-zinc-900 dark:text-zinc-100">
                <svg viewBox="0 0 24 24" fill="none" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" className="h-6 w-6 flex-none">
                  <path d="M2.75 7.75a3 3 0 0 1 3-3h12.5a3 3 0 0 1 3 3v8.5a3 3 0 0 1-3 3H5.75a3 3 0 0 1-3-3v-8.5Z" className="fill-zinc-100 stroke-zinc-400 dark:fill-zinc-100/10 dark:stroke-zinc-500" />
                  <path d="m4 6 6.024 5.479a2.915 2.915 0 0 0 3.952 0L20 6" className="stroke-zinc-400 dark:stroke-zinc-500" />
                </svg>
                <span className="ml-3">Kontakt</span>
              </h2>
              <p className="mt-2 text-sm text-zinc-600 dark:text-zinc-400">
                Zainteresowana/y? Jeden krok wystarczy, żeby zacząć.
              </p>
              <div className="mt-4 space-y-2 text-sm">
                <a href="mailto:zdrowoaktywnii@gmail.com" className="block text-lime-500 hover:text-lime-400 transition">
                  zdrowoaktywnii@gmail.com
                </a>
                <a href="tel:604371921" className="block text-lime-500 hover:text-lime-400 transition">
                  +48 604 371 921
                </a>
              </div>
              <Link
                href="/kontakt"
                className="group mt-6 inline-flex w-full items-center justify-center gap-2 rounded-md bg-zinc-50 py-2 px-3 text-sm font-medium text-zinc-900 outline-offset-2 transition hover:bg-zinc-100 active:bg-zinc-100 active:text-zinc-900/60 dark:bg-zinc-800/50 dark:text-zinc-300 dark:hover:bg-zinc-800 dark:hover:text-zinc-50"
              >
                Skontaktuj się
              </Link>
            </div>
          </div>
        </div>
      </Container>
    </>
  )
}
