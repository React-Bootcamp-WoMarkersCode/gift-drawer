import React from 'react'
import styled from 'styled-components'
import logo from '../assets/logo.png'

export const Div = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  align-items: center;
  margin: 15% 0px;
  div{
    display: flex;
    flex-direction: column;
    align-items: center;
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
        <img src={logo} alt='logo'/>
        <span>Adicione os participantes através de uma tabela .csv</span>
      </div>

      <div>
        <img src={logo} alt='logo'/>
        <span>Insira os brindes a serem sorteados e os logos dos patrocinadores</span>
      </div>

      <div>
        <img src={logo} alt='logo'/>
        <span>Para criar uma rodada do sorteio escolha um brinde e clique em sortear. Simples assim.</span>
      </div>
    </Div>
   )
}
