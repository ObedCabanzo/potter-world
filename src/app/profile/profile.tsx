"use client";
import { SessionData } from "@auth0/nextjs-auth0/types";
import { House } from "../../models/house";
import { getFavorite, setUserFavoriteHouse } from "../../lib/api/apiSupabase";
import { useState, useEffect } from "react";
import { setUserProperties } from "@/analytics/amplitude";
import { trackPreferenceChanged } from "@/analytics/events";

export default function Profile({
  session,
  houses,
}: {
  session: SessionData;
  houses: House[];
}) {
  const [selectedHouse, setSetelectedHouse] = useState<House | null>(null);

  const toggleSelection = (house: House) => {
    if (house.index === selectedHouse?.index) {
      setSetelectedHouse(null);
      setUserFavoriteHouse(session.user.sub, null);
      setUserProperties(session.user.sub, { favoriteHouse: "No preference" });
      trackPreferenceChanged(session, "No preference");
    } else {
      setSetelectedHouse(house);
      setUserFavoriteHouse(session.user.sub, house.index);
      setUserProperties(session.user.sub, { favoriteHouse: house.house });
      trackPreferenceChanged(session, house.house);
    }
  };

  const loadFavorite = async () => {
    const favorite = await getFavorite(session.user.sub);
    if (favorite) {
      const house = houses.find((house) => house.index === favorite);
      if (house) {
        setSetelectedHouse(house);
      }
    }
  };

  useEffect(() => {
    if (session) {
      loadFavorite();
    }
  }, [session]);

  return (
    <div className="flex flex-col gap-4 py-8 h-full w-full items-center justify-center text-center">
      <h1 className="text-xl font-bold">
        Welcome, {session.user.nickname} !!!
      </h1>
      <h2 className="text-lg">Select your favorite house</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {houses.map((house) => (
          <div
            key={house.index}
            className={`p-4 border rounded-lg shadow cursor-pointer transition duration-300 ${
              selectedHouse?.index === house.index
                ? "bg-black text-white"
                : "bg-white"
            }`}
            onClick={() => toggleSelection(house)}
          >
            <h3 className="text-lg font-semibold">{house.house}</h3>
          </div>
        ))}
      </div>
    </div>
  );
}
