import Link from 'next/link'
import { FadeIn } from "@/components/FadeIn"

export default function notFound() {
  return (
    <main className="mx-auto flex w-full max-w-7xl flex-auto flex-col justify-center px-6 py-24 sm:py-64 lg:px-8">
      <FadeIn>
        <p className="text-base/8 font-semibold text-lime-600">404</p>
        <h1 className="mt-4 text-pretty text-5xl font-semibold tracking-tight text-gray-900 sm:text-6xl">Strona nie została znaleziona</h1>
        <p className="mt-6 text-pretty text-lg font-medium text-gray-500 sm:text-xl/8">Przepraszamy, nie udało się znaleźć strony, której szukasz.</p>
        <div className="mt-10">
          <Link href="/" className="text-sm/7 font-semibold text-lime-600"><span aria-hidden="true">&larr;</span> Wróć do strony głównej</Link>
        </div>
      </FadeIn>
    </main>
  )
}
