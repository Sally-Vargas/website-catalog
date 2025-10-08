import rinoplastiaMujer from "./images/treatments/concepto-de-cirugia-de-rinoplastia-con-modelo-de-mujer.jpg"
import mujerMarcadaParaCirugiaEstetica from "./images/treatments/mujer-marcada-para-cirugia-estetica.jpg"
import before1 from './images/gallery/rinoplastia_1_antes.jpg';
import after1 from './images/gallery/rinoplastia_1_despues.jpg';
import before2 from './images/gallery/rinoplastia_1_antes.jpg';
import after2 from './images/gallery/rinoplastia_1_despues.jpg';
import MainHero from "./images/hero-banner-pexels-fahri-tokcan.jpg"

import type { ImageMetadata } from 'astro';

export type TImage = {
    src: ImageMetadata,
    alt: string // Este alt será específico del idioma en el contenido
}

// Exportamos directamente las imágenes para que el contenido las consuma.
export const imageDB = {
    hero:MainHero,
    rinoplastia: rinoplastiaMujer,
    mujerMarcadaParaCirugiaEstetica: mujerMarcadaParaCirugiaEstetica,
    before1: before1,
    after1: after1,
    before2: before2,
    after2: after2,
}