import React from 'react';
import { Box } from '@chakra-ui/react';

const RemoveFromCollection = ({ children }) => {
  return (
    <Box
      as='button'
      type='button'
      onClick={handleRemoveFromCollection}
      _disabled={{ opacity: 0.3 }}
      disabled={disabled}
    >
      {children}
    </Box>
  );
};

export default RemoveFromCollection;
