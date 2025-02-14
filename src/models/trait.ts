// models/Trait.ts
export default class Trait {
  constructor(public id: string, public name: string) {}

  static fromJSON(data: any): Trait {
    return new Trait(data.id, data.name);
  }
}
