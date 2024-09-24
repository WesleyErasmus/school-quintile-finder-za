import RenderFilterResults from "../RenderFilterResults";
import RenderSearchResults from "../RenderSearchResults";
import SearchBar from "../SearchBar";
import SidebarFilters from "../SidebarFilters";

// Dashboard
const SearchAndFilterSection = () => {
  return (
    <>
      <div className="flex">
        <aside>
          <SidebarFilters />
        </aside>
        <main className="w-full">
          <SearchBar />
          <RenderSearchResults />
          <RenderFilterResults />
        </main>
      </div>
      <div className=""></div>
    </>
  );
};

export default SearchAndFilterSection;
