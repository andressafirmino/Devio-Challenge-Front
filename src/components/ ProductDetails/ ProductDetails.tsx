import { useContext, useState } from "react";
import { AdditionalType, ProductType } from "../../protocols";
import { AdditionalContainer, ButtonBoxDetails, DetailBox, DetailContainer, ObservationContainer } from "./style";
import { ProductContext } from "../../context/products";
import ProductDescription from "../ProductDescription/ProductDescription";
import Additional from "../Additional/Additional";
import AddToCart from "../../utils/AddCart";
import SummaryDetails from "../Summary/SummaryDetails";

export default function ProductDetail(product: ProductType) {
    const { sideDishes, cartProducts, setCartProducts, setTotal, additionalTotal, setAdditionalTotal, setSelected } = useContext(ProductContext);
    const [counter, setCounter] = useState(1);
    const [additional, setAdditional] = useState<AdditionalType[]>([]);
    const [observation, setObservation] = useState("");

    return (
        <DetailContainer>
            <DetailBox>
                <h1>Revise seu pedido!</h1>
                <ProductDescription product={product} counter={counter} setCounter={setCounter} />
                <AdditionalContainer>
                    <h2>Adicionais</h2>
                    <p>Selecione os ingredientes que você deseja adicionar a mais no seu lanche.</p>
                    {sideDishes.map((sideDish, i) => <Additional sideDish={sideDish} additional={additional} setAdditional={setAdditional} key={i} />)}
                </AdditionalContainer>
                <ObservationContainer>
                    <h2>Observações</h2>
                    <textarea className="observation-box" placeholder="Adicione uma observação ao pedido" onChange={(e) => setObservation(e.target.value)}></textarea>
                </ObservationContainer>
                <SummaryDetails additional={additional} product={product} counter={counter} />
                <ButtonBoxDetails>
                    <button onClick={() => setSelected(false)}>Cancelar</button>
                    <button onClick={() => AddToCart(product, counter, observation, additional, setAdditional, cartProducts, setCartProducts, setTotal, additionalTotal, setAdditionalTotal, setSelected)}>Adicionar ao carrinho</button>
                </ButtonBoxDetails>
            </DetailBox>
        </DetailContainer>
    )
}