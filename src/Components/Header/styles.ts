import { styled } from "styled-components"

export const Container = styled.header`
    width: 100vw;
    height: 100vh;
    background-size: cover;
    background-position: center;
`;

export const Wrapper = styled.div`
    width: 100%;
    height: 100%;
    align-items: center;
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
    top: 75%;
    left: 46%;
    color: ${props => props.theme.colors.default};
    font-size: 3.7rem;
    text-align: center;
    font-family: ${props => props.theme.fonts.title.fontFamily};
`;