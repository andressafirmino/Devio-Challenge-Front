import { useContext } from "react";
import { ButtonBox } from "./style";
import { ProductContext } from "../../context/products";

export default function FinalizeOrder() {
    const { cartProducts, disabled, setFinish } = useContext(ProductContext);
    return (
        <ButtonBox >
            <button className={cartProducts.length > 0 ? "selected" : ""} disabled={disabled}>Cancelar</button>
            <button className={cartProducts.length > 0 ? "selected" : ""} onClick={() => setFinish(true)} disabled={disabled}>Finalizar pedido</button>
        </ButtonBox>
    )
}