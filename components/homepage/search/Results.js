import { Grid, GridItem } from '@chakra-ui/react';
import React from 'react';
import MainContainer from '../../shared/containers/MainContainer';
import Heading2 from '../../shared/headings/Heading2';
import MusicCover from './MusicCover';
import titlesMap from './_titlesMap';

const Results = ({ state, value }) => {
  return (
    <MainContainer>
      {state.status === 'success' && (
        <div>
          <Heading2>{titlesMap[value]}</Heading2>
          <Grid templateColumns='repeat(3, 1fr)' gap={4} as='ul'>
            {state.entities &&
              state.entities.map((e) => <MusicCover key={e.id} entity={e} />)}
          </Grid>
        </div>
      )}
    </MainContainer>
  );
};

export default Results;
