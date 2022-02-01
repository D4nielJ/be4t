import {
  Input,
  InputGroup,
  InputLeftElement,
  InputRightElement,
  Icon,
  Select,
  HStack,
} from '@chakra-ui/react';
import { RiSearchLine, RiCloseLine } from 'react-icons/ri';
import React from 'react';
import MainContainer from '../../shared/containers/MainContainer';
import titlesMap from './_titlesMap';

const SearchForm = ({
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
}) => {
  return (
    <MainContainer maxWidth='container.xl' pt={5} pb={2}>
      <form onSubmit={handleFormSearch}>
        <InputGroup mb={2}>
          <InputLeftElement>
            <button type='submit'>
              <Icon
                fontSize='xl'
                as={RiSearchLine}
                position='relative'
                top='3px'
              />
            </button>
          </InputLeftElement>
          <Input
            name='search'
            onChange={handleQueryChange}
            type='text'
            value={query}
            border='none'
          />
          <InputRightElement>
            <button type='button' onClick={cleanSearch}>
              <Icon
                fontSize='xl'
                as={RiCloseLine}
                position='relative'
                top='2px'
              />
            </button>
          </InputRightElement>
        </InputGroup>
      </form>
      <HStack>
        <Select
          value={typeValue}
          onChange={(e) => {
            handleSelectChange(e, setTypeValue);
          }}
          variant='filled'
          size='sm'
          bg='gray.400'
          color='black'
        >
          {typeValues.map((v) => (
            <option key={v} value={v}>
              {titlesMap[v]}
            </option>
          ))}
        </Select>
        <Select
          value={formatValue}
          onChange={(e) => {
            handleSelectChange(e, setFormatValue);
          }}
          variant='filled'
          size='sm'
          bg='gray.400'
          color='black'
        >
          {formatValues.map((v) => (
            <option key={v} value={v}>
              {titlesMap[v]}
            </option>
          ))}
        </Select>
      </HStack>
    </MainContainer>
  );
};

export default SearchForm;
