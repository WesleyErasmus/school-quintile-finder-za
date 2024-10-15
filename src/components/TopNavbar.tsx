// React router dom
import { useNavigate } from "react-router-dom";

// Route import
import { homePage } from "../App";

const TopNavbar = () => {
  const navigate = useNavigate();
  return (
    <>
      <div className="py-4 px-4 sm:px-8 md:px-4 flex items-center">
        <div className="mx-auto max-w-[1440px] w-full">
          <div
            onClick={() => navigate(homePage)}
            className="inline-flex items-center cursor-pointer py-1 rounded-lg"
          >
            <img className="mr-2 w-8 h-8" src="./assets/logo.png" alt="logo" />
            <div className="mt-1">
              {/* <h1 className="text-2xl [text-shadow:_0px_1px_2px_rgba(0_0_0_/_25%)] font-extrabold tracking-wide text-gray-950"> */}
              <h1 className="text-2xl font-extrabold tracking-wide text-gray-900">
                Quintile Finder SA
              </h1>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default TopNavbar;
