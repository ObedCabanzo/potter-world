import { SUPABASE_ANON_KEY, SUPABASE_URL } from "../../data/environment";
import { createClient } from "@supabase/supabase-js";


const supabase = createClient(
  SUPABASE_URL ? SUPABASE_URL : "",
  SUPABASE_ANON_KEY ? SUPABASE_ANON_KEY : ""
);

const userExists = async (userId: string) => {
  const { data } = await supabase
    .from("favorites")
    .select("user_id")
    .eq("user_id", userId);
  return (data?.length ?? 0) > 0;
};

// Guardar favorito
export async function addFavorite(userId: string, houseId: number | null) {
  await supabase
    .from("favorites")
    .insert({ user_id: userId, house_id: houseId });
}

// Obtener favorito
export async function getFavorite(userId: string) {
  const { data } = await supabase
    .from("favorites")
    .select("house_id")
    .eq("user_id", userId);
  return data?.map((favorite) => favorite.house_id)[0];
}

export async function setUserFavoriteHouse(
  userId: string,
  houseId: number | null
) {
  const exists = await userExists(userId);
  if (exists) {
    await supabase.from("favorites").delete().eq("user_id", userId);
  }
  await addFavorite(userId, houseId)
    .then(() => console.log("Favorite updated"))
    .catch((error) => console.error(error));
}
