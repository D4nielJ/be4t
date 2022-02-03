import { Icon } from '@chakra-ui/react';
import React from 'react';
import { RiAddCircleFill } from 'react-icons/ri';
import fetchApi from '../../../lib/fetchApi';

const getReleaseId = async (type, id) => {
  const { data, error } = await fetchApi(`${type}s/${id}`);
  const { main_release: releaseId } = data;
  return releaseId;
};

const AddToCollection = ({ type, id, ...props }) => {
  const handleAddToCollection = async () => {
    let releaseId = id;
    if (type !== 'release') {
      releaseId = await getReleaseId(type, id);
    }
    const { data, error } = await fetchApi(
      `users/d4nielj/collection/folders/1/releases/${releaseId}`,
      'POST'
    );
    console.log(data);
  };
  return (
    <div>
      <Icon
        onClick={handleAddToCollection}
        as={RiAddCircleFill}
        position='absolute'
        right={2}
        top={2}
        {...props}
      />
    </div>
  );
};

export default AddToCollection;
