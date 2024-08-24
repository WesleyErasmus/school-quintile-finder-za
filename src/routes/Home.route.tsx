import PageHero from "../components/page-hero";
import SearchBar from "../components/search-bar";

const Home = () => {
  return (
    <>
      <div className="max-w-3xl mx-auto text-center">
        <PageHero />
        <SearchBar />
      </div>
    </>
  );
};

export default Home;
