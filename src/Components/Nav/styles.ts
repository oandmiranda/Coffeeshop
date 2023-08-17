import styled from "styled-components";

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
`;

export const Logo = styled.img`
    width: 70px;
    height: 70px;
`;