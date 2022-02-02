import { Grid, HStack, Flex } from '@chakra-ui/react';
import React from 'react';
import MainContainer from '../../shared/containers/MainContainer';
import Heading2 from '../../shared/headings/Heading2';
import MusicCover from './MusicCover';
import titlesMap from './_titlesMap';
import Chevron from '../../shared/buttons/Chevron';

const Results = ({ state, value, handlePagination, setter }) => {
  const { status, entities } = state;

  let prevQ,
    nextQ = null;
  try {
    const {
      pagination: {
        urls: { prev, next },
      },
    } = state;
    prevQ = prev && prev.replace('https://api.discogs.com/', '');
    nextQ = next && next.replace('https://api.discogs.com/', '');
  } catch {}

  return (
    <MainContainer>
      {status === 'success' && (
        <div>
          <Flex align='center' justify='space-between' mb={4}>
            <Heading2>{titlesMap[value]}</Heading2>
            <HStack align='center'>
              <Chevron
                onClick={() => handlePagination(prevQ, setter)}
                disabled={!prevQ}
                isLeft
              />
              <Chevron
                onClick={() => handlePagination(nextQ, setter)}
                disabled={!nextQ}
              />
            </HStack>
          </Flex>
          <Grid templateColumns='repeat(3, 1fr)' gap={4} as='ul'>
            {entities &&
              entities.map((e) => <MusicCover key={e.id} entity={e} />)}
          </Grid>
        </div>
      )}
    </MainContainer>
  );
};

export default Results;
