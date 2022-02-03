import { useEffect, useState } from 'react';
import ForYou from '../components/homepage/just_for_you/ForYouCarousel';
import PopularCarousel from '../components/homepage/popular_artists/PopularCarousel';
import Search from '../components/homepage/search/Search';
import MainLayout from '../components/layouts/MainLayout';
import LoadingScreen from '../components/shared/loading_screen/LoadingScreen';
import fetchApi from '../lib/fetchApi';
import useApiEntities from '../lib/useApiEntities';

const fetchEntities = async (setEntities, setStatus, page) => {
  setStatus('loading');
  const { data } = await fetchApi(
    `database/search?type=artist&per_page=6&page=${page}`
  );
  const { results } = data;
  setEntities(results);
  setStatus('fulfilled');
};

const Home = () => {
  const [
    { entities: popularEntities, status: popularStatus },
    setPopularEntities,
    setPopularStatus,
  ] = useApiEntities();

  const [
    { entities: forYouEntities, status: forYouStatus },
    setForYouEntities,
    setForYouStatus,
  ] = useApiEntities();

  useEffect(() => {
    if (popularStatus === 'idle') {
      fetchEntities(setPopularEntities, setPopularStatus, '1');
    }
  }, [popularStatus, setPopularEntities, setPopularStatus]);

  useEffect(() => {
    if (forYouStatus === 'idle') {
      fetchEntities(setForYouEntities, setForYouStatus, '2');
    }
  }, [forYouStatus, setForYouEntities, setForYouStatus]);

  const [showLoadingScreen, setShowLoadingScreen] = useState(true);

  useEffect(() => {
    if (popularStatus === 'fulfilled' && forYouStatus === 'fulfilled') {
      setShowLoadingScreen(false);
    }
  }, [popularStatus, forYouStatus]);

  return (
    <>
      {showLoadingScreen ? (
        <LoadingScreen />
      ) : (
        <MainLayout>
          <Search />
          <PopularCarousel entities={popularEntities} />
          <ForYou entities={forYouEntities} />
        </MainLayout>
      )}
    </>
  );
};

export default Home;
