import React from 'react';
import { StyledButton } from '../Button/Button'
import { Title, Form, FormItem} from './FormParticipants.styled'
import { Link } from 'react-router-dom'


export const FormParticipant = (props) => {
  return(
    <>
      <Link to={'/participants/list'}>voltar</Link>

      <Form onSubmit={ props.addParticipant } className="form">
        <Title>Cadastro de participantes</Title> 
        <FormItem>
          <label>Nome</label>
          <input
            type="text"
            name="Name"
            placeholder="nome"
            value={props.Name}
            onChange={ props.handleInputChange}
          />
        </FormItem>
        <FormItem>
          <label>Telefone</label>
          <input
            type="text"
            name="Phone"
            placeholder="telefone"
            value={props.Phone}
            onChange={ props.handleInputChange}
          />
        </FormItem>
        <FormItem>
          <label>Email</label>
          <input
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