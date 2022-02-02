import React from 'react';

const ListItem = ({ item }) => {
  const {
    date_added: dateAdded,
    basic_information: { title, year, genres },
  } = item ?? null;
  return <div>{title}</div>;
};

export default ListItem;
