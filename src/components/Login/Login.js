import React from 'react';
import { StyledButton } from '../Button/Button';
import Link from '../Link/Link';
import Label from '../Label/Label';
import Title from '../Title/Title';
import { Wrapper } from '../Wrapper/Wrapper'
import styled from 'styled-components';
import { useHistory } from "react-router-dom";

const Containter = styled.div`
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  height: 100vh;
  width: 100%;
  background: #552B9A;
    img {
      width: 20%;
    }

    @media (max-width: 768px) {
      flex-direction: column;
        img {
          width: 40%;
          padding: 40px 0;
        }
     }
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
  display: flex;
  justify-content: center;
  align-items: center;

    @media (max-width: 768px) {
      width: 100%;
      border-radius: 0px;
    }
`

const Form = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  width: 80%;
`

export default function Login() {
  let history = useHistory();

  return (
    <>
      <Containter>
        <img src="https://i.imgur.com/DXLsEFP.png" alt="logotipo"/>

        <Panel>
          <Form>
              <Title text="Entrar" fontSize="35px" color="black" />

              <Wrapper
                textLabel='E-mail'
                type="email"
                name="email"
                placeholder="nome@email.com"
                className="email"
                required
                width="100%"
                height="40px"
              />

              <Wrapper
                textLabel='Senha'
                type="password"
                name="password"
                placeholder="••••••••••"
                className="password"
                required
                width="100%"
                height="40px"
              />

              <Row>
                <Link
                  href="/reset-password"
                  text="Recuperar senha"
                  fontSize="14px"
                />
              </Row>

              <StyledButton label="Entrar" type="red" width="100%" height="50px" onClick={() => history.push("/logged") }/>
              <Row>
                <Label label="Ainda não tem uma conta?  " fontSize="15px" color="black" />
                <Link
                  href="/login/new-register"
                  text="Cadastrar"
                  fontSize="15px"
                  />
              </Row>
          </Form>
        </Panel>

      </Containter>
    </>
  )
}