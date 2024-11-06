import { styled } from "styled-components";
import { DropDownProps } from "../../Types/userTypes"

const DropDownWrapper = styled.div<DropDownProps>`
    display: flex;
    justify-content: center;
    width: 150px;
    height: auto;
    padding: 10px 20px;
    background-color: ${props => props.theme.colors.default};
    border-radius: 10px;
    position: absolute;
    top: 25px;
    left: 40px;
    opacity: ${({isVisible}) => (isVisible ? '1' : '0')};

    li {
        padding: 5px;
    }

    a {
        color: #000;
    }
`;

const DropDownItem = styled.li`
    padding-block: 10px;
    color: ${props => props.theme.colors.background};
    margin-left: 10px;
`;


export { DropDownWrapper, DropDownItem };