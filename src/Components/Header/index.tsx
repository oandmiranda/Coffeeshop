import { SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Scrollbar, Autoplay} from "swiper";
import SwiperWrapper from "../Swiper";
import Nav from "../Header/Nav";
import Children from "./Children";
import { Container, ImageBackground, Title, Wrapper } from "./styles";
import xicara from "../../img/xicara.png";
import coffeeshop from "../../img/coffeeshop.png";
import croissant from "../../img/croissant.png";
import cake from "../../img/cake.png";

const Header = () => {
    
    const headerContent = [
        { id: 1, image: coffeeshop, altImage: 'coffeeshop', text: '', isVisible: true },
        { id: 2, image: xicara, altImage: 'café na xícara', text: 'Um novo café para você', isVisible: false},
        { id: 3, image: cake, altImage: 'croissant', text: '', isVisible: false },
        { id: 4, image: croissant, altImage: 'croissant', text: '', isVisible: false },
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
                    <SwiperSlide key={ object.id }>
                        <Wrapper>
                            <ImageBackground src={ object.image } alt={ object.altImage } />
                            <Children 
                                isVisible={ object.isVisible }
                            />
                            <Title>{ object.text }</Title>
                        </Wrapper>
                    </SwiperSlide>
                ))} 
            </SwiperWrapper>
        </Container>
    )
}

export default Header