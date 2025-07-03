import styled from "styled-components";
import Theme from "../../Theme";


const HeaderContainer = styled.header `

    font-family: ${props => props.theme.fonts.PrimaryText};
    text-align: center;
    padding: 20px;
    background-color: ${props => props.theme.colors.PrimaryColor};
    color: ${props => props.theme.colors.button};
    display: flex;
    flex-direction: column;
`


const ImgHeader = styled.img `
     width: 250px;
`


const HeaderTitle = styled.h1 `
    font-size: 3.5em;
    margin: 0 auto;
    font-weight: bold;
`
const HeaderSub = styled.p `
    font-family: ${props => props.theme.fonts.SecondaryText};
    font-size: 1.2em;
    margin: 5px 0;
`


export {
    HeaderContainer,
    ImgHeader,
    HeaderTitle,
    HeaderSub

}





