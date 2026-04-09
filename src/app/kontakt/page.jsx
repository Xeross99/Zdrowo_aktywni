import Link from 'next/link'
import clsx from 'clsx'

import { Container } from '@/components/Container'
import { FadeIn, FadeInStagger } from '@/components/FadeIn'
import {
  FacebookIcon,
  InstagramIcon,
  TikTokIcon,
  StravaIcon,
} from '@/components/SocialIcons'

export const metadata = {
  title: 'Kontakt',
  description:
    'Skontaktuj się ze mną, czasem jeden mail lub telefon może zmienić wszystko.',
}

export default function Kontakt() {
  return (
    <Container className="mt-16 sm:mt-32">
      <div className="mx-auto max-w-2xl lg:mx-0 lg:max-w-none">
        <div className="grid grid-cols-1 gap-10 py-16 lg:grid-cols-3">
          <div>
            <h1 className="text-4xl font-semibold tracking-tight text-pretty text-zinc-800 dark:text-zinc-100">
              Skontaktuj się ze mną
            </h1>
            <p className="mt-4 text-base/7 text-zinc-600 dark:text-zinc-400">
              Czasem jeden mail lub telefon może zmienić wszystko. Nie czekaj, odezwij się!
            </p>
          </div>
          <FadeInStagger className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:col-span-2 lg:gap-8">
            <FadeIn className="rounded-2xl bg-zinc-50 p-10 dark:bg-zinc-800/50">
              <h3 className="text-base/7 font-semibold text-zinc-900 dark:text-zinc-100">Aleksandra Kost</h3>
              <dl className="mt-3 space-y-1 text-sm/6 text-zinc-600 dark:text-zinc-400">
                <div>
                  <dd>Trenerka, dietetyczka, instruktorka Nordic Walking</dd>
                </div>
                <div className="mt-2">
                  <dd className="text-xs text-zinc-400 dark:text-zinc-500">Partner biznesowy LR Health&Beauty</dd>
                </div>
              </dl>
            </FadeIn>
            <FadeIn className="rounded-2xl bg-zinc-50 p-10 dark:bg-zinc-800/50">
              <h3 className="text-base/7 font-semibold text-zinc-900 dark:text-zinc-100">Email</h3>
              <dl className="mt-3 space-y-1 text-sm/6 text-zinc-600 dark:text-zinc-400">
                <div>
                  <dt className="sr-only">Email</dt>
                  <dd>
                    <a href="mailto:zdrowoaktywnii@gmail.com" className="font-semibold text-lime-500 hover:text-lime-400 transition">
                      zdrowoaktywnii@gmail.com
                    </a>
                  </dd>
                </div>
              </dl>
            </FadeIn>
            <FadeIn className="rounded-2xl bg-zinc-50 p-10 dark:bg-zinc-800/50">
              <h3 className="text-base/7 font-semibold text-zinc-900 dark:text-zinc-100">Telefon</h3>
              <dl className="mt-3 space-y-1 text-sm/6 text-zinc-600 dark:text-zinc-400">
                <div>
                  <dt className="sr-only">Numer telefonu</dt>
                  <dd>
                    <a href="tel:604371921" className="font-semibold text-lime-500 hover:text-lime-400 transition">
                      +48 604 371 921
                    </a>
                  </dd>
                </div>
              </dl>
            </FadeIn>
            <FadeIn className="rounded-2xl bg-zinc-50 p-10 dark:bg-zinc-800/50">
              <h3 className="text-base/7 font-semibold text-zinc-900 dark:text-zinc-100">Social media</h3>
              <dl className="mt-3 space-y-1 text-sm/6 text-zinc-600 dark:text-zinc-400">
                <dd>
                  <ul role="list" className="flex flex-row gap-4">
                    <li>
                      <Link href="https://www.facebook.com/aleksandra.kost.90" target="_blank" className="group">
                        <FacebookIcon className="h-6 w-6 fill-zinc-500 transition group-hover:fill-lime-500" />
                      </Link>
                    </li>
                    <li>
                      <Link href="https://www.instagram.com/flow_by_ola/" target="_blank" className="group">
                        <InstagramIcon className="h-6 w-6 fill-zinc-500 transition group-hover:fill-lime-500" />
                      </Link>
                    </li>
                    <li>
                      <Link href="https://www.tiktok.com/@aleksandra_kost_" target="_blank" className="group">
                        <TikTokIcon className="h-6 w-6 fill-zinc-500 transition group-hover:fill-lime-500" />
                      </Link>
                    </li>
                    <li>
                      <Link href="https://www.strava.com/athletes/aleksandra_kost" target="_blank" className="group">
                        <StravaIcon className="h-6 w-6 fill-zinc-500 transition group-hover:fill-lime-500" />
                      </Link>
                    </li>
                  </ul>
                </dd>
              </dl>
            </FadeIn>
          </FadeInStagger>
        </div>
      </div>
    </Container>
  )
}
