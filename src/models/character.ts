export class Character {
  constructor(
    public fullName: string,
    public nickname: string,
    public hogwartsHouse: string,
    public interpretedBy: string,
    public children: string[],
    public image: string,
    public birthdate: string,
    public index: number
  ) {}

  static fromJSON(data: any): Character {
    return new Character(
      data.fullName,
      data.nickname,
      data.hogwartsHouse,
      data.interpretedBy,
      data.children,
      data.image,
      data.birthdate,
      data.index
    );
  }

  static fromJSONArray(data: any[]): Character[] {
    return data.map((character) => Character.fromJSON(character));
  }
}
