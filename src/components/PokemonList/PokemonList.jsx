import React from "react";
import Pokemon from "../Pokemon/Pokemon";

export default function PokemonList({ pokemonList }) {
  console.log(pokemonList)
  return (
    <div>
      <ul aria-label='list'>
        {pokemonList.map(
          ({ pokemon, hp, height, attack, defense, url_image }) => (
            <li key={pokemon}>
              <Pokemon
                pokemon={pokemon}
                hp={hp}
                height={height}
                attack={attack}
                defense={defense}
                image={url_image}
              />
            </li>
          )
        )}
      </ul>
    </div>
  );
}
