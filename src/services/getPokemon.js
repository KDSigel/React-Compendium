
export const getPokemon = async () => {

    const response = await fetch('https://pokedex-alchemy.herokuapp.com/api/pokedex')
    const body = await response.json()
    
    return body.results
}

export const fetchTypes = async () => {

    const response = await fetch('https://pokedex-alchemy.herokuapp.com/api/pokedex/types')
    const types = await response.json()
    const pokemonTypesMapped = types.map((type) => type.type)
    return pokemonTypesMapped
}

export const fetchPokemonByType = async (type, sort) => {
    const response = await fetch(`https://pokedex-alchemy.herokuapp.com/api/pokedex?type=${type}&sort=pokemon&direction=${sort}`)
    const body = await response.json();

    return body.results;
}