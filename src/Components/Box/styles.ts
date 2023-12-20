import styled from "styled-components";
import {BoxProps} from "./index";

const StyledBox = styled.div<BoxProps>`
    width: 100%;
    height: auto;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background: linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)), url(${props => props.boxBackground});
    background-size: cover;
`;

export {StyledBox};