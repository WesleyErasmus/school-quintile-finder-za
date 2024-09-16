import { BarLoader } from "react-spinners"

const SearchBarLoader = () => {
  return (
    <>
      <div className="relative max-w-3xl mx-auto text-center">
        <BarLoader width={"100%"} loading speedMultiplier={2} color="#1EB4D4" />
      </div>
    </>
  );
}

export default SearchBarLoader