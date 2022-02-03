import React from 'react';
import fetchApi from '../../../lib/fetchApi';

const getReleaseId = async (type, id) => {
  const { data, error } = await fetchApi(`${type}s/${id}`);
  const { main_release: releaseId } = data;
  return releaseId;
};

const AddToCollection = ({ type, id, children }) => {
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
  return <div onClick={handleAddToCollection}>{children}</div>;
};

export default AddToCollection;
