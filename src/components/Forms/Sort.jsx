import React from 'react'

export default function Sort({sortPoke, setSortPoke}) {
    return (
        <div>
            <select value={sortPoke}
            onChange={(e) => setSortPoke(e.target.value)}>
                <option value='asc'>ascending</option>
                <option value='desc'>descending</option>
            </select>
        </div>
    )
}
