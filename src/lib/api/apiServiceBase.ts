import { API_HOST } from "../../data/environment";

export class ApiService<T> {
  constructor(private endpoint: string, private timeout: number = 5000) {}

  private async fetchWithTimeout(
    url: string,
    options?: RequestInit
  ): Promise<Response> {
    const controller = new AbortController();
    const timeoutId = setTimeout(() => controller.abort(), this.timeout);

    try {
      const response = await fetch(url, {
        ...options,
        signal: controller.signal,
      });
      return response;
    } finally {
      clearTimeout(timeoutId);
    }
  }

  async getAll(): Promise<T[]> {
    const response = await this.fetchWithTimeout(
      `${API_HOST}/${this.endpoint}`
    );

    if (!response.ok) {
      throw new Error(
        `Error ${response.status}: No se pudo obtener ${this.endpoint}`
      );
    }

    const data = await response.json();
    return data.map((item: any) => this.fromJSON(item));
  }

  async getById(id: string): Promise<T> {
    const response = await this.fetchWithTimeout(
      `${API_HOST}/${this.endpoint}/${id}`
    );

    if (!response.ok) {
      throw new Error(
        `Error ${response.status}: No se pudo obtener ${this.endpoint} con ID ${id}`
      );
    }

    const data = await response.json();
    return this.fromJSON(data);
  }

  private fromJSON(data: any): T {
    return data as T;
  }
}
