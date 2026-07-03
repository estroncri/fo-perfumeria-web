import type { Perfume } from '@/data/perfumes'

// Formato internacional, solo números: código de país + número.
// Ej. Colombia 57 + 3001234567 -> "573001234567"
export const WHATSAPP_NUMBER = '573000000000'

export function waLink(text: string) {
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(text)}`
}

export function productMessage(p: Perfume) {
  return `Hola FO Perfumería 👋, me interesa *${p.name}* (${p.brand}). ¿Está disponible y cuál es el precio?`
}

export const GENERAL_MESSAGE = 'Hola FO Perfumería 👋, quiero más información sobre sus fragancias.'
