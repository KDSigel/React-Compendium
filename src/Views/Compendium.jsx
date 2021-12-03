import React, { useEffect, useState } from 'react'
import PokemonList from '../components/PokemonList/PokemonList';
import { getPokemon } from '../services/getPokemon';

export default function Compendium() {

    // const [pokemon, setpokemon] = useState([])
    const [pokemonList, setPokemonList] = useState(['pokemon list is coming through'])

    useEffect(() => {
        async function getPokemonList() {
            const fetchedPokemon = await getPokemon()
            setPokemonList(fetchedPokemon)
        }
        getPokemonList()
    }, []);

    return (
        <div>
            <PokemonList pokemonList={pokemonList}/>
        </div>
    )
}
