import React from 'react';
import NewGift from '../components/NewGift'
import SortGift from '../components/SortGift'
import { ListOfGifts } from '../components/ListOfGifts'
import { Container } from './Containers.styled'
import { Switch, Route, Link } from 'react-router-dom'
import styled from 'styled-components'


export const Menu = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  margin-right: 40px;
  a{
    margin-right: 40px;
    color: #552B9A;
    font-size: 17px;
  }
`

export function GiftsPage(){
  return(
    <Container>
      <Menu>
        <Link to={'/logged/gifts/list'}>ver lista</Link>
        <Link to={'/logged/gifts/new'}>+ adicionar</Link>
      </Menu>

      <Switch>
        <Route path="/logged/gifts/new" exact component={NewGift} />
        <Route path="/logged/gifts/list" component={ListOfGifts} />
        <Route path='/logged/gifts/sort' component={SortGift} />
      </Switch>
    </Container>
  )
}