export class Spell {
    constructor(
      public id: string,
      public name: string,
      public incantation: string,
      public effect: string,
      public canBeVerbal: boolean,
      public type: string,
      public light: string,
      public creator: string
    ) {}
  
    static fromJSON(data: any): Spell {
      return new Spell(
        data.id,
        data.name,
        data.incantation,
        data.effect,
        data.canBeVerbal,
        data.type,
        data.light,
        data.creator
      );
    }
  
    static fromJSONArray(data: any[]): Spell[] {
      return data.map((spell) => Spell.fromJSON(spell));
    }
  }
  