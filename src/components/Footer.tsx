export function Footer() {
  return (
    <footer className="relative z-10 border-t border-line px-5 py-[46px] text-center">
      <div className="flex flex-col items-center leading-none">
        <span className="font-display text-3xl font-bold tracking-[3px] gold-text">FO</span>
        <span className="mt-0.5 text-[11px] tracking-[6px] uppercase text-gold-soft">Perfumería</span>
      </div>
      <p className="mt-3.5 italic text-gold-soft">Tu esencia, tu mejor firma.</p>
      <p className="mt-2.5 text-[12.5px] text-muted-foreground">
        © {new Date().getFullYear()} FO Perfumería. Todos los derechos reservados.
      </p>
    </footer>
  )
}
