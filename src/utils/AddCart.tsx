import React, { SetStateAction } from "react";
import { AdditionalType, CartOrEmpty, ProductType } from "../protocols";
import TotalCalculation from "./TotalCalculation";

export default function AddToCart(
    product: ProductType,
    counter: number,
    observation: string,
    additional: AdditionalType[],
    setAdditional: React.Dispatch<SetStateAction<AdditionalType[]>>,
    cartProducts: CartOrEmpty[],
    setCartProducts: React.Dispatch<SetStateAction<CartOrEmpty[]>>,
    setTotal: React.Dispatch<SetStateAction<number>>,
    additionalTotal: AdditionalType[],
    setAdditionalTotal: React.Dispatch<SetStateAction<AdditionalType[]>>,
    setSelected: React.Dispatch<SetStateAction<boolean>>
) {
    const { id, name, image, price } = product;
    const item = {
        product: {
            id, name, image, price, quantity: counter, observation
        },
        additional
    }

    const addItem = [...cartProducts, item];
    setCartProducts(addItem);
    const subtotal = TotalCalculation(counter, price, additional);
    setTotal((amount) => amount + subtotal);
    if (additional.length > 0) {
        const updateAdditional = [...additionalTotal, additional[0]];
        setAdditionalTotal(updateAdditional);
    }
    
    setAdditional([]);

    setSelected(false);
}