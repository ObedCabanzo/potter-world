"use client";
import { House } from "../../../models/house";
import { getHouseById } from "@/lib/api/houseServices";
import { useParams } from "next/navigation";
import { useEffect, useState } from "react";

export default function HousePage() {
  const [house, setHouse] = useState<House | undefined>(undefined);
  const [state, setState] = useState("loading");
  const params = useParams<{ id: string }>();

  useEffect(() => {
    getHouseById(params.id)
      .then((house) => {
        setHouse(house);
        setState("loaded");
      })
      .catch(() => setState("error"));
  }, []);

  return (
    <div className="flex flex-col gap-4 py-8 h-full w-full items-center justify-center text-center ">
      {house?.id && (
        <div>
          <h1 className="text-xl font-bold  ">{house.name}</h1>
          <div className="flex flex-col items-center">
            <p>Animal: {house.animal}</p>
            <p>Colours: {house.houseColours}</p>
            <p>Founder: {house.founder}</p>
            <p>Animal: {house.animal}</p>
            <p>Element: {house.element}</p>
            <p>Ghost: {house.ghost}</p>
            <p>Common Room: {house.commonRoom}</p>
          </div>
          <h2 className="text-lg font-semibold mt-4">Heads</h2>
          <div className="flex flex-col gap-2">
            {house.heads.map((head) => (
              <div key={`head-${head.id}`}>
                <h3>{head.firstName}</h3>
                <p className="text-sm">{head.lastName}</p>
              </div>
            ))}
          </div>
          <h2 className="text-lg font-semibold mt-4">Traits</h2>
          <div className="flex flex-col ">
            {house.traits.map((trait) => (
              <h3 key={trait.name}>{trait.name}</h3>
            ))}
          </div>
        </div>
      )}
      {state === "loading" && (
        <h1 className="text-xl font-bold">Loading house...</h1>
      )}
      {state === "error" && (
        <h1 className="text-xl font-bold">Error loading house</h1>
      )}
    </div>
  );
}
