import { HStack } from '@chakra-ui/react';
import React from 'react';
import MainContainer from '../../shared/containers/MainContainer';
import { Heading3 } from '../../shared/headings';
import ArtistCover from './ArtistCover';

const ForYou = ({ entities }) => {
  return (
    <MainContainer pr={0}>
      <Heading3 mb={6}>Just for you</Heading3>
      <HStack
        as='ul'
        overflowX='auto'
        className='frs-hide-scroll'
        spacing={8}
        pb={6}
        pr={4}
        align='flex-start'
      >
        {entities.map((e) => (
          <ArtistCover key={e.id} artist={e} />
        ))}
      </HStack>
    </MainContainer>
  );
};

export default ForYou;
