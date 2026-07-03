import { useEffect, useState } from 'react'
import { cn } from '@/lib/utils'

const LINKS = [
  { href: '#perfumes', label: 'Perfumes' },
  { href: '#catalogo', label: 'Catálogo' },
  { href: '#nosotros', label: 'Nosotros' },
  { href: '#contacto', label: 'Contacto' },
]

export function Header() {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 30)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header
      className={cn(
        'fixed top-0 left-0 right-0 z-50 flex items-center justify-between',
        'px-[clamp(18px,5vw,48px)] py-4 transition-[background,padding] duration-300',
        'bg-gradient-to-b from-background/85 to-transparent backdrop-blur-md',
        scrolled && 'border-b border-line bg-background/92 py-2.5'
      )}
    >
      <a href="#top" className="flex flex-col leading-none" aria-label="FO Perfumería">
        <span className="font-display text-3xl font-bold tracking-[3px] gold-text">FO</span>
        <span className="mt-0.5 pl-0.5 text-[11px] tracking-[6px] uppercase text-gold-soft">Perfumería</span>
      </a>
      <nav className="hidden sm:flex gap-[clamp(14px,3vw,34px)]">
        {LINKS.map((link) => (
          <a
            key={link.href}
            href={link.href}
            className="group relative py-1 text-sm tracking-wider uppercase text-muted-foreground transition-colors hover:text-foreground"
          >
            {link.label}
            <span className="absolute left-0 bottom-0 h-px w-0 bg-gold transition-all duration-300 group-hover:w-full" />
          </a>
        ))}
      </nav>
    </header>
  )
}
