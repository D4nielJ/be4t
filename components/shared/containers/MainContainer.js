import { Box } from '@chakra-ui/react';
import React from 'react';

const MainContainer = ({ children, ...props }) => {
  return (
    <Box maxWidth='container.xl' w='100%' px={5} {...props}>
      {children}
    </Box>
  );
};

export default MainContainer;
