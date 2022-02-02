import { Grid, HStack, Icon } from '@chakra-ui/react';
import React, { useEffect, useState } from 'react';
import MainContainer from '../../shared/containers/MainContainer';
import Heading2 from '../../shared/headings/Heading2';
import MusicCover from './MusicCover';
import titlesMap from './_titlesMap';
import searchOnApi from '../../../lib/searchOnApi';
import { VscChevronLeft, VscChevronRight } from 'react-icons/vsc';

const Results = ({ state, value }) => {
  const {
    status,
    entities,
    pagination: {
      urls: { prev, next },
    },
  } = state;

  

  return (
    <MainContainer>
      {status === 'success' && (
        <div>
          <HStack align='center' justify='space-between' mb={4}>
            <Heading2>{titlesMap[value]}</Heading2>
            <HStack>
              <Icon
                as={VscChevronLeft}
                onClick={() => handlePagination(prev)}
              />
              <Icon
                as={VscChevronRight}
                onClick={() => handlePagination(next)}
              />
            </HStack>
          </HStack>
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
