import { Heading } from '@chakra-ui/layout';
import React from 'react';

const Heading4 = ({ children, ...props }) => {
  return (
    <Heading as="h4" fontSize='sm' fontWeight='500' {...props}>
      {children}
    </Heading>
  );
};

export default Heading4;
