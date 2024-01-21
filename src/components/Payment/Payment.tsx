import { ButtonPayment, PaymentContainer, WalletIconStyle } from "./style";
import { useContext, useEffect, useState } from "react";
import { ProductContext } from "../../context/products";
import { nanoid } from "nanoid";
import SummaryPayment from "../SummaryPayment/SummaryPayment";
import PaymentMethod from "../PaymentMethod/PaymentMethod";
import CalculationCashback from "../../utils/CalculationCashback";
import CanFinish from "../../utils/CanFinish";
import OrdemCompleted from "../OrderCompleted/OrderCompleted";

export default function Payment() {
    const { total, setTotal, cartProducts, setCartProducts, setAdditionalTotal, setFinish } = useContext(ProductContext);
    const [name, setName] = useState<string>("");
    const [paymentMethod, setPaymentMethod] = useState<string[]>([]);
    const [cashPayment, setCashPayment] = useState<string>("");
    const [cashback, setCashBack] = useState<string>("");
    const [finishOrder, setFinishOrder] = useState<boolean>(false);
    const [code, setCode] = useState<string>("");

    function createOrder() {
        const body = {
            name,
            cartProducts,
            paymentMethod,
            code: code.toLocaleUpperCase()
        }
        console.log(body)
    }
    useEffect(() => {
        if (code === "") setCode(nanoid(6));
        CanFinish({ name, total, cashPayment, paymentMethod, setFinishOrder });
        CalculationCashback({ cashPayment, setCashBack, total });
    }, [name, paymentMethod, cashPayment]);
    return (
        <PaymentContainer>
            {finishOrder && (<OrdemCompleted/>)}            
            <div className="payment">
                <WalletIconStyle />
                <p>Pagamento</p>
            </div>

            <div className="payment-box">
                <SummaryPayment name={name} setName={setName} code={code} />
                <PaymentMethod paymentMethod={paymentMethod} setPaymentMethod={setPaymentMethod} cashPayment={cashPayment} setCashPayment={setCashPayment} cashback={cashback} />
            </div>
            <ButtonPayment>
                <button className={finishOrder ? "selected" : ""}
                    onClick={() => { setCartProducts([]), setAdditionalTotal([]), setTotal(0), setFinish(false) }}>Cancelar</button>
                <button className={finishOrder ? "selected" : ""} onClick={createOrder}>Finalizar pedido</button>
            </ButtonPayment>
        </PaymentContainer>
    )
}