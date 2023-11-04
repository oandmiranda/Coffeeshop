import Content from "../../Components/Content";
import Footer from "../../Components/Footer";
import Header from "../../Components/Header";
import coverImage from "../../assets/img/coffeeshop.png";
import coverImage2 from "../../assets/img/cafeteria.png";

const headerHome = [
    { id: 1, coverImage: coverImage2, name: 'coffeeshop', text: "", isVisible: false },
    { id: 2, coverImage: coverImage, name: 'coffeeshop', text: "", isVisible: false },
  ]

const MyHistory = () => {

    const props = {
        content: headerHome,
        height: "80vh",
        subtitle: "Desde 1979 servindo o melhor café de São Paulo",
        children: "texto teste",
        positionTop: "50%",
        positionRight: "50%",
        positionLeft: "10%",
        fontSize: "3rem",
        color: '#fff',
      }

    return (
        <>
            <Header {...props} />
            <Content 
                reverse
                btnVisible={false}
                backgroundImage={coverImage}
                positionCenter={false}
                title="Nosso grão"
                background_Button="gray"
                paragraph="Nossa jornada em busca da melhor xícara de café nos levou a uma das mais tradicionais cafeterias de São Paulo, o [nome da cafeteria]. Localizado no coração da cidade, este estabelecimento representa a fusão perfeita entre a tradição cafeeira e o paladar moderno.
                Fundado há mais de meio século por um apaixonado por café, o [nome da cafeteria] tem uma história profundamente enraizada na cultura do café.
                Os grãos escolhidos a dedo são submetidos a um processo de torra que é uma verdadeira obra de arte. Os torrefadores experientes da cafeteria dominam a ciência e a arte de revelar os sabores intrínsecos de cada variedade de café. "
            />
            <Footer />
        </>
    )
}

export default MyHistory;