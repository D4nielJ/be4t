import React, { useState } from 'react';
import { Box } from '@chakra-ui/react';
import fetchApi from '../../../lib/fetchApi';

const RemoveFromCollection = ({
  releaseId,
  instanceId,
  setLoadCollection,
  children,
}) => {
  const [disabled, setDisabled] = useState(false);

  const handleRemoveFromCollection = async () => {
    setDisabled(true);
    await fetchApi(
      `users/d4nielj/collection/folders/1/releases/${releaseId}/instances/${instanceId}`,
      'DELETE'
    );
    setDisabled(false);
    setLoadCollection(true);
  };

  return (
    <Box
      as='button'
      type='button'
      onClick={handleRemoveFromCollection}
      _disabled={{ opacity: 0.3 }}
      disabled={disabled}
    >
      {children}
    </Box>
  );
};

export default RemoveFromCollection;
