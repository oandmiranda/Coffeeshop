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

const headerHome = [
  { id: 1, coverImage: coffee_Cookie, name: 'coffe and cookie', text: '', isVisible: true },
  { id: 2, coverImage: croissant, name: 'croissant', text: 'Eleito o melhor Croissant pela Paris Coffe', isVisible: false },
  { id: 3, coverImage: coffeeshop, name: 'coffeeshop', text: '', isVisible: false},
  { id: 4, coverImage: cake, name: 'cake', text: '', isVisible: false }
]

function Home () {

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
  }

  return (
    <>        
        <Header {...props}/>
        <History /> 

        <Content 
          reverse={false}
          backgroundImage={imageCoffee}
          positionCenter
          title="Momentos bons a todo momento"
          paragraph='Conheça nosso menu completo.'
          children='Conhecer menu'
          background_Button='black'
          btnVisible
        />
        <Content
          reverse={true}
          backgroundImage={imageGraos}
          positionCenter
          title="Nosso Café"
          paragraph="Perfeição em cada grão, uma jornada de sabores que desperta os sentidos em cada gole."
          children="Conheça nossa história"
          background_Button='black'
          btnVisible
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
}

export default Home;
