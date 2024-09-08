import Dropdown from "../Dropdown";
import { gql, useQuery } from "@apollo/client";
import FilterQuintiles from "../../graphql/queries/school-filter-queries.graphql";
import { useDataContext } from "../../contexts/data-context.hook";
import { FilterOption } from "../../types/FilterOptions";
import { useCallback } from "react";


const QuintileFilter = () => {
  const { selectedFilter, setSelectedFilter, setIsLoading, setFilteredData } =
    useDataContext();

    const FILTER_QUINTILE_DATA = gql`
      ${FilterQuintiles}
    `;

 const { refetch, error } = useQuery(FILTER_QUINTILE_DATA, {
   variables: {
     selectedFilter: selectedFilter,
     skip: !selectedFilter,
   },
 });


   const handleQuintileFilter = useCallback(
     (filter: string) => async () => {
       setIsLoading(true);
       setSelectedFilter(filter);

       try {
         const { data } = await refetch({ selectedFilter: filter });
         if (data && data.schools) {
           setFilteredData(data.schools);
         } else {
           console.log("No data returned from query");
           setFilteredData([]);
         }
       } catch (error) {
         console.error("Error fetching data:", error);
         setFilteredData([]);
       } finally {
         setIsLoading(false);
       }
     },
     [refetch, setSelectedFilter, setFilteredData, setIsLoading]
   );

  const filterOptions: FilterOption[] = [
    { name: "Quintile 1", filterFunction: handleQuintileFilter("1") },
    { name: "Quintile 2", filterFunction: handleQuintileFilter("2") },
    { name: "Quintile 3", filterFunction: handleQuintileFilter("3") },
    { name: "Quintile 4", filterFunction: handleQuintileFilter("4") },
    { name: "Quintile 5", filterFunction: handleQuintileFilter("5") },
  ];

  const optionsIndex = 0;

  if (error) return <p>Error: {error.message}</p>;

  return (
    <Dropdown
      buttonName={"Quintiles"}
      filterOptions={filterOptions}
      activeIndex={optionsIndex}
    />
  );
};

export default QuintileFilter;
