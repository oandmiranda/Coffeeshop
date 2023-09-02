import { Image, ContentWrapper, TextBox, Title } from "./styles"
import { ContentProps } from "../../Types/userTypes";
import Button from "../Button";


const Content = ({ reverse, backgroundImage, title, children, background_Button, textButton }: ContentProps) => {
    return (
        <ContentWrapper reverse={reverse}>
            <Image backgroundImage={ backgroundImage } />
            <TextBox>
                <Title>{ title }</Title>
                <h4>{ children }</h4>
                <Button background_Button={ background_Button }>
                    { textButton }
                </Button>
            </TextBox>
        </ContentWrapper> 
    )
}

export default Content