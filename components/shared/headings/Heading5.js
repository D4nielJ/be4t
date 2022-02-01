import { Heading } from '@chakra-ui/layout';
import React from 'react';

const Heading5 = ({ children, ...props }) => {
  return (
    <Heading fontSize='xs' fontWeight='400' opacity="0.6" {...props}>
      {children}
    </Heading>
  );
};

export default Heading5;
