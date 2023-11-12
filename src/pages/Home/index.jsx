import { Navigation, Scrollbar, Autoplay} from "swiper";
import { SwiperSlide } from "swiper/react";
import { useSelector } from "react-redux";
import Content from "../../Components/Content";
import Delivery from "../../Components/Delivery";
import Footer from "../../Components/Footer";
import Header from "../../Components/Header";
import History from "../../Components/History";
import Category from "../../Components/ItemCategory";
import imageXicara from "../../assets/img/xicara.png";
import imageGraos from '../../assets/img/graos.png';
import imageCoffee from "../../assets/img/coffeeandcake.png";
import coffee_Cookie from "../../assets/img/coffe-cookie.png";
import croissant from "../../assets/img/croissant.png";
import coffeeshop from "../../assets/img/coffeeshop.png";
import cake from "../../assets/img/cake.png";
import SwiperWrapper from "../../Components/Swiper";

const headerHome = [
  { id: 1, image: coffee_Cookie, name: 'coffe and cookie', text: '', isVisible: true },
  { id: 2, image: croissant, name: 'croissant', text: 'Eleito o melhor Croissant pela Paris Coffe', isVisible: false },
  { id: 3, image: coffeeshop, name: 'coffeeshop', text: '', isVisible: false},
  { id: 4, image: cake, name: 'cake', text: '', isVisible: false }
]

export default function Home () {

  const props = {
    content: headerHome,
    height: "100vh",
    subtitle: "Conheça nosso cardápio",
    contentText: "Ver menu",
    children: 'texto teste',
    positionTop: "50%",
    positionRight: "10%",
    positionLeft: "40%",
    fontSize: "3rem",
    color: '#fff',
  };

  const coffeeshopAreas = useSelector(state => state.coffeeshopAreas);

  return (
    <>        
        <Header {...props}/>
        <History /> 

        <Content 
          reverse={true}
          backgroundImage={imageCoffee}
          positionCenter
          title="Momentos bons a todo momento"
          paragraph='Conheça nosso menu completo.'
          btnVisible
          children='Conhecer menu'
          background_Button='black'
        />
        <SwiperWrapper // Carroussel
            modules={[Navigation, Scrollbar, Autoplay]}
            navigation={false}
            loop={true}
            autoplay={{delay: 3000, disableOnInteraction: false}}
          >
            { coffeeshopAreas.map((item) => (
              <SwiperSlide key={item.id}>
                <Content 
                  reverse={false}
                  backgroundImage={item.image}
                  positionCenter
                  title={item.title}
                  paragraph={item.paragraph}
                  btnVisible={false}
                  backgroundColor={item.background}
                />
              </SwiperSlide>
            ))};
        </SwiperWrapper>
        <Content
          reverse={true}
          backgroundImage={imageGraos}
          positionCenter
          title="Nosso Café"
          paragraph="Perfeição em cada grão, uma jornada de sabores que desperta os sentidos em cada gole."
          btnVisible
          children="Conheça nossa história"
          background_Button='black'
        />
        <Category title="Conheça nosso menu completo" />
        <Delivery 
          background_Button="gray"
          positionCenter
          title="PEÇA DE CASA!"
          h2_children="Peça pelo nosso WhatsApp e receba por Delivery"
          children="WhatsApp"
          backgroundImage={imageXicara}
        />
        <Footer />
    </>
  )
};
