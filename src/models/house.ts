// models/House.ts
import Head from "./head";
import Trait from "./trait";

export class House {
  constructor(
    public id: string,
    public name: string,
    public houseColours: string,
    public founder: string,
    public animal: string,
    public element: string,
    public ghost: string,
    public commonRoom: string,
    public heads: Head[],
    public traits: Trait[]
  ) {}

  static fromJSON(data: any): House {
    const heads =
      data.heads?.map((headData: any) => Head.fromJSON(headData)) || [];
    const traits =
      data.traits?.map((traitData: any) => Trait.fromJSON(traitData)) || [];

    return new House(
      data.id,
      data.name,
      data.houseColours,
      data.founder,
      data.animal,
      data.element,
      data.ghost,
      data.commonRoom,
      heads,
      traits
    );
  }
}
