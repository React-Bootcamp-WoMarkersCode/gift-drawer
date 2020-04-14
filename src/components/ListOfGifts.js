
import React, { useState } from 'react'
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

        div {
            cursor:pointer;
            width: 100%;

            img {
                height: 300px;
                object-fit: cover;
                width: 100%;
                border-radius: 10px;
                box-shadow: 0px 4px 14px rgba(0, 0, 0, 0.13);
            }

            label {
                display: flex;
                justify-content: left;
                box-sizing: border-box;
                width: 100%;
                padding: 20px 0;
                font-family: Montserrat;
                font-style: normal;
                font-weight: bold;
                font-size: 20px;
                line-height: 24px;
                overflow-wrap: break-word;
            }
        }
    
`
export const initialListOfGifts = [
        {
          Id: 1,
          Title:'brinde 1',
          ImgUrl: 'https://i.ibb.co/jJq261y/gift-img.png'
        },
        {
          Id: 2,
          Title:'Bicicleta praiana usada com cestinha',
          ImgUrl: 'https://images.unsplash.com/photo-1565815146384-5e27ff130edc?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2100&q=80'
        },
        {
          Id: 3,
          Title:'brinde 3',
          ImgUrl: 'https://i.ibb.co/jJq261y/gift-img.png'
        },
        {
          Id: 4,
          Title:'brinde 4',
          ImgUrl: 'https://i.ibb.co/jJq261y/gift-img.png'
        },
        {
          Id: 5,
          Title:'brinde 5',
          ImgUrl: 'https://i.ibb.co/jJq261y/gift-img.png'
        },
        {
          Id: 6,
          Title:'brinde 6',
          ImgUrl: 'https://i.ibb.co/jJq261y/gift-img.png'
        }
      ]

export const ListOfGifts = () => {


    const [listOfGifts, setlistOfGifts] = useState(initialListOfGifts)

    return ( 
        <Container>
            <h1>Lista de Brindes</h1>
            <StyledListOfGifts>
                    {listOfGifts.map((item) => 
                        <div key={item.id}>
                            <img src={item.ImgUrl} alt='Foto de um brinde'/>
                            <label>{item.Title}</label>
                        </div>
                    )}
                
            </StyledListOfGifts>
            {/* <Gift /> */}
        </Container>

     );
}