import { AnimationProps } from "../../Types/userTypes";
import { DropDownWrapper } from "./styles";

interface PopUpProps extends AnimationProps {
    onMouseEnter: () => void;
    onMouseLeave: () => void;
}

export default function PopUp ({isVisible, onMouseEnter, onMouseLeave}: PopUpProps) {
    return (
        <DropDownWrapper 
            isVisible={isVisible} 
            onMouseEnter={onMouseEnter} 
            onMouseLeave={onMouseLeave}
        >
            <ul>
                <li><a href={"/ourhistory"}>Nosso Café</a></li>
                <li><a href={"/"}>Cardápio</a></li>
                <li><a href={"/"}>Delivery</a></li>
            </ul>
        </DropDownWrapper>
    );
};
