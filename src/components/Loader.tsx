import { ClipLoader } from "react-spinners";

const Loader = () => {
  return (
    <>
      <div className="relative w-full h-full text-center my-10 bg-white z-50">
        <ClipLoader color="#6576e6" />
      </div>
    </>
  );
};

export default Loader;
