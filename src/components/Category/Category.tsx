import { CategoryType } from "../../protocols";
import { CategoryContainer } from "./style";

export default function Category({ name, image, category }: CategoryType) {
    
    return (
        <CategoryContainer onClick={() => console.log(category)}>
            <img src={image} />
            <p className="name">{name}</p>
        </CategoryContainer>
    )
}