import { Container, BoxLink, Link, Logo, Div, InstagramIcon, ArrowIcon, FacebookIcon } from "./styles";
import PopUp from "../../PopUp";
import { NavProps } from "../../../Types/userTypes";
import { useState } from "react";

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
                <Logo src={ urlImage } alt={ textoAlternativo }/>
            </Div>

            <BoxLink>
                <PopUp isVisible={isVisible}/>
                <Link 
                    onMouseOver={handleOver}
                    onMouseOut={handleOut}
                    >
                    Empório
                    <ArrowIcon />
                </Link>
                <Link>Nossa História</Link>
                <Link>Lojas</Link>
                <Link>Seja um franquiado</Link>
                <Link>
                    Aprenda mais
                    <ArrowIcon />
                </Link>
            </BoxLink>

            <Div>
                <InstagramIcon />
                <FacebookIcon />
            </Div>
        </Container>    
    )
}

export default Nav;