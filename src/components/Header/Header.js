import React from 'react'
import { Link } from 'react-router-dom'
import logo from '../../assets/logo.svg'
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
`

export const MainHeader = () => {
  return(
    <Header>
      <img src={logo} alt='logo'/>
      <div>
        <Link to={'/logged/gifts'}>brindes</Link>
        <Link to={'/logged/participants/new'}>participantes</Link>
      </div>
    </Header>
  )
}