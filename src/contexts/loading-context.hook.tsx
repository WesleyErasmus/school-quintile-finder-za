import { createContext, ReactNode, useContext, useState } from "react";

interface LoadingContextType {
  isLoadingFilteredData: boolean;
  setIsLoadingFilteredData: (loading: boolean) => void;
  loadingSearchReport: boolean;
  setLoadingSearchReport: (loading: boolean) => void;
  loadingFilterReport: boolean;
  setLoadingFilterReport: (loading: boolean) => void;
}

const LoadingContext = createContext<LoadingContextType | undefined>(undefined);

export const LoadingProvider = ({ children }: { children: ReactNode }) => {
  const [isLoadingFilteredData, setIsLoadingFilteredData] = useState(false);
  const [loadingSearchReport, setLoadingSearchReport] = useState(false);
  const [loadingFilterReport, setLoadingFilterReport] = useState(false);

  return (
    <LoadingContext.Provider
      value={{
        // searchbar - handled by Apollo?
        // Desktop filter results - should this work with apollo? (loading state handled in the home page)
        // Mobile filter results - should this work with apollo? (loading state handled in the home page)
        isLoadingFilteredData,
        setIsLoadingFilteredData,
        loadingSearchReport,
        setLoadingSearchReport,
        loadingFilterReport,
        setLoadingFilterReport,
      }}
    >
      {children}
    </LoadingContext.Provider>
  );
};

// eslint-disable-next-line react-refresh/only-export-components
export const useLoadingContext = () => {
  const context = useContext(LoadingContext);
  if (context === undefined) {
    throw new Error("useLoadingContext must be used within a LoadingProvider");
  }
  return context;
};
