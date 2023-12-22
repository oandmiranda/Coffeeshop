import styled from "styled-components";
import { TitleProps } from "../../Types/userTypes";
import { device } from "../../Styles/themes";

const StyledTitle = styled.h1<TitleProps>`
    position: absolute;
    color: ${props => props.color};
    font-size: ${props => props.fontSize};
    text-align: center;
    font-family: ${props => props.theme.fonts.default.fontFamily};

    @media ${device.mobileS} {
        font-size: ${props => props.theme.sizes.titleMobile};
    };

    @media ${device.mobileL} {
        font-size: ${props => props.theme.sizes.titleMobile};
    };
`;

export { StyledTitle };