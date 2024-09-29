import { School } from "../types/SchoolTypes";
import { useDataContext } from "../contexts/data-context.hook";
import Loader from "./Loader";
import { useCallback, useEffect, useMemo, useState } from "react";
import ExcelExport from "../export-to-excel/ExcelExport";
import InfiniteScroll from "react-infinite-scroll-component";

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
        <section className="container">
          <h2 className="mt-5 text-center font-medium text-gray-700">
            Showing {totalCount} Results
          </h2>
          <div className="sticky top-0 bg-white">
            {/* Search & Export button container */}
            <div className="sm:flex sm:items-end pb-1 sm:justify-start lg:justify-between w-full">
              <div className="relative flex items-center mt-4 md:mt-0">
                <span className="absolute">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                    className="w-5 h-5 mx-3 text-gray-400"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
                    />
                  </svg>
                </span>

                <input
                  value={searchTerm}
                  onChange={handleSearch}
                  type="text"
                  placeholder="Search filtered data here"
                  className="block w-full py-1.5 pr-5 text-sm text-gray-700 bg-white border border-gray-200 rounded-lg md:w-80 placeholder-gray-400/70 pl-11 focus:border-gray-400 focus:ring-gray-300 focus:outline-none focus:ring focus:ring-opacity-40 max-w-[275px]"
                />
                {searchTerm ? (
                  <a
                    onClick={clearSearch}
                    className="relative p-1 -left-8 cursor-pointer text-gray-500 ring-black active:text-gray-300"
                  >
                    <svg
                      width="16"
                      height="16"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M6 18L18 6M6 6l12 12"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
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
            <div className="overflow-hidden overflow-y-auto min-w-[788px]">
              <thead className="table-fixed block w-full bg-gray-200">
                <tr>
                  <th className="px-4 py-3.5 text-sm text-left font-normal whitespace-nowrap text-gray-800 min-w-[205px]">
                    School Name
                  </th>
                  <th className="px-4 py-3.5 text-sm text-center font-normal whitespace-nowrap text-gray-800 w-1/5">
                    Quintile
                  </th>
                  <th className="px-4 py-3.5 text-sm text-left font-normal whitespace-nowrap text-gray-800 w-1/5">
                    Province
                  </th>
                  <th className="px-4 py-3.5 text-sm text-left font-normal whitespace-nowrap text-gray-800 w-1/5">
                    Phase
                  </th>
                  <th className="px-4 py-3.5 text-sm text-left font-normal whitespace-nowrap text-gray-800 w-1/5">
                    Sector
                  </th>
                  <th className="px-4 py-3.5 text-sm text-left font-normal whitespace-nowrap text-gray-800 w-1/5">
                    Fee Paying
                  </th>
                </tr>
              </thead>
            </div>
          </div>
          <div className="overflow-hidden border border-gray-200 overflow-y-auto min-w-[788px]">
            {/* <thead className="table-fixed block w-full sticky top-0 bg-gray-50">
              <tr>
                <th className="px-4 py-3.5 text-sm text-left font-normal whitespace-nowrap text-gray-800 min-w-[205px]">
                  School Name
                </th>
                <th className="px-4 py-3.5 text-sm text-center font-normal whitespace-nowrap text-gray-800 w-1/5">
                  Quintile
                </th>
                <th className="px-4 py-3.5 text-sm text-left font-normal whitespace-nowrap text-gray-800 w-1/5">
                  Province
                </th>
                <th className="px-4 py-3.5 text-sm text-left font-normal whitespace-nowrap text-gray-800 w-1/5">
                  Phase
                </th>
                <th className="px-4 py-3.5 text-sm text-left font-normal whitespace-nowrap text-gray-800 w-1/5">
                  Sector
                </th>
                <th className="px-4 py-3.5 text-sm text-left font-normal whitespace-nowrap text-gray-800 w-1/5">
                  Fee Paying
                </th>
              </tr>
            </thead> */}
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
                <table className="table-fixed overflow-hidden w-full">
                  <tbody className="bg-white divide-y divide-gray-200">
                    {cachedFilteredData
                      .slice(0, displayedItems)
                      .map((school: School, index: number) => (
                        <tr key={index}>
                          <td className="px-4 py-4 text-sm text-gray-500 whitespace-wrap w-[205px]">
                            {school.name}
                          </td>
                          <td className="px-4 py-4 text-sm text-gray-500 text-center whitespace-nowrap w-1/5">
                            {school.quintile}
                          </td>
                          <td className="px-4 py-4 text-sm text-gray-500 whitespace-wrap w-1/5">
                            {school.province}
                          </td>
                          <td className="px-4 py-4 text-sm text-gray-500 whitespace-wrap min-w-[108px] w-1/5">
                            {school.phase}
                          </td>
                          <td className="px-3.5 text-sm text-gray-500 whitespace-nowrap w-1/5">
                            {school.sector}
                          </td>
                          <td className="px-4 py-4 text-sm text-gray-500 whitespace-nowrap w-1/5">
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
