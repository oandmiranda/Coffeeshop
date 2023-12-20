import { StyledBox } from "./styles";
import { BoxProps } from "../../Types/userTypes";

export default function Box ({as, children, boxBackground}: BoxProps) {
    return (
        <StyledBox as={as} boxBackground={boxBackground}>
            {children}
        </StyledBox>
    )
};