import { School } from "../types/SchoolTypes";
import { useDataContext } from "../contexts/data-context.hook";
import { useCallback, useEffect, useMemo, useState } from "react";
import ExcelExport from "../export-to-excel/ExcelExport";
import InfiniteScroll from "react-infinite-scroll-component";
import { MagnifyingGlassIcon} from "@heroicons/react/20/solid";
import { XMarkIcon } from "@heroicons/react/24/outline";
import { FunnelIcon, XCircleIcon } from "@heroicons/react/20/solid";
// import DialogContactForm from "./DialogContactForm";

const RenderFilterResults = () => {
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
  // const [open, setOpen] = useState(true)

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
        <div>
          {/* <button onClick={() => setOpen(open)}>Open me!</button>
          <DialogContactForm open={open} setOpen={setOpen} /> */}
          <div className="z-20 px-4 pt-2 sticky top-0 bg-white">
            {/* <h1 className="text-xs font-semibold text-gray-600 pb-2">
              {totalCount} <span className="text-gray-900">Results</span>
            </h1> */}
            {/* Filter top menu [search, filter, clear, export] */}
            <div className="py-2 flex gap-2 bg-white">
              {/* Search bar */}
              <div className="relative w-6/6 sm:w-full flex items-center">
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
              {/* Open filters */}
              <div className="w-1/6">
                <button
                  onClick={() => setMobileFiltersOpen(!mobileFiltersOpen)}
                  className="flex items-center p-3 h-10 text-sm bg-primary-600 rounded-lg text-white"
                >
                  <FunnelIcon className="w-6 h-6" />
                </button>
              </div>
              {/* Clear filters */}
              <div className="w-1/6">
                <button
                  onClick={clearFilters}
                  className="flex items-center p-3 h-10 text-sm bg-primary-600 rounded-lg text-white"
                >
                  <XCircleIcon className="w-6 h-6" />
                </button>
              </div>
              {/* Export */}
              <div className="w-1/6">
                <ExcelExport
                  data={filteredData}
                  fileName={"quintileDataExport"}
                />
              </div>
            </div>
            {/* End of filter top menu buttons */}
          </div>
          <div className="z-10 rounded-lg overflow-hidden border border-gray-100">
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
                <table className="table-auto w-full bg-white">
                  <thead className="border-b border-gray-100 bg-white">
                    <tr>
                      <th className="pl-5 pr-3 py-2.5 text-sm text-left font-semibold text-gray-900">
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
                      <th className="px-3 py-3 text-sm text-left font-semibold text-nowrap text-gray-900">
                        Fee Paying
                      </th>
                    </tr>
                  </thead>
                  <tbody className="bg-white divide-y divide-gray-100">
                    {cachedFilteredData
                      .slice(0, displayedItems)
                      .map((school: School, index: number) => (
                        <tr key={index}>
                          <td className="pl-5 pr-3 py-2.5 text-sm text-gray-900 text-left text-wrap">
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
                          <td className="px-3 py-2.5 text-sm text-gray-900 text-left">
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
        </div>
      ) : null}
    </>
  );
};

export default RenderFilterResults;
