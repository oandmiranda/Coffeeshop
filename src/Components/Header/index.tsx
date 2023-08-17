import Nav from "../Nav";
import { Container, Title } from "./styles";

const Header = () => {
    return (
        <Container>
            <Nav urlImage='/assets/logo.png' textoAlternativo='logo da marca'/> 
            <Title></Title>
        </Container>
    )
}

export default Header