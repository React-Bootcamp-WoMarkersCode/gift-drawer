import React from 'react'
import { Header } from './Header.styled'
import { Link } from 'react-router-dom'
import logo from '../../assets/logo.svg'

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