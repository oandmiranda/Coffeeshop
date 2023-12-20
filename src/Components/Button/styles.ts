import { styled } from "styled-components";
import { ButtonProps } from "../../Types/userTypes";
import { device } from "../../Styles/themes";

const StyleButton = styled.a<ButtonProps>`
    width: 200px;
    height: 50px;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: transparent;
    border-radius: 7px;
    margin-top: 15px;
    cursor: pointer;
    font-size: ${props => props.fontSize};
    transition: background-color .4s ease-in-out;
    border: 1px solid #fff;
    color: #fff;

    &:hover {
        background: ${(props) => props.background_Button};
        border: none;
    }

    @media ${device.mobileS} {
        width: 140px;
        height: 40px;
    }
`;

StyleButton.defaultProps = {
    background_Button: '#000'
};

export { StyleButton };