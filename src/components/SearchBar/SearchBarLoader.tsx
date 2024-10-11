import { BarLoader } from "react-spinners";

const SearchBarLoader = () => {
  return (
    <>
      <div className="relative max-w-3xl mx-auto text-center">
        <BarLoader width={"100%"} loading speedMultiplier={2} color="#4f46e5" />
        <p className="mt-4 font-medium">Loading data, please wait...</p>
      </div>
    </>
  );
};

export default SearchBarLoader;
