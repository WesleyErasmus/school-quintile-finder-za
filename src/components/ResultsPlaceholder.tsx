import { DocumentMagnifyingGlassIcon } from "@heroicons/react/24/solid";
// BuildingLibraryIcon
const ResultsPlaceholder = () => {
  return (
    <div className="m-4 bg-gradient-to-r from-gray-100 from-10% via-gray-50 via-30% to-white to-90% shadow-sm rounded-xl py-8 px-4 max-w-xl border border-1 border-gray-100 text-center flex items-center flex-col">
      {/* Icon */}
      <div className=" left-0 top-0 flex h-10 w-10 items-center justify-center shadow-sm shadow-orange-200 p-2 rounded-full mb-4 bg-orange-500 text-white ">
        {/* <BuildingLibraryIcon /> */}
        <DocumentMagnifyingGlassIcon />
      </div>
      <div>
        <h3 className="mb-4 text-lg font-semibold leading-6 text-gray-600">
          Your search and filter results will display here
        </h3>
        <p className="mt-3 text-xs leading-6 text-gray-500">
          Try using the search bar to find a specific school that you are
          looking for. Click or tap on the Select a Filter button and choose
          filter options to generate a custom list of schools which you can
          search through and export
        </p>
      </div>
    </div>
  );
}

export default ResultsPlaceholder