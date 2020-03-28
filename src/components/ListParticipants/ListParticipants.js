import React from 'react';
import { StyledButton } from '../Button/Button'
import { Header, Table } from './ListParticipants.styled'
import { Link } from 'react-router-dom'

export const ListParticipants  = (props) => {
  return (  
    <>
      <Header>
        <h1>Lista de participantes</h1>
        <Link to={'/logged/participants/new'}>+ adicionar</Link>
      </Header>

      <Table>
        <thead>
          <tr>
            <th>Nome</th>
            <th>Telefone</th>
            <th>Email</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          { 
            props.participantItems.length > 0 ? (
              props.participantItems.map((item) => (
                  <tr key={ item.Id }>
                    <td>{ item.Name }</td>
                    <td>{ item.Phone }</td>
                    <td>{ item.Email }</td>

                    <td className="table-list-actions">
                      <StyledButton 
                        type='purple'
                        onClick={() => {
                          props.deleteParticipant(item.Id)
                        }}
                        label='X'
                      />
                    </td>
                  </tr>
                )
              )
            ) : (
              <tr>
                <td>Não há participante cadastrada</td>
              </tr>
            )
          }
        </tbody>
      </Table>
    </>
  );
}