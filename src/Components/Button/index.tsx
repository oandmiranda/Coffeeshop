import { ButtonProps } from "../../Types/userTypes"
import { StyleButton } from "./styles"

export default function Button ({ background_Button, fontSize, children }: ButtonProps) {
    return (
        <StyleButton 
            background_Button={background_Button}
            fontSize={fontSize}
        >
            { children }
        </StyleButton>
    );
};