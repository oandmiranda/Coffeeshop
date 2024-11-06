import { useState } from "react";
import { Link } from "react-router-dom";
import { NavProps } from "../../../Types/userTypes";
import PopUp from "../../PopUp";
import { Container, BoxLink, NavbarLink, Logo, Div, InstagramIcon, ArrowIcon, FacebookIcon } from "./styles";

export default function Nav ({urlImage, textoAlternativo, style}: NavProps) {
    const [isVisible, setVisible] = useState<boolean>(false);

    const showPopup = () => setVisible(true);
    const hidePopup = () => setVisible(false);

    return (
        <Container style={style}>
            <Div>
                <Link to="/">
                    <Logo src={ urlImage } alt={ textoAlternativo }/>
                </Link>          
            </Div>

            <BoxLink>
                {/* PopUp com controle de visibilidade */}
                <PopUp 
                    isVisible={isVisible} 
                    onMouseEnter={showPopup} 
                    onMouseLeave={hidePopup}
                />
                
                <NavbarLink to="/">Home</NavbarLink>
                
                <NavbarLink 
                    to="/"
                    onMouseEnter={showPopup} // Mostra o popup ao passar o mouse
                    onMouseLeave={hidePopup}  // Oculta o popup apenas se sair de toda a área
                >
                    Empório
                    <ArrowIcon />
                </NavbarLink>
                
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
