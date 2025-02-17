import { Ingredient } from './ingredient';
import { Inventor } from './inventor';
export class Elixir {
    constructor(
      public id: string,
      public name: string,
      public effect: string,
      public sideEffects: string,
      public characteristics: string,
      public time: string,
      public difficulty: string,
      public ingredients: Ingredient[],
      public inventors: Inventor[],
      public manufacturer: string
    ) {}
  
    static fromJSON(data: any): Elixir {
      return new Elixir(
        data.id,
        data.name,
        data.effect,
        data.sideEffects,
        data.characteristics,
        data.time,
        data.difficulty,
        data.ingredients?.map((i: any) => Ingredient.fromJSON(i)) || [],
        data.inventors?.map((inv: any) => Inventor.fromJSON(inv)) || [],
        data.manufacturer
      );
    }
  }