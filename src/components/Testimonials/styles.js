import styled from "styled-components";
import Theme from "../../Theme";



const TestimonialSection = styled.section `
    margin: 50px;
    
`
const ContainerTestimonals = styled.div `
    display: flex;
    justify-content: space-evenly;
` 

const TitleCont = styled.h2 `
    font-family: ${props => props.theme.fonts.SecondaryText};
    text-align: center;
    font-size: 30px;
    margin-bottom:  50px;
` 



const TextTestimonial1 = styled.p `
    text-align: center;
    font-size: 20px;
    margin-bottom:  20px;
` 

const TextTestimonial2 = styled.p `
    text-align: center;
    font-size: 20px;
    margin-bottom:  20px;
` 


const TestimonalTitle = styled.h2 `
    text-align: center;
    width: 100%;
    font-size: 2em;
    margin-bottom: 20px;
    font-family: ${props => props.theme.fonts.SecondaryText};
`
const TestimonalPerson1 = styled.article `
    background-color: ${props => props.theme.colors.button};
    padding: 20px;
    text-align: center;
    width: 300px;
    border-radius: 8px;
`
const TestimonalPerson2 = styled.article `
    background-color: ${props => props.theme.colors.button};
    padding: 20px;
    text-align: center;
    width: 300px;
    border-radius: 8px;
`

const ImgTestimonial1 = styled.img `
    width: 120px;
    height: 120px;
    border-radius: 50%;
    margin-bottom: 50px;
    object-fit: cover;
`

const ImgTestimonial2 = styled.img `
    width: 120px;
    height: 120px;
    border-radius: 50%;
    margin-bottom: 50px;
    object-fit: cover;
`


export {
    TestimonialSection,
    TestimonalTitle,
    TestimonalPerson1,
    ImgTestimonial1,
    ImgTestimonial2,
    TestimonalPerson2,
    TitleCont,
    ContainerTestimonals,
    TextTestimonial1,
    TextTestimonial2
}