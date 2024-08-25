import PageHero from "../components/page-hero";
import SearchBar from "../components/search-bar";
import { DataProvider } from "../hooks/data-context.hook";

const Home = () => {
  return (
    <>
      <div className="max-w-3xl mx-auto text-center">
        <PageHero />
        <DataProvider>
          <SearchBar />
        </DataProvider>
      </div>
    </>
  );
};

export default Home;
