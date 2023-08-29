import { styled } from "styled-components";
import { Link } from "../Header/Nav/styles";
import { DropDownProps } from "../../Types/userTypes"

export const DropDownWrapper = styled.div<{ isVisible: boolean}>`

    display: flex;
    justify-content: center;
    width: 150px;
    height: 200px;
    padding: 10px;
    background-color: gray;
    border-radius: 10px;
    position: relative;
    top: 120px;
    left: 118px;
    opacity: ${({isVisible}) => (isVisible ? '0.9' : '0')};
`;

export const DropDownItem = styled.li`
    padding-block: 10px;
`;

export const Item = ({children}: DropDownProps) => {
    return (
        <DropDownItem>
            <Link>{ children }</Link>
        </DropDownItem>
    )
}