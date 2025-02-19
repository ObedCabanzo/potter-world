"use client";
import { usePageEnd } from "../../hooks/usePageEnd";
import SpellCard from "../../components/spellCard";
import { Spell } from "../../models/spell";
import { trackScrollList } from "../../analytics/events";

export default function SpellsList({ spells }: { spells: Spell[] }) {
  usePageEnd(() => {
    trackScrollList("Spells");
  });
  return (
    <div className="flex flex-col items-center justify-center gap-4">
      {spells &&
        spells.map((spell) => (
          <SpellCard spell={spell} key={`card-${spell.spell}`} />
        ))}
    </div>
  );
}
