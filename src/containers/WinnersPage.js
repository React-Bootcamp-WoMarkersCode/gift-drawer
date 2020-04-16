import React from 'react'
import styled from 'styled-components';
import { Container } from './Containers.styled'


export const Title = styled.h1`
  text-align: left;
  margin-left: 9%;
`
export const Table = styled.table`
  display: flex;
  flex-direction: column;
  margin: 30px 100px;
  overflow-x: auto;
  @media only screen and (max-width: 600px) {
    margin: 30px 10px;
  }
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

export const WinnersPage= (props) => {
  return (  
    <Container>
      <Title>Sorteios realizados</Title>
      <Table>
        <thead>
          <tr>
            <th>Ganhador(a)</th>
            <th>Prêmio</th>
          </tr>
        </thead>
        <tbody>
          {props.listOfWinners.map((item, index) => 
            <tr key={index}>
              <td>{item.participant}</td>
              <td>{item.gift}</td>
            </tr>
          )}

        </tbody>
      </Table>
    </Container>
  );
}