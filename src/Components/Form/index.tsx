import {Container, Title, SubTitle, Input, ButtonSubmit} from "./styles";

export default function Form () {
    return (
        <Container>
            <Title>Seja um franqueado</Title>
            <SubTitle>Informe seus dados e aguarde nosso retorno por e-mail.</SubTitle>
            <Input type="text" placeholder="Nome completo" />
            <Input type="number" placeholder="WhatsApp" />
            <Input type="email" placeholder="Email" />
            <Input type="text" placeholder="Instagram" />
            <ButtonSubmit as="a">Enviar</ButtonSubmit>
        </Container>
    );
}