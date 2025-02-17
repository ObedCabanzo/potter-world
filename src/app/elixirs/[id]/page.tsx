import { Metadata } from "next";
import { Elixir } from "../../../models/elixir";
import { elixirService } from "../../../lib/api/apiServices";
import { linksMap } from "../../../data/links";
import CustomButton from "../../../components/customButton";
import { Ingredient } from "@/models/ingredient";

export async function generateMetadata({
  params,
}: {
  params: { id: string };
}): Promise<Metadata> {
  try {
    const param = await params;
    const elixir = await elixirService.getById(param.id);
    if (elixir && elixir.name) {
      return {
        title: elixir.name.split(" ")[0],
      };
    } else {
      return {
        title: "Not found",
      };
    }
  } catch (error) {
    return {
      title: "Not found",
    };
  }
}

export default async function elixirPage({
  params,
}: {
  params: { id: string };
}) {
  const param = await params;
  const elixir: Elixir | undefined = await elixirService
    .getById(param.id)
    .catch((error) => undefined);

  const handleUnknown = (value: string | undefined) => {
    return value ? value : "Unknown";
  };

  return (
    <>
      {elixir?.id && (
        <div className="flex flex-col gap-4 py-8 h-full w-full items-center justify-center text-center ">
          <div>
            <h1 className="text-xl font-bold  ">{elixir.name}</h1>
            <div className="flex flex-col items-center">
              <p>Effect: {handleUnknown(elixir.effect)}</p>
              <p>Side effects: {handleUnknown(elixir.sideEffects)}</p>
              <p>Characteristics: {handleUnknown(elixir.characteristics)}</p>
              <p>Time: {handleUnknown(elixir.time)}</p>
              <p>Difficulty: {handleUnknown(elixir.difficulty)}</p>
            </div>
            {elixir.ingredients.length > 0 && (
              <h2 className="text-lg font-semibold mt-4">Ingredients</h2>
            )}
            <div className="flex flex-col mt-2">
              {elixir.ingredients.map((ingredient: Ingredient) => (
                <div
                  className="flex gap-8 items-center justify-center"
                  key={`ingredient-${ingredient.id}`}
                >
                  <p>{ingredient.name}</p>
                
                </div>
              ))}
            </div>
            {elixir.inventors.length > 0 && (
              <h2 className="text-lg font-semibold mt-4">Inventors</h2>
            )}
            <div className="flex flex-col gap-2 mt-2">
              {elixir.inventors.map((inventor) => (
                <div
                  className="flex gap-8 items-center justify-center"
                  key={`ingredient-${inventor.id}`}
                >
                  <h3>
                    {inventor.firstName} {inventor.lastName}
                  </h3>
                  <CustomButton
                    text="Learn More"
                    url={`${linksMap["wizards"].url}/${inventor.id}`}
                    trackText={`btn-inventor-${inventor.firstName}`}
                    className="px-4 py-2 bg-black rounded-lg text-white hover:bg-gray-800"
                  />
                </div>
              ))}
            </div>
            <h2 className="text-lg font-semibold mt-4">Manufacturer</h2>
            <p>{handleUnknown(elixir.manufacturer)}</p>

          </div>
        </div>
      )}
      {elixir?.id === undefined && (
        <div className="flex flex-col gap-4 py-8 h-full w-full items-center justify-center text-center ">
          <h1 className="text-xl font-bold  ">elixir not found</h1>
        </div>
      )}
      
    </>
  );
}
