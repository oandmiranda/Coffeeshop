import { PopUpProps } from "../../../Types/userTypes";
import Button from "../../Button";
import { Container, SubTitle } from "./styles";
// import { ChildrenProps } from "../../../Types/userTypes";

const Children = ({ isVisible, subtitle, contentText }: PopUpProps) => {
    return (
        <Container isVisible={ isVisible }>
            <SubTitle>{ subtitle }</SubTitle>
            <Button
                background_Button="gray"
                fontSize="1.1rem"
            > 
            { contentText }
            </Button>
        </Container>
    )
}

export default Children