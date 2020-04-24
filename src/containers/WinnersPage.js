import React from 'react'
import styled from 'styled-components';
import { Container } from './Containers.styled'
import { Switch, Route, Link } from 'react-router-dom'

export const Menu = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  margin: 40px 0 40px 0;
  @media only screen and (max-width: 600px) {
    justify-content: center;
    margin-right: 0;
  }
  a{
    margin-right: 30px;
    color: #552B9A;
    font-size: 17px;
  }
`

export const Title = styled.h1`
  // font-family: Montserrat;
  // font-style: normal;
  // font-weight: bold;
  // font-size: 28px;
  // line-height: 34px;
  // display: flex;
  // align-items: center;
  // text-align: center;
`
// export const Container = styled.div`
//   padding: 80px;
//   @media only screen and (max-width: 600px) {
//     padding: 20px;
//   }
// `

export const Table = styled.table`
  display: flex;
  flex-direction: column;
  margin: 30px 0px;
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
    padding: 20px;
    border-bottom: solid 1px #e4e4e4;
    img{
      cursor: pointer;
    }
  }
}
`;

export const WinnersPage= (props) => {
  return (  
    <Container>
      <Menu>
      </Menu>
      <Title>Sorteios realizados</Title>

      {props.listOfWinners.length > 0 ?
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
        :
        <div>Ainda não foi realizado nenhum sorteio</div>
      }
    </Container>
  );
}