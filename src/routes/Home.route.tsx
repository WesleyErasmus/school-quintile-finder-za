// Data imports
import { useDataContext } from "../contexts/data-context.hook";

// Component imports
import Hero from "../components/Hero";
import SearchBar from "../components/SearchBar/SearchBar";
import RenderFilterResults from "../components/Filtering/RenderFilterResults";
import FilterSectionHeader from "../components/Filtering/FilterSectionHeader";
import FilterOptionsMenu from "../components/Filtering/FilterOptionsMenu";
import Alert from "../components/Alert";

// HeroIcons
import { InformationCircleIcon } from "@heroicons/react/24/solid";

const Home = () => {
  const { filteredData, isLoadingFilteredData } = useDataContext();
  return (
    <div
      className={`min-h-screen ${
        isLoadingFilteredData ? "pointer-events-none" : ""
      }`}
    >
      <Hero />
      <div className="mx-auto max-w-[1230px] w-full flex flex-col justify-end md:flex-row-reverse md:items-start md:flex-wrap lg:flex-nowrap lg:pt-12">
        <div className="w-full flex flex-col">
          <SearchBar />
          <div className="w-full hidden sm:block">
            <RenderFilterResults />
          </div>
        </div>
        <FilterSectionHeader />
        <div className="sticky top-0">
          <FilterOptionsMenu />
          <div className="lg:hidden pb-16 px-4 sm:px-8 md:px-4 lg:px-4">
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
    </div>
  );
};

export default Home;
