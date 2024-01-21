import { useContext } from "react";
import { CategoryType } from "../../protocols";
import { CategoryContainer } from "./style";
import { ProductContext } from "../../context/products";
import FilteredProducts from "../../utils/FilteredProducts";

export default function Category({ name, image, category }: CategoryType) {
    const { products, setProductsList } = useContext(ProductContext);

    return (
        <CategoryContainer onClick={() => FilteredProducts(category, products, setProductsList)}>
            <img src={image} />
            <p className="name">{name}</p>
        </CategoryContainer>
    )
}