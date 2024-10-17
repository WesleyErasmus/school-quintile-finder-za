import { ReactNode } from "react";
import { useDataContext } from "../contexts/data-context.hook";
// import { ExclamationTriangleIcon } from "@heroicons/react/24/solid";
import {
  BellAlertIcon,
  CheckCircleIcon,
  ExclamationTriangleIcon,
} from "@heroicons/react/24/outline";
import Loader from "./Loader";

interface ErrorAlert {
  icon: ReactNode;
  message: string;
  onClick?: () => void;
}
const ErrorAlert = (props: ErrorAlert) => {
  const { isLoading, errorSent, error } = useDataContext();

  const handleButtonText = () => {
    if (isLoading)
      return (
        <div className="flex items-center justify-center">
          <span className="mr-3">Sending</span>
          <Loader color={"#fff"} size={28} />
        </div>
      );
    if (errorSent)
      return (
        <div className="flex items-center justify-center">
          <CheckCircleIcon className="mr-2 w-8 h-8" />
          Report Sent Successfully
        </div>
      );
    if (error)
      return (
        <div className="flex md:items-center justify-center flex-col md:flex-row">
          <ExclamationTriangleIcon className="text-yellow-600 mr-2 w-7 h-7" />
          <span className="mt-2 md:mt-0 text-yellow-600 text-left">
            Something went wrong while sending the report. Please refresh the page or try again later.
          </span>
        </div>
      );
    return (
      <div className="flex items-center justify-center">
        <BellAlertIcon className="mr-3 w-[25px] h-[25px]" />
        Send Report
      </div>
    );
  };

  return (
    <div className="mx-4 sm:mx-8 md:mx-4 bg-white rounded-sm font-medium py-4 sm:px-4 flex items-start flex-col text-red-500 shadow-sm border-l-4 border-red-500">
      <div className="flex flex-col sm:flex-row px-4 sm:px-0 items-start">
        <div className="mb-3 sm:mb-0 mr-3">{props.icon}</div>
        <div>
          <p className="text-sm leading-6 tracking-wide font-semibold">
            {props.message}
          </p>
          <div className="mt-6">
            <button
              disabled={isLoading || errorSent || error}
              onClick={props.onClick}
              className={`text-white tracking-wide text-sm px-6 py-3 md:py-2.5 rounded-lg shadow-sm hover:shadow-md active:ring-1 ${
                !errorSent
                  ? `${
                      error
                        ? "bg-yellow-50 ring-yellow-400/10 rounded-sm border-l-4 border-yellow-500"
                        // : "bg-blue-500 active:ring-1 active:ring-primary-700"
                        : "bg-red-500 active:ring-red-600"
                    }`
                  : "bg-green-600 active:ring-0 font-semibold"
              }`}
            >
              {handleButtonText()}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ErrorAlert;
