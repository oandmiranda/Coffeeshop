import { DropDownWrapper, Item } from "./styles";
import { PopUpProps } from "../../Types/userTypes";

const PopUp = ({isVisible}: PopUpProps) => {
    return (
        <DropDownWrapper isVisible={isVisible} >
            <ul>
                <Item>Nosso Café</Item>
                <Item>Cardápio</Item>
                <Item>Delivery</Item>
                <Item>Contato</Item>
            </ul>
        </DropDownWrapper>
    )
}

export default PopUp