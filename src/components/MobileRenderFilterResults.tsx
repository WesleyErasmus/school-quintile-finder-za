import {
  Dialog,
  DialogBackdrop,
  DialogPanel,
  DialogTitle,
  Disclosure,
} from "@headlessui/react";
import { XMarkIcon } from "@heroicons/react/24/outline";
import { School } from "../types/SchoolTypes";
import { useDataContext } from "../contexts/data-context.hook";
import { useCallback, useEffect, useMemo, useState } from "react";
// import ExcelExport from "../export-to-excel/ExcelExport";
import InfiniteScroll from "react-infinite-scroll-component";
import { MagnifyingGlassIcon } from "@heroicons/react/20/solid";
import { FunnelIcon, XCircleIcon } from "@heroicons/react/20/solid";
// import { EnvelopeIcon } from "@heroicons/react/24/solid";

interface DialogProps {
  open: boolean;
  setOpen: (open: boolean) => void;
}

const DialogContactForm = (props: DialogProps) => {
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
    <div>
      {" "}
      <Dialog
        open={props.open}
        onClose={props.setOpen}
        className="relative z-40 lg:hidden"
      >
        <DialogBackdrop
          transition
          className="fixed inset-0 bg-black bg-opacity-25 transition-opacity duration-300 ease-linear data-[closed]:opacity-0"
        />
        <div className="fixed inset-0 z-40 flex">
          <DialogPanel
            transition
            className="relative ml-auto flex h-full w-full transform flex-col overflow-y-auto bg-white p-0shadow-xl transition duration-300 ease-in-out data-[closed]:translate-x-full"
          >
            <div className="flex items-center justify-between px-4 sticky top-0 bg-white">
              <DialogTitle
                as="h3"
                className="text-base font-semibold leading-6 text-gray-900"
              >
                {/* Filter top menu [search, filter, clear, export] */}
                <div className="pt-2 pb-4 flex gap-2 bg-white">
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
                      className="flex items-center p-3 h-10 text-sm bg-primary-600 rounded-lg text-white border"
                    >
                      <FunnelIcon className="w-6 h-6" />
                    </button>
                  </div>
                  {/* Clear filters */}
                  <div className="w-1/6">
                    <button
                      onClick={clearFilters}
                      className="flex items-center p-3 h-10 text-sm bg-primary-600 rounded-lg text-white border"
                    >
                      <XCircleIcon className="w-6 h-6" />
                    </button>
                  </div>
                  {/* Export */}
                  <div className="w-1/6">
                    {/* <ExcelExport
                      data={filteredData}
                      fileName={"quintileDataExport"}
                    /> */}
                  </div>
                </div>
              </DialogTitle>
              <button
                type="button"
                onClick={() => {
                  props.setOpen(false);
                }}
                className="-mr-2 flex h-10 w-10 items-center justify-center rounded-md bg-white p-2 text-gray-600"
              >
                <span className="sr-only">Close menu</span>
                <XMarkIcon aria-hidden="true" className="h-6 w-6" />
              </button>
            </div>

            {/* Dialog body */}
            <div className="">
              <Disclosure as="div" className="border-t border-gray-200 py-4">
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
                              <tr key={index} className="odd:bg-slate-100">
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
                      No matches found. Try a different filter or use the main
                      search bar.
                    </p>
                  )}
                </div>
              </Disclosure>
              <div className="sticky bottom-0 border-t border-1 border-slate-300 py-4 px-4 flex justify-between gap-4 bg-white">
                <button
                  type="button"
                  className="w-1/2 text-sm border border-1 rounded-md border-gray-900 font-semibold leading-6 text-gray-900"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="w-1/2 rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                >
                  Save
                </button>
              </div>
            </div>
          </DialogPanel>
        </div>
      </Dialog>
    </div>
  );
};

export default DialogContactForm;
