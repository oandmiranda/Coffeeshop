import { styled } from "styled-components";
import { Button } from "../HeaderFranchise/Section/styles";

interface FormProps {
    fontFamily?: string
}

const Container = styled.div`
    max-width: 416px;
    height: auto;
    padding: 44px 30px;
    gap: 30px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background-color: white;
    border-radius: 12px;
    margin-top: 230px;
    margin-bottom: 20px;
`;

const Title = styled.h1<FormProps>`
    color: black;
    font-family: ${props => props.fontFamily};
`;

const SubTitle = styled.p`
    color: black;
    font-size: 1.2rem;
`;

const Input = styled.input`
    padding-block: 20px;
    height: 30px;
    width: 100%;
    border-top: none;
    border-right: none;
    border-left: none;
    border-bottom: 1px solid black;
    outline: none;
`;

const ButtonSubmit = styled(Button)`
    margin-block: 0;
    padding: 14px;
    border: none;
`;

export {Container, Title, SubTitle, Input, ButtonSubmit};