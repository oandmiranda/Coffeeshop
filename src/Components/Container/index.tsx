import { StyledContainer } from "./styles";
import { ContainerProps } from "../../Types/userTypes";

const Container = ({children}: ContainerProps) => {
    return (
        <StyledContainer>
            {children}
        </StyledContainer>
    )
}

export default Container;