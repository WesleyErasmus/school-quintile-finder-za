import Hero from "../components/Hero";
import SearchBar from "../components/SearchBar";
import { DataProvider } from "../hooks/data-context.hook";

const Home = () => {
  return (
    <>
      <div className="max-w-3xl mx-auto text-center">
        <Hero />
        <DataProvider>
          <SearchBar />
        </DataProvider>
      </div>
    </>
  );
};

export default Home;
