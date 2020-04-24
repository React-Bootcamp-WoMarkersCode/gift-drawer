import React from 'react'
import styled from 'styled-components'
import peopleImg from '../assets/AddPeople.png'
import giftImg from '../assets/AddGift.png'
import sortImg from '../assets/Sort.png'


export const Div = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-evenly;
  align-items: center;
  margin: 10% 0px 0px 0px ;
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

export const Tutorial = () => {
  return(
    <Div>
      <div>
        <img src={peopleImg} alt='logo'/>
        <span>Adicione os participantes manualmente ou importe uma tabela.</span>
      </div>

      <div>
        <img src={giftImg} alt='logo'/>
        <span>Insira os brindes a serem sorteados e os respectivos patrocinadores</span>
      </div>

      <div>
        <img src={sortImg} alt='logo'/>
        <span>Para criar uma rodada de sorteio, escolha um brinde e clique em sortear. <br />Simples assim.</span>
      </div>
    </Div>
   )
}
