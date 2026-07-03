import { useRef } from 'react'
import { motion, useMotionTemplate, useMotionValue, useSpring } from 'framer-motion'
import type { Perfume } from '@/data/perfumes'
import { productMessage, waLink } from '@/lib/whatsapp'
import { assetUrl } from '@/lib/assets'

const WA_ICON_PATH =
  'M16 3C9.4 3 4 8.4 4 15c0 2.1.6 4.1 1.6 5.9L4 29l8.3-1.6c1.7.9 3.6 1.4 5.7 1.4 6.6 0 12-5.4 12-12S22.6 3 16 3zm0 21.8c-1.8 0-3.5-.5-5-1.4l-.4-.2-4.9 1 1-4.8-.2-.4C5.5 18.4 5 16.7 5 15 5 9 9.9 4.1 16 4.1S27 9 27 15 22.1 24.8 16 24.8zm6.1-7.7c-.3-.2-2-1-2.3-1.1-.3-.1-.5-.2-.8.2-.2.3-.9 1.1-1.1 1.3-.2.2-.4.2-.7.1-.3-.2-1.4-.5-2.6-1.6-1-.9-1.6-1.9-1.8-2.3-.2-.3 0-.5.1-.7.1-.1.3-.4.5-.6.1-.2.2-.3.3-.5.1-.2 0-.4 0-.6-.1-.2-.8-1.9-1.1-2.6-.3-.7-.6-.6-.8-.6h-.7c-.2 0-.6.1-.9.4-.3.3-1.2 1.1-1.2 2.8 0 1.6 1.2 3.2 1.3 3.5.2.2 2.3 3.6 5.6 5 .8.3 1.4.5 1.9.7.8.2 1.5.2 2.1.1.6-.1 2-.8 2.3-1.6.3-.8.3-1.4.2-1.6-.1-.1-.3-.2-.6-.3z'

function WhatsAppIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 32 32" width="18" height="18" aria-hidden="true" className={className}>
      <path fill="currentColor" d={WA_ICON_PATH} />
    </svg>
  )
}

export function PerfumeCard({ perfume, index }: { perfume: Perfume; index: number }) {
  const ref = useRef<HTMLDivElement>(null)
  const rotateX = useSpring(useMotionValue(0), { stiffness: 200, damping: 20 })
  const rotateY = useSpring(useMotionValue(0), { stiffness: 200, damping: 20 })
  const transform = useMotionTemplate`rotateY(${rotateY}deg) rotateX(${rotateX}deg)`

  function handleMouseMove(e: React.MouseEvent<HTMLDivElement>) {
    const rect = ref.current?.getBoundingClientRect()
    if (!rect) return
    const px = (e.clientX - rect.left) / rect.width - 0.5
    const py = (e.clientY - rect.top) / rect.height - 0.5
    rotateY.set(px * 8)
    rotateX.set(-py * 8)
  }

  function handleMouseLeave() {
    rotateX.set(0)
    rotateY.set(0)
  }

  return (
    <motion.article
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.6, delay: (index % 3) * 0.08 }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{ transform, transformStyle: 'preserve-3d' }}
      className="group relative overflow-hidden rounded-[var(--radius)] border border-line bg-gradient-to-br from-panel-2 to-panel transition-[border-color,box-shadow] duration-300 hover:border-gold/45 hover:shadow-[0_30px_60px_rgba(0,0,0,.55),0_0_0_1px_rgba(212,175,55,.12),0_0_40px_rgba(212,175,55,.1)]"
    >
      <a href={`#${perfume.id}`} aria-label={`Ver ${perfume.name}`} className="block">
        <div
          className="relative aspect-[4/5] overflow-hidden bg-[radial-gradient(120%_90%_at_50%_40%,#15151d,#050507_75%)]"
          style={{ transform: 'translateZ(40px)' }}
        >
          <span className="absolute left-3 top-3 z-10 rounded-full border border-line bg-background/72 px-3 py-1 text-[11px] tracking-wider uppercase text-gold-soft backdrop-blur-sm">
            {perfume.family}
          </span>
          <span className="absolute right-3 top-3 z-10 rounded-full border border-line bg-background/72 px-2.5 py-1 text-sm font-semibold text-gold-soft backdrop-blur-sm">
            ★ {perfume.rating}
          </span>
          {perfume.video ? (
            <video
              className="float-anim h-full w-full object-cover transition-transform duration-500 group-hover:scale-[1.06]"
              src={assetUrl(`assets/video/${perfume.video}`)}
              poster={perfume.img}
              autoPlay
              muted
              loop
              playsInline
            />
          ) : (
            <img
              className="float-anim h-full w-full object-cover transition-transform duration-500 group-hover:scale-[1.06]"
              src={perfume.img}
              alt={`${perfume.name} — ${perfume.brand}`}
              loading="lazy"
            />
          )}
          <div className="pointer-events-none absolute inset-0 z-[2] bg-[radial-gradient(58%_48%_at_50%_42%,rgba(212,175,55,.20),transparent_70%)] mix-blend-screen" />
        </div>
        <div className="px-[18px] pt-[18px] pb-3.5" style={{ transform: 'translateZ(20px)' }}>
          <p className="text-[11px] tracking-[2.5px] uppercase text-gold-soft">{perfume.brand}</p>
          <h3 className="font-display mt-1 mb-2 text-xl font-semibold leading-tight text-foreground">{perfume.name}</h3>
          <p className="min-h-[38px] text-[13.5px] italic text-muted-foreground">{perfume.frase}</p>
        </div>
      </a>
      <div className="px-[18px] pb-[18px]" style={{ transform: 'translateZ(20px)' }}>
        <a
          className="flex w-full items-center justify-center gap-2.5 rounded-full bg-gradient-to-br from-[#2fe06f] to-[#1fae51] px-4 py-3 text-[13px] font-semibold text-[#06210f] shadow-[0_8px_22px_rgba(37,211,102,.22)] transition-[transform,box-shadow] hover:-translate-y-0.5 hover:shadow-[0_14px_30px_rgba(37,211,102,.4)]"
          href={waLink(productMessage(perfume))}
          target="_blank"
          rel="noopener noreferrer"
        >
          <WhatsAppIcon />
          Pedir por WhatsApp
        </a>
      </div>
    </motion.article>
  )
}

export { WhatsAppIcon }
