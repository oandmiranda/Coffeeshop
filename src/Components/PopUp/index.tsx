import { DropDownWrapper, Item } from "./styles";
import { PopUpProps } from "../../Types/userTypes";

const PopUp = ({isVisible}: PopUpProps) => {
    return (
        <DropDownWrapper isVisible={isVisible} >
            <ul>
                <Item>texto1</Item>
                <Item>texto2</Item>
                <Item>texto3</Item>
                <Item>texto4</Item>
            </ul>
        </DropDownWrapper>
    )
}

export default PopUp