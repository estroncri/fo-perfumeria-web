import { Reveal } from '@/components/Reveal'

const STATS = [
  { value: '9+', label: 'Fragancias' },
  { value: '4.7★', label: 'Valoración media' },
  { value: '100%', label: 'Esencia premium' },
]

export function AboutSection() {
  return (
    <section id="nosotros" className="px-[clamp(16px,5vw,48px)] py-[clamp(60px,10vw,110px)]">
      <Reveal className="mx-auto max-w-[760px] rounded-3xl border border-line bg-gradient-to-br from-panel-2 to-panel p-[clamp(34px,6vw,60px)] text-center">
        <h2 className="font-display bg-gradient-to-r from-white via-gold-soft to-gold bg-clip-text text-[clamp(28px,6vw,46px)] font-semibold text-transparent">
          El arte de oler inolvidable
        </h2>
        <p className="mt-4 text-[clamp(15px,2.6vw,18px)] text-muted-foreground">
          En <strong className="font-semibold text-gold-soft">FO Perfumería</strong> seleccionamos fragancias
          originales e inspiradas de alta duración para que dejes huella allá donde vayas. Calidad, elegancia y
          la confianza de un aroma que perdura: esa es nuestra firma.
        </p>
        <div className="mt-9 flex flex-wrap justify-center gap-[clamp(20px,6vw,60px)]">
          {STATS.map((s) => (
            <div key={s.label} className="flex flex-col">
              <span className="font-display bg-gradient-to-r from-gold-bright to-gold bg-clip-text text-[clamp(28px,6vw,42px)] font-bold text-transparent">
                {s.value}
              </span>
              <small className="mt-1.5 text-[11px] tracking-[2px] uppercase text-muted-foreground">{s.label}</small>
            </div>
          ))}
        </div>
      </Reveal>
    </section>
  )
}
