import { Grid, GridItem } from '@chakra-ui/react';
import Image from 'next/image';
import React from 'react';
import MainContainer from '../../shared/containers/MainContainer';
import Heading2 from '../../shared/headings/Heading2';
import titlesMap from './_titlesMap';

const Results = ({ state, value }) => {
  return (
    <MainContainer>
      {state.status === 'success' && (
        <div>
          <Heading2>{titlesMap[value]}</Heading2>
          <Grid templateColumns='repeat(3, 1fr)' gap={4} as='ul'>
            {state.entities &&
              state.entities.map((e) => (
                <GridItem key={e.id}>
                  <Image
                    src={e.cover_image}
                    alt={e.title}
                    width='200px'
                    height='200px'
                  />
                  <p>{e.title}</p>
                </GridItem>
              ))}
          </Grid>
        </div>
      )}
    </MainContainer>
  );
};

export default Results;
