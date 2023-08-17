import { Button, Image, Section, TextBox, Titulo } from "./styles"
import { ImageProps } from "../../Types/userTypes"

interface ContentProps {
    title: string
    children: string 
    textButton: string
    backgroundImage: ImageProps
}

const Content = ({backgroundImage, title, children, textButton}: ContentProps) => {
    return (
        <Section>
            <Image backgroundImage={ backgroundImage } />
            <TextBox>
                <Titulo>{ title }</Titulo>
                <p>{ children }</p>
                <Button>{ textButton }</Button>
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
                <Button>{ textButton }</Button>
            </TextBox>
            <Image backgroundImage={ backgroundImage } />
        </Section>
    )
}

export default Content