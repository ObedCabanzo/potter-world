import { Metadata } from "next";
import { Character } from "../../models/character";
import CharacterCard from "../../components/characterCard";
import { characterService } from "../../lib/api/apiServices";

export const metadata: Metadata = {
  title: {
    default: "Characters",
    template: "%s - Characters",
  },
  description: "Explore the characters",
};

export default async function Page() {
  const characters: Character[] | undefined = await characterService
    .getAll()
    .catch((error) => undefined);

  return (
    <div className="flex flex-col gap-16 py-8 h-full w-full items-center justify-center ">
      <h1 className="text-xl font-bold">Characters </h1>

      {characters &&
        characters.map((character) => (
          <CharacterCard character={character} key={`card-${character.index}`} />
        ))}
      {!characters && (
        <div className="flex flex-col items-center ">
          <h1 className="text-xl font-bold">Something happened!!!</h1>
          <h1 className="text-xl font-bold">No characters found</h1>
          <h2 className="text-lg font-semibold mt-2">Please, come back later</h2>
        </div>
      )}
    </div>
  );
}
