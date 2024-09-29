export type FilterKey = "quintile" | "sector" | "province" | "phase";

export interface FilterOption {
  value: string;
  label: string;
  checked: boolean;
}

export interface FilterSection {
  id: FilterKey;
  name: string;
  options: FilterOption[];
}

export type Filters = {
  [key in FilterKey]: string[];
}

export type GraphQLFilters = {
  [key: string]: {
    _in: string[];
  };
};

export const filterOptions: FilterSection[] = [
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
