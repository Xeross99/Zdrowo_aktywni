'use client'

import { Container } from '@/components/Container'
import { CheckIcon, ShieldCheckIcon } from '@heroicons/react/24/solid';
import { FadeIn, FadeInStagger } from "@/components/FadeIn";
import product_1 from '@/images/sklep/kuracja_podstawowa/product_1.jpg';
import product_2 from '@/images/sklep/kuracja_podstawowa/product_2.jpg';
import Link from 'next/link';
import Image from 'next/image'

const products = [
  {
    name: 'Aloe Vera Drinking Gel Active Freedom',
    href: 'https://shop.lrworld.com/product/pl/pl/aloe_vera_drinking_gel_active_freedom.html?productAlias=80850-683&casrnc=49eea',
    image: product_1,
    price: '126,80 zł',
    description:
      "Witamina C wspiera produkcję kolagenu dla prawidłowego funkcjonowania chrząstki i kości oraz pomaga utrzymać prawidłowy metabolizm energetyczny.\n" +
      "• Dla Twojego aparatu ruchu: wspiera prawidłowy metabolizm energetyczny oraz utrzymanie chrząstki i kości\n" +
      "• 88% żelu Aloe Vera\n" +
      "• Z witaminą E, kolagenem, siarczanem glukozaminy, siarczanem chondroityny i składnikiem czynnym witaminą C",
    breadcrumbs: [
      { id: 1, name: 'Sklep', href: '/sklep' },
      { id: 2, name: 'Kuracja podstawowa', href: '/sklep/kuracja_podstawowa' },
    ]
  },
  {
    name: 'LR LIFETAKT Liver Support',
    href: 'https://shop.lrworld.com/product/pl/pl/lr_lifetakt_liver_support.html?productAlias=81330-97&casrnc=8b58c',
    image: product_2,
    price: '119,90 zł',
    description:
      "Suplement diety wspiera detoksykację organizmu oraz ochronę komórek przed stresem oksydacyjnym.\n" +
      "• Wspiera wątrobę w procesie usuwania toksyn i detoksykacji organizmu\n" +
      "• Zawiera mangan, który chroni komórki przed stresem oksydacyjnym\n" +
      "• Z witaminą B6, która wspiera syntezę aminokwasu siarkowego - cysteiny\n" +
      "• Z ekstraktami roślinnymi: piołun, ostropest plamisty, chlorella oraz cholina i molibden",
    breadcrumbs: []
  }
]

export default function KuracjaPodstawowa() {
  return (
    <Container className="mt-16 sm:mt-32 pb-16 sm:pb-32">
      {products.map((product) => (
        <FadeInStagger className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:grid lg:max-w-7xl lg:grid-cols-2 lg:gap-x-8 lg:px-8 last:-mt-20">
          <div className="lg:max-w-lg lg:self-end">
            <nav aria-label="Breadcrumb">
              <ol role="list" className="flex items-center space-x-2">
                {product.breadcrumbs.map((breadcrumb, breadcrumbIdx) => (
                  <li key={breadcrumb.id}>
                    <div className="flex items-center text-sm">
                      <a href={breadcrumb.href} className="font-medium text-gray-500 hover:text-gray-900">
                        {breadcrumb.name}
                      </a>
                      {breadcrumbIdx !== product.breadcrumbs.length - 1 ? (
                        <svg fill="currentColor" viewBox="0 0 20 20" aria-hidden="true" className="ml-2 size-5 shrink-0 text-gray-300">
                          <path d="M5.555 17.776l8-16 .894.448-8 16-.894-.448z" />
                        </svg>
                      ) : null}
                    </div>
                  </li>
                ))}
              </ol>
            </nav>
            <FadeIn className="mt-4">
              <h1 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">{product.name}</h1>
            </FadeIn>
            <FadeIn aria-labelledby="information-heading" className="mt-4">
              <h2 id="information-heading" className="sr-only">
                Product information
              </h2>
              <div className="flex items-center">
                <p className="text-lg text-gray-900 sm:text-xl">{product.price}</p>
                <div className="ml-4 border-l border-gray-300 pl-4">
                  <p className="ml text-sm text-gray-500">Ceny 30% taniej po dołączeniu do programu.</p>
                </div>
              </div>
              <div className="mt-4 space-y-6">
                {product.description.split('\n').map((line, index) => (
                  <p key={index} className="text-base text-gray-500">{line}</p>
                ))}
              </div>
              <div className="mt-6 flex items-center">
                <CheckIcon aria-hidden="true" className="size-5 shrink-0 text-green-500" />
                <p className="ml-2 text-sm text-gray-500">Dostępny na stronie LR</p>
              </div>
            </FadeIn>
          </div>
          <FadeIn className="mt-10 lg:col-start-2 lg:row-span-2 lg:mt-0 lg:self-center">
            <Image alt="" src={product.image} className="aspect-square w-full rounded-lg object-cover" />
          </FadeIn>
          <div className="mt-10 lg:col-start-1 lg:row-start-2 lg:max-w-lg lg:self-start">
            <section aria-labelledby="options-heading">
                <div className="mt-10">
                  <Link href={product.href} target='_blank' rel="noreferrer nofollow" className="flex w-full items-center justify-center
                  rounded-md border border-transparent bg-lime-600 px-8 py-3 text-base font-medium text-white hover:bg-lime-700 focus:ring-2
                  focus:ring-lime-500 focus:ring-offset-2 focus:ring-offset-gray-50 focus:outline-hidden">
                    Kup teraz
                  </Link>
                </div>
                <div className="mt-6 text-center">
                  <div className="inline-flex text-base font-medium">
                    <ShieldCheckIcon aria-hidden="true" className="mr-2 size-6 shrink-0 text-gray-400" />
                    <span className="text-gray-500">Gwarancja oryginalności produktu</span>
                  </div>
                </div>
            </section>
          </div>
        </FadeInStagger>
      ))}
    </Container>
  )
}
