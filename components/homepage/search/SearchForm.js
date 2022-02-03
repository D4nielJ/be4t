import {
  Input,
  InputGroup,
  InputLeftElement,
  InputRightElement,
  Icon,
  Select,
  HStack,
  Flex,
  Box,
} from '@chakra-ui/react';
import { RiSearchLine, RiCloseLine } from 'react-icons/ri';
import { IoIosOptions } from 'react-icons/io';
import React, { useEffect, useState } from 'react';
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
  showClean,
}) => {
  const [showFilters, setShowFilters] = useState(false);

  return (
    <MainContainer maxWidth='container.xl' pt={5} pb={2}>
      <Flex align='center' gap={2} as='form' onSubmit={handleFormSearch}>
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
            inputMode='search'
            onChange={handleQueryChange}
            type='text'
            value={query}
            border='none'
          />
          <InputRightElement>
            <Flex justifyContent='flex-end'>
              {showClean && (
                <button type='button' onClick={cleanSearch}>
                  <Icon
                    fontSize='xl'
                    as={RiCloseLine}
                    position='relative'
                    top='3px'
                  />
                </button>
              )}
            </Flex>
          </InputRightElement>
        </InputGroup>

        <button
          type='button'
          onClick={() => {
            setShowFilters((prev) => !prev);
          }}
        >
          <Icon fontSize='xl' as={IoIosOptions} position='relative' />
        </button>
      </Flex>
      {showFilters && (
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
      )}
    </MainContainer>
  );
};

export default SearchForm;
