import RenderFilterResults from "../RenderFilterResults";
import RenderSearchResults from "../RenderSearchResults";
import PlaceholderResults from "../PlaceholderResults";
import SearchBar from "../SearchBar";
import SidebarFilters from "../SidebarFilters";

// Dashboard
const SearchAndFilterSection = () => {
  return (
    // <div className="mb-[100px]">
    <div>
      <section className="px-2">
        <div className="md:hidden mx-1 pt-16 sm:mt-0">
          <span className="inline-flex items-center rounded-lg bg-indigo-50 px-2 py-1 text-xs font-medium text-indigo-600 ring-1 ring-inset ring-indigo-500/10">
            Search and Filter
          </span>
          <h1 className="mt-4 text-3xl font-extrabold">Search for Schools</h1>
          <p className="text-sm mt-2 text-gray-600">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Possimus,
            repellendus.
          </p>
        </div>
        <div className="flex flex-col md:flex-row-reverse md:items-start gap-4 mt-8">
          <div className="w-full">
            <SearchBar />
          </div>
          <div>
            <SidebarFilters />
          </div>
        </div>
      </section>
      <main className="w-full">
        <PlaceholderResults />
        <RenderSearchResults />
        <RenderFilterResults />
      </main>
    </div>
  );
};

export default SearchAndFilterSection;
