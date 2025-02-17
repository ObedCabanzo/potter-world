export class Inventor {
    constructor(
      public id: string,
      public firstName: string,
      public lastName: string
    ) {}
  
    static fromJSON(data: any): Inventor {
      return new Inventor(data.id, data.firstName, data.lastName);
    }
  }
  