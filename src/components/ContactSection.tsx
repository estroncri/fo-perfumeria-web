import { Reveal } from '@/components/Reveal'
import { WhatsAppIcon } from '@/components/PerfumeCard'
import { GENERAL_MESSAGE, waLink } from '@/lib/whatsapp'

export function ContactSection() {
  return (
    <section id="contacto" className="px-5 py-[clamp(60px,10vw,120px)] pb-[clamp(80px,12vw,130px)] text-center">
      <Reveal className="mx-auto max-w-[620px]">
        <p className="mb-2.5 text-[13px] tracking-[4px] uppercase text-gold-soft">¿Lista o listo para tu firma?</p>
        <h2 className="font-display bg-gradient-to-r from-white via-gold-soft to-gold bg-clip-text text-[clamp(28px,6vw,46px)] font-semibold text-transparent">
          Pide por WhatsApp
        </h2>
        <p className="mt-3 text-[clamp(14px,2.6vw,17px)] text-muted-foreground">
          Te asesoramos y resolvemos tus dudas al instante.
        </p>
        <a
          className="mt-6 inline-flex items-center gap-2.5 rounded-full bg-gradient-to-br from-[#2fe06f] to-[#1fae51] px-8 py-4 text-[15px] font-semibold tracking-wider uppercase text-[#06210f] shadow-[0_12px_34px_rgba(37,211,102,.3)] transition-transform hover:-translate-y-0.5"
          href={waLink(GENERAL_MESSAGE)}
          target="_blank"
          rel="noopener noreferrer"
        >
          <WhatsAppIcon />
          Escríbenos ahora
        </a>
      </Reveal>
    </section>
  )
}
