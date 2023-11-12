import styled from "styled-components";
import { StyleButton } from "../../Components/Button/styles";
import { StyledContainerProps } from "../../Types/userTypes";

export const StyledContainer = styled.section<StyledContainerProps>`
    width: 95%;
    margin: 50px auto 20px auto;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: space-around;
    gap: 7px;
    border-radius: 10px;
    background: ${(props) => (props.isWhite && '#fff')};
`;

StyledContainer.defaultProps = {
    isWhite: 'black'
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
