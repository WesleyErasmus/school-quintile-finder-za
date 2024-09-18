import Dropdown from "../Dropdown";
import { gql, useQuery } from "@apollo/client";
import FilterSector from "../../graphql/queries/filter-by-sector-query.graphql";
import { useDataContext } from "../../contexts/data-context.hook";
import { FilterOption } from "../../types/FilterOptions";

const SectorFilter = () => {
  const {
    selectedFilter,
    setSelectedFilter,
    setIsLoadingFilteredData,
    setFilteredData,
    setTotalCount,
  } = useDataContext();

  const FILTER_SCHOOLS_BY_SECTOR = gql`
    ${FilterSector}
  `;

  const { refetch } = useQuery(FILTER_SCHOOLS_BY_SECTOR, {
    variables: {
      selectedFilter: selectedFilter,
      skip: !selectedFilter,
    },
  });

  const handleSectorFilter = (filter: string) => async () => {
    setIsLoadingFilteredData(true);
    setSelectedFilter(filter);

    try {
      const { data } = await refetch({ selectedFilter: filter });
      if (data && data.schools) {
        setFilteredData(data.schools);
        setTotalCount(data.schools_aggregate.aggregate.count);
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
  };

  const filterOptions: FilterOption[] = [
    { name: "Public Schools", filterFunction: handleSectorFilter("Public") },
    {
      name: "Independent Schools",
      filterFunction: handleSectorFilter("Independent"),
    },
  ];

  const optionsIndex = 0;

  return (
    <>
      <Dropdown
        activeIndex={optionsIndex}
        buttonName={"Sector"}
        filterOptions={filterOptions}
      />
    </>
  );
};

export default SectorFilter;
