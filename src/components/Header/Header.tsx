import { HeaderContainer, HeaderLinks, HeaderLogo } from "./style";
import Logo from '../../assets/Logo.png';

export default function Header() {

    return (
        <HeaderContainer>
            <HeaderLogo >
                <img src={Logo} />
                <p>fastfood</p>
            </HeaderLogo>
            <HeaderLinks>
                <div><p>Pedidos</p></div>
                <div><p>Cozinha</p></div>
                <div><p>Retirada</p></div>
            </HeaderLinks>
        </HeaderContainer>
    )
}