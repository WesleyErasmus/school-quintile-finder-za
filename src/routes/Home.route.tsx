import SearchAndFilterSection from "../components/SearchAndFilterSection";
import Hero from "../components/Hero";
import LoaderFullPage from "../components/LoaderFullPage";
import { DataProvider } from "../contexts/data-context.hook";

const Home = () => {
  return (
    <>
      <DataProvider>
        <LoaderFullPage />
        <Hero />
        <SearchAndFilterSection />
      </DataProvider>
    </>
  );
};

export default Home;
