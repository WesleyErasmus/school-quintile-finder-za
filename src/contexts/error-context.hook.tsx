import { createContext, ReactNode, useContext, useState } from "react";

interface ErrorContextType {
  filterError: unknown;
  setFilterError: (boolean: boolean) => void;
  reportSearchError: boolean;
  setReportSearchError: (boolean: boolean) => void;
  reportFilterError: boolean;
  setReportFilterError: (boolean: boolean) => void;
  searchReportSendSuccess: boolean;
  setSearchReportSendSuccess: (boolean: boolean) => void;
  filterReportSendSuccess: boolean;
  setFilterReportSendSuccess: (boolean: boolean) => void;
}

const ErrorContext = createContext<ErrorContextType | undefined>(undefined);

export const ErrorProvider = ({ children }: { children: ReactNode }) => {
  const [filterError, setFilterError] = useState(false);
  const [reportSearchError, setReportSearchError] = useState(false);
  const [reportFilterError, setReportFilterError] = useState(false);
  const [searchReportSendSuccess, setSearchReportSendSuccess] = useState(false);
  const [filterReportSendSuccess, setFilterReportSendSuccess] = useState(false);

  return (
    <ErrorContext.Provider
      value={{
        // FIlter data - should this be handled by apollo?
        // Search data error - handled by apollo
        filterError,
        setFilterError,
        reportSearchError,
        setReportSearchError,
        reportFilterError,
        setReportFilterError,
        searchReportSendSuccess,
        setSearchReportSendSuccess,
        filterReportSendSuccess,
        setFilterReportSendSuccess,
      }}
    >
      {children}
    </ErrorContext.Provider>
  );
};

// eslint-disable-next-line react-refresh/only-export-components
export const useErrorContext = () => {
  const context = useContext(ErrorContext);
  if (context === undefined) {
    throw new Error("useErrorContext must be used within a ErrorProvider");
  }
  return context;
};
