import React, { useEffect, useState } from 'react';

// must return a list of artists and a lists of albums ?

const search = async (query, types) => {
  const headers = {
    Accept: '*/*',
    'User-Agent': 'Daniel Jaramillo (https://www.d4nielj.me)',
    Authorization: 'Discogs token=vudycwjnRceFkYrIQljEPPuBWzVtDVvNHAmPOLhi',
  };

  const response = await fetch(
    `https://api.discogs.com/database/search?q=${query}&type=${types[0]}`,
    {
      headers,
      method: 'GET',
    }
  );

  return response;
};

const Search = () => {
  const [artists, setArtists] = useState([]);
  const [albums, setAlbums] = useState([]);
  const [query, setQuery] = useState('');

  const handleQueryChange = (e) => {
    setQuery(e.target.value);
  };

  const cleanSearch = () => {
    setQuery('');
  };

  const handleSearch = async (e) => {
    e.preventDefault();
    const res = await search(query, ['artist', 'album']);
    const data = await res.json();
    console.log(data);
  };

  return (
    <div>
      <form onSubmit={handleSearch}>
        <input onChange={handleQueryChange} type='text' value={query} />
        <button type='submit'>Search</button>
        <button type='button' onClick={cleanSearch}>
          Clean
        </button>
      </form>
    </div>
  );
};

export default Search;
