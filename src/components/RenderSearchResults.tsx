import {
  BriefcaseIcon,
  MapPinIcon,
  BanknotesIcon,
  HomeIcon,
  Squares2X2Icon,
  
} from "@heroicons/react/24/outline";
import { Square3Stack3DIcon } from "@heroicons/react/24/solid";
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
          <div className="p-6 rounded-lg tracking-wide bg-white">
            {/* Card head with color */}
            <div>
              <h2 className="text-lg font-bold leading-6 text-gray-900">
                {selectedSchool.name}
              </h2>
            </div>
            {/* Card Body */}
            <div className="pt-2">
              <div className="flex py-1.5">
                <div className="flex items-center justify-center">
                  <Square3Stack3DIcon
                    aria-hidden="true"
                    className="w-5 h-5 text-primary-600"
                  />
                </div>
                <div className="ml-2.5 text-sm text-primary-600 font-extrabold">
                  Quintile level: {selectedSchool.quintile}
                </div>
                {/* </span> */}
              </div>

              <div className="flex py-1.5">
                <div className="flex items-center justify-center">
                  <HomeIcon
                    aria-hidden="true"
                    className="w-5 h-5 text-slate-700"
                  />
                </div>
                <div className="ml-2.5">
                  <span className="text-sm text-slate-700">Province: </span>
                  <span className="text-gray-900 text-sm font-medium">
                    {selectedSchool.province}
                  </span>
                </div>
              </div>

              {/*  */}
              <div className="flex py-1.5">
                <div className="flex items-center justify-center">
                  <BriefcaseIcon
                    aria-hidden="true"
                    className="w-5 h-5 text-slate-700"
                  />
                </div>
                <div className="ml-2.5">
                  <span className="text-sm text-slate-700">Sector: </span>
                  <span className="text-gray-900 text-sm font-medium">
                    {selectedSchool.sector}
                  </span>
                </div>
              </div>
              {/*  */}

              <div className="flex py-1.5">
                <div className="flex items-center justify-center">
                  <Squares2X2Icon
                    aria-hidden="true"
                    className="w-5 h-5 text-slate-700"
                  />
                </div>
                <div className="ml-2.5">
                  <span className="text-sm text-slate-700">Phase: </span>
                  <span className="text-gray-900 text-sm font-medium">
                    {selectedSchool.phase}
                  </span>
                </div>
              </div>
              <div className="flex py-1.5">
                <div className="flex items-center justify-center">
                  <BanknotesIcon
                    aria-hidden="true"
                    className="w-5 h-5 text-slate-700"
                  />
                </div>
                <div className="ml-2.5">
                  <span className="text-sm text-slate-700">Fee paying: </span>
                  <span className="text-gray-900 text-sm font-medium">
                    {selectedSchool.fee_paying}
                  </span>
                </div>
              </div>
              <div className="flex pt-1.5">
                <div className="flex items-start justify-center">
                  <MapPinIcon
                    aria-hidden="true"
                    className="w-5 h-5 mt-0.5 text-slate-700"
                  />
                </div>
                <div className="ml-2.5">
                  <span className="text-sm text-slate-700">Address: </span>
                  <span className="text-gray-900 text-sm font-medium">
                    {selectedSchool.address}
                  </span>
                </div>
              </div>
            </div>
          </div>
      ) : null}
    </>
  );
};

export default RenderSearchResults;
