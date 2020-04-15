import React from 'react'
import { Link } from 'react-router-dom'
import logo from '../../assets/logo.svg'
import logoSingle from '../../assets/LogoSingle.png'
import styled from 'styled-components'

export const Header = styled.div`
  height: 120px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 0px 80px;
  box-shadow: 0px 7px 6px -5px rgb(212, 212, 212);
  a{
    color: #552B9A;
    font-weight: bold;
    text-decoration: none;
    margin: 0px 0px 0px 40px;
    font-size: 18px;
    line-height: 22px;
    position: relative;
    &:hover::after, &:focus::after{
      content:' ';
      position: absolute;
      display:block;
      width: 11px;
      margin: 0 2%;
      border:3px solid red;
      border-radius:4px;
      left: 50%;
      top: 30px;
      transform: translateX(-50%);
    }
  }
  .logoFull{
    display: block
  }
  .logoSingle{
    display: none
  }
  @media only screen and (max-width: 600px) {
    flex-direction: column;
    justify-content: space-evenly;
    padding: 0px 40px;
    a{
      margin: 0px 10px 0px 10px;
    }
    .logoFull{
      display: none
    }
    .logoSingle{
      display: block
    }
  }
`

export const MainHeader = () => {
  return(
    <Header>
      <img src={logo} className='logoFull' alt='logo'/>
      <img src={logoSingle} className='logoSingle' alt='logo'/>

      <div>
        <Link to={'/logged/gifts/new'}>brindes</Link>
        <Link to={'/logged/participants/new'}>participantes</Link>
        <Link to={'/logged/winners'}>ganhadores</Link>
      </div>
    </Header>
  )
}