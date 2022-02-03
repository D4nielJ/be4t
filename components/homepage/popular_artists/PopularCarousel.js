import { HStack } from '@chakra-ui/react';
import React, { useEffect } from 'react';
import fetchApi from '../../../lib/fetchApi';
import useApiEntities from '../../../lib/useApiEntities';
import MainContainer from '../../shared/containers/MainContainer';
import { Heading2 } from '../../shared/headings';
import ArtistCover from './ArtistCover';
import Filters from './Filters';

const fetchEntities = async (setEntities, setStatus, setError) => {
  setStatus('loading');
  const { data } = await fetchApi('database/search?type=artist&per_page=6');
  const { results } = data;
  setEntities(results);
  setStatus('fulfilled');
};

const PopularCarousel = () => {
  const [{ entities, status }, setEntities, setStatus, setError] =
    useApiEntities();

  useEffect(() => {
    if (status === 'idle') {
      fetchEntities(setEntities, setStatus, setError);
    }
  }, [status, setEntities, setStatus, setError]);

  return (
    <MainContainer mb={8}>
      <Heading2 mb={4}>Browse</Heading2>
      <Filters />
      <HStack
        as='ul'
        overflowX='auto'
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
