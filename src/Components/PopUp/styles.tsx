import { styled } from "styled-components";
import { Link } from "../Header/Nav/styles";
import { DropDownProps } from "../../Types/userTypes"

export const DropDownWrapper = styled.div<DropDownProps>`
    display: flex;
    justify-content: start;
    width: 130px;
    height: 180px;
    padding: 10px;
    background-color: ${props => props.theme.colors.default};
    border-radius: 10px;
    position: relative;
    top: 110px;
    left: 110px;
    opacity: ${({isVisible}) => (isVisible ? '1' : '0')};
    font-weight: bold;
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