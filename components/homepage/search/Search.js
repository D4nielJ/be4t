import React, { useState } from 'react';
import Image from 'next/image';
import searchOnApi from '../../../lib/searchOnApi';
import Results from './Results';
import SearchForm from './SearchForm';

const handleSearch = async (query, name, value, setter) => {
  const res = await searchOnApi(query, name, value);
  if (!res.error) {
    setter((prev) => ({ ...prev, ...res, status: 'success' }));
  } else {
    setter((prev) => ({ ...prev, ...res, status: 'error' }));
  }
};

const initialState = {
  entities: [],
  pagination: null,
  status: 'idle',
  error: null,
};

const Search = () => {
  const typeName = 'type';
  const typeValues = ['artist', 'master', 'release', 'label'];
  const [typeValue, setTypeValue] = useState(typeValues[0]);
  const [typeState, setTypeState] = useState(initialState);

  const formatName = 'format';
  const formatValues = ['album', 'CD', 'LP', 'Vinyl'];
  const [formatValue, setFormatValue] = useState(formatValues[0]);
  const [formatState, setFormatState] = useState(initialState);

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
    setTypeState(initialState);
    setFormatState(initialState);
  };

  const handleSelectChange = (e, setValue) => {
    setValue(e.target.value);
  };

  const searchInputProps = {
    handleFormSearch,
    handleQueryChange,
    cleanSearch,
    query,
    handleSelectChange,
    typeValue,
    typeValues,
    setTypeValue,
    formatValue,
    formatValues,
    setFormatValue,
  };

  return (
    <div>
      <SearchForm {...searchInputProps} />

      {/* <Results /> */}
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

      {/* <Results /> */}
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
