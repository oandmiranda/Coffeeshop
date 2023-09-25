import { Div, FacebookIcon, InstagramIcon, Logo } from "../Header/Nav/styles";
import { UpperArea, GridContainer, LowerArea } from "./styles";

const Footer = () => {
    return (
        <GridContainer>
            <UpperArea>
                <Div>
                    <Logo src="/assets/logo.png"  alt="logomarca da empresa" />
                </Div>
                <h2>Todos os dias das 8 as 21h</h2>
                <Div>
                    <InstagramIcon />
                    <FacebookIcon />
                </Div>
            </UpperArea>
            
            <LowerArea>
                <p>Projeto em desenvolvimento</p>
            </LowerArea>
        </GridContainer>
    )
}

export default Footer
