"use client";
import { usePageEnd } from "../../hooks/usePageEnd";
import SpellCard from "../../components/spellCard";
import { Spell } from "../../models/spell";
import { trackScrollList } from "../../analytics/events";
import { SessionData } from "@auth0/nextjs-auth0/types";

export default function SpellsList({session, spells }: {session : SessionData | null, spells: Spell[] }) {

  usePageEnd(() => {
    trackScrollList(session, "Spells");
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
