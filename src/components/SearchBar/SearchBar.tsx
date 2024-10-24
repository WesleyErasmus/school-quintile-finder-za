// Data imports
import { useEffect, useState, useRef } from "react";
import { gql, useLazyQuery } from "@apollo/client";
import { School } from "../../types/SchoolTypes";
import { useDataContext } from "../../contexts/data-context.hook";
import useSendErrorReport from "../../hooks/useSendErrorReport.hook";
import SearchSchools from "../../graphql/fetch-school-data.graphql";

// HeroIcons
import { MagnifyingGlassIcon } from "@heroicons/react/20/solid";
import {
  InformationCircleIcon,
  ExclamationTriangleIcon,
} from "@heroicons/react/24/solid";

// Components imports
import Alert from "../Alert";
import ErrorAlert from "../ErrorAlert";
import RenderSearchResults from "./RenderSearchResults";
import SpinnerLoader from "../SpinnerLoader";

const SEARCH_SCHOOLS = gql`
  ${SearchSchools}
`;

const SearchBar = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [isOpen, setIsOpen] = useState(false);
  const [highlightedIndex, setHighlightedIndex] = useState(0);
  const [shouldShowSuggestions, setShouldShowSuggestions] = useState(false);

  const searchRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  const { selectedSchool, setSelectedSchool, setFilteredData, setFilters } =
    useDataContext();

  const { reportSearchError } = useSendErrorReport();

  const [searchSchools, { loading, error, data }] = useLazyQuery(
    SEARCH_SCHOOLS,
    {
      onCompleted: () => {
        setIsOpen(true);
      },
    }
  );

  const closeSearch = () => {
    setIsOpen(false);
    setShouldShowSuggestions(false);
    setHighlightedIndex(-1);
  };

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        searchRef.current &&
        !searchRef.current.contains(event.target as Node)
      ) {
        closeSearch();
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  // Debounce
  useEffect(() => {
    const debounceTimer = setTimeout(() => {
      if (searchTerm.trim().length > 1) {
        setShouldShowSuggestions(true);
        searchSchools({ variables: { searchTerm: searchTerm.trim() } });
      } else {
        closeSearch();
      }
    }, 200);

    return () => clearTimeout(debounceTimer);
  }, [searchTerm, searchSchools]);

  const handleSelect = (school: School) => {
    setSelectedSchool(school);
    setSearchTerm("");
    closeSearch();
    setFilteredData(null);
    setFilters({
      quintile: [],
      sector: [],
      province: [],
      phase: [],
      fee_paying: [],
    });
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (!isOpen || !data?.searchSchools) return;

    switch (e.key) {
      case "ArrowDown":
        e.preventDefault();
        setHighlightedIndex((prev) =>
          prev < data.searchSchools.length - 1 ? prev + 1 : prev
        );
        break;
      case "ArrowUp":
        e.preventDefault();
        setHighlightedIndex((prev) => (prev > 0 ? prev - 1 : -1));
        break;
      case "Enter":
        e.preventDefault();
        if (highlightedIndex >= 0) {
          handleSelect(data.searchSchools[highlightedIndex]);
        }
        break;
      case "Escape":
        e.preventDefault();
        closeSearch();
        break;
    }
  };

  if (error) {
    return (
      <ErrorAlert
        type="search"
        onClick={reportSearchError}
        icon={
          <ExclamationTriangleIcon
            aria-hidden="true"
            className="h-7 w-7 text-red-500"
          />
        }
        message="There was an error fetching the data for the search query. Please refresh the page or try again later."
      />
    );
  }

  const renderSearchSuggestions = () => {
    if (!shouldShowSuggestions) return null;

    if (loading) {
      return (
        <div className="absolute w-full bg-white rounded-b-3xl shadow-lg border border-t-0 border-gray-200 px-4 py-8 z-50">
          <div className="flex items-center justify-center">
            <SpinnerLoader color={"#4f46e5"} size={24} />
            <span className="ml-2 text-gray-500 text-sm">Loading...</span>
          </div>
        </div>
      );
    }

    if (!loading && data?.searchSchools?.length === 0) {
      return (
        <div className="absolute w-full bg-white rounded-b-3xl shadow-lg border border-t-0 border-gray-200 px-4 py-8 z-50">
          <p className="text-gray-500 text-sm text-center">No schools found</p>
        </div>
      );
    }

    if (!loading && data?.searchSchools?.length > 0) {
      return (
        <div className="absolute w-full bg-white rounded-b-3xl shadow-lg border border-t-0 border-gray-200 overflow-hidden pb-4 z-50">
          {data.searchSchools
            .slice(0, 7)
            .map((school: School, index: number) => (
              <div
                key={school.id}
                onClick={() => handleSelect(school)}
                onMouseEnter={() => setHighlightedIndex(index)}
                className={`px-4 py-2 cursor-pointer ${
                  highlightedIndex === index ? "bg-neutral-200/50" : ""
                } hover:bg-neutral-200/50`}
              >
                <p className="text-gray-950 text-sm font-medium">
                  {school.name}
                </p>
                <div className="inline-flex items-center mt-0.5 text-xs text-sky-800 font-medium">
                  Quintile level: {school.quintile}
                  <svg
                    viewBox="0 0 2 2"
                    className="mx-2 inline h-0.5 w-0.5 fill-current"
                  >
                    <circle cx="1" cy="1" r="1" />
                  </svg>
                  {school.province}
                </div>
              </div>
            ))}
        </div>
      );
    }

    return null;
  };

  return (
    <div className="py-12 lg:py-0">
      <div className="px-4 sm:px-8 md:px-4 lg:px-4">
        <div>
          <span className="inline-flex items-center rounded-lg bg-white px-2 py-1 text-xs font-medium text-primary-600 ring-1 ring-inset ring-primary-600/10 lg:hidden">
            Search for Schools
          </span>
          <h1 className="mt-8 text-3xl font-extrabold tracking-tight lg:mt-0 lg:text-xl lg:font-semibold lg:pt-4">
            Search for
            <span className="text-primary-600 lg:text-gray-900">
              {" "}
              School Quintile Data
            </span>
          </h1>
          <p className="text-sm mt-2 tracking-wide leading-5 text-gray-700">
            Find quintile, province, sector, phase, address, and fee paying
            data.
          </p>
        </div>

        <div className="mt-8 mb-4 min-w-[275px] lg:mt-4" ref={searchRef}>
          <div className="relative">
            <div className="relative">
              <MagnifyingGlassIcon className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-500" />
              <input
                ref={inputRef}
                type="text"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                onKeyDown={handleKeyDown}
                onFocus={() => {
                  if (searchTerm.length > 1) {
                    setIsOpen(true);
                    setShouldShowSuggestions(true);
                  }
                }}
                placeholder="Search by school name for quintile data"
                className={`w-full pl-10 pr-4 py-3.5 text-sm bg-white border border-gray-200 rounded-full 
                          focus:outline-none focus:ring-2 focus:ring-primary-600 focus:border-transparent
                          shadow-sm transition duration-200 ease-in-out hover:shadow-md 
                          ${
                            isOpen || shouldShowSuggestions || loading
                              ? "rounded-b-none rounded-t-3xl focus:ring-0 focus:border-gray-200"
                              : ""
                          }`}
              />
            </div>
            {renderSearchSuggestions()}
          </div>
        </div>

        {!selectedSchool && (
          <Alert
            icon={
              <InformationCircleIcon
                aria-hidden="true"
                className="h-6 w-6 text-blue-400"
              />
            }
            message="Use the search bar to easily find the South African schools you are looking for"
          />
        )}

        <RenderSearchResults />
      </div>
    </div>
  );
};

export default SearchBar;
