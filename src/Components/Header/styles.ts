import { styled } from "styled-components"

export const Container = styled.header`
    height: 100vh;
    display: flex;
    justify-content: center;
    background-size: cover;
    background-position: center;
`;

export const Wrapper = styled.div`
    width: 100vw;
    height: 100vh;
    position: relative;
`;

export const ImageBackground = styled.img`
    width: 100vw;
    height: 100vh;
    object-fit: cover;
    background-size: cover;
    z-index: 3;
`;

export const Title = styled.h1`
    position: absolute;
    top: 60%;
    left: 45%;
    right: 3%;
    color: ${props => props.theme.colors.default};
    font-size: 3.2rem;
    text-align: center;
    font-family: ${props => props.theme.fonts.default.fontFamily};
`;