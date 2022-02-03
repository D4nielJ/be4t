import React, { useState } from 'react';
import Results from './Results';
import SearchForm from './SearchForm';
import { VStack } from '@chakra-ui/react';
import fetchApi from '../../../lib/fetchApi';

const handleSearchRequest = async (query, setter) => {
  const { data, error } = await fetchApi(query);
  if (!error) {
    const { pagination, results: entities } = data;
    setter((prev) => ({ ...prev, pagination, entities, status: 'success' }));
  } else {
    setter((prev) => ({ ...prev, status: 'error' }));
  }
};

const initialState = {
  entities: [],
  pagination: {},
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
    const typeQuery = `database/search?q=${query}&${typeName}=${typeValue}&per_page=6`;
    const formatQuery = `database/search?q=${query}&${formatName}=${formatValue}&per_page=6`;
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
    <VStack spacing={6} mb={8}>
      <SearchForm {...searchInputProps} />
      {typeState.entities.length > 0 && <Results {...typeResultsProps} />}
      {formatState.entities.length > 0 && <Results {...formatResultsProps} />}
    </VStack>
  );
};

export default Search;
