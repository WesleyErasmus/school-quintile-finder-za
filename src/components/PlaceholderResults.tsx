import { DocumentMagnifyingGlassIcon } from "@heroicons/react/24/solid";
import { useDataContext } from "../contexts/data-context.hook";

const PlaceholderResults = () => {
  const { selectedSchool, filteredData } = useDataContext();

  return (
    <>
      {!filteredData && !selectedSchool && (
        <div className="mt-8 mx-2 bg-sky-50 shadow-sm rounded-lg py-8 px-4 max-w-xl border border-1 ring-1 ring-inset ring-sky-500/10 text-center flex items-center flex-col">
          {/* Icon */}
          <div className="flex h-10 w-10 mb-4 items-center justify-center shadow-sm shadow-sky-200 p-2 rounded-full bg-sky-500">
            <DocumentMagnifyingGlassIcon
              aria-hidden="true"
              className="h-7 w-7 text-white"
            />
          </div>
          <div className="border-t border-sky-500/10">
            <div className="mt-4">
              <h3 className="text-lg font-semibold leading-6 text-sky-500">
                Find a School
              </h3>
              <p className="text-sm leading-6 text-gray-700">
                Use the search bar to{" "}
                <strong>
                  quickly find the South African school you are looking for
                </strong>
                . Your results will appear here.
              </p>
            </div>
            <div className="mt-4">
              <h3 className="text-lg font-semibold leading-6 text-sky-500">
                Create Your Own Data Table
              </h3>
              <p className="text-sm leading-6 text-gray-700">
                Click Generate Custom Data Table to build a table{" "}
                <strong>using the provided filters</strong>. Easily search
                through the data and <strong>export your table to Excel </strong>
                with just one click.
              </p>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default PlaceholderResults;