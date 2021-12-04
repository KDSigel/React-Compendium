import { screen, render } from "@testing-library/react";
import Pokemon from "./Pokemon";

it('testing my pokemon', () => {
  render(
    <Pokemon 
      image="http://assets.pokemon.com/assets/cms2/img/pokedex/full/012.png"
      pokemon='butterfree' hp='60' height='11' attack='45' defense='50' 
    />
  );
    const singlePokemon = screen.getByText('Name: butterfree')
    expect(singlePokemon).toMatchSnapshot()
});