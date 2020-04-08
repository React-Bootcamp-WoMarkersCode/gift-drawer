import React from 'react'
import deleteButton from '../../assets/deleteButton.png'
import styled from 'styled-components';

export const Title = styled.h1`
  text-align: left;
  margin-left: 9%;
`
export const Table = styled.table`
  display: flex;
  flex-direction: column;
  margin: 30px 100px;
  thead tr th{
    width: 25vw;
    text-align: left;
    padding: 20px;
    border-top: solid 1px #e4e4e4;
    border-bottom: solid 1px #e4e4e4;
  }
  tbody{
    div{
      margin: 30px;
    }
    tr td{
    width: 25vw;
    text-align: left;
    padding: 0px 20px;
    border-bottom: solid 1px #e4e4e4;
    &:last-child{
    text-align: right;
    }
    img{
      cursor: pointer;
    }
  }
}
`;

export const ListParticipants = (props) => {
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
                      <img src={deleteButton} alt="delete icon" onClick={() => props.deleteParticipant(item.Id)}/>
                    </td>
                  </tr>
                )
              )
            ) : (
              <div>Não há participantes cadastrados</div>
            )
          }
        </tbody>
      </Table>
    </>
  );
}