import React, {useState} from 'react';

export default function SortGift(){
  const initialListOfParticipants = [
    {
      Id: 1,
      Name: 'Ana Paula',
    },
    {
      Id: 2,
      Name: 'Angela',
    },
    {
      Id: 3,
      Name: 'Diana',
    },
    {
      Id: 4,
      Name: 'Pry',
    },
    {
      Id: 5,
      Name: 'Evelyn',

    },
    {
      Id: 6,
      Name: 'Bruna',
    },
  ]

  const initialListOfGifts = [
    {
      Id: 1,
      Title:'brinde 1',
    },
    {
      Id: 2,
      Title:'brinde 2',
    },
    {
      Id: 3,
      Title:'brinde 3',
    },
    {
      Id: 4,
      Title:'brinde 4',
    },
  ]

  const [listOfParticipants, setListOfParticipants] = useState(initialListOfParticipants)
  const [listOfGifts, setlistOfGifts] = useState(initialListOfGifts)
  const [winner, setWinner] = useState()
  const [sortGift, setSortGift] = useState()

  const SortParticipant = () => {
    const index =  Math.floor(Math.random() * listOfParticipants.length);
    const Participant = listOfParticipants[index]
    setWinner(Participant.Name)

    const newListParticipantes = listOfParticipants.filter(function(item) {
      return item.Id !== Participant.Id
    })
    setListOfParticipants(newListParticipantes)
  }

  const updateListOfGifts = e => {
   const gift = e
   setSortGift(gift.Title)

    const newListGifts = listOfGifts.filter(function(item) {
      return item.Id !== gift.Id
    })
    setlistOfGifts(newListGifts)
  }

  return(
    <>
      
      {listOfGifts.map((item) => 
        <div key={item.id}>
          <input type="checkbox" name="gift" onChange={() => updateListOfGifts(item)}/>
          <label htmlFor="gift">{item.Title}</label>
        </div>
      )}

      <br />

      {sortGift && 
        <>
          {listOfGifts.length > 0 ?
            <button onClick={SortParticipant}>Sorteio</button>
            :
            <p>Acabou</p>
          }
        </>
      }
      <br />

      <p>{winner}</p>
      <p>{sortGift}</p>
    </>
  )
}