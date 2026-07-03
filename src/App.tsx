import Hero from '@/components/ui/hero-futuristic'
import { DustParticles } from '@/components/DustParticles'
import { Header } from '@/components/Header'
import { PerfumeNav } from '@/components/PerfumeNav'
import { PerfumeDetailSection } from '@/components/PerfumeDetailSection'
import { CatalogSection } from '@/components/CatalogSection'
import { AboutSection } from '@/components/AboutSection'
import { ContactSection } from '@/components/ContactSection'
import { Footer } from '@/components/Footer'
import { WhatsAppFloat } from '@/components/WhatsAppFloat'
import { PERFUMES } from '@/data/perfumes'
import { Reveal } from '@/components/Reveal'

function App() {
  return (
    <>
      <DustParticles />
      <Header />

      <div id="top" />
      <Hero />

      <section id="perfumes" className="relative z-10 mx-auto max-w-[1200px] px-[clamp(16px,5vw,48px)] pt-[clamp(70px,12vw,120px)] pb-[clamp(30px,6vw,60px)]">
        <Reveal className="mx-auto max-w-[680px] px-5 text-center">
          <p className="mb-2.5 text-[13px] tracking-[4px] uppercase text-gold-soft">Colección</p>
          <h2 className="font-display bg-gradient-to-r from-white via-gold-soft to-gold bg-clip-text text-[clamp(28px,6vw,46px)] font-semibold leading-tight text-transparent">
            Nuestros Perfumes
          </h2>
          <p className="mt-3 text-[clamp(14px,2.6vw,17px)] text-muted-foreground">
            Conoce cada fragancia a fondo: su historia, sus notas y su carácter.
          </p>
        </Reveal>

        <PerfumeNav />

        <div>
          {PERFUMES.map((p, i) => (
            <PerfumeDetailSection key={p.id} perfume={p} index={i} />
          ))}
        </div>
      </section>

      <div className="relative z-10">
        <CatalogSection />
        <AboutSection />
        <ContactSection />
        <Footer />
      </div>

      <WhatsAppFloat />
    </>
  )
}

export default App
