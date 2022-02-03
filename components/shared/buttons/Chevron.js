import { Box, Icon } from '@chakra-ui/react';
import React from 'react';
import { VscChevronLeft, VscChevronRight } from 'react-icons/vsc';

const Chevron = ({ onClick, disabled, fontSize = 'lg', isLeft, ...props }) => {
  return (
    <Box
      as='button'
      type='button'
      display='flex'
      opacity={disabled && '0.22'}
      onClick={onClick}
      disabled={disabled}
      {...props}
    >
      <Icon
        fontSize={fontSize}
        as={isLeft ? VscChevronLeft : VscChevronRight}
      />
    </Box>
  );
};

export default Chevron;
