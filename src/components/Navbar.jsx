'use client'

import { useEffect, useRef } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { Popover, PopoverButton, PopoverBackdrop, PopoverPanel} from '@headlessui/react'
import clsx from 'clsx'
import { Container } from '@/components/Container'
import { ChevronDownIcon, CloseIcon } from '@/components/Icons'
import avatarImage from '@/images/avatar.png'

function MobileNavItem({ href, children }) {
  return (
    <li>
      <PopoverButton as={Link} href={href} className="block py-2">
        {children}
      </PopoverButton>
    </li>
  )
}

function MobileNavigation(props) {
  return (
    <Popover {...props}>
      <PopoverButton className="group flex items-center rounded-full bg-white/90 px-4 py-2 text-sm font-medium text-zinc-800 shadow-lg shadow-zinc-800/5 ring-1 ring-zinc-900/5 backdrop-blur-sm">
        Menu
        <ChevronDownIcon className="ml-3 h-auto w-2 stroke-zinc-500 group-hover:stroke-zinc-700" />
      </PopoverButton>
      <PopoverBackdrop
        transition
        className="fixed inset-0 z-50 bg-zinc-800/40 backdrop-blur-xs duration-150 data-closed:opacity-0 data-enter:ease-out data-leave:ease-in"
      />
      <PopoverPanel focus transition className="fixed inset-x-4 top-8 z-50 origin-top rounded-3xl bg-white p-8
        ring-1 ring-zinc-900/5 duration-150 data-closed:scale-95 data-closed:opacity-0 data-enter:ease-out data-leave:ease-in">
        <div className="flex flex-row-reverse items-center justify-between">
          <PopoverButton aria-label="Close menu" className="-m-1 p-1">
            <CloseIcon className="h-6 w-6 text-zinc-500" />
          </PopoverButton>
          <h2 className="text-sm font-medium text-zinc-600">
            Menu
          </h2>
        </div>
        <nav className="mt-6">
          <ul className="-my-2 divide-y divide-zinc-100 text-base text-zinc-800">
            <MobileNavItem href="/o-mnie">O mnie</MobileNavItem>
            <MobileNavItem href="/zdrowo-aktywni">Zdrowo Aktywni</MobileNavItem>
            <MobileNavItem href="/blog">Blog</MobileNavItem>
            <MobileNavItem href="/sklep">Sklep</MobileNavItem>
            <MobileNavItem href="/współpraca">Współpraca</MobileNavItem>
            <MobileNavItem href="/kontakt">Kontakt</MobileNavItem>
          </ul>
        </nav>
      </PopoverPanel>
    </Popover>
  )
}

function NavItem({ href, children }) {
  let isActive = usePathname() === href

  return (
    <li>
      <Link href={href} className={clsx('relative block px-3 py-2 transition', isActive? 'text-lime-600' : 'hover:text-lime-600')}>
        {children}
        {isActive && (<span className="absolute inset-x-1 -bottom-px h-0.5 bg-linear-to-r from-lime-600/0 via-lime-600/40 to-lime-600/0" />)}
      </Link>
    </li>
  )
}

function DesktopNavigation(props) {
  return (
    <nav {...props}>
      <ul className="flex rounded-full bg-white/90 px-3 text-sm font-medium text-zinc-800 shadow-lg shadow-zinc-800/5 ring-1
        ring-zinc-900/5 backdrop-blur text-nowrap">
        <NavItem href="/o-mnie">O mnie</NavItem>
        <NavItem href="/zdrowo-aktywni">Zdrowo Aktywni</NavItem>
        <NavItem href="/blog">Blog</NavItem>
        <NavItem href="/sklep">Sklep</NavItem>
        <NavItem href="/współpraca">Współpraca</NavItem>
        <NavItem href="/kontakt">Kontakt</NavItem>
      </ul>
    </nav>
  )
}

function clamp(number, a, b) {
  let min = Math.min(a, b)
  let max = Math.max(a, b)
  return Math.min(Math.max(number, min), max)
}

function AvatarContainer({ className, ...props }) {
  return (
    <div
      className={clsx(
        className,
        'size-10 rounded-full bg-white/90 p-0.5 shadow-lg shadow-zinc-800/5 ring-1 ring-zinc-900/5 backdrop-blur-sm',
      )}
      {...props}
    />
  )
}

function Avatar({ large = false, className, ...props }) {
  return (
    <Link href="/" aria-label="Home" className={clsx(className, 'pointer-events-auto')} {...props}>
      <Image src={avatarImage} alt="" sizes={large ? '4rem' : '2.25rem'} className={clsx('rounded-full bg-zinc-100 object-cover', large ? 'size-16' : 'size-9', )} priority />
    </Link>
  )
}

