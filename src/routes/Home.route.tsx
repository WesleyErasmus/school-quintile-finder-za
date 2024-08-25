import Hero from "../components/Hero";
import RenderSearchResults from "../components/RenderSearchResults";
import SearchBar from "../components/SearchBar";
import { DataProvider } from "../hooks/data-context.hook";

const Home = () => {
  return (
    <>
      <div className="max-w-3xl mx-auto">
        <Hero />
        <DataProvider>
          <SearchBar />
          <RenderSearchResults />
        </DataProvider>
      </div>
    </>
  );
};

export default Home;
