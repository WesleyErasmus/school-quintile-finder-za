import { School } from "../types/SchoolTypes";
import { useDataContext } from "../contexts/data-context.hook";
import Loader from "./Loader";
import { useCallback, useEffect, useMemo, useState } from "react";
import ExcelExport from "../export-to-excel/ExcelExport";
import InfiniteScroll from "react-infinite-scroll-component";
import { MagnifyingGlassIcon, XMarkIcon } from "@heroicons/react/20/solid";

const RenderFilterResults = () => {
  const { filteredData, isLoadingFilteredData, totalCount, selectedFilter } =
    useDataContext();

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

  return (
    <>
      {isLoadingFilteredData ? (
        <Loader />
      ) : filteredData && filteredData.length > 0 ? (
        <section>
          <h2 className="mt-5 font-medium text-gray-700">
            Showing {totalCount} Results
          </h2>
          <div className="sticky top-0 bg-white pt-4">
            {/* Search & Export button container */}
            <div className="sm:flex sm:items-end mt-2 sm:justify-start lg:justify-between w-full">
              <div className="relative flex items-center mt-4 md:mt-0">
                <span className="absolute">
                  <MagnifyingGlassIcon className="w-5 h-5 mx-3 text-gray-400" />
                </span>

                <input
                  value={searchTerm}
                  onChange={handleSearch}
                  type="text"
                  placeholder="Search filtered data here"
                  className="block w-full py-1.5 pr-8 text-sm text-gray-700 bg-white border border-gray-400 rounded-lg md:w-80 placeholder-gray-600/70 pl-11 focus:border-gray-400 focus:ring-gray-300 focus:outline-none focus:ring focus:ring-opacity-40 max-w-[275px]"
                />
                {searchTerm ? (
                  <a
                    onClick={clearSearch}
                    className="relative p-1 -left-8 cursor-pointer text-gray-400 active:ring-1 active:ring-gray-900 rounded-full"
                  >
                    <XMarkIcon aria-hidden="true" className="h-5 w-5" />
                  </a>
                ) : (
                  ""
                )}
              </div>
              <ExcelExport
                data={filteredData}
                fileName={"quintileDataExport"}
              />
            </div>
            <div className="overflow-hidden overflow-y-auto min-w-[788px] mt-2">
              <thead className="table table-auto w-full border-b border-gray-400 bg-white">
                <tr>
                  <th className="px-4 py-2.5 text-sm text-left font-semibold text-gray-600 w-2/6">
                    School Name
                  </th>
                  <th className="px-4 py-2.5 text-sm text-left font-semibold text-gray-600 w-1/6">
                    Quintile
                  </th>
                  <th className="px-4 py-2.5 text-sm text-left font-semibold text-gray-600 w-1/6">
                    Province
                  </th>
                  <th className="px-4 py-2.5 text-sm text-left font-semibold text-gray-600 w-1/6">
                    Phase
                  </th>
                  <th className="px-4 py-2.5 text-sm text-left font-semibold text-gray-600 w-1/6">
                    Sector
                  </th>
                  <th className="px-4 py-2.5 text-sm text-left font-semibold text-nowrap text-gray-600 w-1/6">
                    Fee Paying
                  </th>
                </tr>
              </thead>
            </div>
          </div>
          <div className="overflow-hidden min-w-[788px]">
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
                  <tbody className="bg-white divide-x divide-gray-100">
                    {cachedFilteredData
                      .slice(0, displayedItems)
                      .map((school: School, index: number) => (
                        <tr key={index} className="odd:bg-gray-50">
                          <td className="px-4 py-2.5 text-sm text-gray-600 text-left text-wrap w-2/6">
                            {school.name}
                          </td>
                          <td className="px-4 py-2.5 text-sm text-gray-600 text-left w-1/6">
                            {school.quintile}
                          </td>
                          <td className="px-4 py-2.5 text-sm text-gray-600 text-left text-wrap w-1/6">
                            {school.province}
                          </td>
                          <td className="px-4 py-2.5 text-sm text-gray-600 text-left text-wrap w-1/6">
                            {school.phase}
                          </td>
                          <td className="px-4 py-2.5 text-sm text-gray-600 text-left w-1/6">
                            {school.sector}
                          </td>
                          <td className="px-4 py-2.5 text-sm text-gray-600 text-left w-1/6">
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
