import { createContext, ReactNode, useContext, useState } from "react";
import { School } from "../types/School";

interface DataContextType {
  selectedSchool: School | null;
  setSelectedSchool: ((school: School | null) => void);
  selectedFilter: string;
  setSelectedFilter: (string: string) => void;
  filteredData: School[] | null;
  setFilteredData: (schools: School[] | null) => void;
  isLoading: boolean;
  setIsLoading: (loading: boolean) => void;
  isLoadingFilteredData: boolean;
  setIsLoadingFilteredData: (loading: boolean) => void;
}

const DataContext = createContext<DataContextType | undefined>(undefined);

export const DataProvider = ({ children }: { children: ReactNode }) => {
  const [selectedSchool, setSelectedSchool] = useState<School | null>(null);
  const [selectedFilter, setSelectedFilter] = useState("")
  const [filteredData, setFilteredData] = useState<School[] | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [isLoadingFilteredData, setIsLoadingFilteredData] = useState(false);

  return (
    <DataContext.Provider
      value={{
        selectedSchool,
        setSelectedSchool,
        selectedFilter,
        setSelectedFilter,
        filteredData,
        setFilteredData,
        isLoadingFilteredData,
        setIsLoadingFilteredData,
        isLoading,
        setIsLoading,
      }}
    >
      {children}
    </DataContext.Provider>
  );
};

export const useDataContext = () => {
  const context = useContext(DataContext);
  if (context === undefined) {
    throw new Error("useDataContext must be used within a DataProvider");
  }
  return context;
};