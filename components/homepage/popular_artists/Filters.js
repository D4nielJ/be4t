import { HStack, Box, Text } from '@chakra-ui/react';
import React from 'react';

const Filters = () => {
  const filters = ['New', 'Popular', 'Charts', 'Favourite', 'Top 100'];

  return (
    <HStack as='ul' spacing={8} overflowX='auto' pb={4} pr={4}>
      <Box as='li' listStyleType='none'>
        <Text>All</Text>
      </Box>
      {filters.map((f) => (
        <Box key={f} as='li' listStyleType='none' opacity='0.4'>
          <Text whiteSpace='nowrap'>{f}</Text>
        </Box>
      ))}
    </HStack>
  );
};

export default Filters;
