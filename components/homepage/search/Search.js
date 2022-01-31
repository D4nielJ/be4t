import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import useApiFilter from '../../../lib/customHooks/useApiFilter';

const searchOnApi = async (query, name, value) => {
  const headers = {
    Accept: '*/*',
    'User-Agent': 'Daniel Jaramillo (https://www.d4nielj.me)',
    Authorization: `Discogs token=${process.env.NEXT_PUBLIC_DISCOGS_URL}`,
  };

  try {
    const res = await fetch(
      `https://api.discogs.com/database/search?q=${query}&${name}=${value}&per_page=5`,
      {
        headers,
        method: 'GET',
      }
    );
    const { pagination, results: entities } = await res.json();
    return { entities, pagination, error: null };
  } catch (e) {
    console.log(e);
    return { entities: null, pagination: null, error: e };
  }
};

const Search = () => {
  const typeName = 'type';
  const typeValues = ['artist', 'master', 'release', 'label'];
  const [typeValue, setTypeValue] = useState(typeValues[0]);
  const [typeState, setTypeState] = useState({
    entities: [],
    pagination: null,
    status: 'idle',
    error: null,
  });

  // const formatFilter = useApiFilter({
  //   name: 'format',
  //   values: ['album', 'CD', 'LP', 'Vinyl'],
  // });

  const [query, setQuery] = useState('');

  const handleQueryChange = (e) => {
    setQuery(e.target.value);
  };

  const handleFormSearch = async (e) => {
    e.preventDefault();
    const res = await searchOnApi(query, typeName, typeValue);
    setTypeState((prev) => ({ ...prev, ...res, status: 'success' }));
  };

  const cleanSearch = () => {
    setQuery('');
  };

  const handleSelectChange = (e, setValue) => {
    setValue(e.target.value);
  };

  useEffect(() => {
    const handleSearch = async () => {
      const res = await searchOnApi(query, typeName, typeValue);
      setTypeState((prev) => ({ ...prev, ...res, status: 'success' }));
    };

    if (query.length > 2) {
      handleSearch();
    }
  }, [query, typeValue]);

  return (
    <div>
      <form onSubmit={handleFormSearch}>
        <input onChange={handleQueryChange} type='text' value={query} />
        <button type='submit'>Search</button>
        <button type='button' onClick={cleanSearch}>
          Clean
        </button>
      </form>

      <div>
        <select
          value={typeValue}
          onChange={(e) => {
            handleSelectChange(e, setTypeValue);
          }}
        >
          {typeValues.map((v) => (
            <option key={v} value={v}>
              {v}
            </option>
          ))}
        </select>
      </div>

      {typeState.status === 'success' && (
        <div>
          <h2>{typeValue}</h2>
          <ul>
            {typeState.entities &&
              typeState.entities.map((e) => (
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
      {/* {formatFilter && formatFilter.status === 'success' && (
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
      )} */}
    </div>
  );
};

export default Search;
