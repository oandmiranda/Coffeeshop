import { ContainerProps } from "../../Types/userTypes";
import { StyledContainer } from "./styles";

const Container = ({children, isWhite}: ContainerProps) => {
    return (
        <StyledContainer isWhite={isWhite}>
            {children}
        </StyledContainer>
    )
}

export default Container;