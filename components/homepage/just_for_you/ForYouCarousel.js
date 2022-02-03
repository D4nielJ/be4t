import { HStack } from '@chakra-ui/react';
import React, { useEffect } from 'react';
import fetchApi from '../../../lib/fetchApi';
import useApiEntities from '../../../lib/useApiEntities';
import MainContainer from '../../shared/containers/MainContainer';
import { Heading3 } from '../../shared/headings';
import ArtistCover from './ArtistCover';

const fetchEntities = async (setEntities, setStatus) => {
  setStatus('loading');
  const { data } = await fetchApi(
    'database/search?type=artist&per_page=6&page=2'
  );
  const { results } = data;
  setEntities(results);
  setStatus('fulfilled');
};

const ForYou = () => {
  const [{ entities, status }, setEntities, setStatus] = useApiEntities();

  useEffect(() => {
    if (status === 'idle') {
      fetchEntities(setEntities, setStatus);
    }
  }, [status, setEntities, setStatus]);

  return (
    <MainContainer>
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
