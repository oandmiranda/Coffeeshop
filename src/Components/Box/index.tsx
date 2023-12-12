import { StyledBox } from "./styles";

export interface BoxProps {
    as: keyof JSX.IntrinsicElements
    children: React.ReactNode
    boxBackground: string
}

export default function Box ({as, children, boxBackground}: BoxProps) {
    return (
        <StyledBox as={as} boxBackground={boxBackground}>
            {children}
        </StyledBox>
    )
};