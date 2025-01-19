import Link from 'next/link'
import Image from 'next/image'

import { FadeIn, FadeInStagger } from "@/components/FadeIn"
import { Container } from '@/components/Container'
import kuracjaPodstawowa from '@/images/sklep/kuracja_podstawowa.JPG'
import aparatRuchu from '@/images/sklep/aparat_ruchu.jpg'
import kuracjaOdpornosciowa from '@/images/sklep/kuracja_odpornosciowa.jpg'
import kuracjaMetaboliczna from '@/images/sklep/kuracja_metaboliczna.jpg'
import bodyMission from '@/images/sklep/body_mission.jpg'
import main from '@/images/sklep/menu.png'

export const metadata = {
  title:       'Sklep',
  description: 'Odkryj kuracje, które pomogą Ci zadbać o zdrowie, witalność i równowagę każdego dnia.',
}

const faqs = [
  {
    id: 1,
    question: "Korzyści wynikające z Programu Partnerskiego:",
    answer: (
      <>
        <ul className="list-disc space-y-3">
          <li>Dostęp do ponad 400 produktów dla zdrowia i urody w cenie producenta.</li>
          <li>Wysokie rabaty.</li>
          <li>
            Unikalny Plan na Zdrowie - subskrypcja na żele do picia Aloe Vera, Mind Master, Beauty Elixir oraz kurację metaboliczną, dzięki którym nabywacie Państwo produkty po wyjątkowo atrakcyjnej cenie, z bezpłatną dostawą i prezentem po każdych aktywnych 3 miesiącach subskrypcji. Wysyłka przez firmę jest wykonywana automatycznie.
          </li>
          <li>Dostęp do dodatkowych promocji.</li>
          <li>Bezpłatną poradę dietetyka w zakresie wsparcia zdrowia.</li>
        </ul>
      </>
    ),
  },
  {
    id: 2,
    question: "Korzyści wynikające z Programu Partnerskiego:",
    answer:(
      <>
      <ul className="list-disc space-y-3">
        <li>Aby aktywować konto, należy wybrać produkty na kwotę minimum 320 zł.</li>
        <li>
          Do pierwszego zamówienia będzie doliczona jednorazowa opłata 19 zł za aktywację konta, w ramach której otrzymacie Państwo katalog z pełnym asortymentem produktowym.
        </li>
        <li>
          Koszt wysyłki wynosi 14,90 zł dla koszyka o wartości do 620 zł. Powyżej tej kwoty dostawa jest bezpłatna.
        </li>
        <li>
          Paczki doręczane są przez firmę kurierską DPD i wysyłane bezpośrednio od producenta. Płatność u kuriera jest gotówką lub kartą. Firma DPD informuje dzień wcześniej e-mailem o przesyłce, a w dniu dostarczenia SMS-em i e-mailem.
        </li>
      </ul>
    </>
    )
      
  },
  {
    id: 3,
    question: "Jak się zarejestrować?",
    answer: (
      <>
        Aby się zarejestrować,{" "}
        <Link href="https://shop.lrworld.com/openpao?PHP=B3fP%2FWdScdGDz97DkJxoJw%3D%3D" target="_blank" className='inline-flex items-center gap-x-1.5 rounded-md bg-lime-600 px-2 py-1 text-sm font-semibold text-white shadow-sm hover:bg-lime-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-lime-600'>
          kliknij tutaj
        </Link>
        . Po aktywacji konta w LR Health & Beauty otrzymasz potwierdzenie rejestracji, dane do logowania oraz możliwość składania zamówień w dowolnym czasie, na dowolną kwotę.
      </>
    ),
  },
  {
    id: 4,
    question: "Jak działa subskrypcja?",
    answer: (
      <>
        Subskrypcja na wybrany asortyment jest bez kosztów dostawy. Dodatkowo, do 15 każdego miesiąca można domówić produkty, wysyłając wiadomość e-mail na adres:{" "}
        <a href="mailto:zamowienia@lrworld.com">zamowienia@lrworld.com</a>, podając swój numer partnerski i kody domawianych produktów.
      </>
    ),
  }
]

const products = [
  {
    id: 1,
    description: 'Podstawa dobrego samopoczucia na co dzień.',
    href: '#',
    title: 'Kuracja podstawowa',
    imageSrc: kuracjaPodstawowa,
  },
  {
    id: 2,
    description: 'Wsparcie dla zdrowych i elastycznych stawów.',
    href: '#',
    title: "Aparat ruchu",
    imageSrc: aparatRuchu,
  },
  {
    id: 3,
    description: 'Wzmocnij swoją odporność naturalnie.',
    href: '#',
    title: 'Kuracja odpornościowa',
    imageSrc: kuracjaOdpornosciowa,
  },
  {
    id: 4,
    description: 'Zadbaj o swój metabolizm i energię.',
    href: '#',
    title: 'Kuracja metaboliczna',
    imageSrc: kuracjaMetaboliczna,
  },
  {
    id: 5,
    description: 'Zadbaj o swój metabolizm i energię.',
    href: '#',
    title: 'Program LR Body Mission',
    imageSrc: bodyMission,
  },
]

