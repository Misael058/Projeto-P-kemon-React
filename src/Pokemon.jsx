import axios from 'axios'
import React, { useEffect,useState } from 'react'


const Pokemon = ({datinha}) => {
  const [detalhes , setDetalhes] = useState(null)

useEffect(() => {

  axios .get(datinha.url)
  .then(response => {
    setDetalhes(response.data)
    console.log(response.data)
  })



}, [])



  if (detalhes === null) {
    return <div><b>Falhou!!</b></div>;
    
  }



  return (
      
   
    <div className='areaPokemon'> 
   
    <div className='conteudo'>  
        <img src={detalhes.sprites.front_default} alt="" style={{width: 300, height: 300}}  />

    <h2>{detalhes.name}</h2>
    <span>Height:{detalhes.height}</span>
    <span>Exp:{detalhes.base_experience}</span>
    
    
    </div>
    <footer>

    </footer>
        
     </div>
    

  )
}

export default Pokemon