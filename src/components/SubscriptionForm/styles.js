import styled, { keyframes } from "styled-components";
import BelindaSub from  './img/belindasubs.jpg'


const ContSub = styled.section `
    margin-top: 40px;
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
    align-content: center;
    justify-content: center;
    align-items: center;
    mask-image: linear-gradient(to bottom, 
    rgba(0, 0, 0, 1) 0%,
    rgba(0, 0, 0, 1) 20%, 
    rgba(0, 0, 0, 1) 50%,    
    rgba(0, 0, 0, 1) 80%,  
    rgba(0, 0, 0, 0) 100% );
`
const SubscriptionContainer = styled.article `
    display: flex;
    max-width: 80%;
    width: 100%;
    height: 550px;
    background-color: #e5e5e5;
    border-radius: 10px;
    overflow: hidden;
   
`
const FormSection = styled.div `
    padding: 30px;
    flex: 1;
    display: flex;
    flex-direction: column;
    justify-content: center;

`


const TitleForm = styled.h2 `
    font-size: 50px;
    text-align: center; 
    font-family: ${props => props.theme.fonts.PrimaryText};
    box-sizing: border-box;
`

const FadeInOut = keyframes `
    0% { opacity: 0; transform: translateY(-10px); }
    10% { opacity: 1; transform: translateY(0); }
    90% { opacity: 1; }
    100% { opacity: 0; transform: translateY(-10px); }

`



const SpanName = styled.span `
    text-align: center;   
    font-weight: 900;
    color: ${props => props.theme.colors.PrimaryColor};
    animation: ${FadeInOut} 3s ease forwards;
`
const SpanEmail = styled.span `
    text-align: center; 
    font-weight: 900;
    color: ${props => props.theme.colors.PrimaryColor};
    animation: ${FadeInOut} 3s ease forwards;
`

const SuccessMessage = styled.span `
    margin-top: 20px;
    text-align: center; 
    font-weight: 700;
    color: ${props => props.theme.colors.SuccessMsg};
    font-size: 30px;
`



const ContainerForm = styled.form `
    flex: 1;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;

`

const InputName = styled.input `
    padding: 15px;
    margin-bottom: 15px;
    border: 1px solid ${props => props.theme.colors.SecondaryColor};
    border-radius: 7px;
    transition: border-color 0.1s ease;
    background-color: ${props => props.theme.colors.Background};

    &:hover {
        border: solid transparent;
    transition: all 0.1s ease;
    background: linear-gradient(${props => props.theme.colors.Background}, ${props => props.theme.colors.Background})
    padding-box,
        linear-gradient(45deg, ${props => props.theme.colors.PrimaryColor}, ${props => props.theme.colors.Background}, ${props => props.theme.colors.SecondaryColor}) border-box;
    outline: none;
    }

`

const InputEmail = styled.input `
    padding: 15px;
    margin-bottom: 15px;
    border: 1px solid ${props => props.theme.colors.SecondaryColor};
    border-radius: 7px;
    transition: border-color 0.1s ease;
    background-color: ${props => props.theme.colors.Background};

    &:hover {
        border: solid transparent;
    transition: all 0.1s ease;
    background: linear-gradient(${props => props.theme.colors.Background}, ${props => props.theme.colors.Background})
    padding-box,
        linear-gradient(45deg, ${props => props.theme.colors.PrimaryColor}, ${props => props.theme.colors.Background}, ${props => props.theme.colors.SecondaryColor}) border-box;
    outline: none;
    }


`
const LabelName = styled.label `
    text-align: center;
    margin: 20px;
    font-size: 20px;
    font-weight: 500;
`
const LabelEmail = styled.label `
    text-align: center;
    margin: 20px;
    font-size: 20px;
    font-weight: 500;
`

const ButtonForm = styled.button `
    padding: 15px;
    margin-top: 30px;
    border: none;
    background-color: ${props => props.theme.colors.PrimaryColor};
    color: white;
    font-size: 16px;
    border-radius: 5px;
    cursor: pointer;
    transition: all ease 0.8s; 


    &:hover {
        transform: scale(1.04);
        background-color: #b60000;
        font-weight: bold;
            transition: all ease 0.3s; 

    }
`


const ImgContainer = styled.div `
    flex: 1.5;
    background-image: url(${BelindaSub});
    background-size: cover;
    clip-path: polygon(800px 0px, 0px 0px, 800px 1500px);
`



export {
    ContSub,
    SubscriptionContainer,
    TitleForm,
    ContainerForm,
    LabelName,
    SpanName,
    LabelEmail,
    SpanEmail,
    InputName,
    SuccessMessage,
    InputEmail,
    ButtonForm,
    ImgContainer,
    FormSection,
}
/*








.image-container {
    flex: 1.5;
    background-image: url(../assets/belindasubs.jpg);
    background-size: cover;
    clip-path: polygon(100% 0, 0 0, 100% 400%);
}

input {
    padding: 10px;
    margin-bottom: 15px;
    border: 1px solid var(--secondary-color);
    border-radius: 7px;
    transition: border-color 0.1s ease;
    background-color: var(--background-color);
}

input:focus {
    border: solid transparent;
    transition: all 0.1s ease;
    background: linear-gradient(var(--background-color),var(--background-color))
    padding-box,
        linear-gradient(45deg, var(--primary-color), var(--background-color), var(--secondary-color)) border-box;
    outline: none;
        
}   

.suscripcion button {
    background-color: var(--primary-color);
    color: var(--button-color);
    padding: 10px;
    border: none;
    cursor: pointer;
    border-radius: 4px;
}

.error {
    color:  var(--button-color);
    font-weight: bold;
    margin-bottom: 30px;
    display: block;
    text-align: center;
    background-color: var(--primary-color);
    border-radius: 5px;
    width: auto;
    size: 25px;
    
  }
  
  .success {
    color: var(--button-color);
    font-size: 1.2em;
    margin-top: 10px;
    text-align: center;
    font-weight: bold;
    background-color: #0ea300;
  }  */