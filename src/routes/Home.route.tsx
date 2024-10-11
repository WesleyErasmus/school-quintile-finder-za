// Data imports
import { useDataContext } from "../contexts/data-context.hook";

// Component imports
import TopNavbar from "../components/TopNavbar";
import Hero from "../components/Hero";
import SearchBar from "../components/SearchBar/SearchBar";
import RenderFilterResults from "../components/Filtering/RenderFilterResults";
import FilterSectionHeader from "../components/Filtering/FilterSectionHeader";
import FilterOptionsMenu from "../components/Filtering/FilterOptionsMenu";
import Alert from "../components/Alert";
import Footer from "../components/Footer";

// HeroIcons
import { InformationCircleIcon } from "@heroicons/react/24/solid";

const Home = () => {
  const { filteredData } = useDataContext();
  return (
    <div className="min-h-screen">
      <TopNavbar />
      <Hero />
      <div className="mx-auto max-w-[1230px] w-full flex flex-col md:flex-row-reverse md:items-start md:flex-wrap lg:flex-nowrap lg:pt-8">
        <div className="w-full flex flex-col">
          <SearchBar />
          <div className="w-full hidden sm:block">
            <RenderFilterResults />
          </div>
        </div>
        <div>
          <FilterSectionHeader />
          <div className="sticky top-0">
            <FilterOptionsMenu />
          </div>
          <div className="lg:hidden pb-16 px-4">
            {!filteredData && (
              <Alert
                icon={
                  <InformationCircleIcon
                    aria-hidden="true"
                    className="h-6 w-6 text-blue-400"
                  />
                }
                message={
                  "Use the Generate Custom Data Table button to create a table by using the filters. Easily search through the data and export to Excel."
                }
              />
            )}
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Home;
