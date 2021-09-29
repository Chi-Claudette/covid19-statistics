import {Cat} from "./cat";

export interface Prod {
  name: string,
  quant: number,
  price: string,
  curr: string,
  pd?: string,
  cat: Cat
}
