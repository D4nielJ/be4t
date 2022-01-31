import React, { useState } from 'react';
import Image from 'next/image';
import searchOnApi from '../../../lib/searchOnApi';

const handleSearch = async (query, name, value, setter) => {
  const res = await searchOnApi(query, name, value);
  if (!res.error) {
    setter((prev) => ({ ...prev, ...res, status: 'success' }));
  } else {
    setter((prev) => ({ ...prev, ...res, status: 'error' }));
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
    handleSearch(query, typeName, typeValue, setTypeState);
    handleSearch(query, formatName, formatValue, setFormatState);
  };

  const cleanSearch = () => {
    setQuery('');
  };

  const handleSelectChange = (e, setValue) => {
    setValue(e.target.value);
  };

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
