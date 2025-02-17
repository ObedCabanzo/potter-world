import { House } from "../../models/house";
import { API_HOST } from "../../data/environment";

export async function getHouseById(id: string): Promise<House> {
  const response = await fetch(`${API_HOST}/houses/${id}`);
  
  if (!response.ok) {
    throw new Error(`Error ${response.status}: No se pudo obtener la casa con ID ${id}`);
  }
  const data = await response.json();
  return House.fromJSON(data);
}

export async function getAllHouses(): Promise<House[]> {
  const response = await fetch(`${API_HOST}/houses`);
  
  if (!response.ok) {
    throw new Error(`Error ${response.status}: No se pudo obtener la lista de casas`);
  }

  const data = await response.json();
  return data.map((houseData: any) => House.fromJSON(houseData));
}
