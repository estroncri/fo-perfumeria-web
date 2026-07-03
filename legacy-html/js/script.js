/* ===================================================================
   FO PERFUMERÍA — Configuración y catálogo
   =================================================================== */

/* ------------------------------------------------------------------
   1) NÚMERO DE WHATSAPP  (👈 CÁMBIALO POR EL TUYO)
   Formato internacional, solo números: código de país + número.
   Ej. Colombia 57 + 3001234567  ->  "573001234567"
------------------------------------------------------------------- */
const WHATSAPP_NUMBER = "573000000000"; // <-- AQUÍ tu número

/* ------------------------------------------------------------------
   2) CATÁLOGO DE COLONIAS  (toda la info de cada perfume)
   - "img":   imagen actual (placeholder).
   - "video": cuando tengas el video del perfume flotando, pon el
              nombre del archivo (ej. "sauvage.mp4") dentro de
              assets/video/ y se mostrará en bucle automáticamente.
              Déjalo en null para seguir usando la imagen.
   - "family": Frescos | Amaderados | Dulces   (para los filtros)
------------------------------------------------------------------- */
const PERFUMES = [
  {
    id:"bleu-de-chanel", name:"Bleu de Chanel", brand:"Chanel", type:"Eau de Toilette",
    family:"Frescos", rating:"4.8", frase:"Fresco. Elegante. Inolvidable.",
    img:"assets/img/bleu-de-chanel.jpg", video:null,
    resena:"Bleu de Chanel es una fragancia masculina aromática amaderada que representa la libertad, la elegancia y la determinación. Un aroma versátil y sofisticado, ideal para el hombre moderno que busca destacar con naturalidad y estilo. Su frescura cítrica combinada con notas amaderadas y ambaradas crea una estela atractiva, limpia y profundamente adictiva.",
    duracion:"6 – 10 horas", proyeccion:"Media – Alta", ideal:"Día, noche, oficina, citas", temporada:"Primavera / Verano / Otoño",
    notas:{ salida:"Limón, Menta, Pomelo, Pimienta rosa", corazon:"Jengibre, Nuez moscada, Melón, Jazmín", fondo:"Incienso, Cedro, Sándalo, Ámbar, Pachulí" },
    atributos:[ {t:"Sofisticado",d:"Un aroma atemporal que refleja buen gusto y elegancia."},
                {t:"Versátil",d:"Perfecto para cualquier momento del día, de lo casual a lo formal."},
                {t:"Atractivo",d:"Su estela fresca y amaderada deja una impresión segura y memorable."},
                {t:"Clásico moderno",d:"Un contemporáneo que nunca pasa de moda y siempre destaca."} ]
  },
  {
    id:"sauvage", name:"Sauvage", brand:"Dior", type:"Eau de Toilette",
    family:"Frescos", rating:"5.0", frase:"Fresca. Salvaje. Irresistible.",
    img:"assets/img/sauvage.jpg", video:null,
    resena:"Sauvage de Dior es una fragancia masculina fresca, intensa y magnética. Inspirada en la amplitud del desierto y la libertad absoluta, combina la fuerza de las especias con la frescura cítrica y un fondo amaderado profundo que deja una estela inolvidable. Es la elección perfecta para el hombre seguro de sí mismo, auténtico y con un espíritu indomable.",
    duracion:"8 – 10 horas", proyeccion:"Alta", ideal:"Día, noche, cualquier ocasión", temporada:"Primavera / Verano / Otoño",
    notas:{ salida:"Bergamota, Pimienta de Sichuan", corazon:"Lavanda, Pimienta rosa, Nuez moscada", fondo:"Ambroxan, Cedro, Pachulí" },
    atributos:[ {t:"Inspirado en la naturaleza",d:"La fuerza del desierto se combina con la frescura del aire libre."},
                {t:"Masculino y auténtico",d:"Un aroma que refleja confianza, carácter y libertad."},
                {t:"Estela poderosa",d:"Deja una impresión duradera allá donde vayas."},
                {t:"Versátil",d:"Perfecto para el día a día o para ocasiones especiales."} ]
  },
  {
    id:"stronger-with-you", name:"Stronger With You", brand:"Emporio Armani", type:"",
    family:"Dulces", rating:"4.8", frase:"Cálido, especiado y adictivo.",
    img:"assets/img/stronger-with-you.jpg", video:null,
    resena:"Stronger With You de Emporio Armani es una fragancia masculina cálida, especiada y adictiva, que refleja la fuerza de los vínculos y la autenticidad del hombre moderno. Su combinación de notas dulces y especiadas crea un aroma envolvente, sensual y sofisticado, perfecto para destacar en cualquier ocasión. Ideal para noches, citas y momentos especiales.",
    duracion:"8 – 10 horas", proyeccion:"Alta", ideal:"Noches, citas, eventos especiales", temporada:"Otoño / Invierno",
    notas:{ salida:"Pimienta rosa, Cardamomo, Menta", corazon:"Salvia, Piña, Lavanda", fondo:"Vainilla, Castaña, Ámbar, Cedro" },
    atributos:[ {t:"Conecta",d:"Un aroma que refleja la fuerza de los lazos y la conexión auténtica."},
                {t:"Atractivo",d:"Irresistible y seductor, deja una impresión inolvidable."},
                {t:"Cálido & Adictivo",d:"Su mezcla dulce y especiada crea una estela envolvente y magnética."},
                {t:"Sofisticado",d:"Perfecto para destacar con elegancia en cualquier ocasión."} ]
  },
  {
    id:"club-de-nuit", name:"Club de Nuit Intense Man", brand:"Armaf", type:"Parfum",
    family:"Amaderados", rating:"4.8", frase:"Una fragancia icónica. Un impacto inolvidable.",
    img:"assets/img/club-de-nuit.jpg", video:null,
    resena:"Club de Nuit Intense Man de Armaf es una fragancia amaderada especiada intensa y sofisticada, creada para el hombre que busca destacar con elegancia y seguridad. Su aroma profundo y magnético combina frescura cítrica, un corazón especiado y una base amaderada ámbar que deja una estela poderosa e inolvidable. Ideal para la noche y ocasiones especiales, es una fragancia con carácter que proyecta confianza, atractivo y un estilo inconfundible.",
    duracion:"8 – 12 horas", proyeccion:"Alta", ideal:"Noches, citas, eventos especiales", temporada:"Otoño / Invierno",
    notas:{ salida:"Limón, Piña, Grosella negra, Bergamota", corazon:"Abedul, Jazmín, Rosa", fondo:"Ámbar, Vainilla, Almizcle, Pachulí" },
    atributos:[ {t:"Poderoso y sofisticado",d:"Una combinación intensa que refleja fuerza, elegancia y personalidad."},
                {t:"Atractivo y magnético",d:"Diseñado para el hombre que destaca y deja huella donde quiera que vaya."},
                {t:"Duradero e intenso",d:"Alto rendimiento que garantiza una presencia fuerte durante toda la noche."} ]
  },
  {
    id:"pure-xs", name:"Puré XS", brand:"Paco Rabanne", type:"",
    family:"Dulces", rating:"4.7", frase:"Seductora. Irresistible. Inolvidable.",
    img:"assets/img/pure-xs.jpg", video:null,
    resena:"Puré XS de Paco Rabanne es una fragancia masculina cálida, dulce y seductora, diseñada para el hombre carismático y seguro de sí mismo. Su mezcla de notas dulces, especiadas y amaderadas crea un aroma envolvente que no pasa desapercibido. Exótica, adictiva y sofisticada, es perfecta para noches, citas y momentos en los que quieres dejar una impresión inolvidable.",
    duracion:"7 – 10 horas", proyeccion:"Alta", ideal:"Noches, citas, eventos especiales", temporada:"Otoño / Invierno",
    notas:{ salida:"Jengibre, Tomillo, Pomelo", corazon:"Vainilla, Canela, Regaliz", fondo:"Mirra, Cedro, Ámbar" },
    atributos:[ {t:"Seductor",d:"Una fragancia que atrae y envuelve, perfecta para dejar huella."},
                {t:"Irresistible",d:"Su combinación dulce y especiada crea una adicción única."},
                {t:"Cálido & Adictivo",d:"Notas dulces y amaderadas que transmiten calidez, confianza y magnetismo."} ]
  },
  {
    id:"212-vip-black", name:"212 VIP Black", brand:"Carolina Herrera", type:"New York",
    family:"Amaderados", rating:"4.7", frase:"Atrévete a ser el centro de atención.",
    img:"assets/img/212-vip-black.avif", video:"212-vip-black.mp4",
    resena:"212 VIP Black de Carolina Herrera es una fragancia masculina audaz, moderna y sofisticada. Diseñada para hombres con actitud, que disfrutan la vida nocturna y se destacan en cualquier lugar al que van. Su mezcla de notas aromáticas, dulces y amaderadas crea un aroma magnético e inolvidable, ideal para noches, fiestas y ocasiones especiales.",
    duracion:"8 – 10 horas", proyeccion:"Alta", ideal:"Noches, fiestas, eventos especiales", temporada:"Otoño / Invierno",
    notas:{ salida:"Lima, Absenta, Anís", corazon:"Lavanda, Notas aromáticas, Cuero", fondo:"Vainilla, Haba Tonka, Notas amaderadas" },
    atributos:[ {t:"Sofisticado",d:"Elegancia y estilo en cada detalle."},
                {t:"Atractivo",d:"Un aroma que conquista y deja huella."},
                {t:"Urbano",d:"Hecho para el hombre moderno y seguro de sí."},
                {t:"Exclusivo",d:"Para quienes buscan destacar siempre."} ]
  },
  {
    id:"lacoste-blanc", name:"Lacoste Blanc", brand:"Lacoste", type:"",
    family:"Frescos", rating:"4.6", frase:"Fresca, limpia y naturalmente elegante.",
    img:"assets/img/lacoste-blanc.webp", video:null,
    resena:"Lacoste Blanc es una fragancia fresca, elegante y atemporal que refleja la pureza y el estilo natural del hombre moderno. Su aroma cítrico y amaderado transmite confianza, bienestar y sofisticación sin esfuerzo. Ideal para el uso diario, es perfecta para quienes buscan una fragancia versátil, limpia y masculina que deja una impresión duradera.",
    duracion:"6 – 8 horas", proyeccion:"Moderada a Alta", ideal:"Día a día, oficina, reuniones, uso casual", temporada:"Primavera / Verano",
    notas:{ salida:"Pomelo, Limón, Cardamomo", corazon:"Manzana verde, Romero, Notas acuáticas", fondo:"Cedro, Vetiver, Ante (Gamuza)" },
    atributos:[ {t:"Fresca y limpia",d:"Aroma cítrico y acuático que transmite vitalidad y pureza."},
                {t:"Versátil",d:"Perfecta para el día a día, oficina o cualquier ocasión informal."},
                {t:"Elegante y natural",d:"Refleja un estilo sencillo, moderno y con clase sin esfuerzo."} ]
  },
  {
    id:"montblanc-explorer", name:"Montblanc Explorer", brand:"Montblanc", type:"",
    family:"Amaderados", rating:"4.7", frase:"Descubre tu camino.",
    img:"assets/img/montblanc-explorer.webp", video:null,
    resena:"Montblanc Explorer es una fragancia masculina que captura el espíritu de la aventura y la libertad. Fresca, amaderada y aromática, es perfecta para el hombre moderno que busca nuevos horizontes y vive cada día como una experiencia única. Su mezcla equilibrada de cítricos, especias y maderas transmite confianza, elegancia y un toque de misterio. Ideal para el día a día, oficina o escapadas de fin de semana.",
    duracion:"6 – 8 horas", proyeccion:"Moderada a alta", ideal:"Uso diario, oficina, viajes", temporada:"Primavera / Verano / Otoño",
    notas:{ salida:"Bergamota, Pimienta rosa, Salvia esclarea", corazon:"Vetiver, Cuero", fondo:"Pachulí, Ámbar gris, Cacao" },
    atributos:[ {t:"Aventura",d:"Inspirada en la exploración y el espíritu libre."},
                {t:"Elegancia",d:"Sofisticada y versátil, para cualquier ocasión."},
                {t:"Confianza",d:"Deja huella donde quiera que vayas."} ]
  },
  {
    id:"9pm-afnan", name:"9 PM", brand:"Afnan", type:"Eau de Parfum",
    family:"Dulces", rating:"4.8", frase:"Elegante. Atractivo. Inolvidable.",
    img:"assets/img/9pm-afnan.jpg", video:null,
    resena:"9 PM de Afnan es una fragancia masculina cálida, dulce y sofisticada, ideal para la noche y ocasiones especiales. Su mezcla de notas afrutadas, especiadas y amaderadas crea un aroma seductor y envolvente que destaca por su excelente proyección y duración. Perfecta para hombres seguros de sí mismos que buscan dejar una huella memorable allá donde vayan.",
    duracion:"8 – 10 horas", proyeccion:"Alta", ideal:"Noche, citas, eventos", temporada:"Otoño / Invierno",
    notas:{ salida:"Manzana, Bergamota, Lavanda", corazon:"Canela, Flor de azahar, Lirio de los valles", fondo:"Vainilla, Haba tonka, Ámbar, Pachulí" },
    atributos:[ {t:"Elegante",d:"Sofisticación que se siente en cada nota."},
                {t:"Atractivo",d:"Un aroma seductor que conquista al instante."},
                {t:"Inolvidable",d:"Excelente proyección y duración que dejan huella."} ]
  },
];

