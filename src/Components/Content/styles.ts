import { styled } from "styled-components";
import { ImageProps, StyleProps } from "../../Types/userTypes";
import { device } from "../../Styles/themes";

export const ContentWrapper = styled.div<StyleProps>`
    width: 95%;
    height: auto;
    min-height: 300px;
    margin: 0 auto;
    display: flex;
    flex-direction: ${props => (props.reverse ? 'row-reverse' : 'row')};
    justify-content: space-evenly;
    margin-block: 15px;
    `;
    
    export const Image = styled.div<ImageProps>`
    border-radius: 10px;
    width: 49%;
    background: ${(props) => `url(${props.backgroundImage})`};
    background-size: cover;
    background-position: center;
`;

export const TextBox = styled.div<StyleProps>`
    width: 49%;
    display: flex;
    flex-direction: column;
    align-items: ${({positionCenter}) => (positionCenter ? 'center' : 'left')};
    justify-content: ${({positionCenter}) => (positionCenter ? 'center' : 'left')};
    background-color: ${props => props.backgroundColor || props.theme.colors.tertiary}; // define props.theme.colors.tertiary por default caso a prop "backgroundColor" não seja passada no componente
    border-radius: 10px;
    padding: 30px;

    @media ${device.mobileS} {
        width: 70%;
        padding: 15px;
    };

    @media ${device.mobileL} {
        padding: 20px;
    };

    @media ${device.tablet} {
        padding: 20px;
    };
`;

export const Title = styled.h2`
    padding-bottom: 20px;
    font-family: ${props => props.theme.fonts.title.fontFamily};
    letter-spacing: 2px;
    font-size: 1.8rem;

    @media ${device.mobileS} {
        font-size: ${props => props.theme.sizes.subtitle};
    }
`;

