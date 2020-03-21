import React from 'react';
import { StyledButton } from '../components/Button/button'

export function ParticipantsPage(){
  return(
    <form className="form">
      <h1>Cadastro de participantes</h1> 
      <div className="form-group">
        <label>Nome</label>
        <input 
        />
      </div>
      <div className="form-group">
        <label>Telefone</label>
        <input
        />
      </div>
      <div className="form-group">
        <label>Email</label>
        <input
        />
      </div>
        <StyledButton type='red' label='Adicionar' />
        <StyledButton type='purple' label='Adicionar' />
        <StyledButton type='green' label='Adicionar' />
        <StyledButton type='outro' label='Adicionar' />

      {/* <span className="warn">*Preencher todos os campos acima</span> */}
    </form>
  )
}