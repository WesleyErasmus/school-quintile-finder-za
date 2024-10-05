import RenderFilterResults from "./RenderFilterResults";
import RenderSearchResults from "./RenderSearchResults";
import PlaceholderResults from "./PlaceholderResults";
import SearchBar from "./SearchBar";
import FilterOptionsMenu from "./FilterOptionsMenu";
import { InformationCircleIcon } from "@heroicons/react/24/solid";
import Alert from "./Alert";

const SearchAndFilterSection = () => {
  return (
    <div>
      <section className="px-2">
        <div className="md:hidden mx-1 pt-16 sm:mt-0">
          <span className="inline-flex items-center rounded-lg bg-sky-50 px-2 py-1 text-xs font-medium text-sky-600 ring-1 ring-inset ring-sky-500/10">
            Search and Filter
          </span>
          <h1 className="mt-4 text-3xl font-extrabold">
            Search for <span className="text-sky-600">Schools</span>
          </h1>
          <p className="text-sm mt-2 font-medium tracking-wide leading-5 text-gray-600">
            Discover the following SA schools data
            <svg
              viewBox="0 0 2 2"
              aria-hidden="true"
              className="mx-2 inline h-0.5 w-0.5 fill-current"
            >
              <circle r={1} cx={1} cy={1} />
            </svg>
            <span className="text-sky-600 font-bold">
              Quintile level
              <svg
                viewBox="0 0 2 2"
                aria-hidden="true"
                className="mx-2 inline h-0.5 w-0.5 fill-current"
              >
                <circle r={1} cx={1} cy={1} />
              </svg>
              Province
              <svg
                viewBox="0 0 2 2"
                aria-hidden="true"
                className="mx-2 inline h-0.5 w-0.5 fill-current"
              >
                <circle r={1} cx={1} cy={1} />
              </svg>
              Sector
              <svg
                viewBox="0 0 2 2"
                aria-hidden="true"
                className="mx-2 inline h-0.5 w-0.5 fill-current"
              >
                <circle r={1} cx={1} cy={1} />
              </svg>
              Phase
              <svg
                viewBox="0 0 2 2"
                aria-hidden="true"
                className="mx-2 inline h-0.5 w-0.5 fill-current"
              >
                <circle r={1} cx={1} cy={1} />
              </svg>
              Address
              <svg
                viewBox="0 0 2 2"
                aria-hidden="true"
                className="mx-2 inline h-0.5 w-0.5 fill-current"
              >
                <circle r={1} cx={1} cy={1} />
              </svg>
              Fees
            </span>
          </p>
        </div>
        <div className="flex flex-col md:flex-row-reverse md:items-start gap-4 mt-4">
          <div className="w-full flex flex-col gap-4">
            {/* <div className="mb-2 bg-sky-50 border border-1 border-sky-600/10 rounded-lg p-4 flex items-center flex-col text-sky-600">
              <div className="flex items-start">
                <div className="mr-3">
                  <InformationCircleIcon
                    aria-hidden="true"
                    className="h-6 w-6 text-sky-600"
                  />
                </div>
                <div>
                  <p className="text-sm leading-6 tracking-wide">
                    Use the search bar to easily
                    <strong>
                      {" "}
                      find the South African school you are looking for
                    </strong>
                    .
                  </p>
                </div>
              </div>
            </div> */}
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
            <SearchBar />
          </div>
          <div>
            <div className="md:hidden mx-1 sm:mt-0">
              <h1 className="mt-16 text-3xl font-extrabold">
                Filter{" "}
                <span className="text-indigo-600">SA Schools Database</span>
              </h1>
              <p className="text-sm mt-2 text-gray-600 tracking-wide leading-5 mb-4">
                Select filters to create the a searchable and downloadable data
                table of according to your specific needs.
              </p>
            </div>
            <FilterOptionsMenu />
          </div>
        </div>
      </section>
      <main className="w-full">
        <PlaceholderResults />
        <RenderSearchResults />
        <RenderFilterResults />
      </main>
    </div>
  );
};

export default SearchAndFilterSection;
