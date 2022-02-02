import React, { useState } from 'react';
import searchOnApi from '../../../lib/searchOnApi';
import Results from './Results';
import SearchForm from './SearchForm';
import { VStack } from '@chakra-ui/react';

const DISCOGS_URL = 'https://api.discogs.com/database/search?q=';

const handleSearchRequest = async (query, setter) => {
  const res = await searchOnApi(query);
  if (!res.error) {
    setter((prev) => ({ ...prev, ...res, status: 'success' }));
  } else {
    setter((prev) => ({ ...prev, ...res, status: 'error' }));
  }
};

const initialState = {
  entities: [],
  pagination: {
    urls: {
      first: null,
      next: null,
      prev: null,
      last: null,
    },
  },
  status: 'idle',
  error: null,
};

const Search = () => {
  const typeName = 'type';
  const typeValues = ['artist', 'master', 'release', 'label'];
  const [typeValue, setTypeValue] = useState(typeValues[0]);
  const [typeState, setTypeState] = useState(initialState);

  const formatName = 'format';
  const formatValues = ['album', 'CD', 'LP', 'vinyl'];
  const [formatValue, setFormatValue] = useState(formatValues[0]);
  const [formatState, setFormatState] = useState(initialState);

  const [query, setQuery] = useState('');

  const handleQueryChange = (e) => {
    setQuery(e.target.value);
  };

  const handleFormSearch = async (e) => {
    e.preventDefault();
    const typeQuery = `${DISCOGS_URL}${query}&${typeName}=${typeValue}&per_page=6`;
    const formatQuery = `${DISCOGS_URL}${query}&${formatName}=${formatValue}&per_page=6`;
    handleSearchRequest(typeQuery, setTypeState);
    handleSearchRequest(formatQuery, setFormatState);
  };

  const cleanSearch = () => {
    setQuery('');
    setTypeState(initialState);
    setFormatState(initialState);
  };

  const handleSelectChange = (e, setValue) => {
    setValue(e.target.value);
  };

  const handlePagination = (query, setter) => {
    handleSearchRequest(query, setter);
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

  const typeResultsProps = {
    state: typeState,
    value: typeValue,
    setter: setTypeState,
    handlePagination,
  };

  const formatResultsProps = {
    state: formatState,
    value: formatValue,
    setter: setFormatState,
    handlePagination,
  };

  return (
    <VStack spacing={6}>
      <SearchForm {...searchInputProps} />
      <Results {...typeResultsProps} />
      <Results {...formatResultsProps} />
    </VStack>
  );
};

export default Search;
