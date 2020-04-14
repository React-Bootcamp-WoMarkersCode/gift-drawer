import React from 'react';
import Panel from '../subcomponents/Panel';
import Title from '../subcomponents/Title';
import Input from '../subcomponents/Input';
import Label from '../subcomponents/Label';
import Button from '../subcomponents/Button';
import Link from '../subcomponents/Link';
import useForm from '../useForm';
import validate from '../ValidationForm';
import MsgError from '../subcomponents/Msg-erro'

export default function NewRegister() {

  const {
    values,
    errors,
    handleChange,
    handleSubmit,
  } = useForm(NewRegister, validate);


  return (
    <>
      <form onSubmit={handleSubmit} noValidate>
        <Panel />
        <Title text="Cadastro" left="480px" top="50px" fontSize="32px" />

        <Label label="Seu nome" left="480px" top="130px" fontSize="14px" />
        <Input
          placeholder="Nome Sobrenome"
          width="400px"
          height="40px"
          left="480px"
          top="150px" />
        {errors.name && (
          <MsgError left="480px" top="190px" text={errors.name} />
        )}
        <Label label="E-mail" left="480px" top="220px" fontSize="14px" />
        <Input
          placeholder="nome@email.com"
          width="400px"
          height="40px"
          left="480px"
          top="240px" />
        {errors.email && (
          <MsgError left="480px" top="280px" text={errors.email} />
        )}

        <Label label="Senha" left="480px" top="320px" fontSize="14px" />
        <Input 
          placeholder="••••••••••"
          width="400px"
          height="40px"
          left="480px"
          top="340px" />
        {errors.password && (
            <MsgError left="480px" top="380px" text={errors.password} />
        )}

        <Label label="Confirmar senha" left="480px" top="420px" fontSize="14px" />
        <Input
          placeholder="••••••••••"
          width="400px"
          height="40px"
          left="480px"
          top="440px" />
        {errors.password && (
          <MsgError left="480px" top="480px" text={errors.password} />
        )}

        <Button
          text="Cadastrar"
          height="50px"
          width="380px"
          left="490px"
          top="520px" />

        <Label label="Ainda não tem uma conta?" left="540px" top="600px" fontSize="14px" />
        <Link
          left="735px"
          top="599px"
          href="/login"
          text="Entrar"
          fontSize="14px" />
      </form>
    </>
  )
}