import { Dispatch, SetStateAction } from "react";
import { ProductType } from "../protocols";

export default function FilteredProducts(value: string, products: ProductType[], 
    setProductsList: Dispatch<SetStateAction<ProductType[]>>) {

    const valueLower = value.toLowerCase();
    const filteredProducts = products.filter(product =>
        product.id.toString().toLowerCase().includes(valueLower) ||
        product.name.toLowerCase().includes(valueLower) ||
        product.description.toLowerCase().includes(valueLower) ||
        product.category.toLowerCase().includes(valueLower)
    )
    setProductsList(filteredProducts);
    return <></>
}