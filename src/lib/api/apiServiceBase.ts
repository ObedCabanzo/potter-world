import { API_HOST } from "../../data/environment";
export class ApiService<T> {
    constructor(private endpoint: string) {}
  
    async getAll(): Promise<T[]> {
      const response = await fetch(`${API_HOST}/${this.endpoint}`);
  
      if (!response.ok) {
        throw new Error(`Error ${response.status}: No se pudo obtener ${this.endpoint}`);
      }
  
      const data = await response.json();
      return data.map((item: any) => this.fromJSON(item));
    }
  
    async getById(id: string): Promise<T> {
      const response = await fetch(`${API_HOST}/${this.endpoint}/${id}`);
  
      if (!response.ok) {
        throw new Error(`Error ${response.status}: No se pudo obtener ${this.endpoint} con ID ${id}`);
      }
  
      const data = await response.json();
      return this.fromJSON(data);
    }
  
    private fromJSON(data: any): T {
      return data as T; // Se asume que cada modelo tiene su método `fromJSON`
    }
  }
  