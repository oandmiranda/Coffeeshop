import { SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Scrollbar, Autoplay} from "swiper";
import SwiperWrapper from "../Swiper";
import { HeaderProps } from "../../Types/userTypes";
import Nav from "../Header/Nav";
import Children from "./Children";
import Title from "../Title";
import { Container, ImageBackground, Wrapper } from "./styles";
import BurgerMenu from "../BurgerMenu";

const Header = (props: HeaderProps) => {

    const {
        content, height, subtitle, contentText, fontSize, color 
    } = props;

    return (
        <Container height={height}>
            <Nav urlImage='/assets/logo.png' textoAlternativo='logo da marca'/> 
            <BurgerMenu pageWrapId={"page-wrap"} outerContainerId={"outer-container"}/>
            <SwiperWrapper
                modules={[Navigation, Pagination, Scrollbar, Autoplay]}
                navigation={true}
                pagination={{clickable: true}}
                loop={true}
                autoplay={{delay: 5000, disableOnInteraction: false}}
            >
                { content && content.map((object) => (
                    <SwiperSlide key={ object.id }>
                        <Wrapper height={ height } >
                            <ImageBackground src={ object.image } alt={ object.name } />
                            <Children
                                isVisible={ object.isVisible }
                                subtitle={ subtitle }
                                contentText={ contentText }
                            />
                            <Title
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