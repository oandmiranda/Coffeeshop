import styled from "styled-components";
import { Paragraph } from "../History/styles";
import { device } from "../../Styles/themes";

interface BoxStyled {
    backgroundImage?: string
}

const Box = styled.div<BoxStyled>`
    width: 100wh;
    height: auto;
    padding: 50px;
    display: flex;
    margin-top: 120px;
    background: url(${props => props.backgroundImage});
    background-size: cover;

    @media ${device.mobileS} {
        padding: 20px;
    };
`;

const TextArea = styled.div`
    width: 45%;
    height: auto;
    display: flex;
    flex-direction: column;

    @media ${device.mobileS} {
        width: 100%;
        padding: 0;
    };
`;

const Title = styled.h2`
    font-size: ${props => props.theme.sizes.title};

    @media ${device.mobileS} {
        font-size: ${props => props.theme.sizes.titleMobile};
    };
`;

const SubTitle = styled(Paragraph)`
    font-size: ${props => props.theme.sizes.subtitle};
    width: 100%;
    padding: 0;
`;

export { Box, TextArea, Title, SubTitle }