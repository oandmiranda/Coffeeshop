import styled from "styled-components"

export const GridContainer = styled.div`
    display: grid;
    grid-template-areas:
    'superior'
    'rodape';
    grid-template-rows: auto 50px;
    grid-template-columns: 100% 100%;
`;

export const AreaSuperior = styled.div`
    display: flex;
    justify-content: space-around;
    align-items: center;
    grid-area: superior;
`;

export const Rodape = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    grid-area: rodape;

    & p {
        font-size: .8rem;
    }
`;