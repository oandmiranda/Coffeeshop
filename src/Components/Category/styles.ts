import { styled } from "styled-components";

export const Section = styled.div`
    margin: 40px auto;
    width: 95%;
    height: auto;
    background: ${props => props.theme.colors.default};
    border-radius: 19px;
    display: flex;
    justify-content: space-around;
    padding-block: 20px;
    position: relative;
`;

export const ItemCategory = styled.li`
    padding-top: 60px;
    display: flex;
    align-items: center;

    div {
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 10px;
    }
`;

export const Image = styled.img`
    width: 140px;
    height: 140px;
    border-radius: 50%;
`;

export const Description = styled.h3`
    font-size: 1.1rem;
    color: black;
    font-weight: normal;
`;
