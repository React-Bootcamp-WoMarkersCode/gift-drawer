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
        <Panel/>
          <Title text="Cadastro" fontSize="32px" />

          <Label
            label="Seu nome"
            fontSize="14px" />

          <Input
            placeholder="Nome Sobrenome" />
            {errors.name && (
              <MsgError text={errors.name} />
            )}

          <Label label="E-mail" fontSize="14px" />

          <Input
            placeholder="nome@email.com"/>
          {errors.email && (
            <MsgError text={errors.email} />
          )}

          <Label label="Senha" fontSize="14px" />
          <Input 
            placeholder="••••••••••"/>
          {errors.password && (
              <MsgError text={errors.password} />
          )}

          <Label label="Confirmar senha" fontSize="14px" />
          <Input
            placeholder="••••••••••" />
          {errors.password && (
            <MsgError text={errors.password} />
          )}

          <Button
            text="Cadastrar"/>

          <Label label="Ainda não tem uma conta?" fontSize="14px" />
          <Link
            href="/login"
            text="Entrar"
            fontSize="14px" />
        </form>
    </>
  )
}