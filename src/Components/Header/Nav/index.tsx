import { useState } from "react";
import { Link } from "react-router-dom";
import { NavProps } from "../../../Types/userTypes";
import PopUp from "../../PopUp";
import { Container, BoxLink, NavbarLink, Logo, Div, InstagramIcon, ArrowIcon, FacebookIcon } from "./styles";

const Nav = ({urlImage, textoAlternativo}: NavProps) => {
    const [isVisible, setVisible] = useState<boolean>(false)

    const handleOver = () => {
        setVisible(true)
    }

    const handleOut = () => {
        setVisible(false)
    }

    return (
        <Container>
            <Div>
                <Link to="/">
                    <Logo src={ urlImage } alt={ textoAlternativo }/>
                </Link>          
            </Div>

            <BoxLink>
                <PopUp isVisible={isVisible}/>
                <NavbarLink to="/">Home</NavbarLink>
                <NavbarLink 
                    to="/"
                    onMouseOver={handleOver}
                    onMouseOut={handleOut}
                    >
                    Empório
                    <ArrowIcon />
                </NavbarLink>
                <NavbarLink to="/">Nossa História</NavbarLink>
                <NavbarLink to="/">Lojas</NavbarLink>
                <NavbarLink to="/">Seja um franquiado</NavbarLink>
                <NavbarLink to="/">
                    Aprenda mais
                    <ArrowIcon />
                </NavbarLink>
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
    )
}

export default Nav;