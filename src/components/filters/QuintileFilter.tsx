import Dropdown from "../Dropdown";
import { gql, useQuery } from "@apollo/client";
import FilterQuintiles from "../../graphql/queries/filter-by-quintile-query.graphql";
import { useDataContext } from "../../contexts/data-context.hook";
import { FilterOption } from "../../types/FilterOptions";
import { useCallback, useEffect } from "react";

const QuintileFilter = () => {
  const {
    selectedFilter,
    setSelectedFilter,
    setIsLoadingFilteredData,
    setFilteredData,
    setTotalCount,
  } = useDataContext();

  const FILTER_SCHOOLS_BY_QUINTILE = gql`
    ${FilterQuintiles}
  `;

  const { refetch,data, loading } = useQuery(FILTER_SCHOOLS_BY_QUINTILE, {
    variables: {
      selectedFilter: selectedFilter,
    },
    skip: !selectedFilter,
  });

   useEffect(() => {
     if (data) {
       setFilteredData(data.schools);
       setTotalCount(data.schools_aggregate.aggregate.count);
     }
     setIsLoadingFilteredData(loading);
   }, [
     data,
     loading,
     setFilteredData,
     setIsLoadingFilteredData,
     setTotalCount,
   ]);

  const handleQuintileFilter = useCallback(
    (filter: string) => async () => {
      setIsLoadingFilteredData(loading);
      setSelectedFilter(filter);

      try {
        const { data } = await refetch({
          selectedFilter: filter,
        });
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
        setIsLoadingFilteredData(false);
      }
    },
    [refetch, setSelectedFilter, setFilteredData, setIsLoadingFilteredData, loading]
  );

  const filterOptions: FilterOption[] = [
    { name: "Quintile 1", filterFunction: handleQuintileFilter("1") },
    { name: "Quintile 2", filterFunction: handleQuintileFilter("2") },
    { name: "Quintile 3", filterFunction: handleQuintileFilter("3") },
    { name: "Quintile 4", filterFunction: handleQuintileFilter("4") },
    { name: "Quintile 5", filterFunction: handleQuintileFilter("5") },
  ];

  const optionsIndex = 0;

  return (
    <Dropdown
      buttonName={"Quintiles"}
      filterOptions={filterOptions}
      activeIndex={optionsIndex}
    />
  );
};

export default QuintileFilter;
