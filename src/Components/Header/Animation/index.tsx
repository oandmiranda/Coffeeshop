import { AnimationProps } from "../../../Types/userTypes";
import Button from "../../Button";
import { Container, SubTitle } from "./styles";

export default function Animation ({ isVisible, subtitle, contentText }: AnimationProps) {
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
    );
};