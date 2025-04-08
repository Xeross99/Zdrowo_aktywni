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

const breadcrumbs = [
  { id: 1, name: 'Sklep', href: '/sklep' },
  { id: 2, name: 'Aparat ruchu', href: '/sklep/aparat_ruchu' },
]

const products = [
  {
    id: 1,
    lr_id: '80361-599',
    name: 'Colostrum Liquid',
    href: 'https://shop.lrworld.com/product/pl/pl/colostrum_liquid.html?productAlias=80361-599&casrnc=8e7b7',
    image: colostrum,
    price: '148,20 zł',
    description: 'Ten suplement diety to wysokiej jakości produkt na bazie colostrum, który wspiera naturalną odporność oraz regenerację komórek. Pozyskiwany od europejskich krów, jest odtłuszczony, pozbawiony kazeiny i wytwarzany w łagodnym, zimnym procesie, co pozwala zachować jego pełną wartość odżywczą. Nie zawiera żadnych dodatków, konserwantów ani barwników.',
    list:
      "Suplement diety wspiera naturalną odporność organizmu oraz regenerację komórek.\n" +
      "Najwyższej jakości produkt na bazie colostrum\n" +
      "Odtłuszczone i pozbawione kazeiny krowie colostrum (młodziwo)\n" +
      "Wyprodukowano z colostrum pozyskiwanego od europejskich krów\n" +
      "Bez substancji dodatkowych, konserwantów i barwników\n" +
      "Łagodny, zimny proces produkcji dla optymalnej gęstości odżywczej"
  },
  {
    id: 2,
    lr_id: '80338-699',
    name: 'Super Omega Kapsułki',
    href: 'https://shop.lrworld.com/product/pl/pl/super_omega__kapsulki.html?productAlias=80338-699&casrnc=f0fea',
    image: omega,
    price: '137,80 zł',
    description: 'Ten suplement diety to źródło wysokiej jakości kwasów Omega-3, pozyskiwanych z oleju rybiego pochodzącego z certyfikowanych, wolnych połowów. Dzięki wysokiemu stężeniu EPA i DHA wspiera zdrowie serca, prawidłowe funkcjonowanie mózgu oraz działa przeciwzapalnie. Idealny wybór dla osób dbających o układ krążenia i kondycję psychiczną.',
    list:
      "Suplement diety wspiera zdrowie serca i mózgu.\n" +
      "Kapsułki zawierają wysokiej jakości kwasy tłuszczowe Omega 3, pozyskiwane z oleju rybiego z sardynek, makreli i tuńczyków\n" +
      "Ryby pochodzą z wolnych połowów na południowoamerykańskim Pacyfiku, certyfikowanych przez „Friend of the Sea”\n" +
      "Produkt działa przeciwzapalnie\n" +
      "Wysokie stężenie EPA wspiera serce, a DHA utrzymuje funkcje mózgu"
  },
  {
    id: 3,
    lr_id: '80550-419',
    name: 'Protein Power Napój w proszku o smaku waniliowym',
    href: 'https://shop.lrworld.com/product/pl/pl/protein_power_napoj_w_proszku_o_smaku_waniliowym.html?productAlias=80550-419&casrnc=f4d99',
    image: protein,
    price: '153,50 zł',
    description: 'Ten suplement diety został stworzony z myślą o osobach dążących do zwiększenia masy mięśniowej. Zawiera aż 80% białka pochodzącego z pięciu różnych źródeł, a także magnez i witaminę B6, które wspierają metabolizm białek i glikogenu. Dzięki swojej bogatej formule wspomaga syntezę białka, rozwój muskulatury oraz prawidłowe funkcjonowanie mięśni.',
    list:
      "Suplement diety wspiera utrzymanie i przyrost masy mięśniowej.\n" +
      "Dostarcza ważnych protein i innych składników odżywczych dla utrzymania masy mięśniowej\n" +
      "Zawiera 80% białka z pięciu różnych źródeł\n" +
      "Z magnezem i witaminą B6, wspierającymi metabolizm białek i glikogenu\n" +
      "Wsparcie w przyroście muskulatury i przyswajaniu białka dzięki połączeniu 5 komponentów proteinowych, magnezu i witaminy B6\n" +
      "Produkt wspomaga prawidłową syntezę białka i funkcjonowanie mięśni"
  },
  {
    id: 4,
    lr_id: '80301-699',
    name: 'Vita Active Red Fruits',
    href: 'https://shop.lrworld.com/product/pl/pl/vita_active_red_fruits.html?productAlias=80301-699&casrnc=6c0ca',
    image: vita_active,
    price: '78,51 zł',
    description: 'Ten suplement diety to naturalne wsparcie dla procesu detoksykacji organizmu i ochrony komórek przed stresem oksydacyjnym. Zawiera koncentrat z 21 owoców i warzyw oraz dostarcza 100% dziennego zapotrzebowania na 10 kluczowych witamin w jednej łyżeczce. Dzięki obecności manganu i witaminy B6 wspiera funkcje wątroby, syntezę cysteiny oraz pomaga usuwać toksyny bez dodatku barwników.',
    list:
      "Suplement diety wspiera detoksykację organizmu oraz ochronę komórek przed stresem oksydacyjnym.\n" +
      "Z koncentratem z 21 owoców i warzyw\n" +
      "1 łyżeczka (5 ml) dziennie pokrywa 100 % dziennego zapotrzebowania na 10 witamin\n" +
      "Bez barwników\n" +
      "Wspiera wątrobę w procesie usuwania toksyn i detoksykacji organizmu\n" +
      "Zawiera mangan, który chroni komórki przed stresem oksydacyjnym\n" +
      "Z witaminą B6, która wspiera syntezę aminokwasu siarkowego - cysteiny"
  },
  {
    id: 5,
    lr_id: '20604-201',
    name: 'Aloe Vera MSM Wielofunkcyjny żel do ciała',
    href: 'https://shop.lrworld.com/product/pl/pl/aloe_vera_msm_wielofunkcyjny_zel_do_ciala_aloe_vera.html?productAlias=20604-201&casrnc=2322f',
    image: msm,
    price: '100,40 zł',
    description: 'Ten chłodzący żel do ciała z 60% zawartością Aloe Vera to idealne rozwiązanie dla zmęczonych mięśni i stawów. Dzięki zawartości MSM, ekstraktu z kory wierzby oraz liści mącznicy lekarskiej działa kojąco, wspomaga regenerację i przywraca komfort. Szybko się wchłania, nie pozostawiając tłustego filmu, a przy tym poprawia elastyczność skóry.',
    list:
      "Szybko wchłaniający się, chłodzący żel do ciała z 60% żelu Aloe Vera.\n" +
      "Zawiera MSM, liście mącznicy lekarskiej oraz ekstrakt z kory wierzby\n" +
      "Wykazuje działanie chłodzące i kojące, idealny na zmęczone mięśnie i stawy\n" +
      "Nadaje skórze elastyczność\n" +
      "Działa na zmęczone stawy i przywraca komfort\n" +
      "Szybko się wchłania, nie pozostawiając tłustego filmu\n" +
      "Zawiera ekstrakty ziołowe wspomagające regenerację"
  },
  {
    id: 6,
    lr_id: '80850-683',
    name: 'Aloe Vera Drinking Gel Active Freedom',
    href: 'https://shop.lrworld.com/product/pl/pl/aloe_vera_drinking_gel_active_freedom.html?productAlias=80850-683&casrnc=49eea',
    image: aloe_vera,
    price: '126,80 zł',
    description: 'Ten suplement to kompleksowe wsparcie dla układu ruchu. Zawiera aż 88% żelu Aloe Vera oraz witaminę C, która wspiera produkcję kolagenu, a tym samym zdrowie chrząstki i kości. Wzbogacony o witaminę E, kolagen, glukozaminę i chondroitynę, pomaga utrzymać prawidłowy metabolizm energetyczny i dba o kondycję stawów. Idealny dla osób aktywnych i dbających o sprawność ruchową.',
    list:
      "Witamina C wspiera produkcję kolagenu dla prawidłowego funkcjonowania chrząstki i kości oraz pomaga utrzymać prawidłowy metabolizm energetyczny.\n" +
      "Dla Twojego aparatu ruchu: wspiera prawidłowy metabolizm energetyczny oraz utrzymanie chrząstki i kości\n" +
      "88% żelu Aloe Vera\n" +
      "Z witaminą E, kolagenem, siarczanem glukozaminy, siarczanem chondroityny i składnikiem czynnym witaminą C"
  }
]

