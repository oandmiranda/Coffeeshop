import { styled } from "styled-components";
import { Link } from "../Header/Nav/styles";
import { DropDownProps } from "../../Types/userTypes"

export const DropDownWrapper = styled.div<DropDownProps>`
    display: flex;
    justify-content: center;
    width: auto;
    height: 190px;
    padding: 10px 20px;
    background-color: ${props => props.theme.colors.default};
    border-radius: 10px;
    position: absolute;
    top: 29px;
    left: -29px;
    opacity: ${({isVisible}) => (isVisible ? '1' : '0')};
`;

const DropDownItem = styled.li`
    padding-block: 10px;
    color: ${props => props.theme.colors.background};
    margin-left: 10px;
`;

export const Item = ({children}: DropDownProps) => {
    return (
        <DropDownItem>
            <Link isBlack={true}>
                { children }
            </Link>
        </DropDownItem>
    )
}