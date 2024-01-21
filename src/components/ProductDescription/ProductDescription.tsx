import { useContext } from "react";
import { ProductDescriptionProps } from "../../protocols"
import Addition from "../../utils/Addition";
import CurrencyConversion from "../../utils/CurrencyConversion";
import Subtraction from "../../utils/Subtraction";
import { DetailItem, CounterButton } from "./style";
import { IoIosClose } from "react-icons/io";
import { ProductContext } from "../../context/products";

export default function ProductDescription({ product, counter, setCounter }: ProductDescriptionProps) {
    const { name, description, price, image } = product;
    const { setSelected } = useContext(ProductContext)
    return (
        <DetailItem>
            <p className="close" onClick={() => setSelected(false)}><IoIosClose /></p>
            <div className="image-box">
                <img src={image} />
                <div className="image-box-bottom"></div>
            </div>
            <div className="description-box">
                <p className="name">{name}</p>
                <p className="description-text">{description}</p>
                <CounterButton>
                    <button onClick={() => Subtraction(counter, setCounter)}><p>-</p></button>
                    <div>{counter}</div>
                    <button onClick={() => Addition(counter, setCounter)}><p>+</p></button>
                </CounterButton>
            </div>
            <div className="price"><p>{CurrencyConversion(price)}</p></div>
        </DetailItem>
    )
}