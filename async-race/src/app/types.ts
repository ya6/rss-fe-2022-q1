export type CarType = {
  name: string;
  color: string;
  id: number;
};
export type AddCarType = {
  name: string;
  color: string;
};
export type PageDataType = {
  firstPage: number;
  currentPage: number;
  lastPage: number;
  cars: number;
};

export type WinnersType = {
  id: number;
  wins: number,
  time: number
};

export type UpdateWinnersType = {
  wins: number,
  time: number
};
