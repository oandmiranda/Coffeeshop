import styled from "styled-components";
import {BoxProps} from "./index";

const StyledBox = styled.div<BoxProps>`
    margin-bottom: 100px;
    padding-left: 150px;
    padding-right: 150px;
    width: 100%;
    height: 100vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background: url(${props => props.boxBackground});
    background-size: cover;
`;

export {StyledBox};