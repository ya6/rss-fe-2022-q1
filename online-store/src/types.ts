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

export type FilterType = [string, string]
