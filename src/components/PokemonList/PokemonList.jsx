import React from 'react'
import Pokemon from '../Pokemon/Pokemon'

export default function PokemonList({pokemonList}) {
    return (
        <div>
            {/* <Pokemon /> */}
           {pokemonList.map(({pokemon, _id, hp}) => (
               <Pokemon pokemon={pokemon} />
           )
           )} 
        </div>
    )
}
