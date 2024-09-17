import { useState } from "react";
import { ReactSearchAutocomplete } from "react-search-autocomplete";
import { useQuery, gql } from "@apollo/client";
import { School } from "../types/School";
import SearchSchools from "../graphql/queries/get-school-data.graphql";
import { useDataContext } from "../contexts/data-context.hook";
import SearchBarLoader from "./SearchBarLoader";

const GET_SCHOOL_DATA = gql`
  ${SearchSchools}
`;

const SearchBar = () => {
  // TOP LEVEL OF COMPONENT
  const [searchString, setSearchString] = useState("");
  const [suggestedItem, setSuggestedItem] = useState<School | null>(null);
  const { setSelectedSchool, setFilteredData } = useDataContext();

  const { loading, error, data } = useQuery(GET_SCHOOL_DATA, {
    fetchPolicy: "cache-first",
  });
  console.log("Apollo data log ", data);

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
    console.log(result);
  };

  const handleKeyDown = (e: { key: string; preventDefault: () => void }) => {
    if (e.key === "Enter" && suggestedItem) {
      e.preventDefault();
      handleOnSelect(suggestedItem);
    }
  };

  const formatResult = (item: School) => (
    <>
      <span className="hidden">{item.id}</span>
      <span style={{ display: "block", textAlign: "left", cursor: "pointer" }}>
        {item.name}

        <span className="ml-1 italic inline-flex items-center rounded-md bg-indigo-50 px-2 py-1 text-xs font-normal text-pink-500 ring-1 ring-inset ring-blue-700/10">
          {" "}
          Quintile:{" "}
          <span className="text-indigo-600 text-xs ml-1">{item.quintile}</span>
        </span>
        <span className="ml-1 italic inline-flex items-center rounded-md bg-cyan-50 px-2 py-1 text-xs font-normal text-pink-500 ring-1 ring-inset ring-blue-700/10">
          {" "}
          {item.province}
        </span>
      </span>
    </>
  );

  if (error) return <p>Error: {error.message}</p>;

  return (
    <>
      {loading ? (
        <div>
          <SearchBarLoader />
        </div>
      ) : (
        <form className="relative max-w-3xl mx-auto" onKeyDown={handleKeyDown}>
          <div className="absolute transition-all duration-1000 opacity-30 inset-0 bg-gradient-to-r from-[#44BCFF] via-[#FF44EC] to-[#FF675E] rounded-xl blur-lg filter group-hover:opacity-100 group-hover:duration-200"></div>
          <div className="relative space-y-4 sm:flex sm:space-y-0 sm:items-end">
            <div className="flex-1">
              <div>
                <ReactSearchAutocomplete
                  styling={{
                    zIndex: 10,
                    fontSize: "13px",
                    color: "#4B5563",
                    fontFamily:
                      "Inter, system-ui, Avenir, Helvetica, Arial, sans-serif",
                  }}
                  className="text-sm"
                  onSearch={handleOnSearch}
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
                  autoFocus
                  placeholder="Type here to search for a school"
                  showNoResultsText="No schools found"
                />
              </div>
            </div>
          </div>
        </form>
      )}
    </>
  );
};

export default SearchBar;
