import BurgerMenu from "../../Components/BurgerMenu";
import Content from "../../Components/Content";
import Footer from "../../Components/Footer";
import Nav from "../../Components/Header/Nav";
import nossoGraoImage from "../../assets/img/nossograo.png";

export default function MyHistory () {
    return (
        <>
            <BurgerMenu pageWrapId={"page-wrap"} outerContainerId={"outer-container"}/>
            <Nav urlImage="/assets/logo.png" style={{ position: 'fixed', top: '3px'}}/>
            <Content 
                style={{ marginTop: '120px' }}
                reverse
                btnVisible={false}
                backgroundImage={nossoGraoImage}
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
};