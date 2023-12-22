import styled from "styled-components";
import { Link } from "react-router-dom";
import { Instagram } from "@styled-icons/bootstrap";
import { ArrowDownShort } from "@styled-icons/bootstrap";
import { Facebook } from "@styled-icons/fa-brands";
import { LinkProps } from "../../../Types/userTypes";

const Container = styled.nav`
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

const Div = styled.div`
    display: flex;
    `;

const BoxLink = styled(Div)`
        gap: 40px;
        position: relative;

        @media (max-width: 999px) {
            display: none;
        }
    `;

const NavbarLink= styled(Link)<LinkProps>`
    color: ${({isBlack}) => isBlack ? 'black' : 'white'};
    cursor: pointer;
    font-size: ${props => props.theme.sizes.default};
`;

const Logo = styled.img`
    width: 70px;
    height: 70px;

    @media (max-width: 999px) {
        display: none;
    }
`;

/* Componentes de Icone */
const InstagramIcon = styled(Instagram)`
    color: ${props => props.theme.colors.default};
    width: 30px;
`;

const ArrowIcon = styled(ArrowDownShort)`
    color: ${props => props.theme.colors.default};
    height: 22px;
`;

const FacebookIcon = styled(Facebook)`
    color: ${props => props.theme.colors.default};
    height: 30px;
    margin-left: 10px;
`;

export { Container, Div, BoxLink, NavbarLink, Logo, InstagramIcon, ArrowIcon, FacebookIcon };