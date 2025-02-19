import { Metadata } from "next";
import { Spell } from "../../models/spell";
import SpellsList from "./spellsList";
import { spellService } from "../../lib/api/apiServices";
import { usePageEnd } from "@/hooks/usePageEnd";

export const metadata: Metadata = {
  title: {
    default: "Spells",
    template: "%s - Spells",
  },
  description: "Explore the spells",
};


export default async function Page() {
  const spells: Spell[] | undefined = await spellService
    .getAll()
    .catch((error) => undefined);


  return (
    <div className="flex flex-col gap-4 py-8 h-full w-full items-center justify-center ">
      <h1 className="text-xl font-bold">Spells</h1>

      {
        spells && <SpellsList spells={spells} />
      }

      {!spells && (
        <div className="flex flex-col items-center ">
          <h1 className="text-xl font-bold">Something happened!!!</h1>
          <h1 className="text-xl font-bold">No spells found</h1>
          <h2 className="text-lg font-semibold mt-2">
            Please, come back later
          </h2>
        </div>
      )}
    </div>
  );
}
