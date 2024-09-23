"use client";
import { useEffect, useState } from "react";
import {
  Dialog,
  DialogBackdrop,
  DialogPanel,
  Disclosure,
  DisclosureButton,
  DisclosurePanel,
} from "@headlessui/react";
import { XMarkIcon } from "@heroicons/react/24/outline";
import { MinusIcon, PlusIcon } from "@heroicons/react/20/solid";
import { useDataContext } from "../contexts/data-context.hook";
import FilterSchools from "../graphql/fetch-by-filter.graphql";
import { gql, useQuery } from "@apollo/client";

const FILTER_SCHOOLS = gql`
  ${FilterSchools}
`;

export default function SidebarFilter() {
  const { setFilteredData, setTotalCount, setIsLoadingFilteredData } =
    useDataContext();

  const [mobileFiltersOpen, setMobileFiltersOpen] = useState(false);
  const [filters, setFilters] = useState({
    quintile: [],
    sector: [],
    province: [],
    phase: [],
  });

  const { refetch } = useQuery(FILTER_SCHOOLS, {
    fetchPolicy: "cache-first",
    variables: {
      filters: {},
    },
    skip: true,
  });

  const hasActiveFilters = (filters) => {
    return Object.values(filters).some((filter) => filter.length > 0);
  };

  const handleFilterChange = (filterType, value, isChecked) => {
    setFilters((prevFilters) => {
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

  useEffect(() => {
    if (!hasActiveFilters(filters)) return;

    const fetchFilteredData = async () => {
      setIsLoadingFilteredData(true);
      try {
        const graphqlFilters = {};
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

  const filterOptions = [
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
    <div className="bg-white border border-1 border-gray-200">
      <div>
        {/* Mobile filter dialog */}
        <Dialog
          open={mobileFiltersOpen}
          onClose={setMobileFiltersOpen}
          className="relative z-40 lg:hidden"
        >
          <DialogBackdrop
            transition
            className="fixed inset-0 bg-black bg-opacity-25 transition-opacity duration-300 ease-linear data-[closed]:opacity-0"
          />

          <div className="fixed inset-0 z-40 flex">
            <DialogPanel
              transition
              className="relative ml-auto flex h-full w-full max-w-xs transform flex-col overflow-y-auto bg-white py-4 pb-12 shadow-xl transition duration-300 ease-in-out data-[closed]:translate-x-full"
            >
              <div className="flex items-center justify-between px-4">
                <h2 className="text-lg font-medium text-gray-900">Filters</h2>
                <button
                  type="button"
                  onClick={() => setMobileFiltersOpen(false)}
                  className="-mr-2 flex h-10 w-10 items-center justify-center rounded-md bg-white p-2 text-gray-400"
                >
                  <span className="sr-only">Close menu</span>
                  <XMarkIcon aria-hidden="true" className="h-6 w-6" />
                </button>
              </div>

              {/* Filters */}
              <form className="mt-4 border-t border-gray-200">
                {filterOptions.map((section) => (
                  <Disclosure
                    key={section.id}
                    as="div"
                    className="border-t border-gray-200 px-4 py-6"
                  >
                    <h3 className="-mx-2 -my-3 flow-root">
                      <DisclosureButton className="group flex w-full items-center justify-between bg-white px-2 py-3 text-gray-400 hover:text-gray-500">
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
                      <div className="space-y-6">
                        {section.options.map((option, optionIdx) => (
                          <div key={option.value} className="flex items-center">
                            <input
                              defaultValue={option.value}
                              defaultChecked={option.checked}
                              id={`filter-mobile-${section.id}-${optionIdx}`}
                              name={`${section.id}[]`}
                              type="checkbox"
                              className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"
                            />
                            <label
                              htmlFor={`filter-mobile-${section.id}-${optionIdx}`}
                              className="ml-3 min-w-0 flex-1 text-gray-500"
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
            </DialogPanel>
          </div>
        </Dialog>

        <main className="mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-baseline justify-between">
            <div className="flex items-center">
              <button
                type="button"
                onClick={() => setMobileFiltersOpen(true)}
                className="-m-2 ml-4 p-2 text-gray-600 rounded-full border border-1 border-gray-200 px-4 py-2 hover:bg-gray-100 sm:ml-6 lg:hidden"
              >
                Filters
              </button>
            </div>
          </div>

          <section>
            <div>
              {/* Filters */}
              <form className="hidden lg:block">
                {filterOptions.map((section) => (
                  <Disclosure
                    key={section.id}
                    as="div"
                    className="border-b border-gray-200 py-6 max-w-[220px]"
                  >
                    <h3 className="-my-3 flow-root">
                      <DisclosureButton className="group flex w-full items-center justify-between bg-white py-3 text-sm text-gray-400 hover:text-gray-500">
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
                              defaultChecked={option.checked}
                              id={`filter-${section.id}-${optionIdx}`}
                              name={`${section.id}[]`}
                              type="checkbox"
                              className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"
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
                              htmlFor={`filter-${section.id}-${optionIdx}`}
                              className="ml-3 text-sm text-gray-600"
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
          </section>
        </main>
      </div>
    </div>
  );
}
