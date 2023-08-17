import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
    * {
        padding: 0;
        margin: 0;
        box-sizing: border-box;
    }

    body {
        font-family: sans-serif;
        color: ${props => props.theme.colors.default}
    }

    a {
        text-decoration: none;
    }
`;

export default GlobalStyle