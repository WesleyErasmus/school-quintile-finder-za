import { useDataContext } from "../contexts/data-context.hook";
import Loader from "./Loader";

const RenderSearchResults = () => {
  const { selectedSchool, isLoading, setIsLoading } = useDataContext();

if (selectedSchool && isLoading) {
    setIsLoading(false);
}

// Error for if data does not load: Add error handling with a button to refresh the page is no data is loading and another option to contact developer if the issue persists

  return (
    <>
      {isLoading ? (
        <div>
          <Loader />
        </div>
      ) : selectedSchool ? (
        <div className=" mt-12 mx-2 border border-gray-100 rounded-xl">
          <div className="px-5 py-4 bg-gray-100 rounded-t-xl">
            <h3 className="text-lg font-semibold leading-7 text-gray-900">
              {selectedSchool.name}
            </h3>
            <span className="mt-1 text-sm font-normal leading-6 italic text-pink-500">
              Quintile:
              <span className="text-indigo-600">{selectedSchool.quintile}</span>
            </span>
          </div>
          <div className="px-5 py-3">
            <dl className="divide-y divide-gray-100">
              <div className="px-4 py-2 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
                <dt className="text-sm font-semibold leading-6 text-gray-900">
                  Province:
                </dt>
                <dd className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">
                  {selectedSchool.province}
                </dd>
              </div>
              <div className="px-4 py-2 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
                <dt className="text-sm font-semibold leading-6 text-gray-900">
                  Sector:
                </dt>
                <dd className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">
                  {selectedSchool.sector}
                </dd>
              </div>
              <div className="px-4 py-2 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
                <dt className="text-sm font-semibold leading-6 text-gray-900">
                  Phase:
                </dt>
                <dd className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">
                  {selectedSchool.phase}
                </dd>
              </div>
              <div className="px-4 py-2 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
                <dt className="text-sm font-semibold leading-6 text-gray-900">
                  Fee Paying / No Fee Paying:
                </dt>
                <dd className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">
                  {selectedSchool.fee_paying}
                </dd>
              </div>
              <div className="px-4 py-2 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
                <dt className="text-sm font-semibold leading-6 text-gray-900">
                  Street Address:
                </dt>
                <dd className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">
                  {selectedSchool.address}
                </dd>
              </div>
            </dl>
          </div>
        </div>
      ) : null}
    </>
  );
};

export default RenderSearchResults;
