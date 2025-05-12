import { FadeIn } from '@/components/FadeIn'
import { Container } from '@/components/Container'
import { CheckIcon } from '@heroicons/react/24/solid'
import Link from 'next/link'
import Image from 'next/image'
import aloe_vera_immune_plus from '@/images/sklep/produkty/aloe_vera_immune_plus.jpg'
import aloe_vera_traditional_honey from '@/images/sklep/produkty/aloe_vera_traditional_honey.jpg'
import pro_12 from '@/images/sklep/produkty/pro_12.jpg'
import colostrum_liquid from '@/images/sklep/produkty/colostrum_liquid.jpg'
import vita_active from '@/images/sklep/produkty/vita_active.jpg'

export const metadata = {
  title: 'Kuracja odpornościowa',
  description: 'Wzmocnij swoją odporność dzięki naturalnym suplementom wspierającym układ immunologiczny, florę jelitową i metabolizm. Zadbaj o zdrowie każdego dnia z pomocą natury.',
}

const breadcrumbs = [
  { id: 1, name: 'Sklep', href: '/sklep' },
  { id: 2, name: 'Kuracja odpornościowa', href: '/sklep/kuracja_odpornosciowa' },
]

const products = [
  {
    id: 1,
    lr_id: "81000-14",
    name: "Aloe Vera Drinking Gel Immune Plus",
    image: aloe_vera_immune_plus,
    description: "Suplement diety z 85% żelu Aloe Vera, witaminą C, cynkiem i selenem. Wzmacnia, aktywuje i stymuluje układ odpornościowy dzięki naturalnym składnikom takim jak imbir, miód i cytryna.",
    list:
      "Wspiera układ odpornościowy na trzech poziomach: wzmocnienie, aktywacja i stymulacja\n" +
      "85% czystego żelu Aloe Vera z dodatkiem imbiru, miodu i cytryny\n" +
      "Zawiera witaminę C, cynk i selen\n" +
      "Naturalne składniki o potwierdzonym działaniu prozdrowotnym\n" +
      "Witamina C chroni komórki przed stresem oksydacyjnym\n" +
      "Cynk i selen wspierają funkcje odpornościowe\n" +
      "Możliwość zakupu w subskrypcji"
  },
  {
    id: 2,
    lr_id: "81180-99",
    name: "PRO 12+ Kapsułki",
    image: pro_12,
    description: "Zaawansowany suplement z kompleksem TRIPLEBIOTIC: prebiotyki, bakterie probiotyczne (1 miliard w kapsułce) i postbiotyki. Z podwójną enkapsulacją dla skutecznego działania w jelitach.",
    list:
      "Zawiera 12 szczepów bakterii probiotycznych\n" +
      "Kompleks TRIPLEBIOTIC: pre-, pro- i postbiotyki\n" +
      "Fruktooligosacharydy jako pożywka dla bakterii\n" +
      "Postbiotyk Prolac-TTM o opatentowanej formule\n" +
      "Podwójna kapsułka chroniąca przed kwasami żołądkowymi\n" +
      "Działa bezpośrednio w jelitach\n" +
      "Możliwość zakupu w subskrypcji"
  },
  {
    id: 3,
    lr_id: "80361-599",
    name: "Colostrum Liquid",
    image: colostrum_liquid,
    description: "Produkt premium z odtłuszczonego i oczyszczonego colostrum krowiego. Bez konserwantów, dodatków i barwników. Certyfikat jakości SGS INSTITUT FRESENIUS.",
    list:
      "Colostrum od europejskich krów\n" +
      "Bez kazeiny, konserwantów i barwników\n" +
      "Zimny proces produkcji dla zachowania wartości odżywczych\n" +
      "Wysoka jakość potwierdzona certyfikatem SGS\n" +
      "Wsparcie układu odpornościowego i regeneracji\n" +
      "Produkt w płynie – łatwa przyswajalność\n" +
      "Możliwość zakupu w subskrypcji"
  },
  {
    id: 4,
    lr_id: "80700-680",
    name: "Aloe Vera Drinking Gel Traditional Honey",
    image: aloe_vera_traditional_honey,
    description: "Płynny suplement diety z 90% żelu Aloe Vera i 9% miodu. Zapewnia odżywienie, ochronę układu odpornościowego oraz wsparcie dla metabolizmu energetycznego.",
    list:
      "90% żelu Aloe Vera i 9% wartościowego miodu\n" +
      "Witamina C wspiera odporność i metabolizm\n" +
      "Zwiększa przyswajanie żelaza\n" +
      "Przyjemny, naturalny smak miodu\n" +
      "Jedna porcja pokrywa 75% dziennego zapotrzebowania na witaminę C\n" +
      "Możliwość zakupu w subskrypcji"
  },
  {
    id: 5,
    lr_id: "80301-699",
    name: "Vita Active Red Fruits",
    image: vita_active,
    description: "Skoncentrowany eliksir z 21 owoców i warzyw. Pokrywa 100% dziennego zapotrzebowania na 10 witamin w jednej łyżeczce. Bez sztucznych barwników.",
    list:
      "Zawiera koncentrat z 21 owoców i warzyw\n" +
      "10 witamin w jednej dziennej porcji (5 ml)\n" +
      "Wzmacnia organizm i wspiera witalność\n" +
      "Bez dodatku barwników\n" +
      "Smak czerwonych owoców\n" +
      "Idealny dla dzieci i dorosłych\n" +
      "Możliwość zakupu w subskrypcji"
  }
]

