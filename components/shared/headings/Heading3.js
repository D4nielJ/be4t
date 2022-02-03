import { Heading } from '@chakra-ui/layout';
import React from 'react';

const Heading3 = ({ children, ...props }) => {
  return (
    <Heading
      as='h3'
      fontSize='xl'
      fontWeight='600'
      letterSpacing='tight'
      {...props}
    >
      {children}
    </Heading>
  );
};

export default Heading3;
