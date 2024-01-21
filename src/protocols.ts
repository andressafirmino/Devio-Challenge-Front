export type CategoryType = {
    name: string;
    image: string;
    category: string
}

export type ProductType = {
    id: number;
    name: string;
    price: number;
    description: string;
    image: string;
    category: string;
}

export type SideDishType = {
    id: number;
    name: string;
    price: number,
    description: string;
    image: string
    productId: null
}