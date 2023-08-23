import { styled } from "styled-components"
import backgroundImage from "../../img/header1.jpg"

export const Container = styled.header`
    width: 100%;
    height: 700px;
    display: flex;
    flex-direction: column;
    align-items: center;
    background: linear-gradient(to top, transparent, rgba(0, 0, 0, 1) 100%), url(${backgroundImage});
    background-size: cover;
    background-position: center;

    @media(max-width: 360px) {
        background-position: center;
    }
`;

export const DivFlexBox = styled.div`
    width: 80%;
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 0 auto;
    height: 100%;
`;

export const Title = styled.h1`
    color: ${props => props.theme.colors.default};
    font-size: 3.7rem;
    text-align: center;
    font-family: ${props => props.theme.fonts.title.fontFamily};
`;