import {
  CloudArrowDownIcon,
  // InformationCircleIcon,
} from "@heroicons/react/24/outline";
import { useDataContext } from "../contexts/data-context.hook";

const PlaceholderResults = () => {
  const { selectedSchool, filteredData } = useDataContext();

  return (
    <>
      {!filteredData && !selectedSchool && (
        <div className="flex flex-col gap-y-4 mb-10">
          {/* <div className="mt-8 mx-2 bg-sky-50 border border-1 border-sky-600/20 rounded-lg p-4 flex items-center flex-col text-sky-600">
            <div className="flex items-start">
              <div className="mr-3">
                <InformationCircleIcon
                  aria-hidden="true"
                  className="h-6 w-6 text-sky-600"
                />
              </div>
              <div>
                <p className="text-sm leading-6 tracking-wide">
                  Use the search bar to quickly
                  <strong>
                    {" "}
                    find the South African school you are looking for
                  </strong>
                  .
                </p>
              </div>
            </div>
          </div> */}
          <div className="mt-2 mx-2 bg-sky-50 border border-1 border-sky-600/10 rounded-lg p-4 flex items-center flex-col text-sky-600">
            <div className="flex items-start">
              <div className="mr-3">
                <CloudArrowDownIcon
                  aria-hidden="true"
                  className="h-6 w-6 text-sky-600"
                />
              </div>
              <div>
                <p className="text-sm leading-6 tracking-wide">
                  Click Generate Custom Data Table to build a table
                  <strong> using the provided filters</strong>. Easily search
                  through the data and
                  <strong> export your table to Excel </strong>
                  with just one click.
                </p>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default PlaceholderResults;
