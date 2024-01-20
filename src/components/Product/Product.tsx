import { ProductType } from "../../protocols";
import CurrencyConversion from "../../utils/CurrencyConversion";
import { ProductContainer } from "./style";

export default function Product({ id, name, price, description, image }: ProductType) {

    return (
        <ProductContainer onClick={() => console.log(id)}>
            <div className="img"><img src={image} /></div>
            <div className="information">
                <p className="name">{name}</p>
                <p className="description">{description}</p>
                <p className="price">{CurrencyConversion(price)}</p>
            </div>
        </ProductContainer>
    )
}