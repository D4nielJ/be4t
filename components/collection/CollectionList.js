import React, { useEffect, useState } from 'react';
import { VStack } from '@chakra-ui/react';
import fetchApi from '../../lib/fetchApi';
import useApiEntities from '../../lib/useApiEntities';
import MainContainer from '../shared/containers/MainContainer';
import ListItem from './ListItem';

const handleRequestCollection = async (
  query,
  setEntities,
  setStatus,
  setError
) => {
  setStatus('loading');
  const { data, error } = await fetchApi(query);
  if (!error) {
    const { releases } = data;
    setEntities(releases);
    setStatus('fulfilled');
  } else {
    console.log(error);
    setStatus('error');
    setError(error);
  }
};

const CollectionList = () => {
  const [state, setEntities, setStatus, setError] = useApiEntities();
  const { status } = state;

  useEffect(() => {
    if (status === 'idle') {
      handleRequestCollection(
        '/users/d4nielj/collection/folders/0/releases',
        setEntities,
        setStatus,
        setError
      );
    }
  }, [status, setEntities, setStatus, setError]);

  if (status === 'loading') {
    return <div>Loading...</div>;
  }

  return (
    <MainContainer>
      <VStack as='ul' gap={2} mt={4}>
        {state.status === 'fulfilled' &&
          state.entities.map((item) => (
            <ListItem
              key={item.id}
              item={item}
              setCollectionStatus={setStatus}
            />
          ))}
      </VStack>
    </MainContainer>
  );
};

export default CollectionList;
