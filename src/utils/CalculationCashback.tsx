import { CalculationCashbackProps } from "../protocols";

export default function CalculationCashback({ cashPayment, setCashBack, total }: CalculationCashbackProps) {
    const cash = (typeof cashPayment === "string" ? parseFloat(cashPayment.replace(',', '.')) : 0);
    const cashInCents = 100 * cash;
    if (cashInCents > total) {
        const valueCashBack = (((cashInCents - total) / 100).toFixed(2)).toString().replace('.', ',')
        setCashBack("R$ " + valueCashBack);
    } else {
        setCashBack("");
    }
}