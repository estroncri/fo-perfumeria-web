import { WhatsAppIcon } from '@/components/PerfumeCard'
import { GENERAL_MESSAGE, waLink } from '@/lib/whatsapp'

export function WhatsAppFloat() {
  return (
    <a
      className="fixed bottom-[clamp(16px,4vw,28px)] right-[clamp(16px,4vw,28px)] z-[60] grid h-[62px] w-[62px] place-items-center rounded-full bg-gradient-to-br from-[#2fe06f] to-[#1fae51] text-white shadow-[0_12px_30px_rgba(37,211,102,.45)] transition-transform hover:scale-[1.08] hover:-rotate-[4deg]"
      href={waLink(GENERAL_MESSAGE)}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Escríbenos por WhatsApp"
    >
      <WhatsAppIcon className="h-[30px] w-[30px]" />
      <span className="wa-pulse pointer-events-none absolute inset-0 rounded-full" />
    </a>
  )
}
