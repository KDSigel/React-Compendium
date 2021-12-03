import React from 'react'
import Filter from '../Forms/Filter'
import Sort from '../Forms/Sort';

export default function Controls({types, selectedType, setSelectedType, sortPoke, setSortPoke}) {
  return (
    <div>
      <Filter
        types={types}
        selectedType={selectedType}
        setSelectedType={setSelectedType}
      />
      <Sort sortPoke={sortPoke} setSortPoke={setSortPoke} />
    </div>
  );
}
