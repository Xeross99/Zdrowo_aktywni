import Link from 'next/link'

import { ContainerInner, ContainerOuter } from '@/components/Container'

function NavLink({ href, children }) {
  return (
    <Link
      href={href}
      className="transition hover:text-lime-500 dark:hover:text-lime-400"
    >
      {children}
    </Link>
  )
}

export function Footer() {
  return (
    <footer className="mt-32 flex-none">
      <ContainerOuter>
        <div className="border-t border-zinc-100 pt-10 pb-16 dark:border-zinc-700/40">
          <ContainerInner>
            <div className="flex flex-col items-center justify-between gap-6 md:flex-row">
              <div className="flex flex-wrap justify-center gap-x-6 gap-y-1 text-sm font-medium text-zinc-800 dark:text-zinc-200">
                <NavLink href="/o-mnie">O mnie</NavLink>
                <NavLink href="/zajecia">Zajęcia</NavLink>
                <NavLink href="/osiagniecia">Osiągnięcia</NavLink>
                <NavLink href="/publikacje">Publikacje</NavLink>
                <NavLink href="/kontakt">Kontakt</NavLink>
              </div>
              <div className="flex flex-col items-center gap-1 text-sm text-zinc-400 md:items-end dark:text-zinc-500">
                <p>
                  &copy; {new Date().getFullYear()} Zdrowo-Aktywni. Wszelkie
                  prawa zastrzeżone.
                </p>
                <p>
                  Strona została wykonana przez{' '}
                  <a
                    href="https://krzysteczko-m.pl"
                    target="_blank"
                    className="transition hover:text-lime-500 dark:hover:text-lime-400"
                  >
                    Michała Krzysteczko
                  </a>
                </p>
              </div>
            </div>
          </ContainerInner>
        </div>
      </ContainerOuter>
    </footer>
  )
}
