import React, { useEffect, useState } from 'react';
import Image from 'next/image';

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

  const formatName = 'format';
  const formatValues = ['album', 'CD', 'LP', 'Vinyl'];
  const [formatValue, setFormatValue] = useState(formatValues[0]);
  const [formatState, setFormatState] = useState({
    entities: [],
    pagination: null,
    status: 'idle',
    error: null,
  });

  const [query, setQuery] = useState('');

  const handleQueryChange = (e) => {
    setQuery(e.target.value);
  };

  const handleFormSearch = async (e) => {
    e.preventDefault();
    const typeRes = await searchOnApi(query, typeName, typeValue);
    setTypeState((prev) => ({ ...prev, ...typeRes, status: 'success' }));

    const formatRes = await searchOnApi(query, formatName, formatValue);
    setFormatState((prev) => ({ ...prev, ...formatRes, status: 'success' }));
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

  useEffect(() => {
    const handleSearch = async () => {
      const res = await searchOnApi(query, formatName, formatValue);
      setFormatState((prev) => ({ ...prev, ...res, status: 'success' }));
    };

    if (query.length > 2) {
      handleSearch();
    }
  }, [query, formatValue]);

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

      <div>
        <select
          value={formatValue}
          onChange={(e) => {
            handleSelectChange(e, setFormatValue);
          }}
        >
          {formatValues.map((v) => (
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

      {formatState.status === 'success' && (
        <div>
          <h2>{formatValue}</h2>
          <ul>
            {formatState.entities &&
              formatState.entities.map((e) => (
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
