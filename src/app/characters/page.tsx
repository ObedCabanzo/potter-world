import { Metadata } from "next";
import { Character } from "../../models/character";
import CustomButton from "../../components/customButton";
import { characterService } from "../../lib/api/apiServices";
import { linksMap } from "../../data/links";

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
    <div className="flex flex-col py-8 h-full w-full items-center justify-center ">
      <h1 className="text-xl font-bold">Characters </h1>

      {characters &&
        characters.map((character) => (
          <div
            className="flex flex-col  w-96  bg-white  rounded-lg p-4 text-center items-center"
            key={`card-character-${character.index}`}
          >
            <h2 className="text-2xl font-bold">{character.fullName}</h2>
            <h2 className="text-lg font-semibold">
              {" "}
              {character.hogwartsHouse}
            </h2>
            <CustomButton
              text="Read more"
              url={`${linksMap["characters"].url}/${character.index}`}
              trackText="Read more"
              className="bg-black text-white rounded-lg py-2 px-8 text-sm font-bold mt-2"
            />
          </div>
        ))}
      {!characters && (
        <div className="flex flex-col items-center ">
          <h1 className="text-xl font-bold">Something happened!!!</h1>
          <h1 className="text-xl font-bold">No characters found</h1>
          <h2 className="text-lg font-semibold mt-2">
            Please, come back later
          </h2>
        </div>
      )}
    </div>
  );
}
