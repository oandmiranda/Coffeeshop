import styled from "styled-components";

const Box = styled.header`
    width: 100wh;
    height: 100vh;
    padding: 50px;
    display: flex;
    justify-content: start;
    margin-top: 130px;
`;

const TextArea = styled.div`
    width: 45%;
    height: auto;
    display: flex;
    flex-direction: column;
    

    h1 {
        font-size: ${(props) => props.theme.sizes.title};
        color: ${(props) => props.theme.colors.default};
        padding-bottom: 20px;
        line-height: 45px;
        font-family: ${props => props.theme.fonts.secondary.fontFamily};
    };

    p {
        font-size: ${(props) => props.theme.sizes.subtitle};
        color: ${(props) => props.theme.colors.default};

    }
`;

export { Box, TextArea }