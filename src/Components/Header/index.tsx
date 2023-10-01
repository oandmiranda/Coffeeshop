import { SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Scrollbar, Autoplay} from "swiper";
import SwiperWrapper from "../Swiper";
import { HeaderProps } from "../../Types/userTypes";
import Nav from "../Header/Nav";
import Children from "./Children";
import Title from "../Title";
import { Container, ImageBackground, Wrapper } from "./styles";

const Header = (props: HeaderProps) => {

    const {
        content, height, subtitle, contentText, positionTop, positionLeft, positionRight, fontSize, color 
    } = props;

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
                        <Wrapper height={ height } >
                            <ImageBackground src={ object.coverImage } alt={ object.name } />
                            <Children
                                isVisible={ object.isVisible }
                                subtitle={ subtitle }
                                contentText={ contentText }
                            />
                            <Title
                                positionTop={ positionTop }
                                positionLeft={ positionLeft }
                                positionRight={ positionRight }
                                color={ color }
                                fontSize={ fontSize }
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