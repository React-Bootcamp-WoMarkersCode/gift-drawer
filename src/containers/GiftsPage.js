import React, {useState} from 'react';

export function GiftsPage(){
  const listaInicialParticipants = [
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

  const listaInicialBrindes = [
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

  const [listaParticipantes, setListaParticipantes] = useState(listaInicialParticipants)
  const [listaBrindes, setlistaBrindes] = useState(listaInicialBrindes)
  const [winner, setWinner] = useState()
  const [sortBrinde, setSortBrinde] = useState()

  const SortParticipant = () => {
    const index =  Math.floor(Math.random() * listaParticipantes.length);
    const Participante = listaParticipantes[index]
    setWinner(Participante.Name)

    const newListParticipantes = listaParticipantes.filter(function(item) {
      return item.Id !== Participante.Id
    })
    setListaParticipantes(newListParticipantes)
  }

  const updateListaBrindes = e => {
   const brinde = e
   setSortBrinde(brinde.Title)

    const newListBrindes = listaBrindes.filter(function(item) {
      return item.Id !== brinde.Id
    })
    setlistaBrindes(newListBrindes)
  }

  return(
    <>
      <h1>BRINDES</h1>


      {listaBrindes.map((item) => 
        <>
          <input type="checkbox" name="gift"
          onChange={() => {
            // console.log(item.Id)
            updateListaBrindes(item)
          }}/>
          <label for="gift">{item.Title}</label>
        </>
      )}
      <br />

      {listaBrindes.length > 0 ?
        <button onClick={SortParticipant}>Sorteio</button>
        :
       <p>Acabou</p>
      }
      <br />

      <p>{winner}</p>
      <p>{sortBrinde}</p>

    </>
  )
}