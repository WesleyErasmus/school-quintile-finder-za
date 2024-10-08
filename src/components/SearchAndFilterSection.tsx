import RenderFilterResults from "./RenderFilterResults";
import SearchBar from "./SearchBar";
import FilterOptionsMenu from "./FilterOptionsMenu";
import MobileRenderFilterResults from "./MobileRenderFilterResults";
const SearchAndFilterSection = () => {
  return (
    <div>
      <div className="relative">
        {/* <div className="absolute top-0 z-[-2] h-full w-full bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,#eef2ff,rgba(255,255,255,0))]"></div> */}
        <div className="mx-auto max-w-[1230px] w-full flex flex-col md:flex-row-reverse md:items-start">
          <div className="w-full flex flex-col">
            <SearchBar />
            <div className="w-full invisible sm:visible">
              <RenderFilterResults />
            </div>
          </div>
          <div>
            <FilterOptionsMenu />
          </div>
        </div>
      </div>
      <div className="sm:hidden">
        <MobileRenderFilterResults />
      </div>
    </div>
  );
};

export default SearchAndFilterSection;
