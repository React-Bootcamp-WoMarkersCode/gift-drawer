
import React from 'react'
import styled from 'styled-components';
import Gift from './Gift/Gift'

export const Container = styled.div`
  max-width: 1280px;
  width: 90%;
  margin: 0 auto;
  padding: 80px 0;
    h1 {
    text-align: left;
    font-family: Poppins;
    font-style: normal;
    font-weight: 900;
    font-size: 45px;
    line-height: 67px;
    letter-spacing: -0.03em;
    text-transform: uppercase;
  }
`
export const StyledListOfGifts = styled.div`
  color: #333;
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(15rem, 1fr));
  grid-gap: 40px;
  box-sizing: border-box;
`

export const ListOfGifts = (props) => {
  return (
    <Container>
      <h1>Lista de Brindes</h1>
      <StyledListOfGifts>
        {props.listOfGifts.map((item) =>
          <Gift
            key={item.Id}
            imgUrl={item.ImgUrl}
            title={item.Title}
            quantity={item.Quantity}
            sponsor={item.Sponsor}
            imgSponsorUrl={item.ImgSponsorUrl}
            showModal={props.showModal}
            onClick={() => props.onClick(item)}
          />
        )}
      </StyledListOfGifts>
    </Container>
    );
}