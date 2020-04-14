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

export const FormGifts = (props) => {
  return(
    <Form onSubmit={ props.addGift } className="form">
      <Title>Cadastro de Brindes</Title> 

      <FormItem>
        <Wrapper
          textLabel='Brinde'
          type="text"
          name="Brinde"
          placeholder="brinde"
          value={props.Brinde}
          onChange={ props.handleInputChange}
        />
      </FormItem>

      <FormItem>
        <Wrapper
          textLabel='Foto'
          type="file"
          name="Foto"
          placeholder="foto"
          value={props.Foto}
          onChange={ props.handleInputChange}
        />
      </FormItem>

      <FormItem>
        <Wrapper
          textLabel='Quantidade'
          type="text"
          name="Quantidade"
          placeholder="quantidade"
          value={props.Quantidade}
          onChange={ props.handleInputChange}
        />
      </FormItem>

      <FormItem>
        <Wrapper
          textLabel='Patrocinador'
          type="text"
          name="Patrocinador"
          placeholder="patrocinador"
          value={props.Patrocinador}
          onChange={ props.handleInputChange}
        />
      </FormItem>

      <FormItem>
        <Wrapper
          textLabel='Logo'
          type="file"
          name="Logo"
          placeholder="logo"
          value={props.logo}
          onChange={ props.handleInputChange}
        />
      </FormItem>

      <StyledButton type='red' label='Adicionar'/>
    </Form>
  )
}