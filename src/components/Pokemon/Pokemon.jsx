import React from 'react'

export default function Pokemon({pokemon, hp}) {
    return (
        <div>
            <p>{pokemon}</p>
            <p>{hp}</p>
        </div>
    )
}
