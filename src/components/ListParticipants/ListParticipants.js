import React from 'react'
import { Link } from 'react-router-dom'
import deleteButton from '../../assets/deleteButton.png'
import styled from 'styled-components';

export const Header = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  margin: 10px 100px;
  h1{
    text-align: left;
  }
  a{
    text-decoration: none;
  }
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
  tbody tr td{
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
`;

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
                      <img src={deleteButton} alt="delete icon" onClick={() => props.deleteParticipant(item.Id)}/>
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