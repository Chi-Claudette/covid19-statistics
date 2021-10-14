import {Cat} from "./cat";

export interface Prod {
  id: number,
  name: string,
  quantity: number,
  unitPrice: number,
  currency: string,
  description: string
  prodPhtoto: string,
  category: Cat,
  photosImagePath: string
}
