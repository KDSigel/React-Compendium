import React from 'react'
import Pokemon from '../Pokemon/Pokemon'

export default function PokemonList({pokemonList}) {
    return (
        <div>
           {pokemonList.map(({pokemon, hp}) => (
               <Pokemon pokemon={pokemon}
               hp={hp} />
           )
           )} 
        </div>
    )
}
