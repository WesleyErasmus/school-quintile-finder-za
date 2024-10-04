import {
  BriefcaseIcon,
  MapPinIcon,
  BanknotesIcon,
  MapIcon,
  Squares2X2Icon,
} from "@heroicons/react/16/solid";
import { useDataContext } from "../contexts/data-context.hook";
import Loader from "./Loader";

const RenderSearchResults = () => {
  const { selectedSchool, isLoading, setIsLoading } = useDataContext();

  if (selectedSchool && isLoading) {
    setIsLoading(false);
  }

  return (
    <>
      {isLoading ? (
        <div>
          <Loader />
        </div>
      ) : selectedSchool ? (
        // Card container
        <div className="px-2 mt-10">
          <div className="py-8 rounded-lg border-l-8 border-l-indigo-600 ring-1 ring-inset ring-indigo-600/20">
            {/* Card head with color */}
            <div className="px-4 rounded-t-xl">
              <p>
                <span className="mb-4 inline-flex items-center rounded-lg bg-indigo-100 px-2 py-1 text-xs font-medium text-indigo-600 ring-1 ring-inset ring-indigo-500/10">
                  Quintile level, {selectedSchool.quintile}
                </span>
              </p>
              <h2 className="text-2xl font-extrabold text-gray-700">
                {selectedSchool.name}
              </h2>
            </div>
            {/* Card Body */}
            <div className="px-4">
              <div className="flex pb-2 pt-4">
                <div className="mt-1 h-7 w-7 flex items-center justify-center rounded-md bg-indigo-600">
                  <MapIcon aria-hidden="true" className="w-5 h-5 text-white" />
                </div>
                <div className="ml-3">
                  <p className="leading-6 text-sm font-medium text-gray-600">
                    Province
                  </p>
                  <h4 className="text-gray-900 text-sm font-bold">
                    {selectedSchool.province}
                  </h4>
                </div>
              </div>
              <div className="flex py-2">
                <div className="mt-1 h-7 w-7 flex items-center justify-center rounded-md bg-indigo-600">
                  <BriefcaseIcon
                    aria-hidden="true"
                    className="w-5 h-5 text-white"
                  />
                </div>
                <div className="ml-3">
                  <p className="leading-6 text-sm font-medium text-gray-600">
                    Sector
                  </p>
                  <h4 className="text-gray-900 text-sm font-bold">
                    {selectedSchool.sector}
                  </h4>
                </div>
              </div>
              <div className="flex py-2">
                <div className="mt-1 h-7 w-7 flex items-center justify-center rounded-md bg-indigo-600">
                  <Squares2X2Icon
                    aria-hidden="true"
                    className="w-5 h-5 text-white"
                  />
                </div>
                <div className="ml-3">
                  <p className="leading-6 text-sm font-medium text-gray-600">
                    Phase
                  </p>
                  <h4 className="text-gray-900 text-sm font-bold">
                    {selectedSchool.phase}
                  </h4>
                </div>
              </div>
              <div className="flex py-2">
                <div className="mt-1 h-7 w-7 flex items-center justify-center rounded-md bg-indigo-600">
                  <BanknotesIcon
                    aria-hidden="true"
                    className="w-5 h-5 text-white"
                  />
                </div>
                <div className="ml-3">
                  <p className="leading-6 text-sm font-medium text-gray-600">
                    Fee paying
                  </p>
                  <h4 className="text-gray-900 text-sm font-bold">
                    {selectedSchool.fee_paying}
                  </h4>
                </div>
              </div>
              <div className="flex pt-2 pb-2">
                <div className="mt-1 h-7 w-7 px-1 flex items-center justify-center rounded-md bg-indigo-600">
                  <MapPinIcon
                    aria-hidden="true"
                    className="w-5 h-5 text-white"
                  />
                </div>
                <div className="ml-3">
                  <p className="leading-6 text-sm font-medium text-gray-600">
                    Address
                  </p>
                  <h4 className="text-gray-900 text-sm font-bold">
                    {selectedSchool.address}
                  </h4>
                </div>
              </div>
            </div>
          </div>
        </div>
      ) : null}
    </>
  );
};

export default RenderSearchResults;
