import React from 'react';
import CollectionList from '../components/collection/CollectionList';
import Header from '../components/collection/Header';
import MainLayout from '../components/layouts/MainLayout';

const Collection = () => {
  return (
    <MainLayout>
      <Header />
      <CollectionList />
    </MainLayout>
  );
};

export default Collection;
