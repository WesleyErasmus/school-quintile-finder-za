import Dropdown from "../Dropdown";
import { gql, useQuery } from "@apollo/client";
import FilterPhase from "../../graphql/queries/filter-by-phase-query.graphql";
import { useDataContext } from "../../contexts/data-context.hook";
import { FilterOption } from "../../types/FilterOptions";
import { useCallback } from "react";

const PhaseFilter = () => {
  const { selectedFilter, setSelectedFilter, setIsLoading, setFilteredData } =
    useDataContext();

  const FILTER_SCHOOLS_BY_PHASE = gql`
    ${FilterPhase}
  `;

  const { refetch, error } = useQuery(FILTER_SCHOOLS_BY_PHASE, {
    variables: {
      selectedFilter: `%${selectedFilter}%`,
      skip: !selectedFilter,
    },
  });

  const handlePhaseFilter = useCallback(
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
    {
      name: "Pre-Primary Schools",
      filterFunction: handlePhaseFilter("Pre-Primary School"),
    },
    {
      name: "Primary Schools",
      filterFunction: handlePhaseFilter("Primary School"),
    },
    {
      name: "Intermediate Schools",
      filterFunction: handlePhaseFilter("Intermediate School"),
    },
    {
      name: "Secondary Schools",
      filterFunction: handlePhaseFilter("Secondary School"),
    },
    {
      name: "Combined Schools",
      filterFunction: handlePhaseFilter("Combined School"),
    },
    {
      name: "Specialized Schools",
      filterFunction: handlePhaseFilter("Specialized School"),
    },
  ];

  const optionsIndex = 0;

  if (error) return <p>Error: {error.message}</p>;

  return (
    <>
      <Dropdown
        buttonName={"Phase"}
        filterOptions={filterOptions}
        activeIndex={optionsIndex}
      />
    </>
  );
};

export default PhaseFilter;
