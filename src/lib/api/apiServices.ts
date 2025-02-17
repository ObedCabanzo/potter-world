import { House } from "../../models/house";
import { Elixir } from "../../models/elixir";
import { Ingredient } from "../../models/ingredient";
import { Spell } from "../../models/spell";
import { Wizard } from "../../models/wizard";
import { ApiService } from "./apiServiceBase";

export const houseService = new ApiService<House>("houses");
export const elixirService = new ApiService<Elixir>("elixirs");
export const ingredientService = new ApiService<Ingredient>("ingredients");
export const spellService = new ApiService<Spell>("spells");
export const wizardService = new ApiService<Wizard>("wizards");
