export default class Head {
  constructor(
    public id: string,
    public firstName: string,
    public lastName: string
  ) {}

  static fromJSON(data: any): Head {
    return new Head(data.id, data.firstName, data.lastName);
  }
}
