import fastFood2 from "./img/img-FF-2.png"
import demoBeautySalon from "./img/img-DS.png"
import demoNails from "./img/img-DN.png"

export type TImage = {
    src: ImageMetadata;
    alt: string;
}
export const img: { [key: string]: TImage } = {
    fastFood2: { src: fastFood2, alt: 'Demostración de una página web para un restaurante de comida rápida.' },
    demoBeautySalon: { src: demoBeautySalon, alt: 'Demostración de una landing page para un salon de belleza.' },
    demoNails: { src: demoNails, alt: 'Demostración de una landing page para un salon de uñas.' }
}