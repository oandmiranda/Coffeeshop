import styled from "styled-components";
import image from "../../assets/img/cafeteria.png";

export const Container = styled.div`
    width: 80%;
    margin: 0 auto;
    height: 250px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-top: 15px;
`;

export const Paragraph = styled.p`
    font-size: ${props => props.theme.fonts.default};
    width: 60%;
    padding: 30px;
`;

export const Image = styled.div`
    width: 420px;
    height: 220px;
    background-image: url(${image});
    background-size: cover;
    border-radius: 6px;
`;