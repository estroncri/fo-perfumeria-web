import { useMemo, useState } from 'react'
import { cn } from '@/lib/utils'
import { PERFUMES, type Family } from '@/data/perfumes'
import { PerfumeCard } from '@/components/PerfumeCard'
import { Reveal } from '@/components/Reveal'

const FILTERS: { label: string; value: Family | 'all' }[] = [
  { label: 'Todos', value: 'all' },
  { label: 'Frescos', value: 'Frescos' },
  { label: 'Amaderados', value: 'Amaderados' },
  { label: 'Dulces & Especiados', value: 'Dulces' },
]

export function CatalogSection() {
  const [filter, setFilter] = useState<Family | 'all'>('all')

  const list = useMemo(
    () => (filter === 'all' ? PERFUMES : PERFUMES.filter((p) => p.family === filter)),
    [filter]
  )

  return (
    <section id="catalogo" className="mx-auto max-w-[1200px] px-[clamp(16px,5vw,48px)] py-[clamp(70px,12vw,120px)]">
      <Reveal className="mx-auto max-w-[680px] px-5 text-center">
        <p className="mb-2.5 text-[13px] tracking-[4px] uppercase text-gold-soft">Todas en un vistazo</p>
        <h2 className="font-display bg-gradient-to-r from-white via-gold-soft to-gold bg-clip-text text-[clamp(28px,6vw,46px)] font-semibold leading-tight text-transparent">
          Catálogo Completo
        </h2>
        <p className="mt-3 text-[clamp(14px,2.6vw,17px)] text-muted-foreground">
          Todas nuestras fragancias juntas. Filtra por familia o pídela directo por WhatsApp.
        </p>
      </Reveal>

      <Reveal delay={0.1} className="my-[34px] mb-[46px] flex flex-wrap justify-center gap-2.5">
        {FILTERS.map((f) => (
          <button
            key={f.value}
            onClick={() => setFilter(f.value)}
            className={cn(
              'rounded-full border border-line px-5 py-2.5 text-[13px] tracking-wider uppercase text-muted-foreground transition-all hover:text-foreground hover:border-gold-soft',
              filter === f.value &&
                'border-transparent bg-gradient-to-r from-gold-bright via-gold to-[#a9842b] text-[#1a1306] shadow-[0_8px_22px_rgba(212,175,55,.25)] hover:text-[#1a1306]'
            )}
          >
            {f.label}
          </button>
        ))}
      </Reveal>

      <div className="grid gap-[clamp(18px,3vw,30px)] [grid-template-columns:repeat(auto-fill,minmax(200px,1fr))] sm:[grid-template-columns:repeat(auto-fill,minmax(280px,1fr))] [perspective:1400px]">
        {list.map((p, i) => (
          <PerfumeCard key={p.id} perfume={p} index={i} />
        ))}
      </div>
    </section>
  )
}
