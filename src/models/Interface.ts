import MaterialsData from '../data/materials.json';
import NewsData from '../data/news.json';

export interface Material {
    id: string,
    title: string,
    body: string,
    type: MaterialType,
    thumbnail: string,
    startDate: string,
    endDate: string | null
}

enum MaterialType {
    URGENT, EXAM, QUIZ, NONE
}

export interface News {
    title: string,
    body: string,
    date: string,
}


// Delivery functions
export function getNews(): News[] {
    return NewsData;
}
export function getMaterials(): Material[] {
    return MaterialsData;
}