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
            <Container>
                {items.map((item) => (
                    <Content 
                        backgroundImage={item.image}
                        title={item.name}
                        paragraph="Delicioso croissant de frango com catupiry"
                        children="Pedir"
                        btnVisible 
                        positionCenter
                    /> ))}
            </Container>
            <Footer />
        </>
    )
};

export default Item;