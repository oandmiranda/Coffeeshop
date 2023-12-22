import { AnimationProps } from "../../Types/userTypes";
import { DropDownWrapper, Item } from "./styles";

export default function PopUp ({isVisible}: AnimationProps) {
    return (
        <DropDownWrapper isVisible={isVisible} >
            <ul>
                <Item>Nosso Café</Item>
                <Item>Cardápio</Item>
                <Item>Delivery</Item>
                <Item>Contato</Item>
            </ul>
        </DropDownWrapper>
    );
};