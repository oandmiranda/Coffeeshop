import { StyledTitle } from "./styles";
import { TitleProps } from "../../Types/userTypes";

const Title = ({positionTop, positionLeft, positionRight, fontSize, children, color}: TitleProps) => {
    return (
        <StyledTitle
            positionTop={positionTop}
            positionLeft={positionLeft}
            positionRight={positionRight}
            fontSize={fontSize}
            color={color}
        >
            {children}
        </StyledTitle>
    )
}

export default Title;