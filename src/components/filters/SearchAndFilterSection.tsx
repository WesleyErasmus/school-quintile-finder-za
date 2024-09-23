import RenderFilterResults from "../RenderFilterResults";
import RenderSearchResults from "../RenderSearchResults";
import SearchBar from "../SearchBar";
import SidebarFilter from "../SidebarFilter";

const SearchAndFilterSection = () => {
  return (
    <>
      <section className="flex flex-wrap mb-10">
        <div className="space-x-2 flex-initial min-w-[300px] max-w-[525px]">
          <SidebarFilter />
        </div>
        <div className="w-full flex-1 border border-1 border-gray-200">
          {/* <div className=" min-w-[325px] max-w-[525px]"> */}
          <div className=" min-w-[325px] border border-1 border-gray-200">
            <SearchBar />
            <div className="relative w-full mt-5">
              <RenderSearchResults />
            </div>
            <RenderFilterResults />
          </div>
        </div>
      </section>
    </>
  );
};

export default SearchAndFilterSection;
