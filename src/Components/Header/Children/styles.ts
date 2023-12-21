import { styled, keyframes} from "styled-components";
import { PopUpProps } from "../../../Types/userTypes";
import { device } from "../../../Styles/themes";

const slide = keyframes`
     0% {
    transform: translateX(-100%);
    opacity: 0;
  }
    100% {
        transform: translateX(0);
        opacity: 1;
  }
`;

export const Container = styled.div<PopUpProps>`
    width: 350px;
    display: ${({isVisible}) => (isVisible ? 'flex' : 'none')};
    flex-direction: column;
    align-items: start;
    position: absolute;
    left: 9%;
    top: 45%;
    animation: ${slide} 1.5s ease-in-out forwards;
    animation-timing-function: ease-in-out;
    animation-delay: 1.2s;
    animation-fill-mode: forwards;
    animation-iteration-count: 1;

    @media ${device.mobileS} {
        display: none;
    }
    `;

export const SubTitle = styled.h1`
    color: ${props => props.theme.colors.default};
    font-size: 1.4rem;
    font-family: ${props => props.theme.fonts.secondary.fontFamily};
`;
