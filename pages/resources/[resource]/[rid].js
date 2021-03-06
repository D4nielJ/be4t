import { useRouter } from 'next/router';
import React, { useEffect, useState } from 'react';
import MainLayout from '../../../components/layouts/MainLayout';
import NavigationNavbar from '../../../components/navigationNavbar/NavigationNavbar';
import ArtistsDetails from '../../../components/resources/ArtistsDetails';
import ResourceDetails from '../../../components/resources/ResourceDetails';
import fetchApi from '../../../lib/fetchApi';
import LoadingScreen from '../../../components/shared/loading_screen/LoadingScreen';

const Resource = () => {
  const router = useRouter();
  const { resource, rid } = router.query;
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);
  const [status, setStatus] = useState('loading');

  useEffect(() => {
    const requestToApi = async () => {
      const { data, error: e } = await fetchApi(`${resource}s/${rid}`);
      setData(data);
      setError(e);
      if (e) {
        setStatus('error');
      } else {
        setStatus('fulfilled');
      }
    };

    if (resource && rid) {
      requestToApi();
    }
  }, [resource, rid]);

  if (status === 'loading') {
    return <LoadingScreen />;
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
