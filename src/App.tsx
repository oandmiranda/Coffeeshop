import { ThemeProvider } from "styled-components";
import { theme } from "./Styles/themes";
import GlobalStyle from "./Styles/globalStyle";
import Header from "./Components/Header";
import Content from "./Components/Content";
import imageXicara from './img/xicara.png';
import imageGraos from './img/graos.png';
import imageCoffee from "./img/coffeeandcake.png";
import Delivery from "./Components/Delivery";
import History from "./Components/History";
import Footer from "./Components/Footer";

function App () {
  return (
    <>
      <ThemeProvider theme={theme}> 
        <GlobalStyle />
        
        <Header />
        <History /> 

        <Content 
          reverse={false}
          backgroundImage={imageXicara}
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
        <Delivery 
          background_Button="gray"
          title="PEÇA DE CASA!"
          h2_children="Peça pelo nosso WhatsApp e receba por Delivery"
          children="WhatsApp"
          backgroundImage={imageCoffee}
        />
        <Footer />

      </ThemeProvider>
    </>
  )
}

export default App;
