import Link from 'next/link'

import { Container } from '@/components/Container'
import { FadeIn } from '@/components/FadeIn'
import {
  FacebookIcon,
  InstagramIcon,
  TikTokIcon,
  StravaIcon,
} from '@/components/SocialIcons'
import { ContactForm } from './ContactForm'

export const metadata = {
  title: 'Kontakt',
  description:
    'Skontaktuj się ze mną, czasem jeden mail lub telefon może zmienić wszystko.',
}

function MailIcon(props) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} aria-hidden="true" {...props}>
      <path d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  )
}

function PhoneIcon(props) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} aria-hidden="true" {...props}>
      <path d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 0 0 2.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 0 1-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 0 0-1.091-.852H4.5A2.25 2.25 0 0 0 2.25 4.5v2.25Z" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  )
}

export default function Kontakt() {
  return (
    <Container className="mt-16 sm:mt-32">
      <div className="mx-auto max-w-2xl lg:mx-0 lg:max-w-none">
        <div className="grid grid-cols-1 gap-x-16 gap-y-10 lg:grid-cols-2">
          {/* Left: Contact info */}
          <FadeIn>
            <h1 className="text-4xl font-semibold tracking-tight text-pretty text-zinc-800 dark:text-zinc-100">
              Skontaktuj się ze mną
            </h1>
            <p className="mt-4 text-base/7 text-zinc-600 dark:text-zinc-400">
              Czasem jeden mail lub telefon może zmienić wszystko. Napisz do mnie
              przez formularz, a odpowiem na Twój email.
            </p>

            <dl className="mt-10 space-y-4 text-base/7 text-zinc-600 dark:text-zinc-400">
              <div className="flex gap-x-4">
                <dt className="flex-none">
                  <span className="sr-only">Email</span>
                  <MailIcon className="h-7 w-6 text-zinc-400" />
                </dt>
                <dd>
                  <a href="mailto:zdrowoaktywnii@gmail.com" className="hover:text-lime-500 transition">
                    zdrowoaktywnii@gmail.com
                  </a>
                </dd>
              </div>
              <div className="flex gap-x-4">
                <dt className="flex-none">
                  <span className="sr-only">Telefon</span>
                  <PhoneIcon className="h-7 w-6 text-zinc-400" />
                </dt>
                <dd>
                  <a href="tel:604371921" className="hover:text-lime-500 transition">
                    +48 604 371 921
                  </a>
                </dd>
              </div>
            </dl>

            <div className="mt-10">
              <h3 className="text-sm font-semibold text-zinc-900 dark:text-zinc-100">
                Social media
              </h3>
              <ul role="list" className="mt-4 flex gap-4">
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
            </div>
          </FadeIn>

          {/* Right: Contact form */}
          <FadeIn>
            <ContactForm />
          </FadeIn>
        </div>
      </div>
    </Container>
  )
}