/* ------------------------------------------------------------------
   3) Mensaje de WhatsApp
------------------------------------------------------------------- */
function waLink(text){ return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(text)}`; }
function productMessage(p){ return `Hola FO Perfumería 👋, me interesa *${p.name}* (${p.brand}). ¿Está disponible y cuál es el precio?`; }
const GENERAL_MESSAGE = "Hola FO Perfumería 👋, quiero más información sobre sus fragancias.";

/* Ícono de WhatsApp reutilizable */
const WA_ICON = `<svg viewBox="0 0 32 32" width="18" height="18" aria-hidden="true"><path fill="currentColor" d="M16 3C9.4 3 4 8.4 4 15c0 2.1.6 4.1 1.6 5.9L4 29l8.3-1.6c1.7.9 3.6 1.4 5.7 1.4 6.6 0 12-5.4 12-12S22.6 3 16 3zm0 21.8c-1.8 0-3.5-.5-5-1.4l-.4-.2-4.9 1 1-4.8-.2-.4C5.5 18.4 5 16.7 5 15 5 9 9.9 4.1 16 4.1S27 9 27 15 22.1 24.8 16 24.8zm6.1-7.7c-.3-.2-2-1-2.3-1.1-.3-.1-.5-.2-.8.2-.2.3-.9 1.1-1.1 1.3-.2.2-.4.2-.7.1-.3-.2-1.4-.5-2.6-1.6-1-.9-1.6-1.9-1.8-2.3-.2-.3 0-.5.1-.7.1-.1.3-.4.5-.6.1-.2.2-.3.3-.5.1-.2 0-.4 0-.6-.1-.2-.8-1.9-1.1-2.6-.3-.7-.6-.6-.8-.6h-.7c-.2 0-.6.1-.9.4-.3.3-1.2 1.1-1.2 2.8 0 1.6 1.2 3.2 1.3 3.5.2.2 2.3 3.6 5.6 5 .8.3 1.4.5 1.9.7.8.2 1.5.2 2.1.1.6-.1 2-.8 2.3-1.6.3-.8.3-1.4.2-1.6-.1-.1-.3-.2-.6-.3z"/></svg>`;

function mediaHTML(p, extraClass=""){
  if(p.video){
    return `<video class="float-anim ${extraClass}" src="assets/video/${p.video}" poster="${p.img}" autoplay muted loop playsinline></video>`;
  }
  return `<img class="float-anim ${extraClass}" src="${p.img}" alt="${p.name} — ${p.brand}" loading="lazy" />`;
}
function stars(rating){
  const full = Math.round(parseFloat(rating));
  return "★★★★★".slice(0, full) + "☆☆☆☆☆".slice(0, 5-full);
}

/* ------------------------------------------------------------------
   4) Secciones individuales (una por perfume, con toda la info)
------------------------------------------------------------------- */
function detailHTML(p, i){
  const reverse = i % 2 === 1 ? "reverse" : "";
  const type = p.type ? `<p class="p-type">${p.type}</p>` : "";
  return `
  <article class="perfume" id="${p.id}">
    <div class="perfume-inner ${reverse}">
      <div class="perfume-media reveal">
        <span class="family-tag">${p.family}</span>
        <span class="rating-badge">★ ${p.rating}</span>
        ${mediaHTML(p)}
      </div>
      <div class="perfume-info">
        <p class="p-brand reveal">${p.brand}</p>
        <h3 class="p-name reveal" style="--d:.05s">${p.name}</h3>
        ${type}
        <div class="p-rating reveal" style="--d:.1s"><span class="p-stars">${stars(p.rating)}</span> <span>${p.rating}/5</span></div>
        <p class="p-frase reveal" style="--d:.15s">${p.frase}</p>
        <p class="p-resena reveal" style="--d:.2s">${p.resena}</p>

        <div class="p-specs reveal" style="--d:.25s">
          <div><span>⏱ Duración</span><strong>${p.duracion}</strong></div>
          <div><span>📡 Proyección</span><strong>${p.proyeccion}</strong></div>
          <div><span>🎯 Ideal para</span><strong>${p.ideal}</strong></div>
          <div><span>❄ Temporada</span><strong>${p.temporada}</strong></div>
        </div>

        <div class="p-notas reveal" style="--d:.3s">
          <h4>Notas Olfativas</h4>
          <div class="notas-grid">
            <div class="nota"><h5>Salida</h5><p>${p.notas.salida}</p></div>
            <div class="nota"><h5>Corazón</h5><p>${p.notas.corazon}</p></div>
            <div class="nota"><h5>Fondo</h5><p>${p.notas.fondo}</p></div>
          </div>
        </div>

        <div class="p-atributos reveal" style="--d:.35s">
          ${p.atributos.map(a=>`<div class="atributo"><strong>${a.t}</strong><span>${a.d}</span></div>`).join("")}
        </div>

        <a class="btn btn-order p-cta reveal" style="--d:.4s" href="${waLink(productMessage(p))}" target="_blank" rel="noopener">
          ${WA_ICON} Pedir ${p.name} por WhatsApp
        </a>
      </div>
    </div>
  </article>`;
}

/* ------------------------------------------------------------------
   5) Catálogo final (todas juntas) + filtros
------------------------------------------------------------------- */
function cardHTML(p){
  return `
  <article class="card" data-family="${p.family}">
    <a class="card-link" href="#${p.id}" aria-label="Ver ${p.name}">
      <div class="card-media">
        <span class="family-tag">${p.family}</span>
        <span class="rating-badge">★ ${p.rating}</span>
        ${mediaHTML(p)}
      </div>
      <div class="card-body">
        <p class="card-brand">${p.brand}</p>
        <h3 class="card-name">${p.name}</h3>
        <p class="card-tagline">${p.frase}</p>
      </div>
    </a>
    <div class="card-actions">
      <a class="btn btn-order" href="${waLink(productMessage(p))}" target="_blank" rel="noopener">
        ${WA_ICON} Pedir por WhatsApp
      </a>
    </div>
  </article>`;
}

const grid = document.getElementById("grid");
function renderGrid(filter="all"){
  const list = filter==="all" ? PERFUMES : PERFUMES.filter(p=>p.family===filter);
  grid.innerHTML = list.map(cardHTML).join("");
  observeCards();
  enableTilt();
}

/* Quick-nav de perfumes */
function renderQuickNav(){
  const nav = document.getElementById("perfumeNav");
  if(!nav) return;
  nav.innerHTML = PERFUMES.map(p=>`<a href="#${p.id}">${p.name}</a>`).join("");
}

/* ------------------------------------------------------------------
   6) Filtros
------------------------------------------------------------------- */
document.getElementById("filters").addEventListener("click", e=>{
  const chip = e.target.closest(".chip");
  if(!chip) return;
  document.querySelectorAll(".chip").forEach(c=>c.classList.remove("is-active"));
  chip.classList.add("is-active");
  renderGrid(chip.dataset.filter);
});

/* ------------------------------------------------------------------
   7) Reveal al hacer scroll
------------------------------------------------------------------- */
const io = new IntersectionObserver((entries)=>{
  entries.forEach(en=>{ if(en.isIntersecting){ en.target.classList.add("in"); io.unobserve(en.target); } });
},{ threshold:.1 });
function observeReveals(){ document.querySelectorAll(".reveal").forEach(el=>io.observe(el)); }

function observeCards(){
  const cio = new IntersectionObserver((entries)=>{
    entries.forEach((en)=>{ if(en.isIntersecting){ en.target.classList.add("in"); cio.unobserve(en.target); } });
  },{ threshold:.1 });
  document.querySelectorAll(".card").forEach((c,i)=>{ c.style.transitionDelay = (i%3)*0.08+"s"; cio.observe(c); });
}

/* ------------------------------------------------------------------
   8) Efecto 3D (tilt) — solo con mouse
------------------------------------------------------------------- */
function enableTilt(){
  if(window.matchMedia("(pointer:coarse)").matches) return;
  document.querySelectorAll(".card").forEach(card=>{
    card.addEventListener("mousemove", e=>{
      const r = card.getBoundingClientRect();
      const px = (e.clientX - r.left)/r.width - .5;
      const py = (e.clientY - r.top)/r.height - .5;
      card.style.transform = `rotateY(${px*8}deg) rotateX(${-py*8}deg) translateY(-6px)`;
    });
    card.addEventListener("mouseleave", ()=>{ card.style.transform = ""; });
  });
}

/* ------------------------------------------------------------------
   9) Header al hacer scroll + año + links de WhatsApp
------------------------------------------------------------------- */
const header = document.querySelector(".site-header");
window.addEventListener("scroll", ()=>{ header.classList.toggle("scrolled", window.scrollY > 30); }, { passive:true });

document.getElementById("year").textContent = new Date().getFullYear();
const waFloat = document.getElementById("waFloat");
const waContact = document.getElementById("contactWhatsApp");
waFloat.href = waLink(GENERAL_MESSAGE);
waContact.href = waLink(GENERAL_MESSAGE);
waContact.target = "_blank"; waContact.rel = "noopener";

/* ------------------------------------------------------------------
   10) Partículas doradas de fondo
------------------------------------------------------------------- */
(function dust(){
  const c = document.getElementById("dust");
  if(window.matchMedia("(prefers-reduced-motion:reduce)").matches){ c.style.display="none"; return; }
  const ctx = c.getContext("2d");
  let w,h,parts;
  function size(){
    w = c.width = innerWidth; h = c.height = innerHeight;
    const n = Math.min(70, Math.floor(w/22));
    parts = Array.from({length:n}, ()=>({ x:Math.random()*w, y:Math.random()*h, r:Math.random()*1.8+.4, s:Math.random()*.4+.1, o:Math.random()*.6+.2 }));
  }
  function draw(){
    ctx.clearRect(0,0,w,h);
    parts.forEach(p=>{
      p.y -= p.s; if(p.y < -5){ p.y = h+5; p.x = Math.random()*w; }
      ctx.beginPath(); ctx.arc(p.x,p.y,p.r,0,Math.PI*2);
      ctx.fillStyle = `rgba(212,175,55,${p.o})`; ctx.fill();
    });
    requestAnimationFrame(draw);
  }
  addEventListener("resize", size); size(); draw();
})();

/* ------------------------------------------------------------------
   11) Init
------------------------------------------------------------------- */
document.getElementById("perfume-list").innerHTML = PERFUMES.map(detailHTML).join("");
renderQuickNav();
renderGrid();
observeReveals();
