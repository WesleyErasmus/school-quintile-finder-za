import { ReactNode } from "react";
import { useLoadingContext } from "../contexts/loading-context.hook";
import { CheckCircleIcon } from "@heroicons/react/24/solid";
import { ExclamationCircleIcon } from "@heroicons/react/24/outline";
import Loader from "./Loader";
import { useErrorContext } from "../contexts/error-context.hook";

interface ErrorAlertProps {
  icon: ReactNode;
  message: string;
  onClick?: () => void;
  type: "search" | "filter";
}

const ErrorAlert = ({ icon, message, onClick, type }: ErrorAlertProps) => {
  const { loadingSearchReport, loadingFilterReport } = useLoadingContext();
  const {
    reportSearchError,
    reportFilterError,
    searchReportSendSuccess,
    filterReportSendSuccess,
  } = useErrorContext();

  const isLoading =
    type === "search" ? loadingSearchReport : loadingFilterReport;
  const hasError = type === "search" ? reportSearchError : reportFilterError;
  const isSuccess =
    type === "search" ? searchReportSendSuccess : filterReportSendSuccess;

  const handleAlertText = () => {
    if (isLoading) {
      return (
        <span className="mt-1 flex items-center justify-center text-gray-950 font-semibold">
          <Loader color={"#4f46e5"} size={20} />
          <span className="ml-2">Sending error report...</span>
        </span>
      );
    }

    if (isSuccess) {
      return (
        <span className="mt-1 flex items-center justify-center  font-semibold">
          <CheckCircleIcon className="mr-2 w-6 h-6 text-green-500" />
          Error Report Sent
        </span>
      );
    }

    if (hasError) {
      return (
        <span className="mt-1 flex items-start justify-center text-gray-950 font-semibold">
          <ExclamationCircleIcon className="text-amber-500 mr-2 min-w-6 min-h-6 w-6 h-6" />
          Failed. Server temporarily down, please try again later.
        </span>
      );
    }

    return null;
  };

  const getBackgroundColor = () => {
    if (isSuccess) return "bg-white ring-1 ring-inset ring-green-500";
    if (isLoading) return "bg-white ring-1 ring-inset ring-primary-500";
    if (hasError) return "bg-white ring-1 ring-inset ring-yellow-400";
    return "bg-red-100/50";
  };

  return (
    <div
      className={`mx-4 sm:mx-8 md:mx-4 sm:px-4 p-4 rounded-md font-medium shadow-sm transition-all duration-200 ease-in-out
        ${getBackgroundColor()} 
        `}
    >
      <div className="flex flex-row sm:px-0 items-start">
        <div className="mb-2 sm:mb-0 mr-3">
          {!isSuccess && !hasError && !isLoading && icon}
        </div>
        <div>
          {!isSuccess && !hasError && !isLoading ? (
            <p className="text-sm leading-6 tracking-wide text-red-600 font-semibold">
              {message}
            </p>
          ) : (
            <p className="text-sm leading-6 tracking-wide">
              {handleAlertText()}
            </p>
          )}
          {!isSuccess && !hasError && !isLoading && (
            <button
              onClick={onClick}
              className="mt-2 sm:mt-1 font-medium tracking-wide text-sm transition-opacity duration-300 ease-in-out"
            >
              <span className="text-secondary-600 hover:text-secondary-800 underline">
                Report Issue
              </span>
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default ErrorAlert;
