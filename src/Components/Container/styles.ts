import styled from "styled-components";
import { Div } from "../Header/Nav/styles";

export const StyledContainer = styled.div`
    width: 95%;
    margin: 50px auto 20px auto;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: space-around;
    gap: 5px;
`;

export const Item = styled.div`
    width: 250px;
    height: 300px;
    background-color: white;
    border-radius: 8px;
    display: flex;
    flex-direction: column;
`;

export const Image = styled.img`
    top: 0;
    width: 100%;
    `;

export const Description = styled.p`
    font-size: 1.1rem;
    padding: 5px;
    color: black;
    `;
    
export const DivButton = styled(Div)`
        justify-content: center
    `;