export default function KuracjaOdpornosciowa() {
  return (
    <Container className="bg-white py-24 sm:px-2 sm:py-32 lg:px-4">
      <nav aria-label="Breadcrumb">
        <ol role="list" className="flex items-center space-x-2">
          {breadcrumbs.map((breadcrumb, breadcrumbIdx) => (
            <li key={breadcrumb.id}>
              <div className="flex items-center text-sm">
                <Link href={breadcrumb.href} className="text-lime-600 hover:text-lime-500">
                  {breadcrumb.name}
                </Link>
                {breadcrumbIdx !== breadcrumbs.length - 1 ? (
                  <svg fill="currentColor" viewBox="0 0 20 20" aria-hidden="true" className="ml-2 size-5 shrink-0 text-gray-300">
                    <path d="M5.555 17.776l8-16 .894.448-8 16-.894-.448z" />
                  </svg>
                ) : null}
              </div>
            </li>
          ))}
        </ol>
      </nav>
      <h1 className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Kuracja odpornościowa</h1>
      <p className="mt-4 text-gray-500">
        Wzmocnij swoją odporność dzięki naturalnym suplementom wspierającym układ immunologiczny, florę jelitową i metabolizm. Zadbaj o zdrowie każdego dnia z pomocą natury.
      </p>
      <div className="mt-10 space-y-40 border-t border-gray-200 pt-10 sm:mt-16 sm:pt-16">
        {products.map((product) => (
          <FadeIn key={product.id} className="flex flex-col-reverse lg:grid lg:grid-cols-12 lg:items-center lg:gap-x-8">
            <div className="mt-6 lg:col-span-7 lg:mt-0 xl:col-span-8">
              <div aria-labelledby="information-heading" className="mt-4">
                <h1 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">{product.name}</h1>
                <div className="mt-4 space-y-4 text-sm/6 text-gray-500">
                  <p>{product.description}</p>
                </div>
                <div className="mt-8 border-t border-gray-200 pt-8">
                  <h2 className="text-sm font-medium text-gray-900">Naturalne Wsparcie</h2>
                  <ul role="list" className="list-disc space-y-1 pl-5 text-sm/6 text-gray-500 marker:text-gray-300 mt-4">
                    {product.list.split('\n').map((line, index) => (
                      <li key={index} className="pl-2">{line}</li>
                    ))}
                  </ul>
                </div>
                <div className="mt-6 flex items-center">
                  <CheckIcon aria-hidden="true" className="size-5 shrink-0 text-green-500" />
                  <p className="ml-2 text-sm text-gray-500">
                    Dostępny na stronie
                    <Link href="https://shop.lrworld.com/home?PHP=B3fP%2FWdScdGDz97DkJxoJw%3D%3D" target="_blank"
                      className='inline-flex items-center gap-x-1.5 rounded-md bg-lime-600/60 px-1.5 py-0.5 text-sm font-medium text-white shadow-xs hover:bg-lime-500/60 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-lime-600 mx-1'>
                      LR
                      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-4">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 6H5.25A2.25 2.25 0 0 0 3 8.25v10.5A2.25 2.25 0 0 0 5.25 21h10.5A2.25 2.25 0 0 0 18 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25" />
                      </svg>
                    </Link>
                    pod numerem: {product.lr_id}
                  </p>
                </div>
              </div>
            </div>
            <div className="flex-auto h-full lg:col-span-5 xl:col-span-4">
              <Image alt={product.name} src={product.image} className="aspect-2/1 h-full rounded-lg object-contain" />
            </div>
          </FadeIn>
        ))}
      </div>
    </Container>
  )
}