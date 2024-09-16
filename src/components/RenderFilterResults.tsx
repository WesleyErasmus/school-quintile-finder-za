import { School } from "../types/School";
import { useDataContext } from "../contexts/data-context.hook";
import Loader from "./Loader";
import { useMemo, useState } from "react";

const RenderFilterResults = () => {
  const { filteredData, isLoadingFilteredData, totalCount } = useDataContext();

  const [searchTerm, setSearchTerm] = useState("");

  const searchedData = useMemo(() => {
    if (!filteredData) return [];

    return filteredData?.filter(
      (school: School) =>
        school.name.toLowerCase().startsWith(searchTerm.toLowerCase()) &&
        school.name.toLowerCase().includes(searchTerm.toLowerCase())
    );
  }, [filteredData, searchTerm]);

  const handleSearch = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(event.target.value);
  };

  const clearSearch = () => {
    setSearchTerm("");
  };

  const goToBottom = () => {
    const goToBottom = document.getElementById("go-to-bottom");
    goToBottom?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  setTimeout(() => {
    goToBottom();
  }, 1000);

  const tableHeadings = [
    "School Name",
    "Quintile",
    "Province",
    "Phase",
    "Sector",
    "Fee Paying",
  ];

  return (
    <>
      {isLoadingFilteredData ? (
        <Loader />
      ) : filteredData && filteredData.length > 0 ? (
        <section className="container mx-auto max-w-6xl mb-20">
          <div className="mx-5">
            <h2
              id="go-to-bottom"
              className=" mt-8 text-center font-medium text-gray-700 "
            >
              Showing {totalCount} Results
            </h2>
            <div className="sm:flex sm:items-end sm:justify-between">
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
                  className="block w-full py-1.5 pr-5 text-sm text-gray-700 bg-white border border-gray-200 rounded-lg md:w-80 placeholder-gray-400/70 pl-11 rtl:pr-11 rtl:pl-5 focus:border-gray-400 focus:ring-gray-300 focus:outline-none focus:ring focus:ring-opacity-40"
                />
                {searchTerm ? (
                  <a
                    onClick={clearSearch}
                    className="relative p-1 -left-8 text-gray-500 flex items center justify-center content-center rounded-full bg-gray-100 hover:bg-gray-200 active:ring-1 ring-black"
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
                        stroke-width="2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                    </svg>
                  </a>
                ) : (
                  ""
                )}
              </div>

              <div className="flex items-center mt-4 gap-x-3">
                <button className="flex items-center justify-center w-1/2 px-5 py-2 text-sm tracking-wide text-white transition-colors duration-200 bg-gray-900 rounded-lg sm:w-auto gap-x-2 hover:bg-gray-600">
                  <svg
                    width="17"
                    height="17"
                    viewBox="0 0 20 20"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M10 1.66667V12.5M10 12.5L5.83333 8.33333M10 12.5L14.1667 8.33333M2.5 13.3333V15.8333C2.5 16.2754 2.67559 16.6993 2.98816 17.0118C3.30072 17.3244 3.72464 17.5 4.16667 17.5H15.8333C16.2754 17.5 16.6993 17.3244 17.0118 17.0118C17.3244 16.6993 17.5 16.2754 17.5 15.8333V13.3333"
                      stroke="currentColor"
                      strokeWidth="1.67"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>

                  <span>Export to Excel</span>
                </button>
              </div>
            </div>
            <div className="flex flex-col mt-4">
              <div className="-mx-4 -my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
                <div className="inline-block min-w-full py-2 align-middle md:px-6 lg:px-8">
                  <div className="flex-1 overflow-hidden border border-gray-200 md:rounded-lg overflow-y-auto max-h-[75dvh]">
                    {searchedData.length > 0 ? (
                      <table className="min-w-full divide-y divide-gray-200 table-fixed px-5">
                        <thead className="sticky top-0 bg-gray-50">
                          <tr>
                            {tableHeadings.map((heading, i) => (
                              <th
                                key={i}
                                scope="col"
                                className="px-4 py-3.5 text-sm text-left font-normal text-gray-800"
                              >
                                {heading}
                              </th>
                            ))}
                          </tr>
                        </thead>
                        <tbody className="bg-white divide-y divide-gray-200">
                          {searchedData?.map(
                            (school: School, index: number) => (
                              <tr key={index}>
                                <td className="px-4 py-4 text-sm text-gray-500 whitespace-nowrap">
                                  {school.name}
                                </td>
                                <td className="px-4 py-4 text-sm text-gray-500 whitespace-nowrap">
                                  {school.quintile}
                                </td>
                                <td className="px-4 py-4 text-sm text-gray-500 whitespace-nowrap">
                                  {school.province}
                                </td>
                                <td className="px-4 py-4 text-sm text-gray-500 whitespace-nowrap">
                                  {school.phase}
                                </td>
                                <td className="px-4 py-4 text-sm text-gray-500 whitespace-nowrap">
                                  {school.sector}
                                </td>
                                <td className="px-4 py-4 text-sm text-gray-500 whitespace-nowrap">
                                  {school.fee_paying}
                                </td>
                              </tr>
                            )
                          )}
                        </tbody>
                      </table>
                    ) : (
                      <div className="p-4 text-center text-gray-500">
                        No matches found. Try a different filter or use the main
                        search bar.
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      ) : null}
    </>
  );
};

export default RenderFilterResults;
