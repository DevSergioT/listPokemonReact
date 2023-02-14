import React, { useState, useEffect } from 'react'
import Imagem from './assets/img.jpg'
import api from './services/Api'
import './global.css'
import axios from 'axios'



function Home() {
  const [pokemons, setPokemons] = useState([])

  function pokelist() {
    useEffect(() => {
      api()
    }, [])
  }
  function buscarPokemon() {
    var endpoints = [];
    for (var i = 1; i < 100; i++) {
      endpoints.push(`https://pokeapi.co/api/v2/pokemon/${i}`)
    }

    var response = axios.all(endpoints.map((endpoints) => axios.get((endpoints))))
    console.log(response)
  }
  buscarPokemon()

  return (
    <div className="home">
      <img src={Imagem} alt='imagem de um ovo de pokemon' />

      <input id='pokemon' type='text' placeholder='Qual seu pokemon' alt='digite o nome do pokemon' onChange={(e) => buscarPokemon()} />
      <ul>
        <li>{ }</li>
      </ul>
    </div>

  )

}

export default Home
