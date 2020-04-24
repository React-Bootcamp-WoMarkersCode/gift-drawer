
import React from 'react'
import styled from 'styled-components';
import Gift from './Gift/Gift'

export const StyledListOfGifts = styled.div`
  color: #333;
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(15rem, 1fr));
  grid-gap: 40px;
  box-sizing: border-box;
`

export const ListOfGifts = (props) => {
  return (
    <>
      <h1>Lista de Brindes</h1>

      {props.listOfGifts.length > 0 ? 
        <>
          <StyledListOfGifts>
            {props.listOfGifts.map((item) =>
              <Gift
                key={item.Id}
                imgUrl={item.GiftImg}
                title={item.Gift}
                quantity={item.Quantity}
                sponsor={item.Sponsor}
                imgSponsorUrl={item.SponsorImg}
                showModal={() => props.showModal}
                onClick={() => props.onClick(item)}
              />
            )}
          </StyledListOfGifts>
        </>
        :
        <p>Não há brindes cadastrados</p>
      }

    </>
  );
}