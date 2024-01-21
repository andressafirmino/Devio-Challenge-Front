import { AdditionalType } from "../protocols";
import CurrencyConversion from "./CurrencyConversion";

export default function SubtotalCalculation(counter: number, price: number, additional: AdditionalType[]) {
    let addTotal = 0;
    {
        additional.length > 0 && (
            additional.map(add =>
                addTotal += add.price
            )
        )
    }

    return CurrencyConversion(counter * price + addTotal);
}