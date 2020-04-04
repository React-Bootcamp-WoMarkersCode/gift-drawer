import React from 'react';
import Panel from './Panel/Panel';
import Title from './Title/Title';
import { Wrapper } from './Wrapper/Wrapper'
import Label from './Label/Label';
import { StyledButton } from './Button/Button';
import Link from './Link/Link';
import useForm from './useForm';
import validate from './ValidationForm';
// import MsgError from './MsgError/MsgError'
import styled from 'styled-components';

export const FormItem = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  margin-bottom: 30px;
`

export default function NewRegister() {

  const {
    values,
    errors,
    handleChange,
    handleSubmit,
  } = useForm(NewRegister, validate);


  return (
    <>
      <form onSubmit={handleSubmit} noValidate style={{ display:'flex', flexDirection: 'column', alignItems: 'center' }}>
        <Panel width="520px" height="640px" left="420px" top="10px" />
        <Title text="Cadastro" left="480px" top="50px" fontSize="32px" />

        <FormItem>
          <Wrapper
            textLabel='Seu nome'
            type="text"
            name="name"
            placeholder="Nome Sobrenome"
            onChange={handleChange}
            value={values.name || ''}
            className={`input ${errors.name}`}
            required
          />
          {/* {errors.name && (
              <MsgError left="780px" top="280px" text={errors.name}  />
          )} */}
        </FormItem>

        <FormItem>
          <Wrapper
            textLabel='E-mail'
            type="email"
            name="email"
            placeholder="nome@email.com"
            onChange={handleChange}
            value={values.email || ''}
            className={`input ${errors.email}`}
            required
          />
          {/* {errors.email && (
              <MsgError left="780px" top="280px" text={errors.email}  />
          )} */}
        </FormItem>

        <FormItem>
          <Wrapper
            textLabel='Senha'
            type="senha"
            name="senha"
            placeholder="••••••••••"
            onChange={handleChange}
            value={values.password || ''}
            className={`input ${errors.password}`}
            required
          />
          {/* {errors.password && (
              <MsgError left="780px" top="280px" text={errors.email}  />
          )} */}
        </FormItem>

        <FormItem>
          <Wrapper
            textLabel='Confirmar senha'
            type="senha"
            name="confirmaSenha"
            placeholder="••••••••••"
            onChange={handleChange}
            value={values.confirmPassword || ''}
            className={`input ${errors.confirmPassword}`}
            required
          />
          {/* {errors.email && (
              <MsgError left="780px" top="280px" text={error.confirmPassword}  />
          )} */}
        </FormItem>

        <StyledButton label="Cadastrar" />

        <Label label="Ainda não tem uma conta?"
            left="540px" top="600px" fontSize="14px" />
            
        <Link left="735px" top="599px"
            href="/login"
            text="Entrar"
            fontSize="14px" />
        </form>
    </>
  )
}