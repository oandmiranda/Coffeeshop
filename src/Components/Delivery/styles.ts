import { styled } from "styled-components";
import { Image, TextBox } from "../Content/styles";

export const ContainerDelivery = styled.div`
    width: 100%;
    height: 500px;
    display: flex;
    padding-bottom: 15px;
`;

export const TextArea = styled(TextBox)`
    width: 50%;
    background: ${props => props.theme.colors.gradient};
    border-radius: 0;
`;

export const H1 = styled.h1`
    font-size: ${props => props.theme.sizes.titleDelivery}
`;

export const ImageDelivery = styled(Image)`
    border-radius: 0;
    width: 50%;
`;
