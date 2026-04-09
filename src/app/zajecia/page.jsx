import Link from 'next/link'

import { Card } from '@/components/Card'
import { SimpleLayout } from '@/components/SimpleLayout'

export const metadata = {
  title: 'Zajęcia',
  description:
    'Nordic Walking, konsultacje dietetyczne, wykłady i warsztaty — zajęcia prowadzone przez Aleksandrę Kost.',
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

function ServiceCard({ title, description, benefits, note, cta }) {
  return (
    <Card>
      <Card.Title as="h3">{title}</Card.Title>
      <Card.Description>{description}</Card.Description>
      <ul className="relative z-10 mt-4 space-y-2">
        {benefits.map((b) => (
          <li key={b} className="flex items-start gap-2 text-sm text-zinc-600 dark:text-zinc-400">
            <span className="mt-1.5 h-1 w-1 flex-none rounded-full bg-lime-500" />
            {b}
          </li>
        ))}
      </ul>
      {note && (
        <p className="relative z-10 mt-3 text-xs text-zinc-400 italic dark:text-zinc-500">{note}</p>
      )}
      <div className="relative z-10 mt-4">
        <Link
          href="/kontakt"
          className="inline-flex items-center gap-2 rounded-md bg-zinc-800 py-2 px-3 text-sm font-semibold text-zinc-100 transition hover:bg-zinc-700 dark:bg-zinc-700 dark:hover:bg-zinc-600"
        >
          {cta}
        </Link>
      </div>
    </Card>
  )
}

export default function Zajecia() {
  return (
    <SimpleLayout
      title="Zajęcia i usługi"
      intro="Zadbaj o zdrowie z profesjonalnym wsparciem. Każda z moich usług to krok w stronę lepszego samopoczucia."
    >
      <div className="space-y-20">
        <Section title="Nordic Walking">
          <ServiceCard
            title="Grupowe zajęcia nordic walking"
            description="Nordic walking to doskonała forma aktywności dla każdego — niezależnie od wieku, kondycji czy doświadczenia. Zajęcia prowadzę w różnych lokalizacjach, łącząc ruch na świeżym powietrzu z nauką prawidłowej techniki marszu z kijkami."
            benefits={[
              'Poprawa kondycji i wydolności',
              'Wzmocnienie mięśni całego ciała',
              'Redukcja stresu i poprawa samopoczucia',
              'Zajęcia w plenerze, w pięknych lokalizacjach',
            ]}
            note="Zajęcia odbywają się w różnych lokalizacjach — skontaktuj się po aktualny harmonogram."
            cta="Zapisz się"
          />
        </Section>
        <Section title="Dietetyka">
          <ServiceCard
            title="Konsultacje dietetyczne"
            description="Indywidualne podejście do żywienia dopasowane do Twojego stylu życia, celów i potrzeb zdrowotnych. Pomagam budować zdrowe nawyki żywieniowe krok po kroku."
            benefits={[
              'Analiza obecnych nawyków żywieniowych',
              'Indywidualny plan żywieniowy',
              'Wsparcie w realizacji celów zdrowotnych',
              'Edukacja żywieniowa i praktyczne wskazówki',
            ]}
            cta="Umów wizytę"
          />
        </Section>
        <Section title="Wykłady">
          <ServiceCard
            title="Wykłady & warsztaty"
            description="Dzielę się wiedzą o biohackingu, zdrowym stylu życia i budowaniu nawyków zdrowotnych. Prowadzę wykłady i warsztaty dla firm, szkół, organizacji i grup prywatnych."
            benefits={[
              'Biohacking i optymalizacja zdrowia',
              'Zdrowy styl życia w praktyce',
              'Budowanie trwałych nawyków zdrowotnych',
              'Motywacja i inspiracja do działania',
            ]}
            cta="Zaproś na wykład"
          />
        </Section>
      </div>
    </SimpleLayout>
  )
}
