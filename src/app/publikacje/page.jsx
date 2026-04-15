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
    tytul: 'Biohacking - jak optymalizować swoje zdrowie',
    data: '2024',
    miejsce: 'Szczegóły wkrótce',
    opis: 'Praktyczne wskazówki jak wykorzystać biohacking w codziennym życiu, aby poprawić energię, sen i wydajność.',
  },
]

const publikacje = [
  {
    tytul:
      'Aktywność i aloes - dwa nawyki, które zrewolucjonizują Twoje zdrowie',
    wydawnictwo: 'Dwumiesięcznik „Żyj naturalnie", wydanie styczeń–luty 2025',
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
                <Card.Title as="h3">{wyklad.tytul}</Card.Title>
                <Card.Description>{wyklad.opis}</Card.Description>
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
                {pub.opis && (
                  <Card.Description>{pub.opis}</Card.Description>
                )}
                {pub.href && <Card.Cta>Czytaj</Card.Cta>}
              </Card>
            ))}
          </div>
        </Section>
      </div>
    </SimpleLayout>
  )
}
