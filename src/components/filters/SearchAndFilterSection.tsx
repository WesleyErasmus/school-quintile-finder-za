import RenderFilterResults from "../RenderFilterResults";
import RenderSearchResults from "../RenderSearchResults";
import SearchBar from "../SearchBar";
import SidebarFilters from "../SidebarFilters";

// Dashboard
const SearchAndFilterSection = () => {
  return (
    <div className="mb-[100px]">
      <section className="bg-green-100 pb-16 p-4">
        <div className="md:hidden pt-16 sm:mt-0">
          <h1 className="text-2xl font-bold">Search for Schools</h1>
          <p className="text-sm mt-6 text-gray-600">
            Use the below search bar to search for schools and then select the
            school to display the school data.
          </p>
        </div>
        <div className="flex flex-col md:flex-row-reverse md:items-start gap-2 mt-8">
          <div className="w-full">
            <SearchBar />
          </div>
          <div>
            <SidebarFilters />
          </div>
        </div>
      </section>
      <main className="w-full">
        <RenderSearchResults />
        <RenderFilterResults />
      </main>
    </div>
  );
};

export default SearchAndFilterSection;
