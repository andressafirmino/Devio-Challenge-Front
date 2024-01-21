import { useContext } from "react";
import { CategoryType } from "../../protocols";
import { CategoryContainer } from "./style";
import { ProductContext } from "../../context/products";

export default function Category({ name, image, category }: CategoryType) {
    const { products } = useContext(ProductContext);

    return (
        <CategoryContainer onClick={() => console.log(category)}>
            <img src={image} />
            <p className="name">{name}</p>
        </CategoryContainer>
    )
}