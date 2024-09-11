import Dropdown from "../Dropdown";
import { useDataContext } from "../../contexts/data-context.hook";
import { gql, useQuery } from "@apollo/client";
import FilterProvinces from "../../graphql/queries/filter-by-province-query.graphql";
import { useCallback } from "react";
import { FilterOption } from "../../types/FilterOptions";

const ProvinceFilter = () => {
  const {
    selectedFilter,
    setSelectedFilter,
    setIsLoadingFilteredData,
    setFilteredData,
  } = useDataContext();

  const FILTER_SCHOOLS_BY_PROVINCE = gql`
    ${FilterProvinces}
  `;

  const { refetch } = useQuery(FILTER_SCHOOLS_BY_PROVINCE, {
    variables: {
      selectedFilter: selectedFilter,
      skip: !selectedFilter,
    },
  });

  const handleProvinceFilter = useCallback(
    (filter: string) => async () => {
      setIsLoadingFilteredData(true);
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
        console.error("Error fetching data", error);
        setFilteredData([]);
      } finally {
        setIsLoadingFilteredData(false);
      }
    },
    [refetch, setSelectedFilter, setFilteredData, setIsLoadingFilteredData]
  );

  const filterOptions: FilterOption[] = [
    {
      name: "Eastern Cape",
      filterFunction: handleProvinceFilter("Eastern Cape"),
    },
    { name: "Free State", filterFunction: handleProvinceFilter("Free State") },
    { name: "Gauteng", filterFunction: handleProvinceFilter("Gauteng") },
    {
      name: "KwaZulu-Natal",
      filterFunction: handleProvinceFilter("KwaZulu-Natal"),
    },
    { name: "Limpopo", filterFunction: handleProvinceFilter("Limpopo") },
    { name: "Mpumalanga", filterFunction: handleProvinceFilter("Mpumalanga") },
    {
      name: "Northern Cape",
      filterFunction: handleProvinceFilter("Northern Cape"),
    },
    { name: "North-West", filterFunction: handleProvinceFilter("North-West") },
    {
      name: "Western Cape",
      filterFunction: handleProvinceFilter("Western Cape"),
    },
  ];

  const optionsIndex = 0;

  return (
    <>
      <Dropdown
        buttonName={"Province"}
        filterOptions={filterOptions}
        activeIndex={optionsIndex}
      />
    </>
  );
};

export default ProvinceFilter;
