import { House } from "../../models/house";
import { Book } from "../../models/book";
import { Character } from "../../models/character";
import { Spell } from "../../models/spell";
import { ApiService } from "./apiServiceBase";

export const houseService = new ApiService<House>("houses");
export const spellService = new ApiService<Spell>("spells");
export const bookService = new ApiService<Book>("books");
export const characterService = new ApiService<Character>("characters");
