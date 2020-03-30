import React from 'react';
import { StyledButton } from '../Button/Button'
import { Wrapper } from '../Wrapper/Wrapper'
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
    <Form onSubmit={ props.addParticipant } className="form">
      <Title>Cadastro de participantes</Title> 

      <FormItem>
        <Wrapper
          textLabel='Nome'
          type="text"
          name="Name"
          placeholder="nome"
          value={props.Name}
          onChange={ props.handleInputChange}
        />
      </FormItem>

      <FormItem>
        <Wrapper
          textLabel='Telefone'
          type="text"
          name="Phone"
          placeholder="telefone"
          value={props.Phone}
          onChange={ props.handleInputChange}
        />
      </FormItem>

      <FormItem>
        <Wrapper
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
  )
}