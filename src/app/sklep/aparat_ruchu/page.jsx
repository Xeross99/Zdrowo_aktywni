'use client'

import { Container } from '@/components/Container'
import { CheckIcon, ShieldCheckIcon } from '@heroicons/react/24/solid'
import { FadeIn } from "@/components/FadeIn"
import colostrum from '@/images/sklep/aparat_ruchu/product_1.jpg'
import omega from '@/images/sklep/aparat_ruchu/product_2.jpg'
import protein from '@/images/sklep/aparat_ruchu/product_3.jpg'
import vita_active from '@/images/sklep/aparat_ruchu/product_4.jpg'
import msm from '@/images/sklep/aparat_ruchu/product_5.jpg'
import aloe_vera from '@/images/sklep/kuracja_podstawowa/product_1.jpg'
import Link from 'next/link'
import Image from 'next/image'

const products = [
  {
    id: 1,
    name: 'Colostrum Liquid',
    href: 'https://shop.lrworld.com/product/pl/pl/colostrum_liquid.html?productAlias=80361-599&casrnc=8e7b7',
    image: colostrum,
    price: '148,20 zł',
    description:
      "Suplement diety wspiera naturalną odporność organizmu oraz regenerację komórek.\n" +
      "• Najwyższej jakości produkt na bazie colostrum\n" +
      "• Odtłuszczone i pozbawione kazeiny krowie colostrum (młodziwo)\n" +
      "• Wyprodukowano z colostrum pozyskiwanego od europejskich krów\n" +
      "• Bez substancji dodatkowych, konserwantów i barwników\n" +
      "• Łagodny, zimny proces produkcji dla optymalnej gęstości odżywczej",
    breadcrumbs: [
      { id: 1, name: 'Sklep', href: '/sklep' },
      { id: 2, name: 'Aparat ruchu', href: '/sklep/aparat_ruchu' },
    ]
  },
  {
    id: 2,
    name: 'Super Omega Kapsułki',
    href: 'https://shop.lrworld.com/product/pl/pl/super_omega__kapsulki.html?productAlias=80338-699&casrnc=f0fea',
    image: omega,
    price: '137,80 zł',
    description:
      "Suplement diety wspiera zdrowie serca i mózgu.\n" +
      "• Kapsułki zawierają wysokiej jakości kwasy tłuszczowe Omega 3, pozyskiwane z oleju rybiego z sardynek, makreli i tuńczyków\n" +
      "• Ryby pochodzą z wolnych połowów na południowoamerykańskim Pacyfiku, certyfikowanych przez „Friend of the Sea”\n" +
      "• Produkt działa przeciwzapalnie\n" +
      "• Wysokie stężenie EPA wspiera serce, a DHA utrzymuje funkcje mózgu\n",
    breadcrumbs: []
  },
  {
    id: 3,
    name: 'Protein Power Napój w proszku o smaku waniliowym',
    href: 'https://shop.lrworld.com/product/pl/pl/protein_power_napoj_w_proszku_o_smaku_waniliowym.html?productAlias=80550-419&casrnc=f4d99',
    image: protein,
    price: '153,50 zł',
    description:
      "Suplement diety wspiera utrzymanie i przyrost masy mięśniowej.\n" +
      "• Dostarcza ważnych protein i innych składników odżywczych dla utrzymania masy mięśniowej\n" +
      "• Zawiera 80% białka z pięciu różnych źródeł\n" +
      "• Z magnezem i witaminą B6, wspierającymi metabolizm białek i glikogenu\n" +
      "• Wsparcie w przyroście muskulatury i przyswajaniu białka dzięki połączeniu 5 komponentów proteinowych, magnezu i witaminy B6\n" +
      "• Produkt wspomaga prawidłową syntezę białka i funkcjonowanie mięśni",
    breadcrumbs: []
  },
  {
    id: 4,
    name: 'Vita Active Red Fruits',
    href: 'https://shop.lrworld.com/product/pl/pl/vita_active_red_fruits.html?productAlias=80301-699&casrnc=6c0ca',
    image: vita_active,
    price: '78,51 zł',
    description:
      "Suplement diety wspiera detoksykację organizmu oraz ochronę komórek przed stresem oksydacyjnym.\n" +
      "• Z koncentratem z 21 owoców i warzyw\n" +
      "• 1 łyżeczka (5 ml) dziennie pokrywa 100 % dziennego zapotrzebowania na 10 witamin\n" +
      "• Bez barwników\n" +
      "• Wspiera wątrobę w procesie usuwania toksyn i detoksykacji organizmu\n" +
      "• Zawiera mangan, który chroni komórki przed stresem oksydacyjnym\n" +
      "• Z witaminą B6, która wspiera syntezę aminokwasu siarkowego - cysteiny\n",
    breadcrumbs: []
  },
  {
    id: 5,
    name: 'Aloe Vera MSM Wielofunkcyjny żel do ciała',
    href: 'https://shop.lrworld.com/product/pl/pl/aloe_vera_msm_wielofunkcyjny_zel_do_ciala_aloe_vera.html?productAlias=20604-201&casrnc=2322f',
    image: msm,
    price: '100,40 zł',
    description:
      "Szybko wchłaniający się, chłodzący żel do ciała z 60% żelu Aloe Vera.\n" +
      "• Zawiera MSM, liście mącznicy lekarskiej oraz ekstrakt z kory wierzby\n" +
      "• Wykazuje działanie chłodzące i kojące, idealny na zmęczone mięśnie i stawy\n" +
      "• Nadaje skórze elastyczność\n" +
      "• Działa na zmęczone stawy i przywraca komfort\n" +
      "• Szybko się wchłania, nie pozostawiając tłustego filmu\n" +
      "• Zawiera ekstrakty ziołowe wspomagające regenerację\n",
    breadcrumbs: []
  },
  {
    id: 6,
    name: 'Aloe Vera Drinking Gel Active Freedom',
    href: 'https://shop.lrworld.com/product/pl/pl/aloe_vera_drinking_gel_active_freedom.html?productAlias=80850-683&casrnc=49eea',
    image: aloe_vera,
    price: '126,80 zł',
    description:
      "Witamina C wspiera produkcję kolagenu dla prawidłowego funkcjonowania chrząstki i kości oraz pomaga utrzymać prawidłowy metabolizm energetyczny.\n" +
      "• Dla Twojego aparatu ruchu: wspiera prawidłowy metabolizm energetyczny oraz utrzymanie chrząstki i kości\n" +
      "• 88% żelu Aloe Vera\n" +
      "• Z witaminą E, kolagenem, siarczanem glukozaminy, siarczanem chondroityny i składnikiem czynnym witaminą C",
    breadcrumbs: []
  }
]

export default function AparatRuchu() {
  return (
    <Container className="mt-16 sm:mt-32 pb-16 sm:pb-32">
      {products.map((product) => (
        <div key={product.id} className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:grid lg:max-w-7xl lg:grid-cols-2 lg:gap-x-8 lg:px-8 last:-mt-20">
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
            <div className="mt-4">
              <h1 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">{product.name}</h1>
            </div>
            <div aria-labelledby="information-heading" className="mt-4">
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
            </div>
          </div>
          <FadeIn className="mt-10 lg:col-start-2 lg:row-span-2 lg:mt-0 lg:self-center">
            <Image alt="" src={product.image} className="aspect-square w-full rounded-lg object-contain" />
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
        </div>
      ))}
    </Container>
  )
}
