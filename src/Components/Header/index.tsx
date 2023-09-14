import { SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Scrollbar, Autoplay} from "swiper";
import SwiperWrapper from "../Swiper";
import Nav from "../Header/Nav";
import Children from "./Children";
import { Container, ImageBackground, Wrapper } from "./styles";
import { HeaderProps } from "../../Types/userTypes";

const Header = ({content, height, subtitle, children}: HeaderProps) => {
    return (
        <Container height={height}>
            <Nav urlImage='/assets/logo.png' textoAlternativo='logo da marca'/> 
            <SwiperWrapper
                modules={[Navigation, Pagination, Scrollbar, Autoplay]}
                navigation={true}
                pagination={{clickable: true}}
                loop={true}
                autoplay={{delay: 5000, disableOnInteraction: false}}
            >
                { content.map((object) => (
                    <SwiperSlide key={ object.id }>
                        <Wrapper height={height}>
                            <ImageBackground src={ object.image } alt={ object.name } />
                            <Children 
                                isVisible={ object.isVisible }
                                subtitle={ subtitle }
                                children={ children }
                            />
                        </Wrapper>
                    </SwiperSlide>
                ))} 
            </SwiperWrapper>
        </Container>
    )
}

export default Header