export function Navbar() {
  let isHomePage = usePathname() === '/'

  let headerRef = useRef(null)
  let avatarRef = useRef(null)
  let isInitial = useRef(true)

  useEffect(() => {
    let downDelay = avatarRef.current?.offsetTop ?? 0
    let upDelay = 64

    function setProperty(property, value) {
      document.documentElement.style.setProperty(property, value)
    }

    function removeProperty(property) {
      document.documentElement.style.removeProperty(property)
    }

    function updateHeaderStyles() {
      if (!headerRef.current) {
        return
      }

      let { top, height } = headerRef.current.getBoundingClientRect()
      let scrollY = clamp(
        window.scrollY,
        0,
        document.body.scrollHeight - window.innerHeight,
      )

      if (isInitial.current) {
        setProperty('--header-position', 'sticky')
      }

      setProperty('--content-offset', `${downDelay}px`)

      if (isInitial.current || scrollY < downDelay) {
        setProperty('--header-height', `${downDelay + height}px`)
        setProperty('--header-mb', `${-downDelay}px`)
      } else if (top + height < -upDelay) {
        let offset = Math.max(height, scrollY - upDelay)
        setProperty('--header-height', `${offset}px`)
        setProperty('--header-mb', `${height - offset}px`)
      } else if (top === 0) {
        setProperty('--header-height', `${scrollY + height}px`)
        setProperty('--header-mb', `${-scrollY}px`)
      }

      if (top === 0 && scrollY > 0 && scrollY >= downDelay) {
        setProperty('--header-inner-position', 'fixed')
        removeProperty('--header-top')
        removeProperty('--avatar-top')
      } else {
        removeProperty('--header-inner-position')
        setProperty('--header-top', '0px')
        setProperty('--avatar-top', '0px')
      }
    }

    function updateAvatarStyles() {
      if (!isHomePage) {
        return
      }

      let fromScale = 1
      let toScale = 36 / 64
      let fromX = 0
      let toX = 2 / 16

      let scrollY = downDelay - window.scrollY

      let scale = (scrollY * (fromScale - toScale)) / downDelay + toScale
      scale = clamp(scale, fromScale, toScale)

      let x = (scrollY * (fromX - toX)) / downDelay + toX
      x = clamp(x, fromX, toX)

      setProperty(
        '--avatar-image-transform',
        `translate3d(${x}rem, 0, 0) scale(${scale})`,
      )

      let borderScale = 1 / (toScale / scale)
      let borderX = (-toX + x) * borderScale
      let borderTransform = `translate3d(${borderX}rem, 0, 0) scale(${borderScale})`

      setProperty('--avatar-border-transform', borderTransform)
      setProperty('--avatar-border-opacity', scale === toScale ? '1' : '0')
    }

    function updateStyles() {
      updateHeaderStyles()
      updateAvatarStyles()
      isInitial.current = false
    }

    updateStyles()
    window.addEventListener('scroll', updateStyles, { passive: true })
    window.addEventListener('resize', updateStyles)

    return () => {
      window.removeEventListener('scroll', updateStyles)
      window.removeEventListener('resize', updateStyles)
    }
  }, [isHomePage])

  return (
    <>
      <header className="pointer-events-none relative z-50 flex flex-none flex-col" style={{height: 'var(--header-height)', marginBottom: 'var(--header-mb)'}}>
        {isHomePage && (
          <>
            <div ref={avatarRef} className="order-last mt-[calc(--spacing(16)-(--spacing(3)))]" />
            <Container className="top-0 order-last -mb-3 pt-3" style={{position: 'var(--header-position)'}}>
              <div className="top-(--avatar-top,--spacing(3)) w-full" style={{ position: 'var(--header-inner-position)'}} >
                <div className="relative">
                  <AvatarContainer className="absolute left-0 top-3 origin-left transition-opacity" style={{opacity: 'var(--avatar-border-opacity, 0)', transform: 'var(--avatar-border-transform)'}}/>
                  <Avatar large className="block size-16 origin-left" style={{ transform: 'var(--avatar-image-transform)' }} />
                </div>
              </div>
            </Container>
          </>
        )}
        <div ref={headerRef} className="top-0 z-10 h-16 pt-6" style={{ position: 'var(--header-position)'}}>
          <Container className="top-(--header-top,--spacing(6)) w-full" style={{ position: 'var(--header-inner-position)'}}>
            <div className="relative flex gap-4">
              <div className="flex flex-1">
                {!isHomePage && (
                  <AvatarContainer>
                    <Avatar />
                  </AvatarContainer>
                )}
              </div>
              <div className="flex flex-1 justify-end md:justify-center">
                <MobileNavigation className="pointer-events-auto md:hidden" />
                <DesktopNavigation className="pointer-events-auto hidden md:block" />
              </div>
              <div className="flex justify-end md:flex-1">
              </div>
            </div>
          </Container>
        </div>
      </header>
      {isHomePage && (
        <div
          className="flex-none"
          style={{ height: 'var(--content-offset)' }}
        />
      )}
    </>
  )
}
