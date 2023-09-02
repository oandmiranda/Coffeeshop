import { Image, ContentWrapper, TextBox, Title } from "./styles"
import { ContentProps } from "../../Types/userTypes";
import Button from "../Button";


const Content = ({ reverse, backgroundImage, title, h4_children, background_Button, children }: ContentProps) => {
    return (
        <ContentWrapper reverse={reverse}>
            <Image backgroundImage={ backgroundImage } />
            <TextBox>
                <Title>{ title }</Title>
                <h4>{ h4_children }</h4>
                <Button background_Button={ background_Button }>
                    { children }
                </Button>
            </TextBox>
        </ContentWrapper> 
    )
}

export default Content