import styled from "styled-components";
import { StyleButton } from "../../Components/Button/styles";
import { ContainerProps } from "../../Types/userTypes";
import { device } from "../../Styles/themes";

export const StyledContainer = styled.section<ContainerProps>`
    width: 95%;
    margin: 20px auto 20px auto;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: space-around;
    gap: 7px;
    border-radius: 10px;
    background: ${({isWhite}) => (isWhite && '#fff')};
`;

StyledContainer.defaultProps = {
    isWhite: 'black'  // estabelece "black" como cor padrão caso "isWhite" não seja aplicado
};

export const ItemContainer = styled.div`
    width: 250px;
    min-height: 275px;
    background-color: white;
    border-radius: 8px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    padding-bottom: 5px;

    @media ${device.mobileS} {
        margin-bottom: 10px;
    };
`;

export const Image = styled.img`
    width: 100%;
    height: auto;
    max-height: 145px;
`;

export const Description = styled.p`
    font-size: 1.1rem;
    padding: 5px;
    color: black;
    text-align: center;
`;

export const ButtonCard = styled(StyleButton)`
    background: gray;
`;
