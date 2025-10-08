import type { ImageMetadata } from 'astro';
import { imageDB } from '../repository/imgRepository';

// Importa tus imágenes aquí


export interface GalleryItem {
    before: {src:ImageMetadata};
    after: {src:ImageMetadata};
    alt: string;
}

const galleryData: Record<'es' | 'en', GalleryItem[]> = {
    es: [
        { before: {src:imageDB.before1}, after: {src:imageDB.after1}, alt: 'Resultado de Rinoplastia' },
        { before: {src:imageDB.before2}, after: {src:imageDB.after2}, alt: 'Resultado de Aumento Mamario' },
    ],
    en: [
        { before: {src:imageDB.before1}, after: {src:imageDB.after1}, alt: 'Rhinoplasty Result' },
        { before: {src:imageDB.before2}, after: {src:imageDB.after2}, alt: 'Breast Augmentation Result' },
    ],
};

export const getGalleryItems = (lang: 'es' | 'en'): GalleryItem[] => galleryData[lang];