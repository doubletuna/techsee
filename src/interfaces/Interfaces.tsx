
export interface ITester {
  bugs: IBug[];
  country: string;
  device: string;
  firstName: string;
  lastName: string;
}

export interface IBug {
  id: number;
  title: string;
}

export type TOrder = 'asc' | 'desc'

export type TSortBy = 'firstName' | 'lastName' | 'country'