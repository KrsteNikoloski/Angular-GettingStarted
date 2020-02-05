export interface IProduct {
    id: number,
    name: string,
    code: string,
    releaseDate: string,
    description: string,
    price: number,
    starRating: number,
    imageUrl: string
}

export class Product implements IProduct {
    id: number;    
    name: string;
    code: string;
    releaseDate: string;
    description: string;
    price: number;
    starRating: number;
    imageUrl: string;
}