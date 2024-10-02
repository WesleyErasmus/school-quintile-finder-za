import {
  BriefcaseIcon,
  MapPinIcon,
  BanknotesIcon,
  MapIcon,
  Squares2X2Icon,
} from "@heroicons/react/16/solid";
import { useDataContext } from "../contexts/data-context.hook";
import Loader from "./Loader";
// import { MdArrowRight } from "react-icons/md";

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
        <div className="m-4 border border-1 rounded-lg border-indigo-100 shadow-sm bg-gradient-to-b from-indigo-50 from-10% via-white via-50% to-white to-90%">
          {/* Card head with color */}
          <div className="px-4 pt-6 rounded-t-xl">
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
                <p className="leading-6 text-sm font-medium text-gray-600">Phase</p>
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
            <div className="flex pt-2 pb-4">
              <div className="mt-1 h-7 w-7 px-1 flex items-center justify-center rounded-md bg-indigo-600">
                <MapPinIcon aria-hidden="true" className="w-5 h-5 text-white" />
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
      ) : // <div className="mt-4 rounded-xl border border-1 p-4 m-2 border-gray-200">
      //   <div className="flex justify-between mb-2">
      //     <div className="flex items-center">
      //       <h4 className="text-xl font-semibold">{selectedSchool.name}</h4>
      //     </div>
      //   </div>

      //   <div className="ml-0  text-sm">
      //     <div className="-mt-1 mb-1 text-lg text-gray-700 font-medium">
      //       Quintile: {selectedSchool.quintile}
      //     </div>
      //     <div className="flex items-center">
      //       <span className="text-lg">
      //         <MdArrowRight />{" "}
      //       </span>
      //       <p className="font-medium">
      //         Province:{" "}
      //         <span className="text-gray-700">{selectedSchool.province}</span>
      //       </p>
      //     </div>
      //     <div className="flex items-center">
      //       <span className="text-lg">
      //         <MdArrowRight />{" "}
      //       </span>
      //       <p className="font-medium">
      //         Sector:{" "}
      //         <span className="text-gray-700">{selectedSchool.sector}</span>
      //       </p>
      //     </div>
      //     <div className="flex items-center">
      //       <span className="text-lg">
      //         <MdArrowRight />{" "}
      //       </span>
      //       <p className="font-medium">
      //         Phase:{" "}
      //         <span className="text-gray-700">{selectedSchool.phase}</span>
      //       </p>
      //     </div>
      //     <div className="flex items-center">
      //       <span className="text-lg">
      //         <MdArrowRight />{" "}
      //       </span>
      //       <p className="font-medium">
      //         Fee paying:{" "}
      //         <span className="text-gray-700">
      //           {selectedSchool.fee_paying}
      //         </span>
      //       </p>
      //     </div>
      //     <div className="flex items-start">
      //       <span className="text-lg">
      //         <MdArrowRight />{" "}
      //       </span>
      //       <p className="font-medium">
      //         Address:{" "}
      //         <span className="text-gray-700">{selectedSchool.address}</span>
      //       </p>
      //     </div>
      //   </div>
      // </div>
      null}
    </>
  );
};

export default RenderSearchResults;
