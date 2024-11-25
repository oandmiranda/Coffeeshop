import { Link } from "react-router-dom";
import { NavProps } from "../../../Types/userTypes";
import { Container, BoxLink, NavbarLink, Logo, Div, InstagramIcon, FacebookIcon } from "./styles";

export default function Nav ({urlImage, textoAlternativo, style}: NavProps) {
 

    return (
        <Container style={style}>
            <Div>
                <Link to="/">
                    <Logo src={ urlImage } alt={ textoAlternativo }/>
                </Link>          
            </Div>

            <BoxLink>                
                <NavbarLink to="/">Home</NavbarLink>                
                <NavbarLink to="/menu">Cardápio</NavbarLink>
                <NavbarLink to="/ourhistory">Nosso café</NavbarLink>
                <NavbarLink to="/stores">Lojas</NavbarLink>
                <NavbarLink to="/franchise">Seja um franqueado</NavbarLink>
            </BoxLink>

            <Div>
                <NavbarLink to="/">
                    <InstagramIcon />
                </NavbarLink>
                <NavbarLink to="/">
                    <FacebookIcon />
                </NavbarLink>    
            </Div>
        </Container>    
    );
};
