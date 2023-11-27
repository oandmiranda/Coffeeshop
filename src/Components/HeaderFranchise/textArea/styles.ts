import styled from "styled-components";

import { textAreaProps } from "./index";

const Box = styled.div<textAreaProps>`
    margin-block: 15px;
    padding-left: 150px;
    padding-right: 150px;
    width: 100%;
    height: 100vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background: url(${props => props.boxBackground});
    background-color: ${({backgroundWhite}) => backgroundWhite && '#fff'};
    background-size: cover;
`;

const Title = styled.h1<textAreaProps>`
    font-size: ${props => props.theme.sizes.title};
    color: ${({color}) => color};
    margin-bottom: 50px;
`;

const Paragraph = styled.p<textAreaProps>`
    font-size: ${((props) => props.fontSize)};
`;

const ImageArea = styled.div`
    display: flex;
    flex-direction: row;
`;

const Image = styled.img<textAreaProps>`
    background: url(${props => props.imageBackground});
    border-radius: 8px;
    width: 380px;
    max-width: 100%;
    height: auto;
    padding-inline: 10px;
    border-color: #000;
    margin-block: 30px;
`;

export {Box, Title, Paragraph, ImageArea, Image};