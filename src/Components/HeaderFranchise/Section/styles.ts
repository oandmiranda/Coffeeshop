import styled from "styled-components";
import {textAreaProps} from "../../../Types/userTypes";

const Box = styled.div<textAreaProps>`
    margin-bottom: 100px;
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
    border-radius: 13px;
    width: 380px;
    max-width: 100%;
    height: auto;
    padding-inline: 10px;
    border-color: #000;
    margin-block: 30px;
`;

const Button = styled.button`
    margin-block: 30px;
    width: 300px; 
    padding: 20px;
    background: gray;
    color: #fff;
    display: flex;
    justify-content: center; 
    align-items: center;
    text-align: center;
    border-radius: 35px;
    font-size: 1.4rem;
    cursor: pointer;
    border: none;
`;

export {Box, Title, Paragraph, ImageArea, Image, Button};