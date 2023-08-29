import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
    * {
        padding: 0;
        margin: 0;
        box-sizing: border-box;
    }

    body {
        font-family: ${props => props.theme.fonts.default};
        font-size: 1rem;
        color: ${props => props.theme.colors.default};
        background: ${props => props.theme.colors.background}
    }

    a {
        text-decoration: none;
    }

    ul {
        list-style: none;
    }
`;

export default GlobalStyle