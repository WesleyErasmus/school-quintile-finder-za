import "../styles/search-bar.css";
import { useEffect, useState } from "react";
import { ReactSearchAutocomplete } from "react-search-autocomplete";
import { useQuery, gql } from "@apollo/client";
import { School } from "../types/SchoolTypes";
import SearchSchools from "../graphql/fetch-school-data.graphql";
import { useDataContext } from "../contexts/data-context.hook";
import LoaderSearchBar from "./LoaderSearchBar";
import Alert from "./Alert";
import { InformationCircleIcon } from "@heroicons/react/24/solid";
import { MagnifyingGlassIcon } from "@heroicons/react/20/solid";
import RenderSearchResults from "./RenderSearchResults";

const GET_SCHOOL_DATA = gql`
  ${SearchSchools}
`;

const SearchBar = () => {
  const [searchString, setSearchString] = useState("");
  const [suggestedItem, setSuggestedItem] = useState<School | null>(null);
  const {
    selectedSchool,
    setSelectedSchool,
    setFilteredData,
    setFilters,
  } = useDataContext();

  const { loading, error, data } = useQuery(GET_SCHOOL_DATA, {
    fetchPolicy: "cache-first",
  });
  console.log("Apollo data log ", data);

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
          {/* <span className="inline-flex items-center rounded-lg bg-primary-50 px-2 py-1 text-xs text-primary-600 ring-1 ring-inset ring-primary-500/10"> */}
          <div className="inline-flex items-center pt-2 pb-3 text-sm text-gray-500">
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

  if (error) return <p>Error: {error.message}</p>;

  return (
    <div className="py-8">
      {loading ? (
        <div className="mx-4">
          <LoaderSearchBar />
        </div>
      ) : (
        <div className="px-3">
          <div>
            {/* badge */}
            <span className="inline-flex items-center rounded-lg bg-primary-50 px-2 py-1 text-sm font-medium text-primary-600 ring-1 ring-inset ring-primary-500/10">
              Search for Schools
            </span>
            {/* title */}
            <h1 className="mt-8 text-3xl font-extrabold tracking-tight">
              Search for
              <span className="text-primary-600"> School Quintile Data</span>
            </h1>
            {/* subtitle */}
            <p className="text-sm mt-2 tracking-wide leading-5 text-gray-600">
              Discover Quintile level Province Sector Phase Address data
            </p>
          </div>
          <form onKeyDown={handleKeyDown} className="mt-8 mb-4 min-w-[275px]">
            <div className="relative">
              <div>
                <span className="z-40 absolute mt-3">
                  <MagnifyingGlassIcon className="w-5 h-5 mx-3 text-gray-500" />
                </span>
              </div>
              <ReactSearchAutocomplete
                // className="search-bar-input z-30 tracking-wide text-gray-900 rounded-lg focus-within:ring-2 focus-within:ring-primary-600 focus-within:ring-offset-0 shadow-sm hover:ring-2 hover:ring-primary-600 hover:ring-offset-2"
                className="search-bar-input z-30 tracking-wide text-gray-900 rounded-lg focus-within:ring-2 focus-within:ring-primary-600 focus-within:ring-offset-0 hover:ring-2 hover:ring-primary-600 hover:ring-offset-2"
                styling={{
                  border: "1px solid #9ca3af",
                  fontSize: "0.90rem",
                  fontFamily:
                    "Inter, system-ui, Avenir, Helvetica, Arial, sans-serif",
                  borderRadius: "0.5rem",
                  placeholderColor: "",
                }}
                onSearch={handleOnSearch}
                showIcon={false}
                onSelect={handleOnSelect}
                onHover={handleOnHover}
                inputSearchString={searchString}
                items={
                  searchString.trim().length > 0 ? data?.schools || [] : []
                }
                fuseOptions={{
                  keys: ["name"],
                  threshold: 0.3,
                  location: 0,
                  distance: 100,
                  minMatchCharLength: 3,
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
                "Use the search bar to easily find the South African school you are looking for"
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
