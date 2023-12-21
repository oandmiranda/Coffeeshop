import styled from "styled-components"
import { device } from "../../Styles/themes";

export const GridContainer = styled.div`
    display: grid;
    grid-template-areas:
    'superior'
    'rodape';
    grid-template-rows: auto 50px;
    grid-template-columns: 100% 100%;
    padding: 20px;
`;

export const UpperArea = styled.div`
    grid-area: superior;
    display: flex;
    justify-content: space-around;
    align-items: center;

    @media ${device.mobileS} {
        padding: 10px;
        flex-direction: column;
        gap: 10px;
    }
`;

export const H2 = styled.h2`
    @media ${device.mobileS} {
        font-size: ${props => props.theme.sizes.subtitle};
    };
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