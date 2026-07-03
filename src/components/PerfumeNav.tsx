import { PERFUMES } from '@/data/perfumes'
import { Reveal } from '@/components/Reveal'

export function PerfumeNav() {
  return (
    <Reveal className="mx-auto mt-[30px] mb-2.5 flex max-w-[900px] flex-wrap justify-center gap-2">
      {PERFUMES.map((p) => (
        <a
          key={p.id}
          href={`#${p.id}`}
          className="rounded-full border border-line bg-panel px-[15px] py-2 text-[12.5px] text-muted-foreground transition-all hover:bg-gradient-to-r hover:from-gold-bright hover:to-gold hover:border-transparent hover:text-[#1a1306]"
        >
          {p.name}
        </a>
      ))}
    </Reveal>
  )
}
