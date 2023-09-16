import { SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Scrollbar, Autoplay} from "swiper";
import SwiperWrapper from "../Swiper";
import Nav from "../Header/Nav";
import Children from "./Children";
import { Container, ImageBackground, Wrapper } from "./styles";
import { HeaderProps } from "../../Types/userTypes";
import Title from "../Title";

const Header = (props: HeaderProps) => {
    return (
        <Container height={props.height}>
            <Nav urlImage='/assets/logo.png' textoAlternativo='logo da marca'/> 
            <SwiperWrapper
                modules={[Navigation, Pagination, Scrollbar, Autoplay]}
                navigation={true}
                pagination={{clickable: true}}
                loop={true}
                autoplay={{delay: 5000, disableOnInteraction: false}}
            >
                { props.content.map((object) => (
                    <SwiperSlide key={ object.id }>
                        <Wrapper height={props.height}>
                            <ImageBackground src={ object.image } alt={ object.name } />
                            <Children
                                isVisible={ object.isVisible }
                                subtitle={ props.subtitle }
                                contentText={ props.contentText }
                            />
                            <Title
                                positionTop={props.positionTop}
                                positionLeft={props.positionLeft}
                                positionRight={props.positionRight}
                                color={props.color}
                                fontSize={props.fontSize}
                            >
                                {object.text}
                            </Title>
                        </Wrapper>
                    </SwiperSlide>
                ))} 
            </SwiperWrapper>
        </Container>
    )
}

export default Header