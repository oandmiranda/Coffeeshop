import { ThemeProvider } from "styled-components";
import { theme } from "./Styles/themes";
import GlobalStyle from "./Styles/globalStyle";
import Header from "./Components/Header";
import Content, { Content2 } from "./Components/Content";
import imagemXicaras from './Components/Content/img/xicaras.jpg';
import imagemGraos from './Components/Content/img/graos.jpg';
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
          backgroundImage={imagemXicaras}
          title="Momentos bons a todo momento"
          children='Conheça nosso menu completo.'
          textButton='Conhecer menu'
          background_Button='black'
        />
        <Content2 
          backgroundImage={imagemGraos}
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
          backgroundImage={imagemGraos}
        />
        <Footer />

      </ThemeProvider>
    </>
  )
}

export default App;
