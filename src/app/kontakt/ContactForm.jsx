'use client'

import { useActionState } from 'react'
import { submitContactForm } from './actions'

export function ContactForm() {
  const [state, formAction, isPending] = useActionState(submitContactForm, {
    success: false,
    errors: {},
  })

  if (state.success) {
    return (
      <div className="rounded-2xl bg-lime-500/10 p-8 text-center">
        <h3 className="text-lg font-semibold text-lime-500">
          Wiadomość wysłana!
        </h3>
        <p className="mt-2 text-sm text-zinc-600 dark:text-zinc-400">
          Dziękuję za kontakt. Odpowiem najszybciej jak to możliwe.
        </p>
      </div>
    )
  }

  return (
    <form action={formAction}>
      <div className="space-y-6">
        <div>
          <label
            htmlFor="name"
            className="block text-sm/6 font-semibold text-zinc-900 dark:text-zinc-100"
          >
            Imię
          </label>
          <div className="mt-2.5">
            <input
              id="name"
              type="text"
              name="name"
              autoComplete="given-name"
              className="block w-full rounded-md bg-white px-3.5 py-2 text-base text-zinc-900 outline-1 -outline-offset-1 outline-zinc-300 placeholder:text-zinc-400 focus:outline-2 focus:-outline-offset-2 focus:outline-lime-500 dark:bg-zinc-800 dark:text-zinc-100 dark:outline-zinc-700 dark:placeholder:text-zinc-500"
            />
          </div>
          {state.errors?.name && (
            <p className="mt-1 text-sm text-red-500">{state.errors.name}</p>
          )}
        </div>

        <div>
          <label
            htmlFor="email"
            className="block text-sm/6 font-semibold text-zinc-900 dark:text-zinc-100"
          >
            Email
          </label>
          <div className="mt-2.5">
            <input
              id="email"
              type="email"
              name="email"
              autoComplete="email"
              className="block w-full rounded-md bg-white px-3.5 py-2 text-base text-zinc-900 outline-1 -outline-offset-1 outline-zinc-300 placeholder:text-zinc-400 focus:outline-2 focus:-outline-offset-2 focus:outline-lime-500 dark:bg-zinc-800 dark:text-zinc-100 dark:outline-zinc-700 dark:placeholder:text-zinc-500"
            />
          </div>
          {state.errors?.email && (
            <p className="mt-1 text-sm text-red-500">{state.errors.email}</p>
          )}
        </div>

        <div>
          <label
            htmlFor="message"
            className="block text-sm/6 font-semibold text-zinc-900 dark:text-zinc-100"
          >
            Wiadomość
          </label>
          <div className="mt-2.5">
            <textarea
              id="message"
              name="message"
              rows={4}
              className="block w-full rounded-md bg-white px-3.5 py-2 text-base text-zinc-900 outline-1 -outline-offset-1 outline-zinc-300 placeholder:text-zinc-400 focus:outline-2 focus:-outline-offset-2 focus:outline-lime-500 dark:bg-zinc-800 dark:text-zinc-100 dark:outline-zinc-700 dark:placeholder:text-zinc-500"
            />
          </div>
          {state.errors?.message && (
            <p className="mt-1 text-sm text-red-500">{state.errors.message}</p>
          )}
        </div>
      </div>

      {state.errors?.form && (
        <p className="mt-4 text-sm text-red-500">{state.errors.form}</p>
      )}

      <div className="mt-8 flex justify-end">
        <button
          type="submit"
          disabled={isPending}
          className="rounded-md bg-lime-500 px-3.5 py-2.5 text-center text-sm font-semibold text-white shadow-xs hover:bg-lime-400 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-lime-500 disabled:opacity-50 disabled:cursor-not-allowed"
        >
          {isPending ? 'Wysyłanie...' : 'Wyślij wiadomość'}
        </button>
      </div>
    </form>
  )
}
