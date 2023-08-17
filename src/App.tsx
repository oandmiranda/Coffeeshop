import { ThemeProvider } from "styled-components";
import { theme } from "./Styles/themes";
import GlobalStyle from "./Styles/globalStyle";
import Header from "./Components/Header";
import Content, { Content2 } from "./Components/Content";
import imagemXicaras from './Components/Content/img/xicaras.jpg';
import imagemGraos from './Components/Content/img/graos.jpg';

function App () {
  return (
    <>
      <ThemeProvider theme={theme}> 
        <GlobalStyle />
        
        <Header />
        <Content 
          backgroundImage={imagemXicaras}
          title="Uma surpresa refrescante para você"
          children='Conheça nossa linha de Cold Brew e Refreshers™'
          textButton='Clique aqui'
        />
        <Content2 
          backgroundImage={imagemGraos}
          title="qualquer coissa"
          children="teste"
          textButton="click"
        />

        
      </ThemeProvider>
    </>
  )
}

export default App;
