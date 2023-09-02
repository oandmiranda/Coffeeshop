import { PopUpProps } from "../../../Types/userTypes";
import Button from "../../Button";
import { Container, SubTitle } from "./styles";
// import { ChildrenProps } from "../../../Types/userTypes";

const Children = ({ isVisible }: PopUpProps) => {
    return (
        <Container isVisible={ isVisible }>
            <SubTitle>Encontre a cafeteria mais próxima de você</SubTitle>
            <Button
                background_Button="gray"
                fontSize="1.5rem"
                > Ver no mapa
            </Button>
        </Container>
    )
}

export default Children