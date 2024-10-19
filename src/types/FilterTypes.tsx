export type FilterKey =
  | "quintile"
  | "sector"
  | "province"
  | "phase"
  | "fee_paying";

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
};

export type GraphQLFilters = {
  [key in FilterKey]?: string;
};
