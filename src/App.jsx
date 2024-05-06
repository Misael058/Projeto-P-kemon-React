/*
Consuma a API e liste todos os pokemons da consulta do seguinte endpoint. 
https://pokeapi.co/api/v2/pokemon

Você deve exibir, de cada pokémon:
- imagem
- nome
- experiência

Você pode acessar as informações de cada pokemón individualmente em:
https://pokeapi.co/api/v2/pokemon/:id


DICA:
imagem => sprites.front_default
experiência => base_experience

EXTRA: se puder ordene por nome.
*/
import './App.css'
import { useEffect, useState } from 'react';
import Pokemon from './Pokemon';
import axios from 'axios';
import Header from './Header';
import Footer from './Footer';




function App() {
  const [dados, setDados] = useState([]);

  useEffect(()=>{
    axios .get('https://pokeapi.co/api/v2/pokemon')
    .then(response => {
      setDados(response.data.results)
    })
  },[])


  return (
    <>
    <Header/>
         
       {dados.map((item, information) => (
        
       
        <Pokemon  datinha={item} key={information} />

       
      ))} 

      <Footer/>
   
   
    </>
  );
}

export default App;