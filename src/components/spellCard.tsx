import { Spell } from ".././models/spell";

export default function HouseCard({ spell }: { spell: Spell }) {
  return (
    <div className="flex flex-col justify-center items-center gap-2">
      <div className="flex flex-col justify-center items-center ">
        <h2 className="text-xl font-semibold text-center"> {spell.spell}</h2>
        <p>Effect: {spell.use}</p>
      </div>
    </div>
  );
}
