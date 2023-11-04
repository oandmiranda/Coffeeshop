import { DeliveryProps } from "../../Types/userTypes"
import Button from "../Button";
import { ContainerDelivery, H1, ImageDelivery, TextArea } from "./styles"

const Delivery = ({title, background_Button, positionCenter, h2_children, children, backgroundImage}: DeliveryProps) => {
    return (
        <ContainerDelivery>
            <TextArea positionCenter={positionCenter}>
                <H1>{ title }</H1>
                <h2>{ h2_children }</h2>
                <Button background_Button={ background_Button }>
                    { children }
                </Button>
            </TextArea>

            <ImageDelivery backgroundImage={ backgroundImage } />
        </ContainerDelivery>
    )
}

export default Delivery