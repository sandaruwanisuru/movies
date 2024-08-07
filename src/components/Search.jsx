import React from 'react';

const Search = ({ setSearchValue, searchValue }) => {
  return (
    <div className="search">
      <input
        className="input"
        type="text"
        value={searchValue}
        onChange={(e) => setSearchValue(e.target.value)}
        placeholder="Search for a movie..."
      />
    </div>
  );
};

export default Search;
