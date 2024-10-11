import { ClipLoader } from "react-spinners";
import { useDataContext } from "../contexts/data-context.hook";

const LoaderFullPage = () => {
  const { isLoadingFilteredData } = useDataContext();
  return (
    <>
      {isLoadingFilteredData ? (
        <div className="z-50 fixed top-0 bottom-0 w-screen h-screen flex items-center justify-center bg-white bg-opacity-75 pointer-events-none">
          <ClipLoader color="#4f46e5" />
        </div>
      ) : null}
    </>
  );
};

export default LoaderFullPage;
