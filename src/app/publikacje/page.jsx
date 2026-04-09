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
    tytul: 'Biohacking — jak optymalizować swoje zdrowie',
    data: '2024',
    miejsce: 'Szczegóły wkrótce',
    opis: 'Praktyczne wskazówki jak wykorzystać biohacking w codziennym życiu, aby poprawić energię, sen i wydajność.',
  },
  {
    tytul: 'Zdrowe nawyki — mały krok, wielka zmiana',
    data: '2023',
    miejsce: 'Szczegóły wkrótce',
    opis: 'Jak budować trwałe nawyki zdrowotne, które zmieniają życie. Od codziennego biegu po świadome odżywianie.',
  },
  {
    tytul: 'Aktywność fizyczna a zdrowie psychiczne',
    data: '2023',
    miejsce: 'Szczegóły wkrótce',
    opis: 'O wpływie regularnej aktywności fizycznej na samopoczucie, redukcję stresu i budowanie odporności psychicznej.',
  },
]

const publikacje = [
  {
    tytul: 'Publikacja — szczegóły wkrótce',
    wydawnictwo: 'Szczegóły wkrótce',
    rok: '2024',
  },
  {
    tytul: 'Publikacja — szczegóły wkrótce',
    wydawnictwo: 'Szczegóły wkrótce',
    rok: '2023',
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
            <p className="text-sm text-zinc-400 italic dark:text-zinc-500">
              Szczegółowe informacje o wykładach zostaną uzupełnione wkrótce.
            </p>
          </div>
        </Section>

        <Section title="Publikacje">
          <div className="space-y-8">
            {publikacje.map((pub, i) => (
              <Card key={i} as="article">
                <Card.Eyebrow decorate>{pub.rok}</Card.Eyebrow>
                <Card.Title as="h3">{pub.tytul}</Card.Title>
                <Card.Description>
                  {pub.wydawnictwo}
                </Card.Description>
              </Card>
            ))}
            <p className="text-sm text-zinc-400 italic dark:text-zinc-500">
              Lista publikacji zostanie uzupełniona wkrótce.
            </p>
          </div>
        </Section>
      </div>
    </SimpleLayout>
  )
}
