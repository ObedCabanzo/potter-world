export class Book {
  constructor(
    public number: string,
    public title: string,
    public originalTitle: string,
    public releaseDate: string,
    public description: string,
    public pages: number,
    public cover: string,
    public index: number
  ) {}

  static fromJSON(data: any): Book {
    return new Book(
      data.number,
      data.title,
      data.originalTitle,
      data.releaseDate,
      data.description,
      data.pages,
      data.cover,
      data.index
    );
  }

  static fromJSONArray(data: any[]): Book[] {
    return data.map((book) => Book.fromJSON(book));
  }
}
