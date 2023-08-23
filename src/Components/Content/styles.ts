import { styled } from "styled-components";
import { ButtonProps, ImageProps } from "../../Types/userTypes"

export const Section = styled.div`
    width: 95%;
    height: 320px;
    min-height: 300px;
    margin: 0 auto;
    display: flex;
    justify-content: space-evenly;
    margin-block: 15px;
    `;
    
    export const Image = styled.div<ImageProps>`
    border-radius: 10px;
    width: 49%;
    background: ${(props) => `url(${props.backgroundImage})`};
    background-size: cover;
    background-position: center;
`;

export const TextBox = styled.div`
    width: 49%;
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
    justify-content: center;
    background: ${props => props.theme.colors.tertiary};
    border-radius: 10px;
    padding: 30px;
`;

export const Title = styled.h2`
    padding-bottom: 20px;
`;

export const Button = styled.a<ButtonProps>`
    width: 200px;
    height: 50px;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: ${(props) => props.background_Button};
    border-radius: 7px;
    margin-top: 15px;
    cursor: pointer;
`;