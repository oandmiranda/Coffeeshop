import { ImageProps } from "../../Types/userTypes"
import { Button } from "../Content/styles"
import { ContainerDelivery, H1, ImageDelivery, TextArea } from "./styles"

interface DeliveryProps {
    title: string
    children: string
    background_Button: string
    buttonText: string
    backgroundImage: ImageProps
}

const Delivery = ({title, background_Button, children, buttonText, backgroundImage}: DeliveryProps) => {
    return (
        <ContainerDelivery>
            <TextArea>
                <H1>{ title }</H1>
                <p>{ children }</p>
                <Button background_Button={ background_Button }>
                    { buttonText }
                </Button>
            </TextArea>

            <ImageDelivery backgroundImage={ backgroundImage } />
        </ContainerDelivery>
    )
}

export default Delivery