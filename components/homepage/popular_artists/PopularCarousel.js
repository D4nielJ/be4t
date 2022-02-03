import { HStack } from '@chakra-ui/react';
import React from 'react';
import MainContainer from '../../shared/containers/MainContainer';
import { Heading2 } from '../../shared/headings';
import ArtistCover from './ArtistCover';
import Filters from './Filters';

const PopularCarousel = ({ entities }) => {
  return (
    <MainContainer mb={6} pr={0}>
      <Heading2 mb={4}>Browse</Heading2>
      <Filters />
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

export default PopularCarousel;
