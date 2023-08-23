import { Div, FacebookIcon, InstagramIcon, Logo } from "../Nav/styles"
import { UpperArea, GridContainer, LowerArea } from "./styles"

const Footer = () => {
    return (
        <GridContainer>

            <UpperArea>
                <Div>
                    <Logo src="/assets/logo.png"  alt="logomarca da empresa" />
                </Div>
                <h1>Aberto todos os dias das 6h às 22h</h1>
                <Div>
                    <InstagramIcon />
                    <FacebookIcon />
                </Div>
            </UpperArea>
            
            <LowerArea>
                <p>Parágrafo teste</p>
            </LowerArea>

        </GridContainer>
    )
}

export default Footer
