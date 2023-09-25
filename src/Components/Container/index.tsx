import { ContainerProps } from "../../Types/userTypes";
import { StyledContainer } from "./styles";

const Container = ({children}: ContainerProps) => {
    return (
        <StyledContainer>
            {children}
        </StyledContainer>
    )
}

export default Container;