import styled from "styled-components"

export const GridContainer = styled.div`
    display: grid;
    grid-template-areas:
    'superior'
    'rodape';
    grid-template-rows: auto 50px;
    grid-template-columns: 100% 100%;
`;

export const UpperArea = styled.div`
    grid-area: superior;
    display: flex;
    justify-content: space-around;
    align-items: center;
`;

export const LowerArea = styled.div`
    grid-area: rodape; 
    display: flex;
    justify-content: center;
    align-items: center;

    & p {
        font-size: .8rem;
    }
`;