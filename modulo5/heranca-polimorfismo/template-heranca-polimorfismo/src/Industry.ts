import { Place } from "./Place";

export class Industry extends Place {
  constructor(
    protected machinesQuantity: number,
    cep: string
  ) {
    super(cep);
  }
  getMachinesQuantity = (): number => {
    return this.machinesQuantity
  }
}