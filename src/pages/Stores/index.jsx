import { useSelector } from "react-redux";
import Header from "../../Components/Header";
import Content from "../../Components/Content";
import cafeteriaSaoPaulo from "../../assets/img/coffeeshop.png"; 
import cafeteriaMorumbi from "../../assets/img/cafeteria.png";
import cafeteriaSbc from "../../assets/img/pagestore4.png"; 
import cafeteriaSantoAndre from "../../assets/img/pagestore5.png"; 
import cafeteriaIbirapuera from "../../assets/img/pagestore2.png"; 
import Footer from "../../Components/Footer";
import Container from "../../Components/Container";

export default function Stores () {

    const headerStores = useSelector(state => state.headerStores);
    const props = {
        content: headerStores,
        height: "85vh",
        subtitle: "Visite a Cafeteria mais perto de você !",
        contentText: "",
        fontSize: "3rem",
        color: '#fff',
      };

    return (
        <>
            <Header {...props}/>
            <Container isWhite>
                <Content 
                    reverse={false}
                    btnVisible={false}
                    backgroundImage={cafeteriaSaoPaulo}
                    backgroundColor="#421e12"
                    positionCenter={true}
                    title="Ipiranga/SP"
                    paragraph="Avenida Doutor Ricardo Jafet, 1001 - Ipiranga, CEP: 08456-900"
                        />
                <Content 
                    reverse
                    btnVisible={false}
                    backgroundImage={cafeteriaSbc}
                    backgroundColor="#bb6f06"
                    positionCenter={true}
                    title="São Bernardo do Campo"
                    paragraph="Avenida Jurubatuba, 234 - Centro/SBC - CEP: 02356-000."
                />
                <Content 
                    reverse={false}
                    btnVisible={false}
                    backgroundImage={cafeteriaSantoAndre}
                    backgroundColor="#421e12"
                    positionCenter={true}
                    title="Shopping ABC - Santo André"
                    paragraph="Avenida Pereira Barreto, 827 - Santo André - CEP: 02590-100."
                />
                <Content 
                    reverse
                    btnVisible={false}
                    backgroundImage={cafeteriaIbirapuera}
                    backgroundColor="#bb6f06"
                    positionCenter={true}
                    title="Shopping Ibirapuera"
                    paragraph="Avenida Prestes Maia, 1210 - Moema/SP - CEP: 08735-300."
                />
                <Content 
                    reverse={false}
                    btnVisible={false}
                    backgroundImage={cafeteriaMorumbi}
                    backgroundColor="#421e12"
                    positionCenter={true}
                    title="Morumbi"
                    paragraph="Avenida João Pessoa, 290 - Morumbi/SP - CEP: 08923-800."
                />

            </Container>
            <Footer />
        </>
    );
}