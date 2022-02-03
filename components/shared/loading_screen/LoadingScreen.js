import { Flex, Heading, Link } from '@chakra-ui/react';
import React from 'react';
import { Heading4 } from '../headings';

const LoadingScreen = () => {
  return (
    <Flex
      direction='column'
      justify='center'
      align='center'
      position='absolute'
      top={0}
      left={0}
      h='100vh'
      w='full'
      bg='black'
      zIndex='10'
      color='white'
    >
      <Heading
        fontSize='4xl'
        fontWeight='800'
        letterSpacing='20px'
        textAlign='center'
        fontStyle='italic'
        position='relative'
        left={1.5}
        className='bgAnimation'
        bgClip='text'
      >
        BE4T
      </Heading>
      <Heading4 textAlign='center'>
        Powered by{' '}
        <Link
          href='https://www.discogs.com/'
          target='_blank'
          rel='noopener noreferrer'
          textDecor='underline'
        >
          Discogs
        </Link>
      </Heading4>
    </Flex>
  );
};

export default LoadingScreen;
