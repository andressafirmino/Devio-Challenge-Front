import { SummaryPaymentProps } from "../../protocols";
import { OrderTotalSummaryContainer } from "../OrderTotalSummary/style";
import SummaryTotal from "../SummaryTotal/SummaryTotal";

export default function SummaryPayment({ name, setName, code }: SummaryPaymentProps) {
    return (
        <div className="payment-block">
            <p className="subtitle">Resumo da compra</p>
            <OrderTotalSummaryContainer>
                <SummaryTotal />
            </OrderTotalSummaryContainer>

            <div className="client-data">
                <div className="client-data-input">
                    <p className="subtitle">Nome do cliente:</p>
                    <input placeholder="Primeiro nome" type="text" value={name} onChange={(e) => setName(e.target.value)} />
                </div>
                <div className="client-data-code">
                    <p className="subtitle">Código</p>
                    <div className="code">{code.toLocaleUpperCase()}</div>
                </div>
            </div>
        </div>
    )
}