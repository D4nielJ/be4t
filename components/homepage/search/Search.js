import React, { useState } from 'react';
import Image from 'next/image';
import useApiFilter from '../../../lib/customHooks/useApiFilter';

const search = async (query, filters) => {
  const headers = {
    Accept: '*/*',
    'User-Agent': 'Daniel Jaramillo (https://www.d4nielj.me)',
    Authorization: `Discogs token=${process.env.NEXT_PUBLIC_DISCOGS_URL}`,
  };

  filters.forEach(
    async ({ name, value, setEntities, setStatus, setPagination }) => {
      setStatus('loading');
      try {
        const res = await fetch(
          `https://api.discogs.com/database/search?q=${query}&${name}=${value}&per_page=5`,
          {
            headers,
            method: 'GET',
          }
        );
        const { pagination, results } = await res.json();
        setEntities(results);
        setPagination(pagination);
      } catch (e) {
        setStatus('error');
        console.log(e);
      }
      setStatus('success');
    }
  );
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
      {typeFilter && typeFilter.status === 'success' && (
        <div>
          <h2>{typeFilter.value}</h2>
          <ul>
            {typeFilter.entities.map((e) => (
              <div key={e.id}>
                <Image
                  src={e.cover_image}
                  alt={e.title}
                  width='200px'
                  height='200px'
                />
                <p>{e.title}</p>
              </div>
            ))}
          </ul>
        </div>
      )}
      {formatFilter && formatFilter.status === 'success' && (
        <div>
          <h2>{formatFilter.value}</h2>
          <ul>
            {formatFilter.entities.map((e) => (
              <div key={e.id}>
                <Image
                  src={e.cover_image}
                  alt={e.title}
                  width='200px'
                  height='200px'
                />
                <p>{e.title}</p>
              </div>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default Search;
