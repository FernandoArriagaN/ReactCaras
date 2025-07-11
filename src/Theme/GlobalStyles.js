import { createGlobalStyle } from "styled-components";


const GlobalStyles = createGlobalStyle `
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    body {
        background-image: ${props => props.theme.colors.Background};

        font-family: ${props => props.theme.fonts.SecondaryText}; 
    }

`



export default GlobalStyles;