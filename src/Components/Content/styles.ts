import { styled } from "styled-components";
import { ImageProps } from "../../Types/userTypes"

export const Section = styled.div`
    width: 95%;
    height: 350px;
    margin: 0 auto;
    display: flex;
    margin-block: 25px;
    `;
    
    export const Image = styled.div<ImageProps>`
    border-radius: 10px;
    width: 50%;
    background: ${(props) => `url(${props.backgroundImage})`};
    background-size: cover;
    background-position: center;

`;

export const TextBox = styled.div`
    width: 50%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    background: ${props => props.theme.colors.secondary};
    border-radius: 10px;
`;

export const Titulo = styled.h2`
    padding-bottom: 10px;
`;

export const Button = styled.a`
    width: 140px;
    height: 50px;
    display: flex;
    justify-content: center;
    align-items: center;
    background: black;
    border-radius: 7px;
    margin-top: 15px;
    cursor: pointer;
`;