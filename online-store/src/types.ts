// export type ProductType = {
//   id: number,
//   category: string,
//   title: string,
//   brand: string,
//   size: string,
//   color: string,
//   quantity: number,
//   price: number,
//   img: string,
// };

export type ProductType = {
[key: string]: string | number
}

export type FilterType = {
   [key: string]: string | number
};

export type CartType = {
   [key: string]: {[key: string]: string| number}
};
