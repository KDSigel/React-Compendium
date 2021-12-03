
export const getPokemon = async () => {

    const response = await fetch('https://pokedex-alchemy.herokuapp.com/api/pokedex')
    const body = await response.json()
    
    return body.results
}
