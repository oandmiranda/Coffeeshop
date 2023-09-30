import Content from "../../Components/Content";
import Delivery from "../../Components/Delivery";
import Footer from "../../Components/Footer";
import Header from "../../Components/Header";
import History from "../../Components/History";
import Category from "../../Components/Category";
import imageXicara from "../../assets/img/xicara.png";
import imageGraos from '../../assets/img/graos.png';
import imageCoffee from "../../assets/img/coffeeandcake.png";
import coffee_Cookie from "../../assets/img/coffe-cookie.png";
import croissant from "../../assets/img/croissant.png";
import coffeeshop from "../../assets/img/coffeeshop.png";
import cake from "../../assets/img/cake.png";

const headerHome = [
  { id: 1, image: coffee_Cookie, name: 'coffe and cookie', text: '', isVisible: true },
  { id: 2, image: croissant, name: 'croissant', text: 'Eleito o melhor Croissant pela Paris Coffe', isVisible: false },
  { id: 3, image: coffeeshop, name: 'coffeeshop', text: '', isVisible: false},
  { id: 4, image: cake, name: 'cake', text: '', isVisible: false }
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
          title="Momentos bons a todo momento"
          h4_children='Conheça nosso menu completo.'
          children='Conhecer menu'
          background_Button='black'
        />
        <Content
          reverse={true}
          backgroundImage={imageGraos}
          title="Nosso Café"
          h4_children="Perfeição em cada grão, uma jornada de sabores que desperta os sentidos em cada gole."
          children="Conheça nossa história"
          background_Button='black'
        />
        <Category />
        <Delivery 
          background_Button="gray"
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