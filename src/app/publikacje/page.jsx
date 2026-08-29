import { Card } from '@/components/Card'
import { SimpleLayout } from '@/components/SimpleLayout'

export const metadata = {
  title: 'Publikacje & Wykłady',
  description:
    'Wykłady, warsztaty i publikacje Aleksandry Kost o zdrowiu, biohackingu i aktywnym stylu życia.',
}

function Section({ title, children }) {
  return (
    <section className="md:border-l md:border-zinc-100 md:pl-6 md:dark:border-zinc-700/40">
      <div className="grid max-w-3xl grid-cols-1 items-baseline gap-y-8 md:grid-cols-4">
        <h2 className="text-sm font-semibold text-zinc-800 dark:text-zinc-100">
          {title}
        </h2>
        <div className="md:col-span-3">{children}</div>
      </div>
    </section>
  )
}

const wyklady = [
  {
    tytul: 'Małe zmiany - wielkie efekty. Cykl spotkań Akademii Zdrowia',
    data: '28 maja 2026',
    miejsce: 'Kawiarenka „Betania”, Studzionka',
    opis: 'Trzy cykliczne spotkania wprowadzające w biohacking w prosty sposób, bez skomplikowanych teorii. O metabolizmie, równowadze kwasowo-zasadowej i insulinooporności - z praktycznym testem pH organizmu i omówieniem okna żywieniowego, regeneracji oraz odżywiania komórkowego.',
    href: '/publikacje/akademia-zdrowia-betania-studzionka',
  },
  {
    tytul:
      'Biohacking - jak świadome nawyki optymalizują metabolizm i polepszają jakość życia',
    data: '7 marca 2026',
    miejsce:
      'III Festiwal Kultury Zdrowia „Pełnia zdrowia bez leków", Katowice',
    opis: 'Wykład o świadomym „hakowaniu" własnego organizmu przez codzienne decyzje. O piramidzie zdrowia, metabolizmie jelit i naturalnych sposobach wsparcia organizmu - m.in. aloesie i dobrej jakości probiotykach.',
    href: '/publikacje/biohacking-festiwal-zdrowia',
  },
  {
    tytul: 'Sprawny metabolizm kluczem do sukcesu',
    data: '18 lutego 2026',
    miejsce: 'Ośrodek Kultury i Sportu w Gaszowicach',
    opis: 'Prelekcja dla mieszkańców Gaszowic o tym, jak zadbać o zdrowie od wewnątrz - o metabolizmie i najlepszych rozwiązaniach na poprawę zdrowia i samopoczucia. Uczestnicy mogli nieodpłatnie sprawdzić parametry swojego ciała: nawodnienie, tłuszcz wisceralny, masę mięśniową i kostną.',
    href: '/publikacje/akademia-zdrowia-okis-gaszowice',
  },
  {
    tytul: 'Akademia Zdrowia - cykl spotkań o świadomym budowaniu zdrowia',
    data: '7 stycznia 2026',
    miejsce: 'Biblioteka w Jankowicach k. Pszczyny',
    opis: 'Cykl spotkań otwarty wykładem o aloesie - jednym z najsilniej działających biologicznie darów natury. Kolejne tematy to równowaga kwasowo-zasadowa, stany zapalne i blokady metaboliczne, a uczestnicy mogli skorzystać z analizy składu ciała, pomiaru pH i analizy wellness.',
    href: '/publikacje/akademia-zdrowia-biblioteka-jankowice',
  },
  {
    tytul: 'Akademia Zdrowia z KGW Lyszczanki',
    data: '23 kwietnia 2025',
    miejsce: 'Koło Gospodyń Wiejskich Lyszczanki, Lyski',
    opis: 'Spotkanie o tym, jak zadbać o zdrowie „od wewnątrz” - o budowaniu zdrowych nawyków, oczyszczaniu organizmu i dobrym samopoczuciu na co dzień. Z pomiarem pH organizmu, eksperymentem i degustacją aloesu.',
    href: '/publikacje/akademia-zdrowia-kgw-lyszczanki',
  },
]

const publikacje = [
  {
    tytul:
      'Aktywność i aloes - dwa nawyki, które zrewolucjonizują Twoje zdrowie',
    wydawnictwo: 'Dwumiesięcznik „Żyj naturalnie", wydanie styczeń-luty 2025',
    rok: '2025',
    opis: 'Artykuł o prostych, ale skutecznych zmianach w codziennym stylu życia - regularnym ruchu i naturalnym wsparciu organizmu przez aloes. Praktyczne wskazówki, które można wdrożyć od razu, niezależnie od poziomu zaawansowania.',
    href: '/artykul-aktywnosc-i-aloes.pdf',
  },
]

export default function Publikacje() {
  return (
    <SimpleLayout
      title="Publikacje & Wykłady"
      intro="Dzielę się wiedzą o zdrowiu, biohackingu i aktywnym stylu życia."
    >
      <div className="space-y-20">
        <Section title="Wykłady">
          <div className="space-y-8">
            {wyklady.map((wyklad, i) => (
              <Card key={i} as="article">
                <Card.Eyebrow decorate>
                  {wyklad.data} · {wyklad.miejsce}
                </Card.Eyebrow>
                <Card.Title as="h3" href={wyklad.href}>
                  {wyklad.tytul}
                </Card.Title>
                <Card.Description>{wyklad.opis}</Card.Description>
                {wyklad.href && <Card.Cta>Czytaj relację</Card.Cta>}
              </Card>
            ))}
          </div>
        </Section>

        <Section title="Publikacje">
          <div className="space-y-8">
            {publikacje.map((pub, i) => (
              <Card key={i} as="article">
                <Card.Eyebrow decorate>
                  {pub.rok} · {pub.wydawnictwo}
                </Card.Eyebrow>
                <Card.Title as="h3" href={pub.href} target="_blank">
                  {pub.tytul}
                </Card.Title>
                {pub.opis && <Card.Description>{pub.opis}</Card.Description>}
                {pub.href && <Card.Cta>Czytaj</Card.Cta>}
              </Card>
            ))}
          </div>
        </Section>
      </div>
    </SimpleLayout>
  )
}
