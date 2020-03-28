import React from 'react';
import { StyledButton } from '../Button/Button'
import { StyledInput } from '../Input/Input'
import { Link } from 'react-router-dom'
import styled from 'styled-components';

export const Title = styled.h1`
  text-align: center;
`
export const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const FormItem = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  margin-bottom: 30px;
`

export const FormParticipant = (props) => {
  return(
    <>
      <Link to={'/logged/participants/list'}>Lista</Link>

      <Form onSubmit={ props.addParticipant } className="form">
        <Title>Cadastro de participantes</Title> 

        <FormItem>
          <StyledInput
            textLabel='Nome'
            type="text"
            name="Name"
            placeholder="nome"
            value={props.Name}
            onChange={ props.handleInputChange}
          />
        </FormItem>

        <FormItem>
          <StyledInput
            textLabel='Telefone'
            type="text"
            name="Phone"
            placeholder="telefone"
            value={props.Phone}
            onChange={ props.handleInputChange}
          />
        </FormItem>

        <FormItem>
          <StyledInput
            textLabel='Email'
            type="text"
            name="Email"
            placeholder="email"
            value={props.Email}
            onChange={ props.handleInputChange}
          />
        </FormItem>

        <StyledButton type='red' label='Adicionar'/>
      </Form>
    </>
  )
}