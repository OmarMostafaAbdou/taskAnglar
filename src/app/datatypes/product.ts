export interface Iproduct {
  _id: string;
  name: string;
  imgURL: string;
  price: number;
  quantity: number;
  categoryID?: number;
  colors?: string[];
  status?: String;
  createdDate?: Date;
}

// export class Product {
//   ID: string;
//   Name:string
// }
