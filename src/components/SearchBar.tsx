import '../styles/search-bar.css'
import { useEffect, useState } from "react";
import { ReactSearchAutocomplete } from "react-search-autocomplete";
import { useQuery, gql } from "@apollo/client";
import { School } from "../types/SchoolTypes";
import SearchSchools from "../graphql/fetch-school-data.graphql";
import { useDataContext } from "../contexts/data-context.hook";
import LoaderSearchBar from "./LoaderSearchBar";

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
          <form onKeyDown={handleKeyDown} className="min-w-[275px]">
            <ReactSearchAutocomplete
              className="search-bar-input z-10 font-medium text-sm text-gray-900 rounded-xl"
              styling={{
                fontSize: "0.875rem",
                fontFamily:
                  "Inter, system-ui, Avenir, Helvetica, Arial, sans-serif",
                borderRadius: "0.75rem",
                placeholderColor: "#1f2937",
                border: "2px solid #4f46e5",
                boxShadow: "#a5b4fc 0px 2px 10px 2px",
              }}
              // box-shadow: rgba(0, 0, 0, 0.56) 0px 22px 70px 4px;
              onSearch={handleOnSearch}
              onSelect={handleOnSelect}
              onHover={handleOnHover}
              inputSearchString={searchString}
              items={searchString.trim().length > 0 ? data?.schools || [] : []}
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
          </form>
        </div>
      )}
    </div>
  );
};

export default SearchBar;
