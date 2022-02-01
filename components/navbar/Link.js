import { VStack, Icon, Text } from '@chakra-ui/react';
import React from 'react';
import NextLink from 'next/link';

const Link = ({ href, as, text }) => {
  return (
    <NextLink href={href}>
      <a>
        <VStack spacing={1}>
          <Icon fontSize='2xl' as={as} />
          <Text fontSize='xs'>{text}</Text>
        </VStack>
      </a>
    </NextLink>
  );
};

export default Link;
