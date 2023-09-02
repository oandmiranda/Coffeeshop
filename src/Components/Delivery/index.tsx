import { DeliveryProps } from "../../Types/userTypes"
import Button from "../Button";
import { ContainerDelivery, H1, ImageDelivery, TextArea } from "./styles"

const Delivery = ({title, background_Button, children, buttonText, backgroundImage}: DeliveryProps) => {
    return (
        <ContainerDelivery>
            <TextArea>
                <H1>{ title }</H1>
                <>{ children }</>
                <Button background_Button={ background_Button }>
                    { buttonText }
                </Button>
            </TextArea>

            <ImageDelivery backgroundImage={ backgroundImage } />
        </ContainerDelivery>
    )
}

export default Delivery