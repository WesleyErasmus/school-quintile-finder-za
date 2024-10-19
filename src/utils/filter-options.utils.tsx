import { FilterSection } from "../types/FilterTypes";

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
        value: "Ecd",
        label: "ECD",
        checked: false,
      },
      { value: "Primary School", label: "Primary Schools", checked: false },
      {
        value: "Intermediate School",
        label: "Intermediate Schools",
        checked: false,
      },
      {
        value: "Secondary School",
        label: "Secondary Schools",
        checked: false,
      },
      {
        value: "Combined School",
        label: "Combined Schools",
        checked: false,
      },
      {
        value: "Special Needs Education",
        label: "Special Needs Education",
        checked: false,
      },
      {
        value: "Hospital School",
        label: "Hospital Schools",
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
  {
    id: "fee_paying",
    name: "Fees",
    options: [
      { value: "Yes", label: "Fee Paying Schools", checked: false },
      {
        value: "No",
        label: "None-Fee Paying Schools",
        checked: false,
      },
    ],
  },
];
