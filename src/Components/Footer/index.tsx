import { Div, FacebookIcon, InstagramIcon, Logo } from "../Header/Nav/styles";
import { UpperArea, GridContainer, H2 } from "./styles";

export default function Footer () {
    return (
        <GridContainer>
            <UpperArea>
                <Div>
                    <Logo src="/assets/logo.png"  alt="logomarca da empresa" />
                </Div>
                <H2>Todos os dias das 8 as 21h</H2>
                <Div>
                    <InstagramIcon />
                    <FacebookIcon />
                </Div>
            </UpperArea>
        </GridContainer>
    );
};