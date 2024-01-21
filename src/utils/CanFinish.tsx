import { FinishProps } from "../protocols";

export default function CanFinish({name, total, cashPayment, paymentMethod, setFinishOrder}: FinishProps) {
    const cash = (typeof cashPayment === "string" ? parseFloat(cashPayment.replace(',', '.')) : 0);
    const cashInCents = 100 * cash;
    if (name === "" || (paymentMethod.length === 0 || (paymentMethod.includes("money") && cashInCents < total))) {
        setFinishOrder(false);
    } else {
        setFinishOrder(true);
    }
}