import PhaseFilter from "./PhaseFilter";
import ProvinceFilter from "./ProvinceFilter";
import QuintileFilter from "./QuintileFilter";
import SectorFilter from "./SectorFilter";

const FilterDropdowns = () => {
  return (
    <>
      <div className="text-xs mt-5 flex justify-center items-center text-center mx-auto text-gray-900">
        <div>Filter by</div>
        <div>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            width="13"
            height="13"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="ml-2 text-gray-700 feather feather-sliders"
          >
            <line x1="4" y1="21" x2="4" y2="14"></line>
            <line x1="4" y1="10" x2="4" y2="3"></line>
            <line x1="12" y1="21" x2="12" y2="12"></line>
            <line x1="12" y1="8" x2="12" y2="3"></line>
            <line x1="20" y1="21" x2="20" y2="16"></line>
            <line x1="20" y1="12" x2="20" y2="3"></line>
            <line x1="1" y1="14" x2="7" y2="14"></line>
            <line x1="9" y1="8" x2="15" y2="8"></line>
            <line x1="17" y1="16" x2="23" y2="16"></line>
          </svg>
        </div>
      </div>
      <div className=" m-2 flex-wrap justify-between text-center space-x-2 space-y-2">
        <QuintileFilter />
        <ProvinceFilter />
        <PhaseFilter />
        <SectorFilter />
      </div>
    </>
  );
}

export default FilterDropdowns