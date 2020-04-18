import React from 'react';
import Title from '../Title/Title';
import { Wrapper } from '../Wrapper/Wrapper'
import Label from '../Label/Label';
import { StyledButton } from '../Button/Button';
import Link from '../Link/Link';
import styled from 'styled-components';

const Containter = styled.div`
  display: flex;
  justify-content: center;
  height: -webkit-fill-available;
  background: #552B9A;

  @media only screen and (max-width: 768px) {
      flex-direction: column;
  }
`

export const FormItem = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  margin-bottom: 20px;
  padding: 0 40px;
  width: 100%;
`

const Panel = styled.div`
  background-color: white;
  border-radius: 4px;
  font-style: normal;
  font-weight: normal;
  width: 500px;
  height: 600px;
  background: white;
  border-radius: 4px;
  margin-top: 30px;
  @media (max-width: 768px) {
    width: 100%;
    border-radius: 0px;
  }
`
const Form = styled.form`
  display: flex; 
  flex-direction: column; 
  align-items: center;
  margin-top: 20px;
`

const Row = styled.div`
  display: flex;
  justify-content: center;
`

export default function NewRegister() {

  return (
    <>
      <Containter>
        <Panel>
          <Form>
            <FormItem>
              <Title text="Cadastro" color="black" fontSize="32px" paddingTop="17px" paddingBottom="23px" />
           
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
                width="400px"
                height="40px"
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
                width="400px"
                height="40px"
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
                width="400px"
                height="40px"
              />
            </FormItem>

            <StyledButton type="red" label="Cadastrar" width="380px" height="50px" />
            <Row>
              <Label label="Ainda não tem uma conta?"
                left="540px" top="600px" fontSize="15px" />
              <Link left="735px" top="599px"
                href="/login"
                text="Entrar"
                fontSize="15px" paddingLeft="5px" paddingTop="10px" />
            </Row>
          </Form>
        </Panel>
      </Containter>
    </>
  )
}