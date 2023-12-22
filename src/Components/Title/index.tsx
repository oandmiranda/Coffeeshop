import { TitleProps } from "../../Types/userTypes";
import { StyledTitle } from "./styles";

export default function Title ({fontSize, children, color, styleAdicional}: TitleProps) {
    return (
        <StyledTitle
            fontSize={fontSize}
            color={color}
            styleAdicional={styleAdicional}
        >
            {children}
        </StyledTitle>
    );
};