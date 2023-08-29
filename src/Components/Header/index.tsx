import { SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Scrollbar, Autoplay} from "swiper";
import SwiperWrapper from "../Swiper";
import Nav from "../Header/Nav";
import { Container, ImageBackground, Title, Wrapper } from "./styles";
import xicara from "../../img/xicara.png";
import coffeeshop from "../../img/coffeeshop.png";
import coffeeAndCake from "../../img/coffeeandcake.png";

const Header = () => {
    
    const headerContent = [
        { id: 1, image: xicara, altImage: 'café na xícara', text: 'Um novo café para você' },
        { id: 3, image: coffeeshop, altImage: 'coffeeshop', text: '' },
        { id: 4, image: coffeeAndCake, altImage: 'coffee and cake', text: 'Café fino do bom' },
    ]

    return (
        <Container>
            <Nav urlImage='/assets/logo.png' textoAlternativo='logo da marca'/> 
            <SwiperWrapper
                modules={[Navigation, Pagination, Scrollbar, Autoplay]}
                navigation={true}
                pagination={{clickable: true}}
                loop={true}
                autoplay={{delay: 5000, disableOnInteraction: false}}
            >
                { headerContent.map((object) => (
                    <SwiperSlide key={ object.id}>
                        <Wrapper>
                            <ImageBackground src={ object.image } alt={ object.altImage } />
                            <Title>{ object.text }</Title>
                        </Wrapper>
                    </SwiperSlide>
                ))} 
            </SwiperWrapper>
        </Container>
    )
}

export default Header