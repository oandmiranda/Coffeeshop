import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import Header from "../../Components/Header";
import Container from "../../Components/Container";
import Content from "../../Components/Content";
import Footer from "../../Components/Footer";


const Item = () => {

    const { itemRoute } = useParams();
    const { items } = useSelector(state => ({
        items: state.items.filter(item => item.name === itemRoute)
    }))

    const props = {
        content: items,
        height: '70vh',
        children: 'Ver lista',
        subtitle: items.name,
        positionTop: "45%",
        positionLeft: "9%",
        positionRight: "0",
        color: "#fff",
        fontSize: "1.3rem",
    }

    return (
        <>
        <Header {...props}/>
        <Container isWhite>
            {items.map((item) => (
                <Content 
                    backgroundImage={item.image}
                    title={item.name}
                    paragraph={item.description}
                    children="Pedir no WhatsApp"
                    btnVisible 
                    positionCenter
                    backgroundColor="#B40404"
                /> ))}
        </Container>
        <Footer />
        </>
    )
};

export default Item;