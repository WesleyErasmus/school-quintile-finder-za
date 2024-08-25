import { ReactNode } from "react";

export interface School {
  name: ReactNode;
  id: number;
  province: string;
  institution_name: string | number;
  sector: string;
  phase: string;
  street_address: string | number;
  suburb: string;
  no_fee_school: string;
  quintile: string | number;
}