// React hooks
import { useCallback, useEffect, useMemo, useState } from "react";

// Data imports
import { useDataContext } from "../contexts/data-context.hook";
import { School } from "../types/SchoolTypes";

// Components imports
import ExportButtonMobile from "../components/ExportToExcel/ExportButtonMobile";
import InfiniteScroll from "react-infinite-scroll-component";
import FilterOptionsMenu from "../components/Filtering/FilterOptionsMenu";

// HeroIcons
import {
  AdjustmentsHorizontalIcon,
  XMarkIcon,
} from "@heroicons/react/24/outline";
import { MagnifyingGlassIcon } from "@heroicons/react/20/solid";

// React router dom
import { useNavigate } from "react-router-dom";

// Route imports
import { homePage } from "../App";

const MobileFilterResults = () => {
  const {
    filteredData,
    selectedFilter,
    setFilteredData,
    setFilters,
    mobileFiltersOpen,
    setMobileFiltersOpen,
  } = useDataContext();

  const navigate = useNavigate();

  // useEffect(() => {
  //   if (!filteredData || filteredData.length === 0) {
  //     navigate(homePage);
  //   }
  // }, [filteredData, navigate]);

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
      fee_paying: [],
    });
  };

  return (
    <div className="sm:hidden">
      {filteredData && filteredData.length > 0 ? (
        <div className="z-[13] absolute top-0 h-full w-full bg-white">
          {/* Sticky header section */}
          <div className="z-[14] w-full px-4 pt-4 pb-2 fixed top-0 border-b border-slate-100 bg-white flex justify-between gap-2">
            {/* Search bar */}
            <div className="relative sm:w-full flex items-center">
              <span className="absolute">
                <MagnifyingGlassIcon className="w-5 h-5 mx-3 text-gray-500" />
              </span>
              <input
                value={searchTerm}
                onChange={handleSearch}
                type="text"
                placeholder="Search results"
                className="block w-full py-1.5 pr-8 h-10 text-sm text-gray-600 bg-slate-100 border border-slate-100 rounded-lg placeholder-gray-600/70 pl-11 focus:ring-1 focus:ring-primary-600 sm:max-w-[295px] focus:bg-white"
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
            <div className="flex items-center gap-2">
              <ExportButtonMobile
                data={filteredData}
                fileName={"quintileDataExport"}
              />
              <button
                onClick={() => {
                  clearFilters();
                  navigate(homePage);
                }}
                type="button"
                className="flex h-10 w-10 items-center justify-center rounded-full active:bg-slate-100 p-2 text-gray-600 "
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
                <p className="mb-[75px] p-4 text-center text-gray-500">
                  Loading more schools...
                </p>
              }
              endMessage={
                <p className="p-4 text-center text-gray-500">
                  No more results to show.
                </p>
              }
            >
              <table className="mt-[65px] table-auto w-full">
                <thead className="border-b border-slate-100 bg-white">
                  <tr className="font-medium text-gray-900 text-sm text-left">
                    <th scope="col" className="px-4 py-3 ">
                      Schools
                    </th>
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-100">
                  {cachedFilteredData
                    .slice(0, displayedItems)
                    .map((school: School, index: number) => (
                      <tr key={index} className="hover:bg-gray-50">
                        <td className="px-4 py-2.5">
                          <h6 className="font-semibold text-nowrap text-sm text-gray-900">
                            {school.name}
                          </h6>
                          <div className="flex items-center justify-between text-xs max-w-lg">
                            <div className="mt-0.5 text-nowrap text-gray-700 sm:hidden">
                              <p>{school.province}</p>
                              <p>{school.sector} School</p>
                              <p>Fee Paying: {school.fee_paying}</p>
                            </div>
                            <div className="px-6 mt-0.5">
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
            <div className="p-4 text-center mt-[65px]">
              <p>No matches found.</p>
              <p>
                No matches found. Try a different combination of filters or use
                the main search bar.
              </p>
            </div>
          )}
          {/* Bottom buttons */}
          <div className="fixed w-full bottom-0 border-t border-1 border-slate-100 pb-6 pt-2 px-4 flex justify-between gap-4 bg-white">
            <button
              onClick={() => {
                clearFilters();
                navigate(homePage);
              }}
              type="button"
              className="w-1/2 text-sm font-medium tracking-wide rounded-lg border border-1 text-gray-900 border-gray-400 px-4 py-2 active:ring-1 active:ring-gray-900"
            >
              Close
            </button>
            <button
              onClick={() => setMobileFiltersOpen(!mobileFiltersOpen)}
              type="submit"
              className="w-1/2 text-sm font-medium tracking-wide rounded-lg text-white bg-primary-600 px-4 py-2 active:ring-1 active:ring-primary-900 flex items-center justify-center"
            >
              <AdjustmentsHorizontalIcon className="mr-3 w-6 h-6" />
              Filters
            </button>
          </div>
        </div>
      ) : (
        <div className="text-center py-10 px-4">
          <p>No matches found.</p>
          <p className="text-gray-950">
            Try a different combination of filters or use the main search bar on
            the{" "}
            <a
              className="cursor-pointer text-primary-600"
              onClick={() => {
                navigate(homePage);
                clearFilters();
              }}
            >
              Home Page.
            </a>
          </p>
        </div>
      )}
      <FilterOptionsMenu />
    </div>
  );
};

export default MobileFilterResults;
