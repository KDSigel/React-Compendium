import React from 'react'
import Pokemon from '../Pokemon/Pokemon'

export default function PokemonList({pokemonList}) {
    return (
        <div>
           {pokemonList.map(({
                pokemon, 
                hp, 
                height, 
                attack, 
                defense, 
                url_image}) => (
               <Pokemon pokemon={pokemon}
               hp={hp}
               height={height}
               attack={attack}
               defense={defense}
               image={url_image}
                />
           )
           )} 
        </div>
    )
}
