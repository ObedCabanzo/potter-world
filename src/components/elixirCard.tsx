import { Elixir } from "../models/elixir";
import CustomButton from "./customButton";
import { linksMap } from "../data/links";


export default function ElixirCard({ elixir }: { elixir: Elixir }) {
  const handleUnknown = (value: string | undefined) => {
    return value ? value : "Unknown"
  }
  return (
    <div className="flex flex-col justify-center items-center gap-2">
      <div className="flex flex-col justify-center items-center text-center">
        <h1 className="font-semibold">{elixir.name}</h1>
        <p>Effect: {handleUnknown(elixir.effect)}</p>
        <p className="c">Side effects: {handleUnknown(elixir.sideEffects)}</p>
      </div>
      <CustomButton 
        text="Learn More"
        url={`${linksMap["elixirs"].url}/${elixir.id}`}
        trackText={`btn-elixir-${elixir.name}`}
        className="px-4 py-2 bg-black rounded-lg text-white hover:bg-gray-800"

      />
    </div>
  );
} 