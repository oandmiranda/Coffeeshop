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
          children='Conheça nosso menu completo.'
          textButton='Conhecer menu'
          background_Button='black'
        />
        <Content
          reverse={true}
          backgroundImage={imageGraos}
          title="Nosso Café"
          children="Perfeição em cada grão, uma jornada de sabores que desperta os sentidos em cada gole."
          textButton="Conheça nossa história"
          background_Button='black'
        />
        <Delivery 
          background_Button="gray"
          title="PEÇA DE CASA!"
          children="Peça pelo IFood (raio de entrega 7km) *Valores diferentes"
          buttonText="iFood"
          backgroundImage={imageCoffee}
        />
        <Footer />

      </ThemeProvider>
    </>
  )
}

export default App;
