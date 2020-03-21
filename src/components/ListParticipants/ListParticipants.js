import React from 'react';
import { StyledButton } from '../Button/button'
import { Table, Title } from './ListParticipants.styled'

export const ListParticipants  = (props) => {
  return (  
    <>
      <Title>Lista de participantes</Title>

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
                        type='green'
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