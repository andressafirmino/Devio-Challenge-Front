import { OrderCompletedContainer } from "./style";
import OrderCompletedImage from '../../assets/Order-completed.png';
import { IoIosClose } from "react-icons/io";

export default function OrdemCompleted() {
    return (
        <OrderCompletedContainer>
            <div>
                <p className="close"><IoIosClose/></p>
                <img src={OrderCompletedImage} />
                <h1>Pedido finalizado com sucesso!</h1>
                <p>O pedido foi encaminhado para a cozinha.</p>
            </div>
        </OrderCompletedContainer>
    )
}