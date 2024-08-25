import { useState } from "react";
import { ReactSearchAutocomplete } from "react-search-autocomplete";
import { useDataContext } from "../hooks/data-context.hook";


const SearchBar = () => {
  const { data, setSelectedSchool, setIsLoading, setSearchTerm } =
    useDataContext();
  const [firstSuggestion, setFirstSuggestion] = useState(null);

  const formatData = () => {
     const formattedData = [];
    if (data) {
       for (let index = 0; index < data.length; index++) {
         const item = data[index];

         const formattedItem = {
           id: item.id,
           name: item.institution_name,
         };

         for (const key in item) {
           if (key !== "id" && key !== "institution_name") {
             formattedItem[key] = item[key];
           }
         }

         formattedData.push(formattedItem);
       }

       return formattedData;
    } else {
      return [];
    }
  }

  const formattedData = formatData();

  const handleOnSearch = (string: string, results) => {
    setSearchTerm(string);
    if (results.length > 0) {
      setFirstSuggestion(results[0]);
    } else {
      setFirstSuggestion(null);
    }
  };

  const handleOnSelect = (item) => {
    if (firstSuggestion === item) {
      console.log(
        "The first item was successfully selected on enter key down",
        item
      );
      setIsLoading(true);
      setSelectedSchool(item);
    } else if (item === item) {
      console.log("The item selection was successful", item);
      setIsLoading(true);
      setSelectedSchool(item);
    } else {
      console.log(
        "Failed: The item from the search bar suggestions was not selected"
      );
    }
  };

  const handleKeyDown = (e: { key: string; preventDefault: () => void }) => {
    if (e.key === "Enter" && firstSuggestion) {
      e.preventDefault();
      handleOnSelect(firstSuggestion);
    }
  };

  const formatResult = (item) => (
    <>
      <span style={{ display: "block", textAlign: "left" }}>
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

  return (
    <>
      <form className="relative" onKeyDown={handleKeyDown}>
        <div className="absolute transition-all duration-1000 opacity-30 inset-0 bg-gradient-to-r from-[#44BCFF] via-[#FF44EC] to-[#FF675E] rounded-xl blur-lg filter group-hover:opacity-100 group-hover:duration-200"></div>
        <div className="relative space-y-4 sm:flex sm:space-y-0 sm:items-end">
          <div className="flex-1">
            <div>
              <ReactSearchAutocomplete
                styling={{
                  zIndex: 1000,
                  fontSize: "13px",
                  color: "#4B5563",
                  fontFamily:
                    "Inter, system-ui, Avenir, Helvetica, Arial, sans-serif",
                }}
                className="text-sm"
                items={formattedData}
                onSearch={handleOnSearch}
                onSelect={handleOnSelect}
                autoFocus
                formatResult={formatResult}
                placeholder="Type here to search for a school"
              />
            </div>
          </div>
        </div>
      </form>
    </>
  );
};

export default SearchBar;
