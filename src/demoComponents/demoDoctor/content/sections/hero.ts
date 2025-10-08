import { imageDB } from "../../repository/imgRepository"

export const content = {
    es: {
        subtitle: "Cirujano Plástico Certificado",
        title: "Esculpiendo Belleza, Restaurando Confianza",
        description: "Combinando arte y ciencia para ofrecer resultados excepcionales y naturales que realzan tu belleza única.",
        button: "Descubre los Tratamientos"
    },
    en: {
        subtitle: "Board-Certified Plastic Surgeon",
        title: "Sculpting Beauty, Restoring Confidence",
        description: "Combining art and science to deliver exceptional, natural-looking results that enhance your unique beauty.",
        button: "Discover Treatments"
    }
}

export const img: { [key: string]: { src: ImageMetadata, alt: string } } = {
    main: {
        src: imageDB.hero,
        alt: "main hero"
    }
}