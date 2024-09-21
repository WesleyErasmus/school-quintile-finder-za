import SearchAndFilterSection from "../components/filters/SearchAndFilterSection";
import Hero from "../components/Hero";
import RenderFilterResults from "../components/RenderFilterResults";
import RenderSearchResults from "../components/RenderSearchResults";
import { DataProvider } from "../contexts/data-context.hook";

const Home = () => {
  return (
    <>
      <DataProvider>
        <Hero />
        <SearchAndFilterSection />
        <RenderSearchResults />
        <RenderFilterResults />
      </DataProvider>
    </>
  );
};

export default Home;
