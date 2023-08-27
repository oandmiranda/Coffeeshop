import { SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Scrollbar, Autoplay} from "swiper";
import SwiperWrapper from "../Swiper";
import Nav from "../Nav";
import { Container, ImageBackground, Title, Wrapper } from "./styles";
import image1 from "../../img/header1.jpg";
import image2 from "../../img/graos.jpg";
import image3 from "../../img/xicaras.jpg";

const Header = () => {
    
    const headerContent = [
        { id: 1, image: image1, altImage: 'Logo1', text: 'Um novo café para você' },
        { id: 2, image: image2, altImage: 'Logo2', text: 'Sua nova experiência ao tomar café' },
        { id: 2, image: image3, altImage: 'Logo3', text: 'Café fino do bom' },
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