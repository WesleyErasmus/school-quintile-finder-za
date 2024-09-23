import SearchAndFilterSection from "../components/filters/SearchAndFilterSection";
import Hero from "../components/Hero";
import { DataProvider } from "../contexts/data-context.hook";

const Home = () => {
  return (
    <>
      <DataProvider>
        <Hero />
        <SearchAndFilterSection />
      </DataProvider>
    </>
  );
};

export default Home;
