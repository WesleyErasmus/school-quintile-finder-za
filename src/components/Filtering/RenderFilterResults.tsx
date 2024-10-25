// React hooks
import { useCallback, useEffect, useMemo, useState } from "react";
import ExportButton from "../ExportToExcel/ExportButton";
import InfiniteScroll from "react-infinite-scroll-component";

// Data imports
import { School } from "../../types/SchoolTypes";
import { useDataContext } from "../../contexts/data-context.hook";

// HeroIcons
import { AdjustmentsHorizontalIcon, XMarkIcon } from "@heroicons/react/24/outline";
import { ExclamationTriangleIcon } from "@heroicons/react/24/solid";
import { MagnifyingGlassIcon } from "@heroicons/react/20/solid";

// Components
import ErrorAlert from "../ErrorAlert";
import useSendErrorReport from "../../hooks/useSendErrorReport.hook";
import { useErrorContext } from "../../contexts/error-context.hook";
import ExportButtonMobile from "../ExportToExcel/ExportButtonMobile";

const RenderFilterResults = () => {
  const {
    filteredData,
    selectedFilter,
    setFilteredData,
    setFilters,
    filters,
    totalCount,
    mobileFiltersOpen,
    setMobileFiltersOpen,
  } = useDataContext();
  const { filterError } = useErrorContext();

  const { reportFilterError } = useSendErrorReport();

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

  if (filterError === true)
    return (
      <div className="my-4">
        <ErrorAlert
          type={"filter"}
          onClick={reportFilterError}
          icon={
            <ExclamationTriangleIcon
              aria-hidden="true"
              className="h-7 w-7 text-red-600"
            />
          }
          message={
            "There was an error processing the filter query. Please refresh the page or try again later."
          }
        />
      </div>
    );

  return (
    <div>
      {filteredData && filteredData.length > 0 ? (
        <div>
          <div className="z-20 mx-4 sm:px-4 lg:px-0 pt-2 sticky top-0 bg-white lg:mx-4 rounded-t-xl lg:mt-4">
            {/* Filter top menu [search, filter, clear, export] */}
            <div className="py-2 flex flex-auto gap-4 justify-between items-end bg-white border-b border-1 border-slate-100 lg:px-4">
              {/* Search bar */}
              <div className="relative flex items-center">
                <span className="absolute">
                  <MagnifyingGlassIcon className="w-5 h-5 mx-3 text-gray-500" />
                </span>
                <input
                  id="searchBar"
                  name="searchBar"
                  value={searchTerm}
                  onChange={handleSearch}
                  type="text"
                  placeholder="Search results"
                  className="block w-full py-1.5 pr-8 h-10 text-sm text-gray-600 bg-slate-100 border border-slate-100 rounded-full placeholder-gray-600/70 pl-11 focus:ring-1 focus:ring-primary-600 focus:bg-white sm:max-w-[295px] hover:shadow-md transition duration-200 ease-in-out"
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
              {/* Open filters */}
              <div className="flex items-end gap-4">
                {/* Filters */}
                <button
                  onClick={() => setMobileFiltersOpen(!mobileFiltersOpen)}
                  type="submit"
                  className="invisible sm:visible lg:invisible text-sm font-medium tracking-wide rounded-lg text-white bg-primary-600 px-4 py-1.5 active:ring-1 active:ring-primary-900 flex items-center justify-center"
                >
                  <AdjustmentsHorizontalIcon className="mr-3 w-6 h-6" />
                  Filters
                </button>
                {/* Export */}
                <div className="hidden sm:block md:hidden cursor-pointer">
                  <ExportButtonMobile
                    data={filteredData}
                    fileName={"quintileDataExport"}
                  />
                </div>
                <div className="hidden md:block">
                  <ExportButton
                    data={filteredData}
                    fileName={"quintileDataExport"}
                  />
                </div>

                {/* Clear filters */}
                <button
                  onClick={clearFilters}
                  type="button"
                  className="flex items-center justify-center h-9 w-9 rounded-full bg-white p-2 text-slate-600 hover:bg-slate-100"
                >
                  <span className="sr-only">Close menu</span>
                  <XMarkIcon
                    aria-hidden="true"
                    className="h-6 w-6 hover:scale-110 transition duration-200 ease-in-out"
                  />
                </button>
              </div>
            </div>
            <p className="px-4 py-1.5 text-sm font-medium text-center text-gray-600 border-b border-1 border-slate-100">
              {totalCount} Total Results
            </p>
            {/* End of filter top menu buttons */}
          </div>
          <div className="z-10 mx-4 rounded-b-lg overflow-hidden lg:overflow-hidden shadow-lg">
            {cachedFilteredData.length > 0 ? (
              <InfiniteScroll
                dataLength={displayedItems}
                next={handleInfiniteScroll}
                hasMore={displayedItems < cachedFilteredData.length}
                loader={
                  <p className="p-4 text-center text-sm text-gray-950 bg-white rounded-b-xl">
                    Loading more schools...
                  </p>
                }
                endMessage={
                  <p className="px-4 py-2.5 text-sm text-center text-gray-950 border-t border-slate-200 bg-white">
                    End of Results
                  </p>
                }
              >
                <table className="table-auto w-full bg-white">
                  <thead className="border-b border-gray-100 bg-white">
                    <tr>
                      <th className="pl-6 px-3 py-2.5 text-sm text-left font-semibold text-gray-900">
                        School
                      </th>
                      <th className="px-3 py-2.5 text-sm text-left font-semibold text-gray-900">
                        Quintile
                      </th>
                      <th className="px-3 py-2.5 text-sm text-left font-semibold text-gray-900">
                        Province
                      </th>
                      <th className="px-3 py-2.5 text-sm text-left font-semibold text-gray-900">
                        Phase
                      </th>
                      <th className="px-3 py-2.5 text-sm text-left font-semibold text-gray-900">
                        Sector
                      </th>
                      <th className="pr-6 px-3 py-3 text-sm text-left font-semibold text-nowrap text-gray-900">
                        Fee Paying
                      </th>
                    </tr>
                  </thead>
                  <tbody className="bg-white divide-y divide-slate-200">
                    {cachedFilteredData
                      .slice(0, displayedItems)
                      .map((school: School, index: number) => (
                        <tr key={index} className="odd:bg-slate-50">
                          <td className="pl-6 px-3 py-2.5 text-sm text-gray-900 text-left text-wrap">
                            {school.name}
                          </td>
                          <td className="px-3 py-2.5 text-sm text-gray-900 text-left">
                            {school.quintile}
                          </td>
                          <td className="px-3 py-2.5 text-sm text-gray-900 text-left text-wrap">
                            {school.province}
                          </td>
                          <td className="px-3 py-2.5 text-sm text-gray-900 text-left text-wrap">
                            {school.phase}
                          </td>
                          <td className="px-3 py-2.5 text-sm text-gray-900 text-left">
                            {school.sector} School
                          </td>
                          <td className="pr-6 px-3 py-2.5 text-sm text-gray-900 text-left">
                            {school.fee_paying}
                          </td>
                        </tr>
                      ))}
                  </tbody>
                </table>
              </InfiniteScroll>
            ) : (
              <div className="p-4 text-center bg-white">
                <p className="mb-2 text-lg font-semibold">No matches found</p>
                <p className="text-sm">
                  Try a different combination of filters or use the main search
                  bar.
                </p>
              </div>
            )}
          </div>
        </div>
      ) : (
        // ) : null}
        <div>
          {filteredData && filters ? (
            <div className="p-4 text-center text-gray-950">
              <p className="mb-2 text-lg font-semibold">No matches found</p>
              <p className="text-sm">
                Try a different combination of filters or use the main search
                bar.
              </p>
              <button
                onClick={clearFilters}
                className="py-1.5 px-6 my-4 bg-primary-600 text-sm text-white rounded-lg active:ring-1 active:ring-primary-700 hover:shadow-lg"
              >
                Reset Filters
              </button>
            </div>
          ) : null}
        </div>
      )}
    </div>
  );
};

export default RenderFilterResults;
