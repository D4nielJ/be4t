import React, { useState } from 'react';

const Search = () => {
  const [artists, setArtists] = useState([]);
  const [albums, setAlbums] = useState([]);
  const [query, setQuery] = useState('');

  const handleQueryChange = (e) => {
    setQuery(e.target.value);
    console.log(query);
  };

  const cleanSearch = () => {
    setQuery('');
  };

  return (
    <div>
      <input onChange={handleQueryChange} type='text' value={query} />
      <button onClick={cleanSearch}>Clean</button>
    </div>
  );
};

export default Search;
