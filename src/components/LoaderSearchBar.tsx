import { BarLoader } from "react-spinners"

const LoaderSearchBar = () => {
  return (
    <>
      <div className="relative max-w-3xl mx-auto text-center">
        <BarLoader width={"100%"} loading speedMultiplier={2} color="#4f46e5" />
      </div>
    </>
  );
};

export default LoaderSearchBar;