import React from 'react'
import deleteButton from '../../assets/deleteButton.png'
import styled from 'styled-components';

export const Container = styled.div`
  // margin: 0px 9%;
`
export const Title = styled.h1`
  text-align: left;
`
export const Table = styled.table`
  display: flex;
  flex-direction: column;
  // margin: 30px 0px;
  overflow-x: auto;
  thead tr th{
    width: 25vw;
    text-align: left;
    padding: 20px;
    border-top: solid 1px #e4e4e4;
    border-bottom: solid 1px #e4e4e4;
  }
  tbody{
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
    <Container>
      <Title>Lista de participantes</Title>

      {props.participantItems.length > 0 ? 
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
            {props.participantItems.map((item) => (
              <tr key={ item.Id }>
                <td>{ item.Name }</td>
                <td>{ item.Phone }</td>
                <td>{ item.Email }</td>

                <td className="table-list-actions">
                  <img src={deleteButton} alt="delete icon" onClick={() => props.deleteParticipant(item.Id)}/>
                </td>
              </tr>
            ))} 

          </tbody>
        </Table>
      :
        <div>Não há participantes cadastrados</div>
      }
    </Container>
  );
}