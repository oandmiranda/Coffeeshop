import styled from "styled-components";
import { TitleProps } from "../../Types/userTypes";

export const StyledTitle = styled.h1<TitleProps>`
    position: absolute;
    top: ${props => props.positionTop};
    left: ${props => props.positionLeft};
    right: ${props => props.positionRight};
    color: ${props => props.color};
    font-size: ${props => props.fontSize};
    text-align: center;
    font-family: ${props => props.theme.fonts.default.fontFamily};
`;