import { useRouter } from 'next/router';
import React, { useEffect, useState } from 'react';
import MainLayout from '../../../components/layouts/MainLayout';
import NavigationNavbar from '../../../components/navigationNavbar/NavigationNavbar';
import ArtistsDetails from '../../../components/resources/ArtistsDetails';
import ResourceDetails from '../../../components/resources/ResourceDetails';
import fetchApi from '../../../lib/fetchApi';

const DISCOGS_URL = 'https://api.discogs.com/';

const Resource = () => {
  const router = useRouter();
  const { resource, rid } = router.query;
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);
  const [status, setStatus] = useState('loading');

  useEffect(() => {
    const requestToApi = async () => {
      const { data, error } = await fetchApi(
        `${DISCOGS_URL}/${resource}s/${rid}`
      );
      setData(data);
      setError(error);
      setStatus('fulfilled');
    };

    if (resource && rid) {
      requestToApi();
    }
  }, [resource, rid]);

  if (status === 'loading') {
    return <div>Loading</div>;
  }

  return (
    <MainLayout>
      <NavigationNavbar />
      {status === 'fulfilled' && (
        <>
          {resource === 'artist' ? (
            <ArtistsDetails data={data} />
          ) : (
            <ResourceDetails data={data} />
          )}
        </>
      )}
    </MainLayout>
  );
};

export default Resource;
