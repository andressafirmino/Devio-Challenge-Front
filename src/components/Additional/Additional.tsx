import { AdditionalProps } from "../../protocols";
import AdditionalToggle from "../../utils/AdditionalToggle";
import CurrencyConversion from "../../utils/CurrencyConversion";
import { AdditionalContainer, StyledIcon } from "./style";
import { RiRadioButtonLine } from "react-icons/ri";
import { FaRegCircle } from "react-icons/fa";

export default function Additional({ sideDish, additional, setAdditional }: AdditionalProps) {
    const { id, name, description, image, price } = sideDish;
    console.log(additional)
    console.log(name)
    return (
        <AdditionalContainer>
            <div className="additional-image">
                <img src={image} />
            </div>
            <div className="additional-description">
                <div className="additional-name">{name}</div>
                <div className="additional-text">{description}</div>
            </div>
            <div className="additional-price-box">
                <div className="additional-price">{CurrencyConversion(price)}</div>
                {additional.some(product => product.name === name) ? (
                    <StyledIcon as={RiRadioButtonLine} onClick={() => AdditionalToggle(id, name, price, additional, setAdditional)} />
                ) : (
                    <StyledIcon as={FaRegCircle} onClick={() => AdditionalToggle(id, name, price, additional, setAdditional)} />
                )}
            </div>
        </AdditionalContainer>
    )
}