import {
  BriefcaseIcon,
  MapPinIcon,
  BanknotesIcon,
  MapIcon,
  Squares2X2Icon,
} from "@heroicons/react/16/solid";
import { useDataContext } from "../contexts/data-context.hook";
import Loader from "./Loader";
import { useEffect, useState } from "react";

const RenderSearchResults = () => {
  const [color, setColor] = useState("primary");
  const { selectedSchool, isLoading, setIsLoading } = useDataContext();

  if (selectedSchool && isLoading) {
    setIsLoading(false);
  }

   useEffect(() => {
     // Only run this effect when selectedSchool changes
     if (selectedSchool) {
       switch (selectedSchool.quintile) {
         case "1":
           setColor("violet");
           break;
         case "2":
           setColor("emerald");
           break;
         case "3":
           setColor("orange");
           break;
         case "4":
           setColor("sky");
           break;
         case "5":
           setColor("red");
           break;
         case "N/A":
         case "Unknown":
           setColor("cyan");
           break;
         default:
           setColor("primary");
       }
     }
   }, [selectedSchool]);
  console.log("Assigned Color:", color);

  return (
    <>
      {isLoading ? (
        <div>
          <Loader />
        </div>
      ) : selectedSchool ? (
        // Card container
        <div className="mt-4">
          {/* <div
            className={`py-8 rounded-lg bg-${color}-50 ring-1 ring-inset ring-${color}-600/20 bg-opacity-25`}
          > */}
          <div
            className={`py-8 rounded-lg bg-gradient-to-r from-${color}-50 from-10% via-${color}-50 via-50% to-${color}-100 to-90%`}
          >
            {/* Card head with color */}
            <div className="px-4">
              <p>
                <span
                  className={`mb-4 inline-flex items-center rounded-lg bg-${color}-600 px-2 py-1 text-sm font-medium text-white ring-1 ring-inset ring-${color}-500/10`}
                >
                  Quintile level, {selectedSchool.quintile}
                </span>
              </p>
              <h2 className="text-2xl font-extrabold text-gray-900">
                {selectedSchool.name}
              </h2>
            </div>
            {/* Card Body */}
            <div className="px-4">
              <div className="flex pb-2 pt-4">
                <div
                  className={`mt-1 h-7 w-7 flex items-center justify-center rounded-md bg-${color}-600`}
                >
                  <MapIcon aria-hidden="true" className="w-5 h-5 text-white" />
                </div>
                <div className="ml-3">
                  <p className="leading-6 text-sm font-medium text-gray-700">
                    Province
                  </p>
                  <h4 className="text-gray-900 text-sm font-bold">
                    {selectedSchool.province}
                  </h4>
                </div>
              </div>
              <div className="flex py-2">
                <div
                  className={`mt-1 h-7 w-7 flex items-center justify-center rounded-md bg-${color}-600`}
                >
                  <BriefcaseIcon
                    aria-hidden="true"
                    className="w-5 h-5 text-white"
                  />
                </div>
                <div className="ml-3">
                  <p className="leading-6 text-sm font-medium text-gray-700">
                    Sector
                  </p>
                  <h4 className="text-gray-900 text-sm font-bold">
                    {selectedSchool.sector}
                  </h4>
                </div>
              </div>
              <div className="flex py-2">
                <div
                  className={`mt-1 h-7 w-7 flex items-center justify-center rounded-md bg-${color}-600`}
                >
                  <Squares2X2Icon
                    aria-hidden="true"
                    className="w-5 h-5 text-white"
                  />
                </div>
                <div className="ml-3">
                  <p className="leading-6 text-sm font-medium text-gray-700">
                    Phase
                  </p>
                  <h4 className="text-gray-900 text-sm font-bold">
                    {selectedSchool.phase}
                  </h4>
                </div>
              </div>
              <div className="flex py-2">
                <div
                  className={`mt-1 h-7 w-7 flex items-center justify-center rounded-md bg-${color}-600`}
                >
                  <BanknotesIcon
                    aria-hidden="true"
                    className="w-5 h-5 text-white"
                  />
                </div>
                <div className="ml-3">
                  <p className="leading-6 text-sm font-medium text-gray-700">
                    Fee paying
                  </p>
                  <h4 className="text-gray-900 text-sm font-bold">
                    {selectedSchool.fee_paying}
                  </h4>
                </div>
              </div>
              <div className="flex pt-2 pb-2">
                <div
                  className={`mt-1 h-7 w-7 px-1 flex items-center justify-center rounded-md bg-${color}-600`}
                >
                  <MapPinIcon
                    aria-hidden="true"
                    className="w-5 h-5 text-white"
                  />
                </div>
                <div className="ml-3">
                  <p className="leading-6 text-sm font-medium text-gray-700">
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
