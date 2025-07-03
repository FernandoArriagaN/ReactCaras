import styled from "styled-components";
import Card1Img from './img/promo1.jpg'
import Card2Img from './img/promo2.jpg'
import Card3Img from './img/promo3.jpg'
import Card4Img from './img/promo4.jpg'

const Beeneficios = styled.section `
    text-align: center;
    margin-bottom: 100px;
`

const Galery = styled.section `
    margin: 0 auto;
    display: flex;
    width: 95%;
    height: 350px;
    border-radius: 15px;
    overflow: hidden;
    box-sizing: border-box;
    flex-direction: row;

`

const TitleSubscription = styled.h2 `
    font-size: 50px; 

`

const Card1 = styled.div `
    background-image: url(${Card1Img});
    background-size: cover;
    transition: all 0.2s ease;
    margin: 0 auto;
    flex: 1;
    height: 100%;
    transition: flex 0.5s ease;
    cursor: crosshair;
    transition: all 0.8s ease;
    object-fit: contain;

    &:hover {
        transition: all 0.2s ease;
        transform: scale(1.1);
    }

`

const Card2 = styled.div `
    background-image: url(${Card2Img});
    background-size: cover;
    transition: all 0.2s ease;
    margin: 0 auto;
    flex: 1;
    height: 100%;
    transition: flex 0.5s ease;
    cursor: crosshair;
    transition: all 0.8s ease;
    

    &:hover {
        transition: all 0.2s ease;
        transform: scale(1.1);
    }

`
const Card3 = styled.div `
    background-image: url(${Card3Img});
    background-size: cover;
    transition: all 0.2s ease;
    margin: 0 auto;
    flex: 1;
    height: 100%;
    transition: flex 0.5s ease;
    cursor: crosshair;
    transition: all 0.8s ease;

    &:hover {
        transition: all 0.2s ease;
        transform: scale(1.1);
    }

`
const Card4 = styled.div `
    background-image: url(${Card4Img});
    background-size: cover;
    transition: all 0.2s ease;
    margin: 0 auto;
    flex: 1;
    height: 100%;
    transition: flex 0.5s ease;
    cursor: crosshair;
    transition: all 0.8s ease;

    &:hover {
        transition: all 0.2s ease;
        transform: scale(1.1);
    }

`
    
export {
    Beeneficios,
    TitleSubscription,
    Galery,
    Card1,
    Card2,
    Card3,
    Card4,
}