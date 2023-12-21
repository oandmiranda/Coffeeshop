import { styled } from "styled-components";
import { ContainerProps } from "../../Types/userTypes";
import { device } from "../../Styles/themes";

export const Container = styled.header<ContainerProps>`
    height: ${props => props.height};
    display: flex;  
    justify-content: center;
    background-size: cover;
    background-position: center;

    @media ${device.mobileS} {
        height: 65vh;
    }    

    @media ${device.mobileL} {
        height: 80vh;
    }

    @media ${device.tablet} {
        height: 88vh;
    }
`;

export const Wrapper = styled.div<ContainerProps>`
    width: 100vw;
    height: ${props => props.height};
    position: relative;

    @media ${device.mobileS} {
        width: 100%;
        height: 60vh;
    }

    @media ${device.mobileL} {
        width: 100%;
        height: 80vh;
    }
`;

export const ImageBackground = styled.img`
    width: 100vw;
    height: 100vh;
    object-fit: cover;
    background-size: cover;
    z-index: 3;

    @media ${device.mobileS} {
        width: 100%;
        height: 100%;
    }
`;
