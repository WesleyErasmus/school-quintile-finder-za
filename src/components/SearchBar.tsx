import { useEffect, useState } from "react";
import { ReactSearchAutocomplete } from "react-search-autocomplete";
import { useQuery, gql } from "@apollo/client";
import { School } from "../types/SchoolTypes";
import SearchSchools from "../graphql/fetch-school-data.graphql";
import { useDataContext } from "../contexts/data-context.hook";
import SearchBarLoader from "./SearchBarLoader";

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
      <span style={{ display: "block", textAlign: "left", cursor: "pointer" }}>
        {item.name}

        <span className="ml-1 italic inline-flex items-center rounded-md bg-indigo-50 px-2 py-1 text-xs font-normal text-pink-500 ring-1 ring-inset ring-blue-700/10">
          {" "}
          Quintile:{" "}
          <span className="text-indigo-600 text-xs ml-1">{item.quintile}</span>
        </span>
        {/* <span className="ml-1 italic inline-flex items-center rounded-md bg-cyan-50 px-2 py-1 text-xs font-normal text-pink-500 ring-1 ring-inset ring-blue-700/10">
          {" "}
          {item.province}
        </span> */}
      </span>
    </>
  );

  if (error) return <p>Error: {error.message}</p>;

  return (
    <div className="">
      {loading ? (
        <div>
          <SearchBarLoader />
        </div>
      ) : (
        <div>
          {/* <form onKeyDown={handleKeyDown} className="min-w-[275px]"> */}
          <form onKeyDown={handleKeyDown} className="min-w-[275px]">
            <ReactSearchAutocomplete
              className="z-10 text-sm rounded-xl"
              styling={{
                fontSize: "13px",
                fontFamily:
                  "Inter, system-ui, Avenir, Helvetica, Arial, sans-serif",
                boxShadow: "none",
                borderRadius: "0.75rem",
              }}
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
              placeholder="Type here to search for a school"
              showNoResultsText="No schools found"
            />
          </form>
        </div>
      )}
    </div>
  );
};

export default SearchBar;
