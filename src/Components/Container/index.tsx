import { ContainerProps } from "../../Types/userTypes";
import { StyledContainer } from "./styles";

export default function Container ({children, isWhite}: ContainerProps) {
    return (
        <StyledContainer isWhite={isWhite}>
            {children}
        </StyledContainer>
    );
};