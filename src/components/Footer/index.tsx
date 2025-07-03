import { ContainerRedes, ContainerRelaese, ContNavRedes, FooterContainer, IconFb, IconIg, IconX, ReleaseLink } from "./styles";
import FbIcon from './img/FbIcon.png'
import IgIcon from './img/InstagramIcon.png'
import XIcon from './img/XIcon.png'

const Footer = () => {

    return(

        <FooterContainer>
            <ContainerRedes>
                <h2>Redes Sociales</h2>
                <ContNavRedes>
                    <a href="https://www.facebook.com/Revista.Caras/?locale=es_LA"> 
                        <IconFb src={FbIcon}/> 
                    </a>
                    <a href="https://www.instagram.com/carasmexico">
                        <IconIg src={IgIcon}/>
                    </a>
                    <a href="https://x.com/carasmexico">
                        <IconX src={XIcon}/>
                    </a>
                </ContNavRedes>
            </ContainerRedes>
            <ContainerRelaese>
                <h2>Contacto</h2>
                <p>Correo: contacto@caras.com</p>
                <nav>
                    <ReleaseLink href="https://bases.editorialtelevisa.com.mx/caras/#aviso">Términos y Condiciones</ReleaseLink>
                </nav>
            </ContainerRelaese>
        </FooterContainer>
    )
}


export default Footer;