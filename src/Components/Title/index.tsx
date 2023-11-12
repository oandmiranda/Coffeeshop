import { TitleProps } from "../../Types/userTypes";
import { StyledTitle } from "./styles";

const Title = ({fontSize, children, color}: TitleProps) => {
    return (
        <StyledTitle
            fontSize={fontSize}
            color={color}
        >
            {children}
        </StyledTitle>
    )
}

export default Title;