export type Family = 'Frescos' | 'Amaderados' | 'Dulces'

export interface Perfume {
  id: string
  name: string
  brand: string
  type: string
  family: Family
  rating: string
  frase: string
  img: string
  video: string | null
  resena: string
  duracion: string
  proyeccion: string
  ideal: string
  temporada: string
  notas: {
    salida: string
    corazon: string
    fondo: string
  }
  atributos: { t: string; d: string }[]
}

export const PERFUMES: Perfume[] = [
  {
    id: 'bleu-de-chanel', name: 'Bleu de Chanel', brand: 'Chanel', type: 'Eau de Toilette',
    family: 'Frescos', rating: '4.8', frase: 'Fresco. Elegante. Inolvidable.',
    img: '/assets/img/bleu-de-chanel.jpg', video: null,
    resena: 'Bleu de Chanel es una fragancia masculina aromática amaderada que representa la libertad, la elegancia y la determinación. Un aroma versátil y sofisticado, ideal para el hombre moderno que busca destacar con naturalidad y estilo. Su frescura cítrica combinada con notas amaderadas y ambaradas crea una estela atractiva, limpia y profundamente adictiva.',
    duracion: '6 – 10 horas', proyeccion: 'Media – Alta', ideal: 'Día, noche, oficina, citas', temporada: 'Primavera / Verano / Otoño',
    notas: { salida: 'Limón, Menta, Pomelo, Pimienta rosa', corazon: 'Jengibre, Nuez moscada, Melón, Jazmín', fondo: 'Incienso, Cedro, Sándalo, Ámbar, Pachulí' },
    atributos: [
      { t: 'Sofisticado', d: 'Un aroma atemporal que refleja buen gusto y elegancia.' },
      { t: 'Versátil', d: 'Perfecto para cualquier momento del día, de lo casual a lo formal.' },
      { t: 'Atractivo', d: 'Su estela fresca y amaderada deja una impresión segura y memorable.' },
      { t: 'Clásico moderno', d: 'Un contemporáneo que nunca pasa de moda y siempre destaca.' },
    ],
  },
  {
    id: 'sauvage', name: 'Sauvage', brand: 'Dior', type: 'Eau de Toilette',
    family: 'Frescos', rating: '5.0', frase: 'Fresca. Salvaje. Irresistible.',
    img: '/assets/img/sauvage.jpg', video: null,
    resena: 'Sauvage de Dior es una fragancia masculina fresca, intensa y magnética. Inspirada en la amplitud del desierto y la libertad absoluta, combina la fuerza de las especias con la frescura cítrica y un fondo amaderado profundo que deja una estela inolvidable. Es la elección perfecta para el hombre seguro de sí mismo, auténtico y con un espíritu indomable.',
    duracion: '8 – 10 horas', proyeccion: 'Alta', ideal: 'Día, noche, cualquier ocasión', temporada: 'Primavera / Verano / Otoño',
    notas: { salida: 'Bergamota, Pimienta de Sichuan', corazon: 'Lavanda, Pimienta rosa, Nuez moscada', fondo: 'Ambroxan, Cedro, Pachulí' },
    atributos: [
      { t: 'Inspirado en la naturaleza', d: 'La fuerza del desierto se combina con la frescura del aire libre.' },
      { t: 'Masculino y auténtico', d: 'Un aroma que refleja confianza, carácter y libertad.' },
      { t: 'Estela poderosa', d: 'Deja una impresión duradera allá donde vayas.' },
      { t: 'Versátil', d: 'Perfecto para el día a día o para ocasiones especiales.' },
    ],
  },
  {
    id: 'stronger-with-you', name: 'Stronger With You', brand: 'Emporio Armani', type: '',
    family: 'Dulces', rating: '4.8', frase: 'Cálido, especiado y adictivo.',
    img: '/assets/img/stronger-with-you.jpg', video: null,
    resena: 'Stronger With You de Emporio Armani es una fragancia masculina cálida, especiada y adictiva, que refleja la fuerza de los vínculos y la autenticidad del hombre moderno. Su combinación de notas dulces y especiadas crea un aroma envolvente, sensual y sofisticado, perfecto para destacar en cualquier ocasión. Ideal para noches, citas y momentos especiales.',
    duracion: '8 – 10 horas', proyeccion: 'Alta', ideal: 'Noches, citas, eventos especiales', temporada: 'Otoño / Invierno',
    notas: { salida: 'Pimienta rosa, Cardamomo, Menta', corazon: 'Salvia, Piña, Lavanda', fondo: 'Vainilla, Castaña, Ámbar, Cedro' },
    atributos: [
      { t: 'Conecta', d: 'Un aroma que refleja la fuerza de los lazos y la conexión auténtica.' },
      { t: 'Atractivo', d: 'Irresistible y seductor, deja una impresión inolvidable.' },
      { t: 'Cálido & Adictivo', d: 'Su mezcla dulce y especiada crea una estela envolvente y magnética.' },
      { t: 'Sofisticado', d: 'Perfecto para destacar con elegancia en cualquier ocasión.' },
    ],
  },
  {
    id: 'club-de-nuit', name: 'Club de Nuit Intense Man', brand: 'Armaf', type: 'Parfum',
    family: 'Amaderados', rating: '4.8', frase: 'Una fragancia icónica. Un impacto inolvidable.',
    img: '/assets/img/club-de-nuit.jpg', video: null,
    resena: 'Club de Nuit Intense Man de Armaf es una fragancia amaderada especiada intensa y sofisticada, creada para el hombre que busca destacar con elegancia y seguridad. Su aroma profundo y magnético combina frescura cítrica, un corazón especiado y una base amaderada ámbar que deja una estela poderosa e inolvidable. Ideal para la noche y ocasiones especiales, es una fragancia con carácter que proyecta confianza, atractivo y un estilo inconfundible.',
    duracion: '8 – 12 horas', proyeccion: 'Alta', ideal: 'Noches, citas, eventos especiales', temporada: 'Otoño / Invierno',
    notas: { salida: 'Limón, Piña, Grosella negra, Bergamota', corazon: 'Abedul, Jazmín, Rosa', fondo: 'Ámbar, Vainilla, Almizcle, Pachulí' },
    atributos: [
      { t: 'Poderoso y sofisticado', d: 'Una combinación intensa que refleja fuerza, elegancia y personalidad.' },
      { t: 'Atractivo y magnético', d: 'Diseñado para el hombre que destaca y deja huella donde quiera que vaya.' },
      { t: 'Duradero e intenso', d: 'Alto rendimiento que garantiza una presencia fuerte durante toda la noche.' },
    ],
  },
  {
    id: 'pure-xs', name: 'Puré XS', brand: 'Paco Rabanne', type: '',
    family: 'Dulces', rating: '4.7', frase: 'Seductora. Irresistible. Inolvidable.',
    img: '/assets/img/pure-xs.jpg', video: null,
    resena: 'Puré XS de Paco Rabanne es una fragancia masculina cálida, dulce y seductora, diseñada para el hombre carismático y seguro de sí mismo. Su mezcla de notas dulces, especiadas y amaderadas crea un aroma envolvente que no pasa desapercibido. Exótica, adictiva y sofisticada, es perfecta para noches, citas y momentos en los que quieres dejar una impresión inolvidable.',
    duracion: '7 – 10 horas', proyeccion: 'Alta', ideal: 'Noches, citas, eventos especiales', temporada: 'Otoño / Invierno',
    notas: { salida: 'Jengibre, Tomillo, Pomelo', corazon: 'Vainilla, Canela, Regaliz', fondo: 'Mirra, Cedro, Ámbar' },
    atributos: [
      { t: 'Seductor', d: 'Una fragancia que atrae y envuelve, perfecta para dejar huella.' },
      { t: 'Irresistible', d: 'Su combinación dulce y especiada crea una adicción única.' },
      { t: 'Cálido & Adictivo', d: 'Notas dulces y amaderadas que transmiten calidez, confianza y magnetismo.' },
    ],
  },
  {
    id: '212-vip-black', name: '212 VIP Black', brand: 'Carolina Herrera', type: 'New York',
    family: 'Amaderados', rating: '4.7', frase: 'Atrévete a ser el centro de atención.',
    img: '/assets/img/212-vip-black.avif', video: '212-vip-black.mp4',
    resena: '212 VIP Black de Carolina Herrera es una fragancia masculina audaz, moderna y sofisticada. Diseñada para hombres con actitud, que disfrutan la vida nocturna y se destacan en cualquier lugar al que van. Su mezcla de notas aromáticas, dulces y amaderadas crea un aroma magnético e inolvidable, ideal para noches, fiestas y ocasiones especiales.',
    duracion: '8 – 10 horas', proyeccion: 'Alta', ideal: 'Noches, fiestas, eventos especiales', temporada: 'Otoño / Invierno',
    notas: { salida: 'Lima, Absenta, Anís', corazon: 'Lavanda, Notas aromáticas, Cuero', fondo: 'Vainilla, Haba Tonka, Notas amaderadas' },
    atributos: [
      { t: 'Sofisticado', d: 'Elegancia y estilo en cada detalle.' },
      { t: 'Atractivo', d: 'Un aroma que conquista y deja huella.' },
      { t: 'Urbano', d: 'Hecho para el hombre moderno y seguro de sí.' },
      { t: 'Exclusivo', d: 'Para quienes buscan destacar siempre.' },
    ],
  },
  {
    id: 'lacoste-blanc', name: 'Lacoste Blanc', brand: 'Lacoste', type: '',
    family: 'Frescos', rating: '4.6', frase: 'Fresca, limpia y naturalmente elegante.',
    img: '/assets/img/lacoste-blanc.webp', video: null,
    resena: 'Lacoste Blanc es una fragancia fresca, elegante y atemporal que refleja la pureza y el estilo natural del hombre moderno. Su aroma cítrico y amaderado transmite confianza, bienestar y sofisticación sin esfuerzo. Ideal para el uso diario, es perfecta para quienes buscan una fragancia versátil, limpia y masculina que deja una impresión duradera.',
    duracion: '6 – 8 horas', proyeccion: 'Moderada a Alta', ideal: 'Día a día, oficina, reuniones, uso casual', temporada: 'Primavera / Verano',
    notas: { salida: 'Pomelo, Limón, Cardamomo', corazon: 'Manzana verde, Romero, Notas acuáticas', fondo: 'Cedro, Vetiver, Ante (Gamuza)' },
    atributos: [
      { t: 'Fresca y limpia', d: 'Aroma cítrico y acuático que transmite vitalidad y pureza.' },
      { t: 'Versátil', d: 'Perfecta para el día a día, oficina o cualquier ocasión informal.' },
      { t: 'Elegante y natural', d: 'Refleja un estilo sencillo, moderno y con clase sin esfuerzo.' },
    ],
  },
  {
    id: 'montblanc-explorer', name: 'Montblanc Explorer', brand: 'Montblanc', type: '',
    family: 'Amaderados', rating: '4.7', frase: 'Descubre tu camino.',
    img: '/assets/img/montblanc-explorer.webp', video: null,
    resena: 'Montblanc Explorer es una fragancia masculina que captura el espíritu de la aventura y la libertad. Fresca, amaderada y aromática, es perfecta para el hombre moderno que busca nuevos horizontes y vive cada día como una experiencia única. Su mezcla equilibrada de cítricos, especias y maderas transmite confianza, elegancia y un toque de misterio. Ideal para el día a día, oficina o escapadas de fin de semana.',
    duracion: '6 – 8 horas', proyeccion: 'Moderada a alta', ideal: 'Uso diario, oficina, viajes', temporada: 'Primavera / Verano / Otoño',
    notas: { salida: 'Bergamota, Pimienta rosa, Salvia esclarea', corazon: 'Vetiver, Cuero', fondo: 'Pachulí, Ámbar gris, Cacao' },
    atributos: [
      { t: 'Aventura', d: 'Inspirada en la exploración y el espíritu libre.' },
      { t: 'Elegancia', d: 'Sofisticada y versátil, para cualquier ocasión.' },
      { t: 'Confianza', d: 'Deja huella donde quiera que vayas.' },
    ],
  },
  {
    id: '9pm-afnan', name: '9 PM', brand: 'Afnan', type: 'Eau de Parfum',
    family: 'Dulces', rating: '4.8', frase: 'Elegante. Atractivo. Inolvidable.',
    img: '/assets/img/9pm-afnan.jpg', video: null,
    resena: '9 PM de Afnan es una fragancia masculina cálida, dulce y sofisticada, ideal para la noche y ocasiones especiales. Su mezcla de notas afrutadas, especiadas y amaderadas crea un aroma seductor y envolvente que destaca por su excelente proyección y duración. Perfecta para hombres seguros de sí mismos que buscan dejar una huella memorable allá donde vayan.',
    duracion: '8 – 10 horas', proyeccion: 'Alta', ideal: 'Noche, citas, eventos', temporada: 'Otoño / Invierno',
    notas: { salida: 'Manzana, Bergamota, Lavanda', corazon: 'Canela, Flor de azahar, Lirio de los valles', fondo: 'Vainilla, Haba tonka, Ámbar, Pachulí' },
    atributos: [
      { t: 'Elegante', d: 'Sofisticación que se siente en cada nota.' },
      { t: 'Atractivo', d: 'Un aroma seductor que conquista al instante.' },
      { t: 'Inolvidable', d: 'Excelente proyección y duración que dejan huella.' },
    ],
  },
]

export function stars(rating: string) {
  const full = Math.round(parseFloat(rating))
  return '★★★★★'.slice(0, full) + '☆☆☆☆☆'.slice(0, 5 - full)
}
