import { useRouter } from 'next/router';
import React from 'react';
import MainLayout from '../../../components/layouts/MainLayout';
import searchOnApi from '../../../lib/searchOnApi';

const DISCOGS_URL = 'https://api.discogs.com/';

const Resource = () => {
  const router = useRouter();
  const { resource, rid } = router.query;

  useEffect(() => {
    if (resource && rid) {
      searchOnApi(`${DISCOGS_URL}/${resource}s/${rid}`);
    }
  });

  return (
    <MainLayout>
      <div>
        <p>{`resource: ${resource}`}</p>
        <p>{`id: ${rid}`}</p>
      </div>
    </MainLayout>
  );
};

export default Resource;
