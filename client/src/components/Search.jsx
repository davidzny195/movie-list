import React from 'react';

const Search = ({ handleSearch }) => {

  return (
    <div>
      <input placeholder="Search..." onChange={(e) => handleSearch(e.target.value)} />
    </div>
  )

}

export default Search;