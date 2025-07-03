import LogoCaras from './img/Logo 2 (1).png'

import { HeaderContainer, HeaderSub, HeaderTitle, ImgHeader } from "./styles";


const Header = () => {


    return (
        <HeaderContainer>
            <ImgHeader src={LogoCaras} alt="Logo de CARAS"/>
            <HeaderTitle>Suscríbete a nuestro Newsletter</HeaderTitle>
            <HeaderSub>Recibe las últimas noticias y tendencias en moda, estilo y celebridades.</HeaderSub>
        </HeaderContainer>
    )
}

export default Header;