import { Button, Image, Section, TextBox, Titulo } from "./styles"
import { ImageProps } from "../../Types/userTypes"

interface ContentProps {
    title: string
    children: string 
    textButton: string
    backgroundImage: ImageProps
    background_Button: string 
}

const Content = ({backgroundImage, title, children, textButton, background_Button}: ContentProps) => {
    return (
        <Section>
            <Image backgroundImage={ backgroundImage } />
            <TextBox>
                <Titulo>{ title }</Titulo>
                <p>{ children }</p>
                <Button background_Button={ background_Button }>{ textButton }</Button>
            </TextBox>
        </Section> 
    )
}

export const Content2 = ({backgroundImage, title, children, textButton}: ContentProps) => {
    return (
        <Section>
            <TextBox>
                <Titulo>{ title }</Titulo>
                <p>{ children }</p>
                <Button background_Button="black">{ textButton }</Button>
            </TextBox>
            <Image backgroundImage={ backgroundImage } />
        </Section>
    )
}

export default Content