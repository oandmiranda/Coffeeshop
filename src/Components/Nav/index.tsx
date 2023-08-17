import { Container, BoxLink, Link, Logo } from "./styles";

interface NavProps {
    urlImage: string
    textoAlternativo?: string
}

const Nav = ({urlImage, textoAlternativo}: NavProps) => {
    return (
        <Container>
            <Logo src={ urlImage } alt={ textoAlternativo }/>
            <BoxLink>
                <Link>Cardápio</Link>
                <Link>Nossa História</Link>
                <Link>Contato</Link>
            </BoxLink>
        </Container>    
    )
}

export default Nav;