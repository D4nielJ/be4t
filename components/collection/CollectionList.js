import { VStack, Box } from '@chakra-ui/react';
import React from 'react';
import MainContainer from '../shared/containers/MainContainer';

const CollectionList = () => {
  return (
    <MainContainer>
      <VStack as='ul'>
        {[1, 2, 3].map((item) => (
          <Box as='li' listStyleType='none' key='item'>
            {item}
          </Box>
        ))}
      </VStack>
    </MainContainer>
  );
};

export default CollectionList;
