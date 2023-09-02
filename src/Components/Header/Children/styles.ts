import { styled } from "styled-components";
import { PopUpProps } from "../../../Types/userTypes";

export const Container = styled.div<PopUpProps>`
    display: flex;
    flex-direction: column;
    align-items: center;
    opacity: ${({isVisible}) => (isVisible ? '1' : '0')};
    position: absolute;
    left: 9%;
    top: 45%;
    `;

export const SubTitle = styled.h1`
    color: ${props => props.theme.colors.default};
    font-size: ${props => props.theme.sizes.subtitle};
    font-family: ${props => props.theme.fonts.secondary.fontFamily};
`;