export default function Sklep() {
  return (
    <Container className="mt-16 sm:mt-32 pb-16 sm:pb-32">
      <div className="bg-white py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl lg:mx-0">
            <p className="text-base/7 font-semibold text-lime-600">Sklep</p>
            <h2 className="mt-2 text-5xl font-medium tracking-tight text-gray-900 sm:text-5xl">Zakupy tylko w programie partnerskim</h2>
            <p className="mt-8 text-pretty text-lg font-medium text-gray-500 sm:text-xl/8">
              aktywacja konta bezpośrednio u producenta, cieszy się zawsze najlepszą ceną i jest jedyną gwarancją oryginalności produktu. 
            </p>
          </div>
        </div>
      </div>

      <div className="bg-white">
        <FadeInStagger className="mx-auto max-w-2xl px-4 py-16 sm:px-6 lg:max-w-7xl lg:px-8">
          <div className="grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8">
            {products.map((product) => (
              <FadeIn key={product.id}>
                <Link key={product.id} href={product.href} className="group">
                  <Image alt='' src={product.imageSrc} loading="lazy"
                    className="aspect-square w-full rounded-lg bg-gray-200 object-cover group-hover:opacity-75 xl:aspect-[7/8]"
                  />
                  <p className="mt-4 text-lg font-medium text-gray-900">{product.title}</p>
                  <h3 className="mt-1 text-sm text-gray-700">{product.description}</h3>
                </Link>
              </FadeIn>
            ))}
          </div>
        </FadeInStagger>
      </div>
      <FadeIn className="bg-white">
        <div className="mx-auto max-w-7xl sm:px-6 lg:px-8 py-24 sm:py-32 lg:py-40">
          <div className="relative isolate overflow-hidden bg-gray-800 px-6 pt-16 shadow-2xl rounded-3xl sm:px-16 md:pt-24 lg:flex lg:gap-x-20 lg:px-24 lg:pt-0">
            <svg viewBox="0 0 1024 1024" aria-hidden="true" className="absolute left-1/2 top-1/2 -z-10 size-[64rem] -translate-y-1/2 [mask-image:radial-gradient(closest-side,white,transparent)] sm:left-full sm:-ml-80 lg:left-1/2 lg:ml-0 lg:-translate-x-1/2 lg:translate-y-0">
              <circle r={512} cx={512} cy={512} fill="url(#759c1415-0410-454c-8f7c-9a820de03641)" fillOpacity="0.7" />
              <defs>
                <radialGradient id="759c1415-0410-454c-8f7c-9a820de03641">
                  <stop stopColor="#3f6212" />
                  <stop offset={1} stopColor="#65a30d" />
                </radialGradient>
              </defs>
            </svg>
            <div className="mx-auto max-w-md text-center lg:mx-0 lg:flex-auto lg:py-32 lg:text-left">
              <h2 className="text-balance text-3xl font-semibold tracking-tight text-white sm:text-4xl">
                Dołącz do Programu Partnerskiego
              </h2>
              <p className="mt-6 text-pretty text-lg/8 text-gray-300">
                Poniższa witryna zawiera wyselekcjonowane produkty firmy LR Health&Beauty. Pełen katalog produktów, znajduje się w zakładce „Sklep”
              </p>
              <div className="mt-10 flex items-center justify-center gap-x-6 lg:justify-start">
                <Link href="https://shop.lrworld.com/cms/PL/pl/?casrnc=a2409" target='_blank'
                  className="rounded-md bg-white px-3.5 py-2.5 text-sm font-semibold text-gray-900 shadow-sm hover:bg-gray-100
                  focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white">
                  Sklep
                </Link>
                <span className="text-sm/6 font-semibold text-white">
                  Znajdź produkty LR Health&Beauty.
                </span>
              </div>
            </div>
            <div className="relative mt-16 h-80 lg:mt-8">
              <Image
                alt="App screenshot"
                src={main}
                width={1824}
                height={1080}
                className="absolute -left-28 -top-3 w-[57rem] max-w-none rounded-md"
              />
            </div>
          </div>
        </div>
      </FadeIn>
      <div className="bg-white">
        <div className="mx-auto max-w-7xl divide-y divide-gray-900/10 px-6 py-24 sm:py-32 lg:px-8 lg:py-40">
          <h2 className="text-4xl font-semibold tracking-tight text-gray-900 sm:text-5xl">Często zadawane pytania</h2>
          <dl className="mt-10 space-y-8 divide-y divide-gray-900/10">
            {faqs.map((faq) => (
              <FadeInStagger key={faq.id} className="pt-8 lg:grid lg:grid-cols-12 lg:gap-8">
                <dt className="text-base/7 font-semibold text-gray-900 lg:col-span-5">{faq.question}</dt>
                <dd className="mt-4 lg:col-span-7 lg:mt-0 text-base/7 text-gray-600">
                  <FadeIn>{faq.answer}</FadeIn>
                </dd>
              </FadeInStagger>
            ))}
          </dl>
        </div>
      </div>
    </Container>
  )
}