import React from 'react';

const ArtistCover = ({ artist }) => {
  const { title } = artist;
  return <div>{title}</div>;
};

export default ArtistCover;
