import { useDataContext } from "../contexts/data-context.hook";
import Loader from "./Loader";
import { MdArrowRight } from "react-icons/md";

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
        <div className="mt-4 rounded-xl border border-1 p-4 border-gray-200">
          <div className="flex justify-between">
            <div className="flex items-center">
              <div className="rounded-full bg-indigo-600 text-white w-9 h-9 mr-2 flex items-center justify-center content-center text-sm">
                Q{selectedSchool.quintile}
              </div>
              <h4 className="text-xl font-semibold">{selectedSchool.name}</h4>
            </div>
            <div className="flex items-center px-5 rounded-full bg-indigo-600 text-white text-xs">
              Quintile {selectedSchool.quintile}
            </div>
          </div>

          <div className="ml-7 px-5 text-sm">
            <div className="-mt-1 mb-1 text-lg text-indigo-600 font-medium">
              {selectedSchool.province}
            </div>
            <div className="flex items-center">
              <span className="text-lg">
                <MdArrowRight />{" "}
              </span>
              <p className="font-base">
                Sector:{" "}
                <span className="text-indigo-700 font-semibold">
                  {selectedSchool.sector}
                </span>
              </p>
            </div>
            <div className="flex items-center">
              <span className="text-lg">
                <MdArrowRight />{" "}
              </span>
              <p className="font-base">
                Phase:{" "}
                <span className="text-indigo-700 font-semibold">
                  {selectedSchool.phase}
                </span>
              </p>
            </div>
            <div className="flex items-center">
              <span className="text-lg">
                <MdArrowRight />{" "}
              </span>
              <p className="font-base">
                Fee paying:{" "}
                <span className="text-indigo-700 font-semibold">
                  {selectedSchool.fee_paying}
                </span>
              </p>
            </div>
            <div className="flex items-center">
              <span className="text-lg">
                <MdArrowRight />{" "}
              </span>
              <p className="font-base">
                Address:{" "}
                <span className="text-indigo-700 font-semibold">
                  {selectedSchool.address}
                </span>
              </p>
            </div>
          </div>
          <div className="border-b border-1 mt-5 mx-10 border-gray-200"></div>
        </div>
      ) : null}
    </>
  );
};

export default RenderSearchResults;
