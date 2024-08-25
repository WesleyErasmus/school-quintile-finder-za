import { createContext, ReactNode, useContext, useState } from "react";
import useFetchData from "./use-fetch-data.hook";
import { School } from "../types/School";

interface DataContextType {
  data: unknown;
  selectedSchool: School | null;
  setSelectedSchool: ((school: School | null) => void);
  isLoading: boolean;
  setIsLoading: (loading: boolean) => void;
  searchTerm: string;
  setSearchTerm: (term: string) => void;
}

const DataContext = createContext<DataContextType | undefined>(undefined);

export const DataProvider = ({ children }: { children: ReactNode }) => {
  const [searchTerm, setSearchTerm] = useState("");
  const { data } = useFetchData(searchTerm);
  const [selectedSchool, setSelectedSchool] = useState<School | null>(null);
  const [isLoading, setIsLoading] = useState(false);

  return (
    <DataContext.Provider
      value={{
        data,
        selectedSchool,
        setSelectedSchool,
        isLoading,
        setIsLoading,
        searchTerm,
        setSearchTerm,
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
}