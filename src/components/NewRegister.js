import React from 'react';
import Panel from './Panel/Panel';
import Title from './Title/Title';
import { Wrapper } from './Wrapper/Wrapper'
import Label from './Label/Label';
import { StyledButton } from './Button/Button';
import Link from './Link/Link';
import styled from 'styled-components';

export const FormItem = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  margin-bottom: 30px;
`

export default function NewRegister() {

  return (
    <>
      <form noValidate style={{ display:'flex', flexDirection: 'column', alignItems: 'center' }}>
        <Panel width="520px" height="640px" left="420px" top="10px" />
        <Title text="Cadastro" left="480px" top="50px" fontSize="32px" />

        <FormItem>
          <Wrapper
            textLabel='Seu nome'
            type="text"
            name="name"
            placeholder="Nome Sobrenome"
            className="name"
            required
          />
        </FormItem>

        <FormItem>
          <Wrapper
            textLabel='E-mail'
            type="email"
            name="email"
            placeholder="nome@email.com"
            className="email"
            required
          />
        </FormItem>

        <FormItem>
          <Wrapper
            textLabel='Senha'
            type="senha"
            name="senha"
            placeholder="••••••••••"
            className="password"
            required
          />
        </FormItem>

        <FormItem>
          <Wrapper
            textLabel='Confirmar senha'
            type="senha"
            name="confirmaSenha"
            placeholder="••••••••••"
            className="confirmPassword"
            required
          />
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