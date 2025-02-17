export class Ingredient {
    constructor(
      public id: string,
      public name: string
    ) {}
  
    static fromJSON(data: any): Ingredient {
      return new Ingredient(data.id, data.name);
    }
  }