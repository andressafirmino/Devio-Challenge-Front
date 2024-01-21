import React from "react";

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

export type ProductOrEmpty = {} | ProductType;

export type AdditionalType = {
    id: number;
    name: string;
    price: number
}

export type AdditionalOrEmpty = {} | AdditionalType;

export type ProductDescriptionProps = {
    product: ProductType;
    counter: number;
    setCounter: React.Dispatch<React.SetStateAction<number>>;
}

export type AdditionalProps = {
    sideDish: SideDishType;
    additional: AdditionalType[];
    setAdditional: React.Dispatch<React.SetStateAction<AdditionalType[]>>;
}

export type SummaryProps = {
    additional: AdditionalType[];
    product: ProductType;
    counter: number;
}

export type CartType = {
    product: {
        id: number,
        name: string;
        image: string;
        price: number;
        quantity: number;
        observation: string;
    };
    additional: AdditionalOrEmpty[]
}

export type CartOrEmpty = {} | CartType;