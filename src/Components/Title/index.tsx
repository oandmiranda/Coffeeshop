import { TitleProps } from "../../Types/userTypes";
import { StyledTitle } from "./styles";

const Title = ({fontSize, children, color, style}: TitleProps) => {
    return (
        <StyledTitle
            fontSize={fontSize}
            color={color}
            style={style}
        >
            {children}
        </StyledTitle>
    )
}

export default Title;