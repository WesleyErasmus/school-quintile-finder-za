import FilterDropdowns from "../components/filters/FilterDropdowns";
import Hero from "../components/Hero";
import RenderFilterResults from "../components/RenderFilterResults";
import RenderSearchResults from "../components/RenderSearchResults";
import SearchBar from "../components/SearchBar";
import { DataProvider } from "../contexts/data-context.hook";

const Home = () => {
  return (
    <>
      <div className="max-w-3xl mx-auto">
        <DataProvider>
          <Hero />
          <SearchBar />
          <FilterDropdowns />
          <RenderSearchResults />
          <RenderFilterResults />
        </DataProvider>
      </div>
    </>
  );
};

export default Home;
