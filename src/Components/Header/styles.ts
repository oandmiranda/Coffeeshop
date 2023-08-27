import { styled } from "styled-components"

export const Container = styled.header`
    width: 100%;
    height: 700px;
    display: flex;
    flex-direction: column;
    align-items: center;
    background-size: cover;
    background-position: center;

    @media(max-width: 360px) {
        background-position: center;
    }
`;

export const Wrapper = styled.div`
    width: 100%;
    height: 100%;
    position: relative;
    align-items: center;
`;

export const ImageBackground = styled.img`
    width: 100%;
    height: 100%;
    object-fit: cover;
    background: linear-gradient(to top, transparent, rgba(0, 0, 0, 1) 100%);
    z-index: 3;
`;

export const Title = styled.h1`
    position: absolute;
    top: 60%;
    left: 50%;
    color: ${props => props.theme.colors.default};
    font-size: 3.7rem;
    text-align: center;
    font-family: ${props => props.theme.fonts.title.fontFamily};
`;