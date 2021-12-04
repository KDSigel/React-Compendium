import React, { useEffect, useState } from 'react'
import Controls from '../components/Controls/Controls';
import PokemonList from '../components/PokemonList/PokemonList';
import { fetchPokemonByType, fetchTypes, getPokemon } from '../services/getPokemon';

export default function Compendium() {

    const [pokemonList, setPokemonList] = useState([])
    const [types, setType] = useState([])
    const [selectedType, setSelectedType] = useState('')
    const [loading, setLoading] = useState(true)
    const [sortPoke, setSortPoke] = useState('asc')

    useEffect(() => {
        async function getPokemonList() {
            const fetchedPokemon = await getPokemon()
            setPokemonList(fetchedPokemon)
            setLoading(false);
        }
        getPokemonList()
    }, []);

    useEffect(() => {
        async function getTypes() {
            const fetchedTypes = await fetchTypes()
            setType(fetchedTypes)
        }
        getTypes()
    }, [])

    useEffect(() => {
      if (!selectedType) return;

      async function getFilteredPokemon() {
        if (selectedType === "all") {
          const fetchedPokemon = await getPokemon();
          setPokemonList(fetchedPokemon);
        } else {
          const filteredPokemon = await fetchPokemonByType(selectedType, sortPoke);
          setPokemonList(filteredPokemon);
        }
        setLoading(false);
      }
      getFilteredPokemon();
    }, [selectedType, sortPoke]);

    if (loading) {
    return <h1>No Poke for you!...</h1>
    }

    return (
      <div>
        <Controls
          types={types}
          selectedType={selectedType}
          setSelectedType={setSelectedType}
          sortPoke={sortPoke}
          setSortPoke={setSortPoke}
        />
        <PokemonList pokemonList={pokemonList} />
      </div>
    );
}
