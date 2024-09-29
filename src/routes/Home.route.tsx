import SearchAndFilterSection from "../components/filters/SearchAndFilterSection";
import Hero from "../components/Hero";
import { DataProvider } from "../contexts/data-context.hook";

const Home = () => {
  return (
    <>
      <div className="">
        <Hero />
        <DataProvider>
          <SearchAndFilterSection />
        </DataProvider>
      </div>
    </>
  );
};

export default Home;
