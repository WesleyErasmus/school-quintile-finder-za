const ResultsPlaceholder = () => {
  return (
    <div className="m-4 bg-gradient-to-r from-indigo-50 from-10% via-indigo-50 via-50% to-indigo-100 to-90% shadow-sm flex rounded-xl py-8 px-4 max-w-xl flex-col items-start justify-between">
      <div className="group relative">
        {/* <div className=" left-0 top-0 flex h-10 w-10 items-center justify-center rounded-lg bg-indigo-600">
            T
          </div> */}
        <h3 className="flex mb-4 text-lg font-semibold leading-6 text-indigo-500">
          <div>
            <span className="absolute inset-0" />
            Your search and filter results will display here
          </div>
        </h3>
        <p className="mt-3 text-xs leading-6 text-gray-500">
          Try using the search bar to find a specific school that you are
          looking for. Click or tap on the Select a Filter button and choose
          filter options to generate a custom list of schools which you can
          search through and export
        </p>
      </div>
      {/* <div className="relative mt-3 flex items-center gap-x-4">
        <button className="text-indigo-600 font-semibold">
          Learn more {`->`}
        </button>
      </div> */}
    </div>
  );
}

export default ResultsPlaceholder