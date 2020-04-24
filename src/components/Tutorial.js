import React from 'react'
import styled from 'styled-components'
import { Container } from '../containers/Containers.styled'
import AddPeople from '../img/1add.png';
import AddGift from '../img/2gifts.png';
import SortPeople from '../img/3sort.png';


export const Div = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-evenly;
  align-items: center;
  margin: 40px 0px 0px 0px ;
  div{
    display: flex;
    flex-direction: column;
    align-items: center;
    img{
      width: 300px;
    }
    span{
      width: 300px;
      margin: 40px;
      text-align: center;
    }
  }
`

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

export const Tutorial = () => {
  return(
    <Container>   
      <Menu /> 
    <h1>Oi! Organize um sorteio seguindo os passos abaixo.</h1>
    <Div>
      <div>
        <img src={AddPeople} alt='logo'/>
        <span>Adicione os participantes manualmente ou importe uma tabela.</span>
      </div>

      <div>
        <img src={AddGift} alt='logo'/>
        <span>Insira os brindes a serem sorteados e os respectivos patrocinadores</span>
      </div>

      <div>
        <img src={SortPeople} alt='logo'/>
        <span>Para criar uma rodada de sorteio, escolha um brinde e clique em sortear. <br />Simples assim.</span>
      </div>
    </Div>
    </Container>

   )
}
