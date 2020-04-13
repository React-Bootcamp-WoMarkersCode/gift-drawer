import React, {useState} from 'react';
import { Switch, Route, Link } from 'react-router-dom'
import { Container } from '../containers/Containers.styled'
import styled from 'styled-components'
import { FormGifts } from './Gitfs/GiftsForm'


export const Menu = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  margin-right: 6%;
  a{
    margin-right: 30px;
    color: #552B9A;
    font-size: 17px;
  }
`
export function NewGift(props){
  const [gift, setGift] = useState({
    Id: null,
    Brinde: '',
    Foto: '',
    Quantidade: '',
    Patrocinador: '',
    Logo: '',
    giftItem: {},
    giftsItems: [],
  })

  const handleInputChange = (event) => {
    setGift({ ...gift, [event.target.name]: event.target.value });
  }

  const addGift = (event) => {
    event.preventDefault();
    if(!gift.Brinde || !gift.Quantidade || !gift.Patrocinador ) {
      alert('preencher tudo');
    }
    else {
      const giftItem = {
        Id: gift.giftsItems.length + 1,
        giftId: gift.giftItems.length + 1,
        Brinde: gift.Brinde,
        Foto: gift.Foto,
        Quantidade: gift.Quantidade,
        Patrocinador: gift.Patrocinador,
        Logo: gift.logo
      };
      setGift({
        ...gift,
        Brinde: '',
        Foto: '',
        Quantidade: '',
        Patrocinador: '',
        Logo: '',
        giftItem: giftItem,
        giftItems: [...gift.giftItems, giftItem],
      })
    }
    console.log(gift)
  }

  const deleteGift = ( giftId ) => {
    const newGiftItems = gift.giftItems.filter( item => item.gifttId !== giftId );
    setGift({...gift, giftItems: newGiftItems});
  }

  const handleForce = data => {
    console.log(data)
    data.map(item => {
      return(
        gift.giftItems.push({
          Id: gift.giftItems.length + 1,
          giftId: gift.giftItems.length + 1,
          Brinde: item[0],
          Foto: item[1],
          Quantidade: item[2],
          Patrocinador: item[3],
          Logo: item[4]
        })
      )
    })
    setGift({...gift, giftItems: gift.giftItems});
  };

  return(
    <Container>
      <Menu>
        <Link to={'/logged'}>Voltar</Link>
        <Link to={'/logged/gifts/list'}>ver lista</Link>

      </Menu>

      <Switch>
        <Route path='/logged/gifts' >
          <FormGifts 
            Brinde={ gift.Brinde }
            Foto={ gift.Foto }
            Quantidade={ gift.Quantidade }
            Patrocinador ={gift.Patrocinador}
            Logo= {gift.Logo}
            handleInputChange={ handleInputChange } 
            addGift={ addGift }
          />
        </Route >

        <Route path='/logged/gifts/list' >
          
        </Route>
      </Switch>
    </Container>
  )
}

export default NewGift
