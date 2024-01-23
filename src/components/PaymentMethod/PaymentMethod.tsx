import { FormPayment, FormPaymentContainer } from "./style";
import { FaCreditCard } from "react-icons/fa6";
import { FaMoneyBillAlt, FaRegCircle } from "react-icons/fa";
import { PaymentMethodProps } from "../../protocols";
import PaymentMoney from "../PaymentMoney/PaymentMoney";
import { StyledIcon } from "../Additional/style";
import { RiRadioButtonLine } from "react-icons/ri";

export default function PaymentMethod({ paymentMethod, setPaymentMethod, cashPayment, setCashPayment, cashback }: PaymentMethodProps) {
    return (
        <div className="payment-block">
            <p className="subtitle">Selecione a forma de pagamento:</p>
            <FormPaymentContainer>
                <FormPayment>
                    <div className="payment-box">
                        <FaCreditCard />
                        <p>Débito</p>
                    </div>
                    {paymentMethod.includes("debit") ? (<StyledIcon as={RiRadioButtonLine}  />
                    ) : (<StyledIcon as={FaRegCircle} onClick={() => setPaymentMethod("debit")} />)}
                </FormPayment>
                <FormPayment>
                    <div className="payment-box">
                        <FaCreditCard />
                        <p>Crédito</p>
                    </div>
                    {paymentMethod.includes("credit") ? (<StyledIcon as={RiRadioButtonLine} />
                    ) : (<StyledIcon as={FaRegCircle} onClick={() => setPaymentMethod("credit")} />)}
                </FormPayment>
                <FormPayment>
                    <div className="payment-box">
                        <FaMoneyBillAlt />
                        <p>Dinheiro</p>
                    </div>
                    {paymentMethod.includes("money") ? (<StyledIcon as={RiRadioButtonLine} />)
                        : (<StyledIcon as={FaRegCircle} onClick={() => setPaymentMethod("money")} />)}
                </FormPayment>
                {paymentMethod.includes("money") && (
                    <PaymentMoney cashPayment={cashPayment} setCashPayment={setCashPayment} cashback={cashback} />)}
            </FormPaymentContainer>
        </div>
    )
}