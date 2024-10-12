// Data imports
import { useDataContext } from "../../contexts/data-context.hook";
import FilterSchools from "../../graphql/fetch-by-filter.graphql";
import { gql, useQuery } from "@apollo/client";
import {
  FilterKey,
  Filters,
  GraphQLFilters,
  FilterSection,
} from "../../types/FilterTypes";

// React router dom imports
import { useNavigate } from "react-router-dom";
import { mobileFilterResultsPage } from "../../App";

// Headless UI
import { useEffect } from "react";
import {
  Dialog,
  DialogBackdrop,
  DialogPanel,
  Disclosure,
  DisclosureButton,
  DisclosurePanel,
} from "@headlessui/react";

// HeroIcons
import { XMarkIcon } from "@heroicons/react/24/outline";
import { MinusIcon, PlusIcon } from "@heroicons/react/20/solid";

const FILTER_SCHOOLS = gql`
  ${FilterSchools}
`;

export default function FilterOptionsMenu() {
  const {
    setFilteredData,
    setTotalCount,
    setIsLoadingFilteredData,
    setSelectedSchool,
    filters,
    setFilters,

    mobileFiltersOpen,
    setMobileFiltersOpen,
  } = useDataContext();

  const navigate = useNavigate();

  const { refetch } = useQuery(FILTER_SCHOOLS, {
    fetchPolicy: "cache-first",
    variables: {
      filters: {},
    },
    skip: true,
  });

  const hasActiveFilters = (filters: Filters) => {
    return Object.values(filters).some((filter) => filter.length > 0);
  };

  const handleFilterChange = (
    filterType: FilterKey,
    value: string,
    isChecked: boolean
  ) => {
    setSelectedSchool(null);
    setFilters((prevFilters: Filters) => {
      const updatedFilters = { ...prevFilters };
      if (isChecked) {
        updatedFilters[filterType] = [...updatedFilters[filterType], value];
      } else {
        updatedFilters[filterType] = updatedFilters[filterType].filter(
          (item) => item !== value
        );
      }
      return updatedFilters;
    });
  };

  const clearFilters = () => {
    setFilteredData(null);
    setFilters({
      quintile: [],
      sector: [],
      province: [],
      phase: [],
    });
  };

  useEffect(() => {
    if (!hasActiveFilters(filters)) return;

    const fetchFilteredData = async () => {
      setIsLoadingFilteredData(true);
      try {
        const graphqlFilters: GraphQLFilters = {};
        Object.entries(filters).forEach(([key, values]) => {
          if (values.length > 0) {
            graphqlFilters[key] = { _in: values };
          }
        });

        const { data } = await refetch({
          filters: graphqlFilters,
        });

        if (data && data.schools) {
          setFilteredData(data.schools);
          setTotalCount(data.schools_aggregate.aggregate.count);
        } else {
          console.log("No data returned from query");
          setFilteredData([]);
          setTotalCount(0);
        }
      } catch (error) {
        console.error("Error fetching data:", error);
        setFilteredData([]);
        setTotalCount(0);
      } finally {
        setIsLoadingFilteredData(false);
      }
    };

    fetchFilteredData();
  }, [
    filters,
    refetch,
    setFilteredData,
    setIsLoadingFilteredData,
    setTotalCount,
  ]);

  const filterOptions: FilterSection[] = [
    {
      id: "quintile",
      name: "Quintile",
      options: [
        { value: "1", label: "Quintile 1", checked: false },
        { value: "2", label: "Quintile 2", checked: false },
        { value: "3", label: "Quintile 3", checked: false },
        { value: "4", label: "Quintile 4", checked: false },
        { value: "5", label: "Quintile 5", checked: false },
      ],
    },
    {
      id: "province",
      name: "Province",
      options: [
        { value: "Eastern Cape", label: "Eastern Cape", checked: false },
        { value: "Free State", label: "Free State", checked: false },
        { value: "Gauteng", label: "Gauteng", checked: false },
        { value: "KwaZulu-Natal", label: "KwaZulu-Natal", checked: false },
        { value: "Limpopo", label: "Limpopo", checked: false },
        { value: "Mpumalanga", label: "Mpumalanga", checked: false },
        { value: "Northern Cape", label: "Northern Cape", checked: false },
        { value: "North-West", label: "North-West", checked: false },
        { value: "Western Cape", label: "Western Cape", checked: false },
      ],
    },
    {
      id: "phase",
      name: "Phase",
      options: [
        {
          value: "Pre-Primary School",
          label: "Pre-Primary Schools",
          checked: false,
        },
        { value: "Primary School", label: "Primary Schools", checked: false },
        {
          value: "Intermediate Schools",
          label: "Intermediate Schools",
          checked: false,
        },
        {
          value: "Secondary School",
          label: "Secondary School",
          checked: false,
        },
        {
          value: "Combined School",
          label: "Combined Schools",
          checked: false,
        },
        {
          value: "Specialized School",
          label: "Specialized Schools",
          checked: false,
        },
      ],
    },
    {
      id: "sector",
      name: "Sector",
      options: [
        { value: "Public", label: "Public Schools", checked: false },
        {
          value: "Independent",
          label: "Independent Schools",
          checked: false,
        },
      ],
    },
  ];


  return (
    <>
      {/* Mobile filter dialog */}
      <Dialog
        open={mobileFiltersOpen}
        onClose={() => {
          setMobileFiltersOpen(false);
          if (hasActiveFilters(filters)) {
            navigate(mobileFilterResultsPage);
          }
        }}
        className="relative z-40 lg:hidden"
      >
        <DialogBackdrop
          transition
          className="fixed inset-0 bg-black bg-opacity-25 transition-opacity duration-300 ease-linear data-[closed]:opacity-0"
        />
        <div className="fixed inset-0 z-40 flex">
          <DialogPanel
            transition
            className="relative ml-auto flex h-full w-full transform flex-col overflow-y-auto bg-white py-4 pb-0 shadow-xl transition duration-300 ease-in-out data-[closed]:translate-x-full"
          >
            <div className="flex items-center justify-between px-4">
              <h2 className="text-lg font-bold text-gray-900">Filter</h2>
              <button
                type="button"
                onClick={() => setMobileFiltersOpen(false)}
                className="-mr-2 flex h-10 w-10 items-center justify-center rounded-md bg-white p-2 text-gray-600"
              >
                <span className="sr-only">Close menu</span>
                <XMarkIcon aria-hidden="true" className="h-6 w-6" />
              </button>
            </div>

            {/* Filters */}
            <div className="flex flex-col h-full justify-between">
              <form className="mt-4 px-4">
                {filterOptions.map((section) => (
                  <Disclosure
                    key={section.id}
                    as="div"
                    className="border-t border-gray-200 px-4 py-6"
                  >
                    <h3 className="-mx-2 -my-3 flow-root">
                      <DisclosureButton className="group flex w-full items-center justify-between bg-white px-2 py-3 text-gray-600 hover:text-gray-500">
                        <span className="font-semibold text-gray-900">
                          {section.name}
                        </span>
                        <span className="ml-6 flex items-center">
                          <PlusIcon
                            aria-hidden="true"
                            className="h-5 w-5 group-data-[open]:hidden"
                          />
                          <MinusIcon
                            aria-hidden="true"
                            className="h-5 w-5 [.group:not([data-open])_&]:hidden"
                          />
                        </span>
                      </DisclosureButton>
                    </h3>
                    <DisclosurePanel className="pt-6">
                      <div className="space-y-4 sm:space-y-6">
                        {section.options.map((option, optionIdx) => (
                          <div key={option.value} className="flex items-center">
                            <input
                              defaultValue={option.value}
                              id={`filter-mobile-${section.id}-${optionIdx}`}
                              name={`${section.id}[]`}
                              type="checkbox"
                              className="h-4 w-4 rounded border-gray-500 text-primary-600 focus:ring-primary-500"
                              onChange={(e) =>
                                handleFilterChange(
                                  section.id,
                                  option.value,
                                  e.target.checked
                                )
                              }
                              checked={filters[section.id].includes(
                                option.value
                              )}
                            />
                            <label
                              htmlFor={`filter-mobile-${section.id}-${optionIdx}`}
                              className="ml-3 min-w-0 flex-1 text-gray-900"
                            >
                              {option.label}
                            </label>
                          </div>
                        ))}
                      </div>
                    </DisclosurePanel>
                  </Disclosure>
                ))}
              </form>
              <div className="sticky bottom-0 border-t border-1 border-slate-300 py-6 px-4 flex justify-between gap-4 bg-white">
                <button
                  onClick={clearFilters}
                  className="w-1/2 text-sm font-medium tracking-wide rounded-lg border border-1 text-gray-900 border-gray-400 px-4 py-2 active:ring-1 active:ring-gray-900"
                >
                  Clear Filters
                </button>
                <button
                  type="button"
                  onClick={() => {
                    setMobileFiltersOpen(false);
                    if (hasActiveFilters(filters)) {
                      navigate(mobileFilterResultsPage);
                    }
                  }}
                  className="w-1/2 text-sm font-medium tracking-wide rounded-lg text-white bg-primary-600 px-4 py-2 active:ring-1 active:ring-primary-900"
                >
                  Done
                </button>
              </div>
            </div>
          </DialogPanel>
        </div>
      </Dialog>
      <div className="lg:hidden relative px-4 sm:px-8">
        <button
          type="button"
          onClick={() => {
            setMobileFiltersOpen(true);
            if (hasActiveFilters(filters)) {
              navigate(mobileFilterResultsPage);
            }
          }}
          className="w-full my-4 px-6 py-3 text-white tracking-wide rounded-lg bg-primary-600 shadow-sm hover:shadow-md active:bg-primary-700"
        >
          Generate Custom Data Table
        </button>
      </div>

      {/* Desktop filters */}
      <div className="hidden lg:block mr-2 overflow-y-auto pt-4 max-h-screen bg-white rounded-lg lg:ml-4">
        <form className="w-[250px] px-6 ">
          <h1 className="py-4 border-b lg:text-lg border-gray-300 font-semibold lg:pt-0">
            Filter Options
          </h1>
          {filterOptions.map((section, index) => (
            <Disclosure
              key={section.id}
              as="div"
              className="py-6"
              defaultOpen={index === 0}
            >
              <h3 className="-my-3 flow-root">
                <DisclosureButton className="group flex w-full items-center justify-between py-3 text-sm text-gray-400 hover:text-gray-500">
                  <span className="font-medium text-gray-900">
                    {section.name}
                  </span>
                  <span className="ml-6 flex items-center">
                    <PlusIcon
                      aria-hidden="true"
                      className="h-5 w-5 group-data-[open]:hidden"
                    />
                    <MinusIcon
                      aria-hidden="true"
                      className="h-5 w-5 [.group:not([data-open])_&]:hidden"
                    />
                  </span>
                </DisclosureButton>
              </h3>
              <DisclosurePanel className="pt-6">
                <div className="space-y-4">
                  {section.options.map((option, optionIdx) => (
                    <div key={option.value} className="flex items-center">
                      <input
                        defaultValue={option.value}
                        id={`filter-${section.id}-${optionIdx}`}
                        name={`${section.id}[]`}
                        type="checkbox"
                        className="h-4 w-4 rounded border-gray-400 text-primary-600 focus:ring-primary-500"
                        onChange={(e) =>
                          handleFilterChange(
                            section.id,
                            option.value,
                            e.target.checked
                          )
                        }
                        checked={filters[section.id].includes(option.value)}
                      />
                      <label
                        htmlFor={`filter-${section.id}-${optionIdx}`}
                        className="ml-3 text-sm text-gray-900"
                      >
                        {option.label}
                      </label>
                    </div>
                  ))}
                </div>
              </DisclosurePanel>
            </Disclosure>
          ))}
        </form>
      </div>
    </>
  );
}
