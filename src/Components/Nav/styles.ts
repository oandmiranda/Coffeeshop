import styled from "styled-components";
import { Instagram } from "@styled-icons/bootstrap";
import { ArrowDownShort } from "@styled-icons/bootstrap";
import { Facebook } from "@styled-icons/fa-brands";

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
`;

export const BoxLink = styled.div`
    display: flex;
`

export const Link = styled.a`
    color: white;
    padding-inline: 10px;
    cursor: pointer;
    display: flex; 
    align-items: center;
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