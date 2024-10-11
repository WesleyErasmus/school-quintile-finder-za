import { ChevronRightIcon } from "@heroicons/react/16/solid";
import TopNavbar from "../components/TopNavbar";
import { homePage } from "../routes";
import { useNavigate } from "react-router-dom";

const PageNotFound = () => {
  const navigate = useNavigate();
  return (
    <>
      <TopNavbar />
      <div className="flex flex-col items-center py-36 h-screen">
        <h2 className="text-3xl pb-4">Page not found</h2>
        <div className="flex items-center text-primary-600 font-medium">
          <a
            onClick={() => navigate(homePage)}
            className="text-sm cursor-pointer"
          >
            Go to homepage{" "}
          </a>
          <ChevronRightIcon className="w-4 h-4" />
        </div>
      </div>
    </>
  );
};

export default PageNotFound;
