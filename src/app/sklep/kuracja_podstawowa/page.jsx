import { FadeIn } from '@/components/FadeIn'
import { Container } from '@/components/Container'
import { CheckIcon } from '@heroicons/react/24/solid'
import Link from 'next/link'
import Image from 'next/image'
import aloe_vera_active_freedom from '@/images/sklep/produkty/aloe_vera_active_freedom.jpg'
import liver_support from '@/images/sklep/produkty/liver_support.jpg'

export const metadata = {
  title:       'Kuracja podstawowa',
  description: 'Wzmocnij swój organizm dzięki suplementom wspierającym zdrowie stawów, kości, wątroby i metabolizmu. Postaw na naturalne składniki i kompleksowe wsparcie dla aktywnego i zrównoważonego stylu życia.',
}

const breadcrumbs = [
  { id: 1, name: 'Sklep', href: '/sklep' },
  { id: 2, name: 'Aparat ruchu', href: '/sklep/aparat_ruchu' },
]

const products = [
  {
    id: 1,
    lr_id: "80850-683",
    name: "Aloe Vera Drinking Gel Active Freedom",
    image: aloe_vera_active_freedom,
    description: "Suplement diety w płynie o orzeźwiającym pomarańczowym smaku, zawierający 88% żelu Aloe Vera, witaminy C i E, kolagen, glukozaminę i chondroitynę. Wspiera aparat ruchu, funkcjonowanie kości i chrząstki, a także pomaga zmniejszyć zmęczenie.",
    list:
      "Wspiera prawidłowe funkcjonowanie chrząstki i kości dzięki zawartości witaminy C\n" +
      "Pomaga utrzymać prawidłowy metabolizm energetyczny i zmniejsza uczucie zmęczenia\n" +
      "Zawiera 88% czystego żelu Aloe Vera\n" +
      "Wzbogacony o kolagen, siarczan glukozaminy i chondroityny\n" +
      "Orzeźwiający, naturalny smak pomarańczowy\n" +
      "Produkt znajduje się na Liście Kolońskiej - zminimalizowane ryzyko dopingu\n" +
      "Suplement diety bezpieczny i przebadany przez niezależne laboratoria"
  },
  {
    id: 2,
    lr_id: "81330-97",
    name: "LR LIFETAKT Liver Support",
    image: liver_support,
    description: "Suplement diety wspierający prawidłowe funkcjonowanie wątroby oraz ochronę komórek przed stresem oksydacyjnym. Zawiera cholinę, mangan, witaminę B6, molibden i ekstrakty roślinne: ostropest, piołun i chlorellę.",
    list:
      "Innowacyjna formuła wspierająca funkcje wątroby - metabolizm, detoksykacja i ochrona\n" +
      "Cholina wspomaga prawidłowe funkcjonowanie wątroby\n" +
      "Mangan chroni komórki przed stresem oksydacyjnym\n" +
      "Witamina B6 wspiera syntezę cysteiny, ważnego aminokwasu siarkowego3\n" +
      "Zawiera ekstrakty z ostropestu, piołunu i chlorelli\n" +
      "Molibden wspiera metabolizm aminokwasów siarkowych\n" +
      "Formuła działająca synergicznie dla wsparcia naturalnych procesów organizmu"
  }
]

export default function KuracjaPodstawowa() {
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
      <h1 className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Kuracja podstawowa</h1>
      <p className="mt-4 text-gray-500">
        Wzmocnij swój organizm dzięki suplementom wspierającym zdrowie stawów, kości, wątroby i metabolizmu. Postaw na naturalne składniki i kompleksowe wsparcie dla aktywnego i zrównoważonego stylu życia.
      </p>
      <div className="mt-10 space-y-40 border-t border-gray-200 pt-10 sm:mt-16 sm:pt-16">
        {products.map((product) => (
          <FadeIn key={product.id} className="flex flex-col-reverse lg:grid lg:grid-cols-12 lg:items-center lg:gap-x-8">
            <div className="mt-6 lg:col-span-7 lg:mt-0 xl:col-span-8">
              <div aria-labelledby="information-heading" className="mt-4">
                <h1 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">{product.name}</h1>
                <div className="mt-4">
                  <div className="space-y-4 text-sm/6 text-gray-500">
                    <p>{product.description}</p>
                  </div>
                </div>

                <div className="mt-8 border-t border-gray-200 pt-8">
                  <h2 className="text-sm font-medium text-gray-900">Naturalne Wsparcie</h2>

                  <div className="mt-4">
                    <ul role="list" className="list-disc space-y-1 pl-5 text-sm/6 text-gray-500 marker:text-gray-300">
                      {product.list.split('\n').map((line, index) => (
                        <li key={index} className="pl-2">{line}</li>
                      ))}
                    </ul>
                  </div>
                </div>
                <div className="mt-6 flex items-center">
                  <CheckIcon aria-hidden="true" className="size-5 shrink-0 text-green-500" />
                  <p className="ml-2 text-sm text-gray-500">Dostępny na stronie
                  <Link href="https://shop.lrworld.com/cms/PL/pl/?casrnc=a2409" target="_blank"
                    className='inline-flex items-center gap-x-1.5 rounded-md bg-lime-600/60 px-1.5 py-0.5 text-sm font-medium text-white shadow-xs
                    hover:bg-lime-500/60 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-lime-600 mx-1'>
                    LR
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-4">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 6H5.25A2.25 2.25 0 0 0 3 8.25v10.5A2.25 2.25 0 0 0 5.25 21h10.5A2.25 2.25 0 0 0 18 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25" />
                    </svg>
                  </Link>
                  pod numerem: {product.lr_id}</p>
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
