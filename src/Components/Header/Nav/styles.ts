import styled from "styled-components";
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
    margin-top: 5px;
    background: ${props => props.theme.colors.primary};
    opacity: 0.9;
    border-radius: 25px;
    position: fixed;
    z-index: 3;
`;

export const BoxLink = styled.div`
    display: flex;
    gap: 40px;
    position: relative;
`;

export const Link = styled.a<LinkProps>`
    color: ${({isBlack}) => isBlack ? 'black' : 'white'};
    cursor: pointer;
    display: flex; 
    align-items: center;
    font-size: ${props => props.theme.sizes.default};
`;

export const Div = styled(Link)`
    padding-inline: 0;
    display: flex;
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