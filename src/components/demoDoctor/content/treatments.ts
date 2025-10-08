import { imageDB, type TImage } from "../repository/imgRepository"

export type TTreatment = {
    title: string
    shortDescription: string
    image: TImage;
    description: string;
}
export type TTreatmentsDB = {
    id: string
    es: TTreatment
    en: TTreatment
}
export const treatmentsDB: TTreatmentsDB[] = [
    {
        id: '1',
        es: {
            title: 'Rinoplastia',
            shortDescription: 'Mejora la armonía facial y la proporción de tu nariz.',
            image: {src:imageDB.rinoplastia, alt:'Visualización de una rinoplastia en una mujer'},
            description: `La rinoplastia, a veces llamada "cirugía de nariz", mejora la armonía facial y las proporciones de la nariz. También puede corregir la dificultad para respirar causada por defectos estructurales en la nariz.`
        },
        en: {
            title: 'Rhinoplasty',
            shortDescription: 'Enhance facial harmony and the proportions of your nose.',
            image: {src:imageDB.rinoplastia, alt:'Visualization of a rhinoplasty on a woman'},
            description: `Rhinoplasty, sometimes referred to as a "nose job," enhances facial harmony and the proportions of your nose. It can also correct impaired breathing caused by structural defects in the nose.`
        },
    },
    {
        id: '2',
        es: {
            title: 'Aumento Mamario',
            shortDescription: 'Aumenta el tamaño y la forma de los senos con implantes.',
            image: {src:imageDB.mujerMarcadaParaCirugiaEstetica, alt:'Mujer con marcas quirúrgicas para un aumento mamario'},
            description: `El aumento mamario, o mamoplastia de aumento, es un procedimiento quirúrgico para aumentar el tamaño de los senos. Implica colocar implantes mamarios debajo del tejido mamario o los músculos del pecho.`
        },
        en: {
            title: 'Breast Augmentation',
            shortDescription: 'Increase the size and shape of the breasts with implants.',
            image: {src:imageDB.mujerMarcadaParaCirugiaEstetica, alt:'Woman with surgical markings for breast augmentation'},
            description: `Breast augmentation, or augmentation mammoplasty, is a surgical procedure to increase breast size. It involves placing breast implants under breast tissue or chest muscles.`
        }
    }
]
