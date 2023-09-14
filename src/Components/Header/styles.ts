import { styled } from "styled-components";
import { ContainerProps } from "../../Types/userTypes";

export const Container = styled.header<ContainerProps>`
    height: ${props => props.height};
    display: flex;  
    justify-content: center;
    background-size: cover;
    background-position: center;
`;

export const Wrapper = styled.div<ContainerProps>`
    width: 100vw;
    height: ${props => props.height};
    position: relative;
`;

export const ImageBackground = styled.img`
    width: 100vw;
    height: 100vh;
    object-fit: cover;
    background-size: cover;
    z-index: 3;
`;
