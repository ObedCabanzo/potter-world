import { Character } from "../../../models/character";
import { characterService } from "../../../lib/api/apiServices";
import CharacterCard from "../../../components/characterCard";
import { stringToNumber } from "../../../utils/utils";
import { Metadata } from "next";

type Props = Promise<{ id: string }>;


async function getcharacterById(id: string): Promise<Character | undefined> {
  const characters: Character[] | undefined = await characterService
    .getAll()
    .catch(() => undefined);
  return characters?.find((b) => b.index === stringToNumber(id));
}

export async function generateMetadata({
  params,
}: {
  params: Props;
}): Promise<Metadata> {
  const id = (await params).id;
  const character = await getcharacterById(id);
  return {
    title: character
      ? `${character.fullName} - Characters`
      : "Not Found - Characters",
  };
}

export default async function LoadingPage({
  params,
}: {
  params: Props;
}) {

  const id = (await params).id;
  const character = await getcharacterById(id);

  return (
    <div className="flex flex-col gap-4 py-8 h-full w-full items-center justify-center">
      <div className="flex flex-col items-center justify-center gap-4">
        {character ? (
          <CharacterCard
            character={character}
            key={`card-${character.index}`}
          />
        ) : (
          <div className="flex flex-col items-center">
            <h1 className="text-xl font-bold">Something happened!!!</h1>
            <h1 className="text-xl font-bold">No character found</h1>
            <h2 className="text-lg font-semibold mt-2">
              Please, come back later
            </h2>
          </div>
        )}
      </div>
    </div>
  );
}
