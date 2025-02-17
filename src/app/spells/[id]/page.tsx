import { Metadata } from "next";
import { Spell } from "../../../models/spell";
import { spellService } from "../../../lib/api/apiServices";
import { handleUnknown } from "@/utils/utils";

export async function generateMetadata({
  params,
}: {
  params: { id: string };
}): Promise<Metadata> {
  try {
    const param = await params;
    const spell = await spellService.getById(param.id);
    if (spell && spell.name) {
      return {
        title: spell.name,
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

export default async function SpellPage({
  params,
}: {
  params: { id: string };
}) {
  const param = await params;
  const spell: Spell | undefined = await spellService
    .getById(param.id)
    .catch((error) => undefined);

  const handleCanBeVerbal = (value: boolean | undefined) => {
    return value  === undefined ? "Unknown" : value ? "Yes" : "No";
  };

  return (
    <>
      {spell?.id && (
        <div className="flex flex-col gap-4 py-8 h-full w-full items-center justify-center text-center ">
          <div>
            <h1 className="text-xl font-bold  ">{spell.name}</h1>
            <div className="flex flex-col items-center justify-center">
              <p>Incantation: {handleUnknown(spell.incantation)}</p>
              <p>Effects: {handleUnknown(spell.effect)}</p>
              <p>Can be verbal: {handleCanBeVerbal(spell.canBeVerbal)}</p>
              <p>Type: {handleUnknown(spell.type)}</p>
              <p>Light: {handleUnknown(spell.light)}</p>
            </div>
            <div className="flex flex-col items-center justify-center">
              <h2 className="text-lg font-semibold mt-4">Creator</h2>
              <p>{handleUnknown(spell.creator)}</p>
            </div>
          </div>
        </div>
      )}
      {spell?.id === undefined && (
        <div className="flex flex-col gap-4 py-8 h-full w-full items-center justify-center text-center ">
          <h1 className="text-xl font-bold  ">spell not found</h1>
        </div>
      )}
    </>
  );
}
