import { School } from "../types/SchoolTypes";
import { useDataContext } from "../contexts/data-context.hook";
import { useCallback, useEffect, useMemo, useState } from "react";
import ExcelExport from "../export-to-excel/ExcelExport";
import InfiniteScroll from "react-infinite-scroll-component";
import { MagnifyingGlassIcon, XMarkIcon } from "@heroicons/react/20/solid";

const RenderFilterResults = () => {
  const {
    filteredData,
    totalCount,
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
        <section className="mt-16">
          <h1 className="px-3 mb-8 text-3xl font-extrabold bg-">
            <span className="">Filter</span> Results
          </h1>
          <div className="z-40 px-3 sticky top-[70px] shadow-sm bg-slate-50">
            {/* Banner */}
            <div className="flex flex-wrap items-center justify-between gap-x-4">
              <p className="text-sm leading-6 text-gray-900">
                <strong className="font-semibold ">
                  {totalCount} <span className="text-gray-900">Results</span>
                </strong>
              </p>
              <div className="flex gap-2">
                <button
                  onClick={() => setMobileFiltersOpen(!mobileFiltersOpen)}
                  className="flex-none rounded-full bg-secondary-600 px-3 py-1 text-sm font-medium text-white shadow-sm"
                >
                  Filters
                </button>
                <button
                  onClick={clearFilters}
                  className="flex-none rounded-full bg-secondary-600 px-3 py-1 text-sm font-medium text-white shadow-sm"
                >
                  Clear Filters
                </button>
              </div>
            </div>
            {/* Search & Export button container */}
            <div className="flex items-end justify-between gap-4 mt-2 bg-white py-2">
              {/* Search bar */}
              <div className="relative w-full flex items-center">
                <span className="absolute">
                  <MagnifyingGlassIcon className="w-5 h-5 mx-3 text-gray-400" />
                </span>

                <input
                  value={searchTerm}
                  onChange={handleSearch}
                  type="text"
                  placeholder="Search results by school name"
                  className="block w-full py-1.5 pr-8 h-10 text-sm text-gray-700 bg-white border border-gray-400 rounded-lg placeholder-gray-600/70 pl-11 focus:ring-1 focus:ring-secondary-600 sm:max-w-[295px]"
                />
                {searchTerm ? (
                  <button
                    onClick={clearSearch}
                    className="relative p-1 -left-8 cursor-pointer text-gray-400 active:ring-1 active:ring-gray-900 rounded-full"
                  >
                    <XMarkIcon aria-hidden="true" className="h-5 w-5" />
                  </button>
                ) : (
                  ""
                )}
              </div>
              {/* End of search bar */}
              <ExcelExport
                data={filteredData}
                fileName={"quintileDataExport"}
              />
            </div>
          </div>
          <div className="z-10">
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
                    <tr>
                      <th className="pl-5 pr-3 py-2.5 text-sm text-left font-semibold text-gray-600">
                        School
                      </th>
                      <th className="px-3 py-2.5 text-sm text-left font-semibold text-gray-600">
                        Quintile
                      </th>
                      <th className="px-3 py-2.5 text-sm text-left font-semibold text-gray-600">
                        Province
                      </th>
                      <th className="px-3 py-2.5 text-sm text-left font-semibold text-gray-600">
                        Phase
                      </th>
                      <th className="px-3 py-2.5 text-sm text-left font-semibold text-gray-600">
                        Sector
                      </th>
                      <th className="px-4 py-3 text-sm text-left font-semibold text-nowrap text-gray-600">
                        Fee Paying
                      </th>
                    </tr>
                  </thead>
                  <tbody className="bg-white divide-y divide-gray-100">
                    {cachedFilteredData
                      .slice(0, displayedItems)
                      .map((school: School, index: number) => (
                        <tr key={index} className="odd:bg-secondary-50">
                          <td className="pl-5 pr-3 py-2.5 text-sm text-gray-800 text-left text-wrap">
                            {school.name}
                          </td>
                          <td className="px-3 py-2.5 text-sm text-gray-800 text-left">
                            {school.quintile}
                          </td>
                          <td className="px-3 py-2.5 text-sm text-gray-800 text-left text-wrap">
                            {school.province}
                          </td>
                          <td className="px-3 py-2.5 text-sm text-gray-800 text-left text-wrap">
                            {school.phase}
                          </td>
                          <td className="px-3 py-2.5 text-sm text-gray-800 text-left">
                            {school.sector} School
                          </td>
                          <td className="px-3 py-2.5 text-sm text-gray-800 text-left">
                            {school.fee_paying}
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
          </div>
        </section>
      ) : null}
    </>
  );
};

export default RenderFilterResults;
