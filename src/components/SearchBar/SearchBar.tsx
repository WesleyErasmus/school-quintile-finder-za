// Style imports
import "../../styles/search-bar.css";

// React hooks
import { useState, useEffect } from "react";

// Data imports
import { useQuery, gql } from "@apollo/client";
import SearchSchools from "../../graphql/fetch-school-data.graphql";
import { useDataContext } from "../../contexts/data-context.hook";
import { ReactSearchAutocomplete } from "react-search-autocomplete";
import { School } from "../../types/SchoolTypes";

// Component imports
import SearchBarLoader from "./SearchBarLoader";
import Alert from "../Alert";
import RenderSearchResults from "./RenderSearchResults";

// HeroIcons
import {
  InformationCircleIcon,
  ExclamationTriangleIcon,
} from "@heroicons/react/24/solid";
import { MagnifyingGlassIcon } from "@heroicons/react/20/solid";
import ErrorAlert from "../ErrorAlert";
import useSendErrorReport from "../../hooks/useSendErrorReport.hook";

const GET_SCHOOL_DATA = gql`
  ${SearchSchools}
`;

const SearchBar = () => {
  const [searchString, setSearchString] = useState("");
  const [suggestedItem, setSuggestedItem] = useState<School | null>(null);
  const { selectedSchool, setSelectedSchool, setFilteredData, setFilters } =
    useDataContext();

  const { reportSearchError } = useSendErrorReport();

  const { loading, error, data } = useQuery(GET_SCHOOL_DATA, {
    fetchPolicy: "cache-first",
  });
  // console.log("Apollo data log ", data);

  useEffect(() => {
    if (data?.schools && searchString) {
      const exactMatch = data.schools.find(
        (school: School) =>
          school.name.toLowerCase() === searchString.toLowerCase()
      );
      if (exactMatch) {
        setSuggestedItem(exactMatch);
      }
    }
  }, [searchString, data]);

  const handleOnSearch = (string: string, results: School[]) => {
    setSearchString(string);
    if (results.length > 0) {
      setSuggestedItem(results[0]);
    }
  };

  const handleOnSelect = (item: School) => {
    setSearchString("");
    setSelectedSchool(item);
    setSuggestedItem(item);
    setFilteredData(null);
    setFilters({
      quintile: [],
      sector: [],
      province: [],
      phase: [],
      fee_paying: [],
    });
  };

  const handleOnHover = (result: School) => {
    setSuggestedItem(result);
  };

  const handleKeyDown = (e: { key: string; preventDefault: () => void }) => {
    if (e.key === "Enter") {
      e.preventDefault();

      if (suggestedItem) {
        handleOnSelect(suggestedItem);
      }
    }
  };

  const formatResult = (item: School) => (
    <>
      <span className="hidden">{item.id}</span>
      <div className="border-b border-gray-200 mr-3">
        <div>
          <p className="font-medium text-gray-900">{item.name}</p>
        </div>
        <div>
          <div className="inline-flex items-center mt-0.5 pb-3 text-xs text-gray-600">
            Quintile level: {item.quintile}{" "}
            <svg
              viewBox="0 0 2 2"
              aria-hidden="true"
              className="mx-2 inline h-0.5 w-0.5 fill-current"
            >
              <circle r={1} cx={1} cy={1} />
            </svg>{" "}
            {item.province}
          </div>
        </div>
      </div>
    </>
  );

  if (error)
    return (
      <ErrorAlert
        onClick={reportSearchError}
        icon={
          <ExclamationTriangleIcon
            aria-hidden="true"
            className="h-8 w-8 text-red-500"
          />
        }
        message={
          "There was an error fetching the data for the search query. Please refresh the page or try again later. If the error persists please click on the report button to report the issue."
        }
      />
    );

  return (
    <div className="py-12 lg:py-0">
      {loading ? (
        <div className="mx-4 sm:mx-8">
          <SearchBarLoader />
        </div>
      ) : (
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
          <form
            onKeyDown={handleKeyDown}
            className="mt-8 mb-4 min-w-[275px] lg:mt-4"
          >
            <div className="relative">
              <div>
                <span className="z-[22] absolute mt-3">
                  <MagnifyingGlassIcon className="w-5 h-5 mx-3 text-gray-500" />
                </span>
              </div>
              <ReactSearchAutocomplete
                className="search-bar-input tracking-wide text-gray-900 rounded-full focus-within:ring-2 focus-within:ring-primary-600 focus-within:ring-offset-0 z-[21] text-sm transition duration-200 ease-in-out hover:shadow-lg"
                styling={{
                  border: "solid 1px rgb(79 70 229 / 0.2)",
                  fontSize: "0.875rem",
                  fontFamily:
                    "Inter, system-ui, Avenir, Helvetica, Arial, sans-serif",
                  boxShadow: "none",
                }}
                onSearch={handleOnSearch}
                showIcon={false}
                onSelect={handleOnSelect}
                onHover={handleOnHover}
                items={
                  searchString.trim().length > 0 ? data?.schools || [] : []
                }
                fuseOptions={{
                  keys: ["name"],
                  threshold: 0.3,
                  location: 0,
                  distance: 100,
                  minMatchCharLength: 2,
                }}
                formatResult={formatResult}
                maxResults={7}
                inputDebounce={200}
                placeholder="Search by school name for quintile data"
                showNoResultsText="No schools found"
              />
            </div>
          </form>
          {!selectedSchool && (
            <Alert
              icon={
                <InformationCircleIcon
                  aria-hidden="true"
                  className="h-6 w-6 text-blue-400"
                />
              }
              message={
                "Use the search bar to easily find the South African schools you are looking for"
              }
            />
          )}
          <RenderSearchResults />
        </div>
      )}
    </div>
  );
};

export default SearchBar;
