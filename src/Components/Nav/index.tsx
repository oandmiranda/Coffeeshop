import { Container, BoxLink, Link, Logo, Div, InstagramIcon, ArrowIcon, FacebookIcon } from "./styles";

interface NavProps {
    urlImage: string
    textoAlternativo?: string
}

const Nav = ({urlImage, textoAlternativo}: NavProps) => {
    return (
        <Container>
            <Div>
                <Logo src={ urlImage } alt={ textoAlternativo }/>
            </Div>

            <BoxLink>
                <Link>Empório
                    <ArrowIcon />
                </Link>
                <Link>Nossa História</Link>
                <Link>Lojas</Link>
                <Link>Seja um franquiado</Link>
            </BoxLink>

            <Div>
                <Div>
                    <InstagramIcon />
                </Div>
                <Div>
                    <FacebookIcon />
                </Div>
            </Div>
        </Container>    
    )
}

export default Nav;