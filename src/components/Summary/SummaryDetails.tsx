import { SummaryProps } from "../../protocols";
import CurrencyConversion from "../../utils/CurrencyConversion";
import SubtotalCalculation from "../../utils/SubtotalCalculation";
import { SummaryContainer } from "./style";

export default function SummaryDetails(summary: SummaryProps) {
    const { additional, counter, product } = summary;
    const { name, price } = product;
    return (
        <SummaryContainer>
            <div className="summary-details">
                <p>{counter}x {name}</p>
                <p>{CurrencyConversion(counter * price)}</p>
            </div>
            {additional.map((add, i) =>
                <div className="summary-details" key={i}>
                    <p>1x {add.name}</p>
                    <p>{CurrencyConversion(add.price)}</p>
                </div>
            )}
            <div className="dashed-line"></div>
            <p>Total do pedido:</p>
            <div className="total">{SubtotalCalculation(counter, price, additional)}</div>
        </SummaryContainer>
    )
}