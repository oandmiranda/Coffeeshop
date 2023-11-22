import styled from "styled-components";
import { Paragraph } from "../History/styles";

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
`;

const Title = styled.h2`
    font-size: ${props => props.theme.sizes.title};
`;

const SubTitle = styled(Paragraph)`
    font-size: ${props => props.theme.sizes.subtitle};
    width: 100%;
    padding: 0;
`;

export { Box, TextArea, Title, SubTitle }