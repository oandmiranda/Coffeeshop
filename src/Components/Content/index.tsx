import { Button, Image, ContentWrapper, TextBox, Title } from "./styles"
import { ContentProps } from "../../Types/userTypes";


const Content = ({reverse, backgroundImage, title, children, textButton, background_Button}: ContentProps) => {
    return (
        <ContentWrapper reverse={reverse}>
            <Image backgroundImage={ backgroundImage } />
            <TextBox>
                <Title>{ title }</Title>
                <p>{ children }</p>
                <Button background_Button={ background_Button }>{ textButton }</Button>
            </TextBox>
        </ContentWrapper> 
    )
}

export default Content