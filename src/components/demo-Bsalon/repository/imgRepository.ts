import corteImg from "../BSImg/corte.jpg";
import tinteImg from "../BSImg/tinte.jpg";
import tratamientoImg from "../BSImg/tratamiento.jpg";
import depilacionImg from "../BSImg/depilacion.jpg";
import peinadosImg from "../BSImg/peinados.jpg";
import maquillajeImg from "../BSImg/maquillaje.jpg";
import cejasPestanasImg from "../BSImg/cejas-pestañas.jpg";
import unasImg from "../BSImg/uñas.jpg";
export type TImage = {
    src: ImageMetadata;
    alt: string;
};
export const img: { [key: string]: TImage }= {
    corteImg: {
        src: corteImg,
        alt: "Corte de cabello",
    },
    tinteImg: {
        src: tinteImg,
        alt: "Coloración de cabello",
    },
    tratamientoImg: {
        src: tratamientoImg,
        alt: "Tratamientos Capilares",
    },
    depilacionImg: {
        src: depilacionImg,
        alt: "Depilación facial",
    },
    peinadosImg: {
        src: peinadosImg,
        alt: "Peinado para eventos",
    },
    maquillajeImg: {
        src: maquillajeImg,
        alt: "Maquillaje profesional",
    },
    cejasPestanasImg: {
        src: cejasPestanasImg,
        alt: "Diseño de cejas y pestañas",
    },
    unasImg: {
        src: unasImg,
        alt: "Manicure y pedicure",
    },
}