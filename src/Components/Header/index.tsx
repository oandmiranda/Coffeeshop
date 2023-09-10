import { SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Scrollbar, Autoplay} from "swiper";
import SwiperWrapper from "../Swiper";
import Nav from "../Header/Nav";
import Children from "./Children";
import { Container, ImageBackground, Title, Wrapper } from "./styles";
import { HeaderProps } from "../../Types/userTypes";

const Header = ({height, headerContent}: HeaderProps) => {
    return (
        <Container height={ height }>
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
                            <ImageBackground src={ object.image } alt={ object.name } />
                            <Children 
                                isVisible={ object.isVisible }
                                subtitle="A melhor cafeteria de São Paulo"
                                children='Ver menu'
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