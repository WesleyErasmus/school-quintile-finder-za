import { useState } from "react";
import { ReactSearchAutocomplete } from "react-search-autocomplete";

const SearchBar = () => {
  const [firstSuggestion, setFirstSuggestion] = useState(null);
  const [selectedItem, setSelectedItem] = useState(null)
  const items = [
    {
      id: 0,
      name: "Cobol",
    },
    {
      id: 1,
      name: "JavaScript",
    },
    {
      id: 2,
      name: "Basic",
    },
    {
      id: 3,
      name: "PHP",
    },
    {
      id: 4,
      name: "Java",
    },
  ];

  const handleOnSearch = (string: string, results) => {
    if (results.length > 0) {
      setFirstSuggestion(results[0]);
    } else {
      setFirstSuggestion(null);
    }
  };

  const handleOnSelect = (item) => {
    if (firstSuggestion === item) {
      console.log("The first item was successfully selected on enter key down", item)
      setSelectedItem(item);
    } else if (item === item) {
      console.log("The item selection was successful", item);
      setSelectedItem(item);
    }
    
    else {
      console.log("The item was not selected")
    }
  };

  const handleKeyDown = (e: { key: string; preventDefault: () => void; }) => {
    if (e.key === "Enter" && firstSuggestion) {
      e.preventDefault();
      handleOnSelect(firstSuggestion);
    }
  };

  const formatResult = (item) => {
    return (
      <>
        <span style={{ display: "block", textAlign: "left" }}>
          id: {item.id}
        </span>
        <span style={{ display: "block", textAlign: "left" }}>
          name: {item.name}
        </span>
      </>
    );
  };

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
                items={items}
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

      {selectedItem && (
        <>
          <p className="mt-4">Id: {selectedItem.id}</p>
          <p>Name: {selectedItem.name}</p>
        </>
      )}
    </>
  );
};

export default SearchBar;
