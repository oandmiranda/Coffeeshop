import { PopUpProps } from "../../../Types/userTypes";
import Button from "../../Button";
import { Container, SubTitle } from "./styles";
// import { ChildrenProps } from "../../../Types/userTypes";

const Children = ({isVisible}: PopUpProps) => {
    return (
        <Container isVisible={ isVisible }>
            <SubTitle>Testando componente</SubTitle>
            <Button background_Button="gray"
                > Teste
            </Button>
        </Container>
    )
}

export default Children