import React, { useEffect, useState } from 'react';
import useApiFilter from '../../../lib/customHooks/useApiFilter';

const search = async (query, filters) => {
  const headers = {
    Accept: '*/*',
    'User-Agent': 'Daniel Jaramillo (https://www.d4nielj.me)',
    Authorization: `Discogs token=${process.env.NEXT_PUBLIC_DISCOGS_URL}`,
  };

  filters.forEach(async ({ name, value, setEntities, setStatus }) => {
    try {
      const res = await fetch(
        `https://api.discogs.com/database/search?q=${query}&${name}=${value}`,
        {
          headers,
          method: 'GET',
        }
      );
      const data = await res.json();
      console.log(data);
    } catch (e) {
      console.log(e);
    }
  });
};

const Search = () => {
  const typeFilter = useApiFilter({
    name: 'type',
    values: ['artist', 'master', 'release', 'label'],
  });

  const formatFilter = useApiFilter({
    name: 'format',
    values: ['album', 'CD', 'LP', 'Vinyl'],
  });

  const filters = [typeFilter, formatFilter];

  const [query, setQuery] = useState('');

  const handleQueryChange = (e) => {
    setQuery(e.target.value);
  };

  const cleanSearch = () => {
    setQuery('');
  };

  const handleSearch = async (e) => {
    e.preventDefault();
    search(query, filters);
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
