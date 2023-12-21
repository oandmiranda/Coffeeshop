import { styled } from "styled-components";
import { Image, TextBox } from "../Content/styles";
import { device } from "../../Styles/themes";

export const ContainerDelivery = styled.div`
    width: 100%;
    height: 500px;
    display: flex;
    padding-bottom: 15px;

    @media ${device.mobileS} {
        height: 380px;
    }

    @media ${device.mobileL} {
        height: 400px;
    };
`;

export const TextArea = styled(TextBox)`
    width: 50%;
    background: ${props => props.theme.colors.gradient};
    border-radius: 0;

    @media ${device.mobileS} {
        width: 100%;
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 15px;
    };

    @media ${device.mobileL} {
        width: 100%;
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 20px;
    };

    @media ${device.tablet} {
        width: 70%;
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 20px;
    };
`;

export const H1 = styled.h1`
    font-size: ${props => props.theme.sizes.titleDelivery};

    @media ${device.mobileS} {
        font-size: ${props => props.theme.sizes.title};
        font-family: ${props => props.theme.fonts.title.fontFamily};
        padding-bottom: 10px;
    };

    @media ${device.mobileL} {
        font-size: ${props => props.theme.sizes.title};
        font-family: ${props => props.theme.fonts.title.fontFamily};
    }
    
    @media ${device.tablet} {
        font-size: 4rem;
    };
`;

export const ImageDelivery = styled(Image)`
    border-radius: 0;
    width: 50%;

    @media ${device.mobileS} {
        display: none;
    };

    @media ${device.mobileL} {
        display: none;
    };
`;
