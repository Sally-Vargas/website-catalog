import type { ImageMetadata } from 'astro';
import { imageDB } from '../repository/imgRepository';

interface Certificate {
    name: string;
    issuer: string;
    year: number;
}

export interface DoctorData {
    name: string;
    bio: string;
    image: {src:ImageMetadata};
    certificates: Certificate[];
}

const data: Record<'es' | 'en', DoctorData> = {
    es: {
        name: "Dr. Alejandro Mendoza",
        bio: "El Dr. Alejandro Mendoza es un cirujano plástico certificado con más de 15 años de experiencia en procedimientos estéticos y reconstructivos. Graduado con honores de la Universidad Nacional Autónoma de México, ha dedicado su carrera a perfeccionar el arte de la cirugía plástica, combinando la precisión técnica con una profunda comprensión de la estética.",
        image: {src:imageDB.hero},
        certificates: [
            {
                name: "Certificación por el Consejo Mexicano de Cirugía Plástica, Estética y Reconstructiva",
                issuer: "CMCPER",
                year: 2008
            },
            {
                name: "Miembro Internacional de la American Society of Plastic Surgeons",
                issuer: "ASPS",
                year: 2010
            }
        ]
    },
    en: {
        name: "Dr. Alejandro Mendoza",
        bio: "Dr. Alejandro Mendoza is a board-certified plastic surgeon with over 15 years of experience in aesthetic and reconstructive procedures. A graduate with honors from the National Autonomous University of Mexico, he has dedicated his career to perfecting the art of plastic surgery, combining technical precision with a deep understanding of aesthetics.",
        image: {src:imageDB.hero},
        certificates: [
            {
                name: "Certification by the Mexican Board of Plastic, Aesthetic and Reconstructive Surgery",
                issuer: "CMCPER",
                year: 2008
            },
            {
                name: "International Member of the American Society of Plastic Surgeons",
                issuer: "ASPS",
                year: 2010
            }
        ]
    }
};

export const getDoctorData = (lang: 'es' | 'en'): DoctorData => data[lang];