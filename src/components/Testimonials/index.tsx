import {  ContainerTestimonals, ImgTestimonial1, ImgTestimonial2, TestimonalPerson1, TestimonalPerson2, TestimonialSection, TextTestimonial1, TextTestimonial2, TitleCont } from "./styles";
import Testimonial1 from './img/testimonial 1.jpg'
import Testimonial2 from './img/testimonial 2.jpg'




const Testimonials = () => {

    return(
        
        <TestimonialSection >
            
            <TitleCont>Lo que dicen nuestros suscriptores</TitleCont>

            <ContainerTestimonals>
            <TestimonalPerson1 >
                <ImgTestimonial1 src={Testimonial1}   alt="Avatar 1"/>
                <TextTestimonial1>"¡El mejor contenido sobre celebridades y estilo! Me encanta recibir noticias frescas cada semana."</TextTestimonial1>
                <label >
                    <cite>- Suscriptor A</cite>
                </label>
            </TestimonalPerson1>
            <TestimonalPerson2 >
                <ImgTestimonial2 src={Testimonial2} alt="Avatar 2"/>
                <TextTestimonial2>"Es genial estar siempre actualizado con las últimas tendencias. Totalmente recomendado."</TextTestimonial2>
                <label >
                    <cite>- Suscriptor B</cite>
                </label>
            </TestimonalPerson2>

            </ContainerTestimonals>
        </TestimonialSection>
        
    )
}

export default Testimonials;