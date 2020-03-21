import React from 'react';
import { StyledButton } from '../Button/button'

export const FormParticipant = (props) => {
  return(
    <form onSubmit={ props.addParticipant } className="form">
      <h1>Cadastro de participantes</h1> 
      <div className="form-group">
        <label>Nome</label>
        <input
          type="text"
          name="Name"
          placeholder="nome"
          value={props.Name}
          onChange={ props.handleInputChange}
        />
      </div>
      <div className="form-group">
        <label>Telefone</label>
        <input
          type="text"
          name="Phone"
          placeholder="telefone"
          value={props.Phone}
          onChange={ props.handleInputChange}
        />
      </div>
      <div className="form-group">
        <label>Email</label>
        <input
          type="text"
          name="Email"
          placeholder="email"
          value={props.Email}
          onChange={ props.handleInputChange}
        />
      </div>
      <StyledButton type='red' label='Adicionar' />
    </form>
  )
}