export default function AparatRuchu() {
  return (
    <div className="bg-white">
      <div className="mx-auto max-w-7xl py-24 sm:px-2 sm:py-32 lg:px-4">
        <div className="mx-auto max-w-2xl px-4 lg:max-w-none">
          <div className="max-w-3xl">
            <nav aria-label="Breadcrumb">
              <ol role="list" className="flex items-center space-x-2">
                {breadcrumbs.map((breadcrumb, breadcrumbIdx) => (
                  <li key={breadcrumb.id}>
                    <div className="flex items-center text-sm">
                      <a href={breadcrumb.href} className="text-lime-600 hover:text-lime-500">
                        {breadcrumb.name}
                      </a>
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
            <h1 className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Aparat ruchu</h1>
            <p className="mt-4 text-gray-500">
              Odkryj produkty wspierające zdrowie stawów, mięśni i odporności. Wybierz naturalne wsparcie dla swojego ciała i ciesz się aktywnym stylem życia każdego dnia!
            </p>
          </div>

          <div className="mt-10 space-y-40 border-t border-gray-200 pt-10 sm:mt-16 sm:pt-16">
            {products.map((product) => (
              <div key={product.id} className="flex flex-col-reverse lg:grid lg:grid-cols-12 lg:items-center lg:gap-x-8">
                <div className="mt-6 lg:col-span-7 lg:mt-0 xl:col-span-8">
                  <div aria-labelledby="information-heading" className="mt-4">
                      <h1 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">{product.name}</h1>
                    <div className="flex items-center">
                      <p className="text-lg text-gray-900 sm:text-xl">{product.price}</p>
                      <div className="ml-4 border-l border-gray-300 pl-4">
                        <p className="ml text-sm text-gray-500">Ceny 30% taniej po dołączeniu do programu.</p>
                      </div>
                    </div>
                    <div className="mt-10">
                      <h2 className="text-sm font-medium text-gray-900">Opis</h2>

                      <div className="mt-4 space-y-4 text-sm/6 text-gray-500">
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
                      </Link>
                      pod numerem: {product.lr_id}</p>
                    </div>
                  </div>
                </div>
                <div className="flex-auto h-full lg:col-span-5 xl:col-span-4">
                  <Image alt={product.name} src={product.image} className="aspect-2/1 h-full rounded-lg object-contain" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
