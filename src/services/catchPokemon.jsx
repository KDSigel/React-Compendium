import React from 'react'

export const catchPokemon = async () => {

    const fetchedPokemon = await fetch('https://pokedex-alchemy.herokuapp.com/api/pokedex')
    console.log(fetchedPokemon)
    return fetchedPokemon
}
