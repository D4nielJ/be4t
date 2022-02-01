import React, { useState } from 'react';
import searchOnApi from '../../../lib/searchOnApi';
import Results from './Results';
import SearchForm from './SearchForm';
import { VStack } from '@chakra-ui/react';

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
  const formatValues = ['album', 'CD', 'LP', 'vinyl'];
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

  const typeResultsProps = {
    state: typeState,
    value: typeValue,
  };

  const formatResultsProps = {
    state: formatState,
    value: formatValue,
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
