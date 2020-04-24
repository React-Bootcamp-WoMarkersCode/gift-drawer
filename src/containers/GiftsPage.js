import React from 'react';
import { FormGifts } from '../components/Gifts/GiftsForm'
import { ListOfGifts } from '../components/ListOfGifts'
import { Container } from './Containers.styled'
import { Switch, Route, Link } from 'react-router-dom'
import styled from 'styled-components'
import ResultModal from '../containers/ResultModal'

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
export function GiftsPage(props){

  const {
    Gift,
    GiftImg,
    Quantity,
    Sponsor,
    SponsorImg,
    handleInputChange,
    addGift,
    listOfGifts,
    showModal,
    onClick,
    show,
    hideModal,
    winnerName,
    counterNumber,
    giftName,
    giftImg,
    sponsorName,
    sponsorImg,
  } = props

  return(
    <Container>
      <Menu>
        <Link to={'/logged/gifts/list'}>ver lista</Link>
        <Link to={'/logged/gifts/new'}>+ adicionar</Link>
      </Menu>

      <Switch>
        <Route path="/logged/gifts/new" >
          <FormGifts
            Gift={Gift}
            GiftImg={GiftImg}
            Quantity={Quantity}
            Sponsor={Sponsor}
            SponsorImg={SponsorImg}
            handleInputChange={handleInputChange} 
            addGift={addGift}
          />
        </Route> 

        <Route path="/logged/gifts/list">
          <ListOfGifts
            listOfGifts={listOfGifts}
            showModal={showModal}
            onClick={onClick}
          />
          <ResultModal
            show={show}
            hideModal={hideModal}
            winnerName={winnerName}
            counterNumber={counterNumber}
            giftName={giftName}
            giftImg={giftImg}
            sponsorName={sponsorName}
            sponsorImg={sponsorImg}
          />
        </Route>
      </Switch>
    </Container>
  )
}