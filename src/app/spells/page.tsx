import { Metadata } from "next";
import { Spell } from "../../models/spell";
import SpellCard from "../../components/spellCard";
import { spellService } from "../../lib/api/apiServices";

export const metadata: Metadata = {
  title: "Spells",
  description: "Explore the spells",
};

export default async function Page() {
  const spells: Spell[] | undefined = await spellService
    .getAll()
    .catch((error) => undefined);

  return (
    <div className="flex flex-col gap-4 py-8 h-full w-full items-center justify-center ">
      <h1 className="text-xl font-bold">Spells</h1>

      <div className="flex flex-col items-center justify-center gap-4">
        {spells &&
          spells.map((spell) => (
            <SpellCard spell={spell} key={`card-${spell.id}`} />
          ))}
      </div>
    </div>
  );
}
