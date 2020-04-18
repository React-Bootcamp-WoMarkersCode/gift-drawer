import React, { useState }  from 'react';
import { ParticipantsPage } from './ParticipantsPage'
import { GiftsPage } from './GiftsPage'
import { WinnersPage } from './WinnersPage'
import { Switch, Route } from 'react-router-dom'
import { MainHeader } from '../components/Header/Header'
import { message } from 'antd'

export const LoggedPage = () => {
  const [participant, setParticipant] = useState({
    Id: null,
    participantId: 1,
    Name: '',
    Phone: '',
    Email: '',
    Status: false,
    participantItem: {},
    participantItems: [],
  })

  const [gifts, setGifts] = useState({
    Id: null,
    giftId: 1,
    Gift:'',
    GiftImg: '',
    Quantity: 1,
    Sponsor: '',
    SponsorImg: '',
    giftItem: {},
    giftItems: [
      {
        Id: 1,
        Gift:'brinde 1',
        GiftImg: 'https://i.ibb.co/jJq261y/gift-img.png',
        Quantity: 1,
        Sponsor: '',
        SponsorImg: '',
      },
      {
        Id: 2,
        Gift:'Bicicleta praiana usada com cestinha',
        GiftImg: 'https://images.unsplash.com/photo-1565815146384-5e27ff130edc?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2100&q=80',
        Quantity: 1,
        Sponsor: '',
        SponsorImg: '',
      },
      {
        Id: 3,
        Gift:'brinde 3',
        GiftImg: 'https://i.ibb.co/jJq261y/gift-img.png',
        Quantity: 1,
        Sponsor: '',
        SponsorImg: '',
      },
    ],
  })

  const [winner, setWinner] = useState({
    id: null,
    participant: '',
    gift: '',
    winnerItem: {},
    winnerItems: [],
  })

  const [list, setList] = useState([])
  const [errorMsg, setErrorMsg] = useState('')
  const [disabled, setDisabled] = useState(true)
  const [visible, setVisible] = useState(false)
  const [showResultModal, setShowResultModal] = useState(false);

  const addParticipant = (event) => {
    event.preventDefault();
    if(!participant.Name || !participant.Phone || !participant.Email ) {
      message.warning('Preencha todos os campos');
    }
    else {
      const participantItem = {
        Id: participant.participantItems.length + 1,
        participantId: participant.participantItems.length + 1,
        Name: participant.Name,
        Phone: participant.Phone,
        Email: participant.Email,
      };
      setParticipant({
        ...participant,
        participantItem: participantItem,
        participantItems: [...participant.participantItems, participantItem],
      })
      message.success('Participante adicionado com sucesso!')
    }
  }

  const addGift = (event) => {
    event.preventDefault();

    if(!gifts.Gift || !gifts.Quantity || !gifts.Sponsor) {
      message.warning('Preencha todos os campos');
    }
    else {
      const giftItem = {
        Id: gifts.giftItems.length + 1,
        giftId: gifts.giftItems.length + 1,
        Gift: gifts.Gift,
        GiftImg: gifts.GiftImg,
        Quantity: gifts.Quantity,
        Sponsor: gifts.Sponsor,
        SponsorImg: gifts.SponsorImg,
      };
      setGifts({
        ...gifts,
        giftItem: giftItem,
        giftItems: [...gifts.giftItems, giftItem],
      })
      message.success('brinde adicionado com sucesso!')
    }
  }

  const deleteParticipant = ( participantId ) => {
    const newParticipantItems = participant.participantItems.filter( item => item.participantId !== participantId );
    setParticipant({...participant, participantItems: newParticipantItems});
  }

  const handleNewParticipant = (data, fileInfo) => {
    if(data.length > 0){
      setList(data)
      setDisabled(false)
      setErrorMsg('')
    } else {
      setErrorMsg('Arquivo não pode ser lido!')
    }
  };

  const importCsv = () => {
    if(list.length > 0){
      list.map(item => {
        return(
          participant.participantItems.push({
            Id: participant.participantItems.length + 1,
            participantId: participant.participantItems.length + 1,
            Name: item[0],
            Phone: item[1],
            Email: item[2],
          })
        )
      })
      setParticipant({...participant, participantItems: participant.participantItems});
      setErrorMsg('')
    }else{
      setErrorMsg('Arquivo não pode ser lido!')
    }

    setList([])
    setTimeout(() => {
      setVisible(false)
    }, 1500)
  }

  const SortParticipant = (gift) => {

    if(participant.participantItems.length > 0){
      const index =  Math.floor(Math.random() * participant.participantItems.length);
      const Participant = participant.participantItems[index]
      const newListParticipantes = participant.participantItems.filter(function(item) {
        return item.Id !== Participant.Id
      })

      addNewWinner(Participant.Name, gift.Title)
      setParticipant({participantItems: newListParticipantes})
      setShowResultModal(true)

      setTimeout(() => {
        updateListOfGifts(gift)
      }, 500)
    }
    else {
      message.error('Não há participantes cadastrados')
    }
  }

  const addNewWinner = (participant, gift) => {
    const winnerItem = {
      id: winner.winnerItems.length + 1,
      participant: participant,
      gift: gift,
    }
    setWinner({
      ...winner,
      winnerItem: winnerItem,
      winnerItems: [...winner.winnerItems, winnerItem],
    })
  }

  const updateListOfGifts = gift => {
    const newListGifts = gifts.giftItems.filter(function(item) {
      return item.Id !== gift.Id
    })
    setGifts({giftItems: newListGifts})
  }

  return (
    <>
      <MainHeader />
      <Switch>
        <Route path='/logged/participants' >
          <ParticipantsPage
            showModal={() => setVisible(true)}
            onCancelModal={() => setVisible(false)}
            visibleModal={visible}

            onFileLoaded={handleNewParticipant}
            onError={() => setErrorMsg('Erro ao importar o arquivo')}
            errorMsg={errorMsg}
            onClickImport={importCsv}
            disabledBtn={disabled}

            Name={ participant.Name }
            Phone={ participant.Phone }
            Email={ participant.Email }
            handleInputChange={event => setParticipant({ ...participant, [event.target.name]: event.target.value }) }
            addParticipant={ addParticipant }
            participantItems={ participant.participantItems }
            deleteParticipant={ deleteParticipant }
          />
        </Route>

        <Route path='/logged/gifts' >
          <GiftsPage
            listOfGifts={gifts.giftItems}
            show={showResultModal}
            showModal={showResultModal}
            hideModal={() => setShowResultModal(false)}
            onClick={SortParticipant}
            winnerName={winner.winnerItem.participant}

            Gift={gifts.Gift}
            GiftImg={gifts.GiftImg}
            Quantity={gifts.Quantity}
            Sponsor={gifts.Sponsor}
            SponsorImg={gifts.SponsorImg}
            handleInputChange={event => setGifts({ ...gifts, [event.target.name]: event.target.value })} 
            addGift={addGift}
          />
        </Route >
        <Route path='/logged/winners' >
          <WinnersPage listOfWinners={winner.winnerItems}/>
        </Route >
      </Switch>
    </>
  );
}

