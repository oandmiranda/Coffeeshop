import styled from "styled-components";
import { Link } from "react-router-dom";
import { Instagram } from "@styled-icons/bootstrap";
import { ArrowDownShort } from "@styled-icons/bootstrap";
import { Facebook } from "@styled-icons/fa-brands";
import { LinkProps } from "../../../Types/userTypes";

export const Container = styled.nav`
    width: 100%;
    height: 70px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 40px;
    margin-top: 3px;
    background: ${props => props.theme.colors.primary};
    opacity: 0.9;
    border-radius: 25px;
    position: fixed;
    z-index: 3;
`;

export const Div = styled.div`
    display: flex;
    `;

    export const BoxLink = styled(Div)`
        gap: 40px;
        position: relative;
    `;

export const NavbarLink= styled(Link)<LinkProps>`
    color: ${({isBlack}) => isBlack ? 'black' : 'white'};
    cursor: pointer;
    font-size: ${props => props.theme.sizes.default};
`;

export const Logo = styled.img`
    width: 70px;
    height: 70px;
`;

/* Componentes de Icone */
export const InstagramIcon = styled(Instagram)`
    color: ${props => props.theme.colors.default};
    width: 30px;
`;

export const ArrowIcon = styled(ArrowDownShort)`
    color: ${props => props.theme.colors.default};
    height: 22px;
`;

export const FacebookIcon = styled(Facebook)`
    color: ${props => props.theme.colors.default};
    height: 30px;
    margin-left: 10px;
`;