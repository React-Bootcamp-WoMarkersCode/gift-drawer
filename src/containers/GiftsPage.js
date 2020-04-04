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


  const SortParticipant = () => {
    const index =  Math.floor(Math.random() * listaParticipantes.length);
    const Participante = listaParticipantes[index]
    setWinner(Participante.Name)

    const newListParticipantes = listaParticipantes.filter(function(item) {
      return item.Id !== Participante.Id
    })
    setListaParticipantes(newListParticipantes)

    setTimeout(() => {
      console.log('listaParticipantes', listaParticipantes)
    },0)

  }

  // const SortBrinde = () => {
  //   const index =  Math.floor(Math.random() * listaBrindes.length);
  //   console.log('index', index)

  //   const Brinde = listaBrindes[index]
  //   console.log('Brinde', Brinde)

  //   setSortBrinde(Brinde.Title)

  //   const newListBrindes = listaBrindes.filter(function(item) {
  //     return item.Id !== Brinde.Id
  //   })

  //   setlistaBrindes(newListBrindes)

  //   setTimeout(() => {
  //     console.log('listaBrindes', listaBrindes)
  //   },0)
  // }

  return(
    <>
      <h1>BRINDES</h1>
      {listaParticipantes.length > 0 ?
        <button onClick={SortParticipant}>Sorteio</button>
        :
       <p>Acabou</p>
      }

      <p>{winner}</p>
      {/* <p>{sortBrinde}</p> */}

      {listaBrindes.map(item => 
        <>
          <input type="checkbox" name="gift"/>
          <label for="gift">item.Title</label>
        </>
      )}

    </>
  )
}