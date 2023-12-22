import styled from "styled-components";
import {textAreaProps} from "../../../Types/userTypes";
import { device } from "../../../Styles/themes";

const Container = styled.div<textAreaProps>`
    margin: 50px 0;
    padding: 0 100px;
    width: 100%;
    height: auto;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background: linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(${props => props.boxBackground});
    background-color: ${({backgroundWhite}) => backgroundWhite && '#fff'};
    background-size: cover;

    @media ${device.mobileS} {
        padding: 0 20px;
    };

    @media ${device.mobileL} {
        padding: 0 30px;
    };

    @media ${device.tablet} {
        padding: 0 50px;
    };

    @media ${device.desktop} {
    };
`;

const Title = styled.h1<textAreaProps>`
    font-size: ${props => props.theme.sizes.title};
    color: ${({color}) => color};
    margin-bottom: 20px;

    @media ${device.mobileS} {
        font-size: ${props => props.theme.sizes.titleMobile};
    };

    @media ${device.mobileL} {
        font-size: ${props => props.theme.sizes.titleMobile};
    };
`;

const Paragraph = styled.p<textAreaProps>`
    font-size: ${((props) => props.fontSize)};
    margin-bottom: 20px;
`;

const ImageArea = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: center;

    @media ${device.mobileS} {
        flex-direction: column;
    };

    @media ${device.mobileL} {
        flex-direction: column;
    };

    @media ${device.tablet} {
        justify-content: space-around;
    };

    @media ${device.laptop} {
    };
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

    @media ${device.mobileS} {
        margin-block: 8px;
        padding-inline: 2px;
    };

    @media ${device.mobileL} {
        margin-block: 10px;
        flex: 1;
        width: auto;
    };

    @media ${device.tablet} {
        margin-block: 10px;
        width: 50%;
    };

    @media ${device.laptop} {
        margin-block: 10px;
    };
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

    @media ${device.mobileS} {
        width: auto;
        height: 80px;
    };
`;

export {Container, Title, Paragraph, ImageArea, Image, Button};