import { Div, FacebookIcon, InstagramIcon, Logo } from "../Nav/styles"
import { AreaSuperior, GridContainer, Rodape } from "./styles"

const Footer = () => {
    return (
        <GridContainer>

            <AreaSuperior>
                <Div>
                    <Logo src="/assets/logo.png"  alt="logomarca da empresa" />
                </Div>
                <h1>Aberto todos os dias das 6h às 22h</h1>
                <Div>
                    <InstagramIcon />
                    <FacebookIcon />
                </Div>
            </AreaSuperior>
            
            <Rodape>
                <p>Parágrafo teste</p>
            </Rodape>

        </GridContainer>
    )
}

export default Footer
