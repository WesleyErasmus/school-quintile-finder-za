import { School } from "../types/SchoolTypes";
import { useDataContext } from "../contexts/data-context.hook";
import { useCallback, useEffect, useMemo, useState } from "react";
import ExcelExport from "../export-to-excel/ExcelExport";
import InfiniteScroll from "react-infinite-scroll-component";
import { MagnifyingGlassIcon, XMarkIcon } from "@heroicons/react/20/solid";

const RenderFilterResults = () => {
  const { filteredData, totalCount, selectedFilter } = useDataContext();

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
      {filteredData && filteredData.length > 0 ? (
        <section className="mt-16">
          <h1 className="px-2 pt-16 text-3xl font-extrabold bg-gradient-to-b from-indigo-100 from-10% via-indigo-50 via-50% to-indigo-50 to-90%">
            <span className="text-indigo-600">Filter</span> Results
          </h1>
          <div className="z-40 pt-6 sticky top-[70px] bg-gradient-to-t from-indigo-100 from-10% via-indigo-50 via-50% to-indigo-50 to-90% shadow-sm">
            {/* Banner */}
            <div className="pb-2 px-2 pt-2 flex flex-wrap items-center justify-between gap-x-4">
              <p className="text-md leading-6 text-gray-900">
                <strong className="font-semibold text-indigo-600">
                  {totalCount}
                  <span className="text-gray-900 font-medium">
                    <svg
                      viewBox="0 0 2 2"
                      aria-hidden="true"
                      className="mx-2 inline h-0.5 w-0.5 fill-current"
                    >
                      <circle r={1} cx={1} cy={1} />
                    </svg>
                    Results
                  </span>
                </strong>
              </p>
              <div className="flex gap-2">
                <a
                  href="#"
                  className="flex-none rounded-lg bg-indigo-600 px-4 py-2 text-sm font-medium text-white shadow-sm"
                >
                  Filters
                </a>
                <a
                  href="#"
                  className="flex-none rounded-lg bg-indigo-600 px-4 py-2 text-sm font-medium text-white shadow-sm"
                >
                  Clear Filters
                </a>
              </div>
            </div>
            {/* Search & Export button container */}
            <div className="flex items-end justify-between gap-4 px-2 mt-2 bg-white py-2">
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
                  className="block w-full py-1.5 pr-8 h-10 text-sm text-gray-700 bg-white border border-gray-400 rounded-lg placeholder-gray-600/70 pl-11 focus:ring-1 focus:ring-indigo-600 sm:max-w-[295px]"
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
                        <tr key={index} className="odd:bg-indigo-50">
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
