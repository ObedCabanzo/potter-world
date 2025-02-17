import { Elixir } from "./elixir";

export class Wizard {
    constructor(
      public id: string,
      public firstName: string | null,
      public lastName: string,
      public elixirs: Elixir[]
    ) {}
  
    static fromJSON(data: any): Wizard {
      return new Wizard(
        data.id,
        data.firstName,
        data.lastName,
        data.elixirs?.map((elixir: any) => Elixir.fromJSON(elixir)) || []
      );
    }
  }