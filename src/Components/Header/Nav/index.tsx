import { useState } from "react";
import { Link } from "react-router-dom";
import { NavProps } from "../../../Types/userTypes";
import PopUp from "../../PopUp";
import { Container, BoxLink, NavbarLink, Logo, Div, InstagramIcon, ArrowIcon, FacebookIcon } from "./styles";

export default function Nav ({urlImage, textoAlternativo, style}: NavProps) {
    const [isVisible, setVisible] = useState<boolean>(false);

    // função para exibir e fechar o PopUp na barra de navegação
    const handleOver = () => {
        setVisible(true)
    }
    const handleOut = () => {
        setVisible(false)
    }

    return (
        <Container style={style}>
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
                <NavbarLink to="/myhistory">Nossa História</NavbarLink>
                <NavbarLink to="/stores">Lojas</NavbarLink>
                <NavbarLink to="/franchise">Seja um franqueado</NavbarLink>
                {/* <NavbarLink to="/">
                    Aprenda mais
                </NavbarLink> */}
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