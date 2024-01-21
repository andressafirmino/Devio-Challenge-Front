import { useContext, useState } from "react";
import {  ProductType } from "../../protocols";
import CurrencyConversion from "../../utils/CurrencyConversion";
import { AdditionalContainer, ButtonBoxDetails, CounterButton, DetailBox, DetailContainer, DetailItem, ObservationContainer, SummaryContainer } from "./style";
import { ProductContext } from "../../context/products";
import Addition from "../../utils/Addition";
import Subtraction from "../../utils/Subtraction";

export default function ProductDetail({ id, name, image, description, price }: ProductType) {
    const { sideDishes } = useContext(ProductContext);
    const [counter, setCounter] = useState(1);
    const [additional, setAdditional] = useState([]);
    const [observation, setObservation] = useState("");

    return (
        <DetailContainer>
            <DetailBox>
                <h1>Revise seu pedido!</h1>
                <DetailItem>
                    <p className="close" onClick={() => { console.log("close") }}>X</p>
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

                <AdditionalContainer>
                    <h2>Adicionais</h2>
                    <p>Selecione os ingredientes que você deseja adicionar a mais no seu lanche.</p>
                    {sideDishes.map((sideD, i) => (
                        <div className="additional-box" key={i}>
                            <div className="additional-image">
                                <img src={sideD.image} />
                            </div>
                            <div className="additional-description">
                                <div className="additional-name">{sideD.name}</div>
                                <div className="additional-text">{sideD.description}</div>
                            </div>
                            <div className="additional-price-box">
                                <div className="additional-price">{CurrencyConversion(sideD.price)}</div>
                                <button className={sideDishes.some(product => product.name === sideD.name) ? "selected" : ""}></button>
                            </div>
                        </div>
                    ))}
                </AdditionalContainer>

                <ObservationContainer>
                    <h2>Observações</h2>
                    <textarea className="observation-box" placeholder="Adicione uma observação ao pedido"
                        onChange={(e) => setObservation(e.target.value)}></textarea>
                </ObservationContainer>

                <SummaryContainer>
                    <div className="summary-details">
                        <p>{counter}x {name}</p>
                        <p>{CurrencyConversion(counter * price)}</p>
                    </div>
                    {sideDishes.map(add =>
                        <div className="summary-details">
                            <p>1x {add.name}</p>
                            <p>{CurrencyConversion(add.price)}</p>
                        </div>
                    )}
                    <div className="dashed-line"></div>
                    <p>Total do pedido:</p>
                    <div className="total">{price}</div>
                </SummaryContainer>

                <ButtonBoxDetails>
                    <button>Cancelar</button>
                    <button>Adicionar ao carrinho</button>
                </ButtonBoxDetails>
            </DetailBox>
        </DetailContainer>
    )
}