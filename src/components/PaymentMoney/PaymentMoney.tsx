import { PaymentMoneyProps } from "../../protocols";
import CheckString from "../../utils/CheckString";

export default function PaymentMoney({ cashPayment, setCashPayment, cashback }: PaymentMoneyProps) {
    return (
        <div className="payment-data">
            <div className="payment-data-input">
                <p className="subtitle">Valor entregue:</p>
                <div>
                    <p>R$</p>
                    <input type="text" value={cashPayment}
                        onChange={e => CheckString(e.target.value, setCashPayment)}
                        inputMode="numeric" />
                </div>

            </div>
            <div className="payment-data-input">
                <p className="subtitle">Troco</p>
                <div>{cashback}</div>
            </div>
        </div>
    )
}