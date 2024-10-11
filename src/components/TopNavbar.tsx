import { useNavigate } from "react-router-dom";
import { homePage } from "../routes";

const TopNavbar = () => {

  const navigate = useNavigate();
  return (
    <>
      <div className="py-4 px-4 sm:px-8 flex items-center">
        <div className="mx-auto max-w-[1230px] w-full">
          <div onClick={() => navigate(homePage)} className="flex items-center cursor-pointer">
            <div className="mr-2 flex items-center justify-center bg-white w-9 h-9 rounded-full shadow-md">
              <img
                className="w-6 h-6"
                src="./assets/footer-logo.png"
                alt="logo"
              />
            </div>
            <div className="mt-1">
              <h1 className="text-[1.39rem] font-extrabold tracking-wide text-gray-950">
                Quintile Finder
              </h1>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default TopNavbar;
