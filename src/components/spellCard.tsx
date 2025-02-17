import { Spell } from ".././models/spell";
import { linksMap } from "../data/links";
import CustomButton from "./customButton";

export default function HouseCard({ spell }: { spell: Spell }) {
  return (
    <div className="flex flex-col justify-center items-center gap-2">
      <div className="flex flex-col justify-center items-center ">
        <h2 className="text-xl font-semibold text-center"> {spell.name}</h2>
        <p>Effect: {spell.effect}</p>
        <p>Type: {spell.type}</p>
      </div>
      <CustomButton
        url={`${linksMap["spells"].url}/${spell.id}`}
        text={"Learn More"}
        trackText={`btn-spell-${spell.name}`}
        className="px-4 py-2 bg-black rounded-lg text-white hover:bg-gray-800 w-fit"
      />
    </div>
  );
}
