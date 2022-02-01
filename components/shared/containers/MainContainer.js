import { Box } from '@chakra-ui/react';
import React from 'react';

const MainContainer = ({ children, ...props }) => {
  return (
    <Box maxWidth='container.xl' px={5} {...props}>
      {children}
    </Box>
  );
};

export default MainContainer;
