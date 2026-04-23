import { Card } from '@/components/Card'
import { SimpleLayout } from '@/components/SimpleLayout'
import { AnimatedNumber } from '@/components/AnimatedNumber'

export const metadata = {
  title: 'Osiągnięcia',
  description:
    'Wyprawy himalajskie, maratony, triatlony - sportowe osiągnięcia Aleksandry Kost.',
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

const statystyki = [
  { value: '28', label: 'Szczytów Korony Gór Polski' },
  { value: '4', label: 'Maratony' },
  { value: '1', label: 'Triatlony' },
  { value: '1', label: 'Wyprawy himalajskie' },
]

const wyprawy = [
  {
    name: 'Korona Gór Polski - 28 szczytów',
    rok: '2012 – 2026',
    opis: '14-letnia przygoda zakończona w styczniu 2026 roku. Od pierwszych Rysów (2499 m) po ostatni Lubomir — 28 najwyższych szczytów polskich pasm górskich, zdobywanych w każdej porze roku.',
    href: '/osiagniecia/korona-gor-polski',
  },
  {
    name: 'Himalaje - Everest Base Camp i Kalapatthar',
    rok: '2019',
    opis: 'Wyprawa z 13-osobową grupą z Pszczyny do bazy u stóp Mount Everestu (5364 m) i zdobycie Kalapatthar (5643 m) - najwyższego punktu wyprawy.',
    href: '/osiagniecia/himalaje-2019',
  },
]

const starty = [
  { rok: '2024', nazwa: 'Maraton - szczegóły wkrótce' },
  { rok: '2023', nazwa: 'Triathlon - szczegóły wkrótce' },
  { rok: '2022', nazwa: 'Maraton - szczegóły wkrótce' },
]

const marzenia = [
  'Przejście Głównego Szlaku Beskidzkiego',
  'Maratonowe stolice Europy',
  'Niezależność finansowa',
]

export default function Osiagniecia() {
  return (
    <SimpleLayout
      title="Osiągnięcia"
      intro="Każdy szczyt to nowy początek. Każdy start to krok do przodu."
    >
      <div className="space-y-20">
        <section>
          <dl className="grid grid-cols-1 gap-0.5 overflow-hidden rounded-2xl text-center sm:grid-cols-2 lg:grid-cols-4">
            {statystyki.map((stat) => (
              <div
                key={stat.label}
                className="flex flex-col bg-zinc-400/5 p-8 dark:bg-zinc-800/50"
              >
                <dt className="text-sm/6 font-semibold text-zinc-600 dark:text-zinc-400">
                  {stat.label}
                </dt>
                <dd className="order-first text-3xl font-semibold tracking-tight text-lime-500">
                  <AnimatedNumber value={stat.value} />
                </dd>
              </div>
            ))}
          </dl>
        </section>

        <Section title="Wyprawy górskie">
          <div className="space-y-8">
            {wyprawy.map((wyprawa, i) => (
              <Card key={i} as="article">
                <Card.Eyebrow decorate>{wyprawa.rok}</Card.Eyebrow>
                <Card.Title as="h3" href={wyprawa.href}>
                  {wyprawa.name}
                </Card.Title>
                <Card.Description>{wyprawa.opis}</Card.Description>
                {wyprawa.href && <Card.Cta>Czytaj relację</Card.Cta>}
              </Card>
            ))}
          </div>
        </Section>

        <Section title="Starty sportowe">
          <div className="space-y-8">
            {starty.map((start, i) => (
              <Card key={i} as="article">
                <Card.Eyebrow decorate>{start.rok}</Card.Eyebrow>
                <Card.Title as="h3">{start.nazwa}</Card.Title>
              </Card>
            ))}
            <p className="text-sm text-zinc-400 italic dark:text-zinc-500">
              Pełna lista startów zostanie uzupełniona wkrótce.
            </p>
          </div>
        </Section>

        <Section title="Marzenia i cele">
          <div className="space-y-4">
            {marzenia.map((marzenie) => (
              <Card key={marzenie}>
                <Card.Title as="h3">{marzenie}</Card.Title>
              </Card>
            ))}
          </div>
        </Section>
      </div>
    </SimpleLayout>
  )
}
