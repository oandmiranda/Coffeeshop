import styled from "styled-components";
import image from "../../assets/img/cafeteria.png";
import { device } from "../../Styles/themes";

export const Container = styled.div`
    width: 80%;
    margin: 0 auto;
    height: 250px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    align-content: center;
    margin-top: 15px;

    @media ${device.mobileS} {
        width: 95%;
        height: auto;
        margin-bottom: 40px;
    }
`;

export const Paragraph = styled.p`
    font-size: ${props => props.theme.sizes.default};
    width: 60%;
    padding: 10px;

    @media ${device.mobileS} {
        width: 100%;
    }
`;

export const Image = styled.div`
    width: 420px;
    height: 220px;
    background-image: url(${image});
    background-size: cover;
    border-radius: 6px;

    @media ${device.mobileS} {
        display: none;
    }
`;