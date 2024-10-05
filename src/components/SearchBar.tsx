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

const GET_SCHOOL_DATA = gql`
  ${SearchSchools}
`;

const SearchBar = () => {
  const [searchString, setSearchString] = useState("");
  const [suggestedItem, setSuggestedItem] = useState<School | null>(null);
  const { setSelectedSchool, setFilteredData } = useDataContext();

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
      <div>
        <div>
          <p className="font-normal text-gray-900">{item.name}</p>
        </div>
        <div>
          <span className="inline-flex items-center rounded-lg bg-indigo-50 px-2 py-1 text-xs font-medium text-indigo-600 ring-1 ring-inset ring-indigo-500/10">
            Quintile level {item.quintile}{" "}
            <svg
              viewBox="0 0 2 2"
              aria-hidden="true"
              className="mx-2 inline h-0.5 w-0.5 fill-current"
            >
              <circle r={1} cx={1} cy={1} />
            </svg>{" "}
            {item.province}
          </span>
        </div>
      </div>
    </>
  );

  if (error) return <p>Error: {error.message}</p>;

  return (
    <div className="">
      {loading ? (
        <div>
          <LoaderSearchBar />
        </div>
      ) : (
        <div>
          <div className="md:hidden mb-4 mx-1 pt-16">
            {/* badge */}
            <span className="inline-flex items-center rounded-lg bg-tertiary-50 px-2 py-1 text-xs font-medium text-tertiary-600 ring-1 ring-inset ring-tertiary-500/10">
              Search and Filter
            </span>
            {/* title */}
            <h1 className="mt-4 text-3xl font-extrabold">
              Search<span className="text-tertiary-600"> School Quintile Data</span>
            </h1>
            {/* subtitle */}
            <p className="text-sm mt-2 tracking-wide leading-5 text-gray-600">
              Discover
              <span className="">
                {" "}
                Quintile level Province Sector Phase Address data
              </span>
            </p>
          </div>
          <form onKeyDown={handleKeyDown} className=" mt-4 mb-2 min-w-[275px]">
            <div className="relative">
              <div className="">
                <span className="z-20 absolute mt-3">
                  <MagnifyingGlassIcon className="w-5 h-5 mx-3 text-tertiary-900" />
                </span>
              </div>
              <ReactSearchAutocomplete
                className="search-bar-input z-10 tracking-wide text-gray-900 rounded-xl focus-within:ring-2 focus-within:ring-tertiary-600 focus-within:ring-offset-2"
                styling={{
                  border: "1px solid #0284c7",
                  fontSize: "0.90rem",
                  fontFamily:
                    "Inter, system-ui, Avenir, Helvetica, Arial, sans-serif",
                  borderRadius: "0.75rem",
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

          <Alert
            icon={
              <InformationCircleIcon
                aria-hidden="true"
                className="h-6 w-6 text-sky-600"
              />
            }
            message={
              "Use the search bar to easily find the South African school you are looking for."
            }
          />
        </div>
      )}
    </div>
  );
};

export default SearchBar;
