import React from 'react'

export default function Pokemon({pokemon, hp, height, attack, defense, image}) {
    return (
        <div>
            <img src={image} alt='poke'/>
            <p>Name: {pokemon}</p>
            <p>HP: {hp}</p>
            <p>Height: {height}</p>
            <p>Attack: {attack}</p>
            <p>Defense: {defense}</p>
        </div>
    )
}
