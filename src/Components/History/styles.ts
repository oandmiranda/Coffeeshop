import styled from "styled-components";
import imagem from "../../img/cafeteria.jpg";

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
    font-size: 1rem;
    width: 60%;
    padding: 30px;
    font-size: 1.2rem;
`;

export const Image = styled.div`
    width: 420px;
    height: 220px;
    background-image: url(${imagem});
    background-size: cover;
    border-radius: 6px;
`;