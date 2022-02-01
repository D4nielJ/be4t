import { Heading } from '@chakra-ui/layout';
import React from 'react';

const Heading2 = ({ children, ...props }) => {
  return (
    <Heading mb={4} fontWeight='600' letterSpacing='tight' {...props}>
      {children}
    </Heading>
  );
};

export default Heading2;
