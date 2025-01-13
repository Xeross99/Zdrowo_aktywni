import Link from 'next/link'
import clsx from 'clsx'

import { FadeIn, FadeInStagger } from "@/components/FadeIn"
import { Container } from '@/components/Container'
import { InstagramIcon, FacebookIcon, StravaIcon, TikTokIcon } from '@/components/Icons'

function SocialLink({ className, href, children, icon: Icon }) {
  return (
    <li className={clsx(className, 'flex')}>
      <Link href={href} target="_blank" className="group flex transition">
        <Icon className="h-6 w-6 flex-none fill-zinc-500 transition group-hover:fill-lime-500" />
        <span className="ml-4">{children}</span>
      </Link>
    </li>
  )
}

export const metadata = {
  title:       'Kontakt',
  description: 'Skontaktuj się ze mną, czasem jeden mail lub telefon może zmienić wszystko',
}

export default function Kontakt() {
  return (
    <Container className="mt-16 sm:mt-32 pb-16 sm:pb-32">
      <div className="bg-white py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-10 lg:grid-cols-3">
            <div>
              <h2 className="text-pretty text-4xl font-semibold tracking-tight text-gray-900">Skontaktuj się ze mną</h2>
              <p className="mt-4 text-base/7 text-gray-600">Czasem jeden mail lub telefon może zmienić wszystko. Nie czekaj, odezwij się!</p>
            </div>
            <FadeInStagger className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:col-span-2 lg:gap-8">
              <FadeIn className="rounded-2xl bg-gray-50 p-10">
                <h3 className="text-base/7 font-semibold text-gray-900">Aleksandra Kost</h3>
                <dl className="mt-3 space-y-1 text-sm/6 text-gray-600">
                  <div>
                    <dd>Niezależny partner biznesowy firmy LR Health&Beauty</dd>
                  </div>
                </dl>
              </FadeIn>
              <FadeIn className="rounded-2xl bg-gray-50 p-10">
                <h3 className="text-base/7 font-semibold text-gray-900">Email</h3>
                <dl className="mt-3 space-y-1 text-sm/6 text-gray-600">
                  <div>
                    <dt className="sr-only">Email</dt>
                    <dd><a className="font-semibold text-lime-600" href="mailto:zdrowoaktywnii@gmail.com">zdrowoaktywnii@gmail.com</a></dd>
                  </div>
                </dl>
              </FadeIn>
              <FadeIn className="rounded-2xl bg-gray-50 p-10">
                <h3 className="text-base/7 font-semibold text-gray-900">Telefon</h3>
                <dl className="mt-3 space-y-1 text-sm/6 text-gray-600">
                  <div>
                    <dt className="sr-only">Phone number</dt>
                    <dd><a className="font-semibold text-lime-600" href="tel:604371921">+48 604 371 921</a></dd>
                  </div>
                </dl>
              </FadeIn>
              <FadeIn className="rounded-2xl bg-gray-50 p-10">
                <h3 className="text-base/7 font-semibold text-gray-900">Social media</h3>
                <dl className="mt-3 space-y-1 text-sm/6 text-gray-600">
                  <dd>
                    <ul role="list" className='flex flex-row'>
                      <SocialLink href="https://www.facebook.com/aleksandra.kost.90" icon={FacebookIcon}></SocialLink>
                      <SocialLink href="https://www.instagram.com/flow_by_ola/" icon={InstagramIcon}></SocialLink>
                      <SocialLink href="https://www.tiktok.com/@aleksandra_kost_" icon={TikTokIcon}></SocialLink>
                      <SocialLink href="https://www.strava.com/athletes/aleksandra_kost" icon={StravaIcon}></SocialLink>
                    </ul>
                  </dd>
                </dl>
              </FadeIn>
            </FadeInStagger>
          </div>
        </div>
      </div>
    </Container>
  )
}
