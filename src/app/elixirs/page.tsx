import { Metadata } from "next";
import { Elixir } from "../../models/elixir";
import ElixirCard from "../../components/elixirCard";
import { elixirService } from "../../lib/api/apiServices";

export const metadata: Metadata = {
  title: "Elixirs",
  description: "Explore the elixirs",
};

export default async function Page() {
  const elixirs: Elixir[] | undefined = await elixirService
    .getAll()
    .catch((error) => undefined);

  return (
    <div className="flex flex-col gap-4 py-8 h-full w-full items-center justify-center ">
      <h1 className="text-xl font-bold">Elixirs</h1>

      <div className="flex flex-col items-center justify-center gap-4">
        {elixirs &&
          elixirs.map((elixir) => (
            <ElixirCard elixir={elixir} key={`card-${elixir.name}`} />
          ))}
      </div>
    </div>
  );
}
