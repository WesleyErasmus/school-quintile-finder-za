import { createContext, ReactNode, useContext, useState } from "react";
import { School } from "../types/SchoolTypes";
import { Filters } from "../types/FilterTypes";

interface DataContextType {
  selectedSchool: School | null;
  setSelectedSchool: (school: School | null) => void;
  selectedFilter: string;
  setSelectedFilter: (string: string) => void;
  filteredData: School[] | null;
  setFilteredData: (schools: School[] | null) => void;
  isLoading: boolean;
  setIsLoading: (loading: boolean) => void;
  isLoadingFilteredData: boolean;
  setIsLoadingFilteredData: (loading: boolean) => void;
  totalCount: number;
  setTotalCount: (count: number) => void;
  filters: Filters;
  setFilters: React.Dispatch<React.SetStateAction<Filters>>;
  mobileFiltersOpen: boolean;
  setMobileFiltersOpen: (boolean: boolean) => void;
  mobileFilterResultsOpen: boolean;
  setMobileFilterResultsOpen: (boolean: boolean) => void;
}

const DataContext = createContext<DataContextType | undefined>(undefined);

export const DataProvider = ({ children }: { children: ReactNode }) => {
  const [selectedSchool, setSelectedSchool] = useState<School | null>(null);
  const [selectedFilter, setSelectedFilter] = useState("");
  const [filteredData, setFilteredData] = useState<School[] | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [isLoadingFilteredData, setIsLoadingFilteredData] = useState(false);
  const [totalCount, setTotalCount] = useState(0);
  const [filters, setFilters] = useState<Filters>({
    quintile: [],
    sector: [],
    province: [],
    phase: [],
  });
  const [mobileFiltersOpen, setMobileFiltersOpen] = useState(false);
  const [mobileFilterResultsOpen, setMobileFilterResultsOpen] = useState(false);

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
        totalCount,
        setTotalCount,
        filters,
        setFilters,
        mobileFiltersOpen,
        setMobileFiltersOpen,
        mobileFilterResultsOpen,
        setMobileFilterResultsOpen,
      }}
    >
      {children}
    </DataContext.Provider>
  );
};

// eslint-disable-next-line react-refresh/only-export-components
export const useDataContext = () => {
  const context = useContext(DataContext);
  if (context === undefined) {
    throw new Error("useDataContext must be used within a DataProvider");
  }
  return context;
};
