import SearchBar from "../SearchBar";
import PhaseFilter from "./PhaseFilter";
import ProvinceFilter from "./ProvinceFilter";
import QuintileFilter from "./QuintileFilter";
import SectorFilter from "./SectorFilter";

const SearchAndFilterSection = () => {
  return (
    <>
      <section className="flex flex-wrap justify-between items-center mb-10">
        <div className="w-full flex-1 min-w-[325px] max-w-[525px]">
          <SearchBar />
        </div>
        <div className="space-x-2 flex-initial min-w-[350px] max-w-[525px]">
          <QuintileFilter />
          <ProvinceFilter />
          <PhaseFilter />
          <SectorFilter />
        </div>
      </section>
    </>
  );
};

export default SearchAndFilterSection;
