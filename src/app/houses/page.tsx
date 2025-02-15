"use client";
import { getAllHouses } from "../../lib/api/houseServices";
import { House } from "../../models/house";
import HouseCard from "../../components/houseCard";
import { useState, useEffect } from "react";

export default function HousesPage() {
  const [houses, setHouses] = useState<House[] | undefined>([]);
  const [state, setState] = useState("loading");

  useEffect(() => {
    getAllHouses()
      .then((houses) => {
        setHouses(houses);
        setState("loaded");
      })
      .catch(() => setState("error"));
  }, []);

  return (
    <div className="flex flex-col gap-4 py-8 h-full w-full items-center justify-center ">
      <h1 className="text-xl font-bold">Casas de Hogwarts</h1>

      {houses &&
        houses.map((house) => (
          <HouseCard house={house} key={`card-${house.name}`} />
        ))}

      {state === "loading" && (
        <h1 className="text-xl font-bold">Loading houses...</h1>
      )}
      {state === "error" && (
        <h1 className="text-xl font-bold">Error loading houses</h1>
      )}
    </div>
  );
}
