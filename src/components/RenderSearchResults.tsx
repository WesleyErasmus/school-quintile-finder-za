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
        <div className="mt-4 rounded-xl border border-1 p-4 m-2 border-gray-200">
          <div className="flex justify-between mb-2">
            <div className="flex items-center">
              <h4 className="text-xl font-semibold">{selectedSchool.name}</h4>
            </div>
          </div>

          <div className="ml-0  text-sm">
            <div className="-mt-1 mb-1 text-lg text-gray-700 font-medium">
              Quintile: {selectedSchool.quintile}
            </div>
            <div className="flex items-center">
              <span className="text-lg">
                <MdArrowRight />{" "}
              </span>
              <p className="font-medium">
                Province:{" "}
                <span className="text-gray-700">{selectedSchool.province}</span>
              </p>
            </div>
            <div className="flex items-center">
              <span className="text-lg">
                <MdArrowRight />{" "}
              </span>
              <p className="font-medium">
                Sector:{" "}
                <span className="text-gray-700">{selectedSchool.sector}</span>
              </p>
            </div>
            <div className="flex items-center">
              <span className="text-lg">
                <MdArrowRight />{" "}
              </span>
              <p className="font-medium">
                Phase:{" "}
                <span className="text-gray-700">{selectedSchool.phase}</span>
              </p>
            </div>
            <div className="flex items-center">
              <span className="text-lg">
                <MdArrowRight />{" "}
              </span>
              <p className="font-medium">
                Fee paying:{" "}
                <span className="text-gray-700">
                  {selectedSchool.fee_paying}
                </span>
              </p>
            </div>
            <div className="flex items-start">
              <span className="text-lg">
                <MdArrowRight />{" "}
              </span>
              <p className="font-medium">
                Address:{" "}
                <span className="text-gray-700">{selectedSchool.address}</span>
              </p>
            </div>
          </div>
        </div>
      ) : null}
    </>
  );
};

export default RenderSearchResults;
