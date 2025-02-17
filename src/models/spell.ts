export class Spell {
    constructor(
      public spell: string,
      public use: string,
      public index: number,
    ) {}
  
    static fromJSON(data: any): Spell {
      return new Spell(
        data.spell,
        data.use,
        data.index,
      );
    }
  
    static fromJSONArray(data: any[]): Spell[] {
      return data.map((spell) => Spell.fromJSON(spell));
    }
  }
  