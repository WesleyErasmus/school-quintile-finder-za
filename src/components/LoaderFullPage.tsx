import { ClipLoader } from "react-spinners";
import { useDataContext } from "../contexts/data-context.hook";

const LoaderFullPage = () => {
  const { isLoadingFilteredData } = useDataContext();
  return (
    <>
      {isLoadingFilteredData ? (
        <div className="z-50 fixed top-0 bottom-0 left-0 right-0 text-center flex items-center justify-center">
          <div className="w-full h-full text-center flex items-center justify-center bg-gray-100 opacity-75"></div>
          <div className="absolute">
            <ClipLoader color="#4f46e5" />
          </div>
        </div>
      ) : null}
    </>
  );
};

export default LoaderFullPage;

