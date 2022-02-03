import ForYou from '../components/homepage/just_for_you/ForYouCarousel';
import PopularCarousel from '../components/homepage/popular_artists/PopularCarousel';
import Search from '../components/homepage/search/Search';
import MainLayout from '../components/layouts/MainLayout';

export default function Home() {
  return (
    <MainLayout>
      <Search />
      <PopularCarousel />
      <ForYou />
      {/* Navbar */}
    </MainLayout>
  );
}
