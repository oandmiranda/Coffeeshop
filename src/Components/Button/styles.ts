import { styled } from "styled-components";
import { ButtonProps } from "../../Types/userTypes";

export const StyleButton = styled.a<ButtonProps>`
    width: 200px;
    height: 50px;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: ${(props) => props.background_Button};
    border-radius: 7px;
    margin-top: 15px;
    cursor: pointer;
    font-size: ${props => props.fontSize};
    transition: background-color .7s ease, border 2s ease-in-out;

    &:hover {
        background: transparent;
        border: 1px solid white;
    }
`;