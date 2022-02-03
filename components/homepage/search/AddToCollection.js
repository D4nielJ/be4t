import { Box } from '@chakra-ui/react';
import React, { useState } from 'react';
import fetchApi from '../../../lib/fetchApi';

const getReleaseId = async (type, id) => {
  const { data } = await fetchApi(`${type}s/${id}`);
  const { main_release: releaseId } = data;
  return releaseId;
};

const AddToCollection = ({ type, id, children }) => {
  const [disabled, setDisabled] = useState(false);

  const handleAddToCollection = async () => {
    setDisable(true);
    let releaseId = id;
    if (type !== 'release') {
      releaseId = await getReleaseId(type, id);
    }
    await fetchApi(
      `users/d4nielj/collection/folders/1/releases/${releaseId}`,
      'POST'
    );
    setDisable(false);
  };

  return (
    <Box
      type='button'
      onClick={handleAddToCollection}
      _disabled={{ opacity: 0.3 }}
      disabled={disabled}
    >
      {children}
    </Box>
  );
};

export default AddToCollection;
