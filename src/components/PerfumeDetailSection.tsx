import { motion } from 'framer-motion'
import type { Perfume } from '@/data/perfumes'
import { stars } from '@/data/perfumes'
import { productMessage, waLink } from '@/lib/whatsapp'
import { WhatsAppIcon } from '@/components/PerfumeCard'
import { cn } from '@/lib/utils'

export function PerfumeDetailSection({ perfume, index }: { perfume: Perfume; index: number }) {
  const reverse = index % 2 === 1

  return (
    <article
      id={perfume.id}
      className="scroll-mt-[90px] border-b border-gold/10 py-[clamp(40px,7vw,72px)] last:border-b-0"
    >
      <div
        className={cn(
          'grid items-center gap-[clamp(26px,5vw,64px)]',
          '[grid-template-columns:1fr] md:[grid-template-columns:minmax(0,0.9fr)_minmax(0,1.1fr)]',
          reverse && 'md:[direction:rtl] md:*:[direction:ltr]'
        )}
      >
        <motion.div
          initial={{ opacity: 0, y: 26 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.7 }}
          className="group relative mx-auto aspect-[4/5] w-full max-w-[420px] overflow-hidden rounded-[var(--radius)] border border-line bg-[radial-gradient(120%_90%_at_50%_40%,#15151d,#050507_75%)] shadow-[0_30px_70px_rgba(0,0,0,.5),0_0_50px_rgba(212,175,55,.08)] transition-[transform,box-shadow,border-color] duration-500 hover:-translate-y-2 hover:border-gold/50 hover:shadow-[0_40px_90px_rgba(0,0,0,.6),0_0_70px_rgba(212,175,55,.18)] md:max-w-none"
        >
          <span className="absolute left-3 top-3 z-10 rounded-full border border-line bg-background/72 px-3 py-1 text-[11px] tracking-wider uppercase text-gold-soft backdrop-blur-sm">
            {perfume.family}
          </span>
          <span className="absolute right-3 top-3 z-10 rounded-full border border-line bg-background/72 px-2.5 py-1 text-sm font-semibold text-gold-soft backdrop-blur-sm">
            ★ {perfume.rating}
          </span>
          {perfume.video ? (
            <video
              className="float-anim h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
              src={`/assets/video/${perfume.video}`}
              poster={perfume.img}
              autoPlay
              muted
              loop
              playsInline
            />
          ) : (
            <img
              className="float-anim h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
              src={perfume.img}
              alt={`${perfume.name} — ${perfume.brand}`}
              loading="lazy"
            />
          )}
        </motion.div>

        <div className="min-w-0">
          <p className="text-[13px] tracking-[3px] uppercase text-gold-soft">{perfume.brand}</p>
          <h3 className="font-display mt-1.5 mb-0.5 bg-gradient-to-r from-white via-gold-soft via-45% to-gold bg-clip-text text-[clamp(30px,5.5vw,52px)] font-bold leading-[1.05] text-transparent">
            {perfume.name}
          </h3>
          {perfume.type && (
            <p className="text-sm tracking-[2px] uppercase text-muted-foreground">{perfume.type}</p>
          )}
          <div className="my-3 flex items-center gap-2.5 font-semibold text-gold-soft">
            <span className="tracking-[2px] text-lg text-gold">{stars(perfume.rating)}</span>
            <span>{perfume.rating}/5</span>
          </div>
          <p className="my-2.5 text-[clamp(16px,2.6vw,20px)] italic text-gold-bright">{perfume.frase}</p>
          <p className="text-[clamp(14.5px,2.4vw,16px)] leading-[1.7] text-muted-foreground">{perfume.resena}</p>

          <div className="my-[22px] grid grid-cols-1 gap-3 sm:grid-cols-2">
            <Spec label="⏱ Duración" value={perfume.duracion} />
            <Spec label="📡 Proyección" value={perfume.proyeccion} />
            <Spec label="🎯 Ideal para" value={perfume.ideal} />
            <Spec label="❄ Temporada" value={perfume.temporada} />
          </div>

          <div>
            <h4 className="font-display relative mb-3.5 text-center text-lg font-semibold text-foreground after:mx-auto after:mt-2 after:block after:h-0.5 after:w-[46px] after:bg-gradient-to-r after:from-transparent after:via-gold after:to-transparent">
              Notas Olfativas
            </h4>
            <div className="grid grid-cols-1 gap-2.5 sm:grid-cols-3">
              <Nota label="Salida" value={perfume.notas.salida} />
              <Nota label="Corazón" value={perfume.notas.corazon} />
              <Nota label="Fondo" value={perfume.notas.fondo} />
            </div>
          </div>

          <div className="my-[22px] grid grid-cols-1 gap-2.5 sm:grid-cols-2">
            {perfume.atributos.map((a) => (
              <div key={a.t} className="flex flex-col gap-1 border-l-2 border-gold pl-3.5">
                <strong className="text-[13.5px] font-semibold tracking-wide text-gold-soft">{a.t}</strong>
                <span className="text-[12.5px] leading-[1.5] text-muted-foreground">{a.d}</span>
              </div>
            ))}
          </div>

          <a
            className="mt-1.5 flex w-full items-center justify-center gap-2.5 rounded-full bg-gradient-to-br from-[#2fe06f] to-[#1fae51] px-7 py-3.5 text-sm font-medium tracking-wider uppercase text-[#06210f] shadow-[0_12px_34px_rgba(37,211,102,.3)] transition-transform hover:-translate-y-0.5"
            href={waLink(productMessage(perfume))}
            target="_blank"
            rel="noopener noreferrer"
          >
            <WhatsAppIcon />
            Pedir {perfume.name} por WhatsApp
          </a>
        </div>
      </div>
    </article>
  )
}

function Spec({ label, value }: { label: string; value: string }) {
  return (
    <div className="flex flex-col gap-0.5 rounded-xl border border-line bg-panel p-3.5">
      <span className="text-[11px] tracking-wider uppercase text-gold-soft">{label}</span>
      <strong className="text-sm font-medium text-foreground">{value}</strong>
    </div>
  )
}

function Nota({ label, value }: { label: string; value: string }) {
  return (
    <div className="rounded-xl border border-line bg-gradient-to-br from-panel-2 to-panel p-3.5 text-center">
      <h5 className="mb-1.5 text-[11px] tracking-[2px] uppercase text-gold">{label}</h5>
      <p className="text-[12.5px] leading-[1.5] text-muted-foreground">{value}</p>
    </div>
  )
}
