import { ButtonProps } from "../../Types/userTypes"
import { StyleButton } from "./styles"

const Button = ({ background_Button, children }: ButtonProps) => {
    return (
        <StyleButton 
            background_Button={background_Button}
        >
            { children }
        </StyleButton>
    )
}

export default Button