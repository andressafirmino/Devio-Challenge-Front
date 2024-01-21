import { useContext } from "react";
import { ProductType } from "../../protocols";
import CurrencyConversion from "../../utils/CurrencyConversion";
import { ProductContainer } from "./style";
import { ProductContext } from "../../context/products";

export default function Product({ id, name, price, description, image }: ProductType) {
    const { setSelected, setSelectedProduct} = useContext(ProductContext)

    return (
        <ProductContainer onClick={() => { setSelectedProduct({ id, name, price, description, image }), setSelected(true) }}>
            <div className="img"><img src={image} /></div>
            <div className="information">
                <p className="name">{name}</p>
                <p className="description">{description}</p>
                <p className="price">{CurrencyConversion(price)}</p>
            </div>
        </ProductContainer>
    )
}