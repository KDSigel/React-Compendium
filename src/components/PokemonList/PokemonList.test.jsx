import { screen, render } from "@testing-library/react";
import PokemonList from "./PokemonList";

it('testing my lists', () => {
    const fakePokes = [{
        'pokemon': 'butterfree',
        'hp': '60',
        'height': '11',
        'attack': '45',
        'defense': '50',
        'image':'http://assets.pokemon.com/assets/cms2/img/pokedex/full/012.png'
    },
    {   'pokemon': 'venusaur-mega',
        'hp': '80',
        'height': '24',
        'attack': '100',
        'defense': '123',
        'image':'http://assets.pokemon.com/assets/cms2/img/pokedex/full/003_f2.png'
    }
]
    render(<PokemonList pokemonList={fakePokes}/>)
    const pokelist = screen.getByLabelText('list')
    expect(pokelist).toMatchSnapshot()
}

)