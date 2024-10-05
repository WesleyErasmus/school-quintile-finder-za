import RenderFilterResults from "./RenderFilterResults";
import RenderSearchResults from "./RenderSearchResults";
import PlaceholderResults from "./PlaceholderResults";
import SearchBar from "./SearchBar";
import FilterOptionsMenu from "./FilterOptionsMenu";
const SearchAndFilterSection = () => {
  return (
    <div>
      <section className="px-2">
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
