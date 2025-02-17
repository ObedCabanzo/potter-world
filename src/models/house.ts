// models/House.ts
import Head from "./head";
import Trait from "./trait";

export class House {
  constructor(
    public house: string,
    public emoji: string,
    public founder: string,
    public colors: string[],
    public animal: string,
    public index: number
  ) {}

  static fromJSON(data: any): House {
    return new House(
      data.house,
      data.emoji,
      data.founder,
      data.colors,
      data.animal,
      data.index
    );
  }

  static fromJSONArray(data: any[]): House[] {
    return data.map((house) => House.fromJSON(house));
  }
}
