import { styled } from "styled-components";
import { device } from "../../Styles/themes";

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

    @media ${device.mobileS} {
        flex-wrap: wrap;
        gap: 25px;
        padding: 25px 20px;
    }
`;

export const Item = styled.li`
    padding-top: 25px;
    display: flex;
    align-items: center;

    @media ${device.mobileS} {
            margin: -35px 1px;
        };

    div {
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 10px;
        margin-top: 30px;

        @media ${device.mobileS} {
            margin-top: 54px;
            margin-bottom: 30px;
            gap: 2px;
        };
    };
`;

export const Image = styled.img`
    width: 140px;
    height: 140px;
    border-radius: 50%;

    @media ${device.mobileS} {
        width: 120px;
        height: 120px;
    };
`;

export const Description = styled.h3`
    font-size: 1.1rem;
    color: black;
    font-weight: normal;
`;
