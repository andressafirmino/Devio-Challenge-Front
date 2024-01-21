import { useContext } from "react";
import CurrencyConversion from "../../utils/CurrencyConversion";
import { SummaryContainer } from "./styled";
import { ProductContext } from "../../context/products";

export default function SummaryTotal() {
    const { cartProducts, total, additionalTotal } = useContext(ProductContext);

    return (
        <>
            {cartProducts.length > 0 && (
                <SummaryContainer>
                    {cartProducts.map((prod, i) =>
                        <div className="summary-details" key={i}>
                            <p>{prod.product.quantity}x {prod.product.name}</p>
                            <p>{CurrencyConversion(prod.product.quantity * prod.product.price)}</p>
                        </div>
                    )}
                    {additionalTotal.length > 0 && additionalTotal.map(prod =>
                        <div className="summary-details">
                            <p>{1}x {prod.name}</p>
                            <p>{CurrencyConversion(prod.price)}</p>
                        </div>
                    )}
                    <div className="dashed-line"></div>
                    <p>Total do pedido:</p>
                    <div className="total">{CurrencyConversion(total)}</div>
                </SummaryContainer >
            )}
        </>
    )
}
