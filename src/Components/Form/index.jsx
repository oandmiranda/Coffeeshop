import { useForm } from 'react-hook-form';
import { Container, Title, SubTitle, Input, ButtonSubmit, ErrorMessage } from "./styles";
import { useNavigate } from "react-router-dom";

export default function Form () {
  const { register, handleSubmit, formState: { errors } } = useForm();
  const navigate = useNavigate();

  const onSubmit = (data) => {
    localStorage.setItem("formData", JSON.stringify(data));
    console.log(data);
    navigate("/");
   };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Container>
        <Title>Seja um franqueado</Title>
        <SubTitle>Preencha o formulário e aguarde nosso retorno por e-mail.</SubTitle>
        <Input type="text" placeholder="Nome completo" {...register('name', { required: true })} />
          { errors?.name?.type === "required" && (
            <ErrorMessage>Insira seu nome completo</ErrorMessage>
          )}
        <Input type="email" placeholder="Email" {...register('email', { required: true })} />
        { errors?.email?.type === "required" && (
            <ErrorMessage>Insira seu e-mail principal</ErrorMessage>
          )}
        <Input type="number" placeholder="WhatsApp" {...register('whatsapp', { required: true, minLength: 11 })} />
        { errors?.whatsapp?.type === "required" && (
            <ErrorMessage>Insira seu WhatsApp</ErrorMessage>
          )}
        { errors?.whatsapp?.type === "minLength" && (
            <ErrorMessage>Insira seu WhatsApp com DDD</ErrorMessage>
          )}
        <Input type="text" placeholder="Instagram" {...register('instagram')} />
        <ButtonSubmit type="submit">Enviar</ButtonSubmit>
      </Container>
    </form>
  );
}
