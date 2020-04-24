import React from 'react';
import { StyledButton } from '../Button/Button';
import Link from '../Link/Link';
import Label from '../Label/Label';
import Title from '../Title/Title';
import { Wrapper } from '../Wrapper/Wrapper'
import styled from 'styled-components';
import { useFormik } from 'formik';
import MsgError from '../MsgError/MsgError'
import validate from '../ValidationLogin'
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

const Form = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  width: 80%;
`

const FormItem = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`

export default function Login() {
  let history = useHistory();

  const formik = useFormik({
    initialValues: {
      email: '',
      password: '',
    },
    validate,
    onSubmit: values => {
      alert(JSON.stringify(values, null, 2));
    }
  });

  return (
    <>
      <Containter>
        <img src="https://i.imgur.com/DXLsEFP.png" alt="logotipo" />

        <Panel>
          <Form style={{ paddingTop: "25px" }} onSubmit={formik.handleSubmit}>
            <FormItem style={{ paddingBottom: "35px", paddingTop: "25px" }}>
              <Title text="Entrar" fontSize="35px" color="black" />
            </FormItem>

            <FormItem style={{ paddingBottom: "25px" }}>
              <Wrapper
                textLabel='E-mail'
                type="email"
                name="email"
                placeholder="nome@email.com"
                className="email"
                onChange={formik.handleChange}
                value={formik.values.email}
                required
                width="100%"
                height="40px"
              />
              {formik.errors.email ? <MsgError text={formik.errors.email} /> : null}
            </FormItem>

            <FormItem style={{ paddingBottom: "25px" }}>
              <Wrapper
                textLabel='Senha'
                type="password"
                name="password"
                placeholder="••••••••••"
                className="password"
                onChange={formik.handleChange}
                value={formik.values.password}
                required
                width="100%"
                height="40px"
              />
              {formik.errors.password ? <MsgError text={formik.errors.password} /> : null}
            </FormItem>

            <FormItem style={{ paddingBottom: "25px" }}>
              <Row style={{ alignSelf: "flex-end" }}>
                <Link
                  href="/reset-password"
                  text="Recuperar senha"
                  fontSize="14px"
                />
              </Row>
            </FormItem>


            <StyledButton label="Entrar" type="red" width="100%" height="50px" onClick={() => history.push('/logged')} />
            <FormItem style={{ paddingBottom: "25px", paddingTop: "25px" }}>
              <Row>
                <Label label="Ainda não tem uma conta?  " fontSize="15px" color="black" />
                <Link
                  href="/login/new-register"
                  text="Cadastrar"
                  fontSize="15px"
                  paddingTop="10px"
                  paddingLeft="5px"
                />
              </Row>
            </FormItem>

          </Form>

        </Panel>

      </Containter>
    </>
  )
}