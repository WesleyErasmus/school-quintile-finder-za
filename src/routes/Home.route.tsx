import Alert from "../components/Alert";
import FilterOptionsMenu from "../components/Filtering/FilterOptionsMenu";
import FilterSectionHeader from "../components/Filtering/FilterSectionHeader";
import Hero from "../components/Hero";
import { InformationCircleIcon } from "@heroicons/react/24/solid";
import RenderFilterResults from "../components/Filtering/RenderFilterResults";
import SearchBar from "../components/SearchBar/SearchBar";
import { useDataContext } from "../contexts/data-context.hook";
import TopNavbar from "../components/TopNavbar";

const Home = () => {
  const {filteredData} = useDataContext()
  return (
    <div className="min-h-screen">
      <TopNavbar />
      {/* <LoaderFullPage /> */}
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
    </div>
  );
};

export default Home;
