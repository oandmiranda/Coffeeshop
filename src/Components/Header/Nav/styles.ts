import styled from "styled-components";
import { Instagram } from "@styled-icons/bootstrap";
import { ArrowDownShort } from "@styled-icons/bootstrap";
import { Facebook } from "@styled-icons/fa-brands";
import { LinkProps } from "../../../Types/userTypes";

export const Container = styled.nav`
    width: 90%;
    height: 70px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin: 5px auto 0 auto;
    padding: 0 20px;
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
    font-size: 1.1rem;
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