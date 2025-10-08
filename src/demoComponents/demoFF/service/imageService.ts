import hamburguesa from '../img/hamburguesa.jpg';
import hamburguesaCPapas from '../img/hamburguesa-papas.jpg';
import papas from '../img/papas.jpg';
import aguacate from '../img/aguacate.jpg';
import soda from '../img/refresco.jpg';
import type { ImageMenu } from '../utils/types';

export const menuImage:{[key:string]:ImageMenu} = {
    hamburgesaCPapas: { src: hamburguesaCPapas, alt: "Hamburguesa con papas" },
    hamburgesa: { src: hamburguesa, alt: "Hamburguesa clásica" },
    papas: { src: papas, alt: "Papas fritas" },
    soda: { src: soda, alt: "Soda" },
    aguacate: { src: aguacate, alt: "Burrito" },
}