import React from 'react';
import PokedexScreen from './PokedexScreen';
import PokemonForm from './PokemonForm';
import '../styles/pokedex.css';
import { PokemonType } from "../interface/pokemon";
import { useState, useEffect } from "react";
// Creamos un número aleatorio entre el 1 y el 807
const RandomId = Math.floor(Math.random() * 806 + 1)

function Pokedex(){
    const [ error, setError ] = useState(false);
    const [ loading, setLoading ] = useState(true);
    const [pokemon, setPokemon] = useState<PokemonType| null>(null);
    const randomId = Math.floor(Math.random() * 806 + 1);
    const [pokemonID, setPokemonId] = useState<number | string>(randomId);
    

    useEffect(() => {
        fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonID}`)
          .then(res => res.json())
          .then(data => {
            // Si todo esta cool, actualizamos el pokemón
            // Y le indicamos que no hay error
            setPokemon(data)
            setLoading(false)
            setError(false)
          })
          .catch(err => {
            setLoading(false)
            setError(true)
          })
      }, [pokemonID]);

  
  return (
    <div className="pokedex">
      <div className="pokedex-left">
        <div className="pokedex-left-top">
        <div className="pokedex-left-top">
            <div className={`light is-sky is-big ${loading && 'is-animated'}`}  />
            <div className="light is-red" />
            <div className="light is-yellow" />
            <div className="light is-green" />
            </div>
        </div>
        <div className="pokedex-screen-container">
          <PokedexScreen 
          pokemon={pokemon}
          loading={loading}
          error={error}
          />
        </div>
        <div className="pokedex-left-bottom">
          <div className="pokedex-left-bottom-lights">
            <div className="light is-blue is-medium" />
            <div className="light is-green is-large" />
            <div className="light is-orange is-large" />
          </div>
          <PokemonForm 
          setPokemonId={setPokemonId}
          setLoading={setLoading}
          setError={setError}
          />
        </div>
      </div>
      <div className="pokedex-right-front" />
      <div className="pokedex-right-back" />
    </div>
    
  )
}

export default Pokedex;

//////////////////

const Pokedex = () => {
  // ...
  const [pokemon, setPokemon] = useState<PokemonType| null>(null);
  // return( ...
}