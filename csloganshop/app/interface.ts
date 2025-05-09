export interface simplifiedProduct {
    _id: string;
    price: number;
    slug: string;
    categoryName: string;
    imageUrl: string;
    name: string;
}

export interface fullProduct {
    _id: string;
    images: string;
    price: number;
    slug: string;
    categoryName: string;
    name: string;
    description: string;
    price_id: string;
}