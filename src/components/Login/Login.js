import React from 'react';
import { StyledButton } from '../Button/Button';
import Link from '../Link/Link';
import Label from '../Label/Label';
import Title from '../Title/Title';
import { Wrapper } from '../Wrapper/Wrapper'
import styled from 'styled-components';

const Containter = styled.div`
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  height: -webkit-fill-available;
  background: #552B9A;
`

const Row = styled.div`
  display: flex;
  justify-content: center;
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
`

const Form = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`

const FormItem = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 10px;
  margin-left: 50px;
  margin-top: 30px;
`

export default function Login() {

  return (
    <>
      <Containter>
        <img src="https://i.imgur.com/DXLsEFP.png" alt="logotipo"
          style={{
            width: "336px",
            height: "76px"
          }} />

        <Panel>
          <Form>
            <FormItem>
              <Title text="Entrar" fontSize="35px" color="black" paddingTop="40px" />
            </FormItem>

            <FormItem>
              <Wrapper
                textLabel='E-mail'
                type="email"
                name="email"
                placeholder="nome@email.com"
                className="email"
                required
                width="380px"
                height="40px"
              />
            </FormItem>

            <FormItem>
              <Wrapper
                textLabel='Senha'
                type="password"
                name="password"
                placeholder="••••••••••"
                className="password"
                required
                width="380px"
                height="40px"
              />

              <Row style={{alignSelf: "flex-end"}}>
                <Link
                  href="/reset-password"
                  text="Recuperar senha"
                  fontSize="14px"
                />
              </Row>

            </FormItem>

            <FormItem>
              <StyledButton label="Entrar" type="red" width="380px" height="50px" />
              <Row>
                <Label label="Ainda não tem uma conta? " fontSize="15px" color="black" />
                <Link
                  href="/login/new-register"
                  text="Cadastrar"
                  fontSize="15px" paddingLeft="5px" />
              </Row>

            </FormItem>
          </Form>
        </Panel>

      </Containter>
    </>
  )
}