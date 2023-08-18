import Nav from "../Nav";
import { Container, DivFlexBox, Title } from "./styles";

const Header = () => {
    return (
        <Container>
            <Nav urlImage='/assets/logo.png' textoAlternativo='logo da marca'/> 
            <DivFlexBox>
                <Title>Aromas e Sabores Inigualáveis</Title>
            </DivFlexBox>
        </Container>
    )
}

export default Header