import { XMarkIcon } from "@heroicons/react/24/outline";
import { School } from "../types/SchoolTypes";
import { useDataContext } from "../contexts/data-context.hook";
import { useCallback, useEffect, useMemo, useState } from "react";
import ExcelExport from "../export-to-excel/ExcelExport";
import InfiniteScroll from "react-infinite-scroll-component";
import { MagnifyingGlassIcon } from "@heroicons/react/20/solid";
// import { FunnelIcon } from "@heroicons/react/20/solid";

const MobileRenderFilterResults = () => {
  const {
    filteredData,
    // totalCount,
    selectedFilter,
    setFilteredData,
    setFilters,
    mobileFiltersOpen,
    setMobileFiltersOpen,
  } = useDataContext();

  const [searchTerm, setSearchTerm] = useState("");
  const [displayedItems, setDisplayedItems] = useState(50);

  useEffect(() => {
    setDisplayedItems(50);
  }, [selectedFilter, filteredData]);

  const cachedFilteredData = useMemo(() => {
    if (!filteredData) return [];

    return filteredData?.filter(
      (school: School) =>
        school.name.toLowerCase().startsWith(searchTerm.toLowerCase()) &&
        school.name.toLowerCase().includes(searchTerm.toLowerCase())
    );
  }, [filteredData, searchTerm]);

  const handleInfiniteScroll = useCallback(() => {
    setDisplayedItems((prevItems) => prevItems + 50);
  }, []);

  const handleSearch = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(event.target.value);
    setDisplayedItems(50);
  };

  const clearSearch = () => {
    setSearchTerm("");
    setDisplayedItems(50);
  };

  const clearFilters = () => {
    setFilteredData(null);
    setFilters({
      quintile: [],
      sector: [],
      province: [],
      phase: [],
    });
  };

  return (
    <>
      {filteredData && filteredData.length > 0 ? (
        <div className="z-40 absolute top-0 h-screen w-full bg-white">
          {/* Sticky header section */}
          <div className="z-20 w-full p-4 sticky top-0 border-b border-gray-400 bg-white flex justify-between gap-2">
            {/* Search bar */}
            <div className="relative sm:w-full flex items-center">
              <span className="absolute">
                <MagnifyingGlassIcon className="w-5 h-5 mx-3 text-gray-500" />
              </span>
              <input
                value={searchTerm}
                onChange={handleSearch}
                type="text"
                placeholder="Search"
                className="block w-full py-1.5 pr-8 h-10 text-sm text-gray-600 bg-white border border-gray-400 rounded-lg placeholder-gray-600/70 pl-11 focus:ring-1 focus:ring-primary-600 sm:max-w-[295px]"
              />
              {searchTerm ? (
                <button
                  onClick={clearSearch}
                  className="absolute p-1 pl-2 right-2 cursor-pointer text-gray-500 active:ring-1 active:ring-gray-900 rounded-full"
                >
                  <XMarkIcon aria-hidden="true" className="h-5 w-5" />
                </button>
              ) : (
                ""
              )}
            </div>
            <div className="flex gap-2">
              {/* <button
                onClick={() => setMobileFiltersOpen(!mobileFiltersOpen)}
                className="flex items-center p-3 h-10 text-sm bg-primary-600 rounded-lg text-white border"
              >
                <FunnelIcon className="w-6 h-6" />
              </button> */}
              <ExcelExport
                data={filteredData}
                fileName={"quintileDataExport"}
              />
              <button
                onClick={clearFilters}
                type="button"
                className="-mr-2 flex h-10 w-10 items-center justify-center rounded-md bg-white p-2 text-gray-600"
              >
                <span className="sr-only">Close menu</span>
                <XMarkIcon aria-hidden="true" className="h-6 w-6" />
              </button>
            </div>
          </div>
          {cachedFilteredData.length > 0 ? (
            <InfiniteScroll
              dataLength={displayedItems}
              next={handleInfiniteScroll}
              hasMore={displayedItems < cachedFilteredData.length}
              loader={
                <p className="p-4 text-center text-gray-500">
                  Loading more schools...
                </p>
              }
              endMessage={
                <p className="p-4 text-center text-gray-500">
                  No more results to show.
                </p>
              }
            >
              <table className="table-auto w-full">
                <thead className="border-b border-gray-400 bg-white">
                  <tr className="font-medium text-gray-900 text-base text-left">
                    <th scope="col" className="px-4 py-4 ">
                      Schools
                    </th>
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                  {cachedFilteredData
                    .slice(0, displayedItems)
                    .map((school: School, index: number) => (
                      <tr
                        key={index}
                        className="hover:bg-gray-50 odd:bg-slate-100"
                      >
                        <td className="px-4 py-2.5">
                          <h6 className="font-bold text-nowrap text-base text-gray-900">
                            {school.name}
                          </h6>
                          <div className="flex items-center justify-between text-sm">
                            <div className="mt-1 text-nowrap text-gray-700 sm:hidden">
                              <p>{school.province}</p>
                              <p>{school.sector} School</p>
                              <p>Fee Paying: {school.fee_paying}</p>
                            </div>
                            <div className="px-6 mt-1">
                              <p className="font-medium text-gray-600">
                                Quintile level: {school.quintile}
                              </p>
                            </div>
                          </div>
                        </td>
                      </tr>
                    ))}
                </tbody>
              </table>
            </InfiniteScroll>
          ) : (
            <p className="p-4 text-center text-gray-500">
              No matches found. Try a different filter or use the main search
              bar.
            </p>
          )}
          {/* Bottom buttons */}
          <div className="fixed w-full bottom-0 border-t border-1 border-gray-300 py-6 px-4 flex justify-between gap-4 bg-white">
            <button
              onClick={clearFilters}
              type="button"
              className="w-1/2 text-sm border border-1 rounded-md border-gray-900 font-semibold leading-6 text-gray-900"
            >
              Close
            </button>
            <button
              onClick={() => setMobileFiltersOpen(!mobileFiltersOpen)}
              type="submit"
              className="w-1/2 rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
            >
              Filters
            </button>
          </div>
        </div>
      ) : null}
    </>
  );
};

export default MobileRenderFilterResults;
