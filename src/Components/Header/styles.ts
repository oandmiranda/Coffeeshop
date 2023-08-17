import { styled } from "styled-components"
import backgroundImage from "./header1.jpg"

export const Container = styled.header`
    width: 100%;
    height: 100vh;
    display: flex;
    flex-direction: column;
    background: linear-gradient(to top, transparent, rgba(0, 0, 0, 1) 100%), url(${backgroundImage});
    background-size: cover;
    background-position: center;
    display: flex;
    align-items: center;

    @media(max-width: 360px) {
        background-position: center;
    }

`;

export const Title = styled.h1`
    color: ${props => props.theme.colors.default};
`