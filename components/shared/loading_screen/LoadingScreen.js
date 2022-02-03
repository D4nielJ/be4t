import { Flex, Heading, Box } from '@chakra-ui/react';
import React from 'react';

const LoadingScreen = () => {
  return (
    <Flex
      justify='center'
      align='center'
      position='absolute'
      top={0}
      left={0}
      h='100vh'
      w='full'
      bg='black'
      zIndex='10'
    >
      <Heading
        fontSize='4xl'
        fontWeight='800'
        letterSpacing='20px'
        textAlign='center'
        fontStyle='italic'
        color='white'
        position='relative'
        bottom={6}
        left={1.5}
        className='bgAnimation'
        bgClip='text'
      >
        BE4T
      </Heading>
    </Flex>
  );
};

export default LoadingScreen;
