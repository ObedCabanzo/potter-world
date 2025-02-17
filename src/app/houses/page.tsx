import { Metadata } from "next";
import { House } from "../../models/house";
import HouseCard from "../../components/houseCard";
import { getAllHouses } from "../../lib/api/houseServices";
import { trackPageView } from "../../analytics/events";


export const metadata: Metadata = {
  title: "Houses",
  description: "Explore the houses of Hogwarts",
};

export default async function Page() {
  trackPageView('houses');
  const houses: House[] | undefined = await getAllHouses().catch(error => undefined);

  return (
    <div className="flex flex-col gap-4 py-8 h-full w-full items-center justify-center ">
      <h1 className="text-xl font-bold">Casas de Hogwarts</h1>

      {houses &&
        houses.map((house) => (
          <HouseCard house={house} key={`card-${house.name}`} />
        ))}
    </div>
  );
}
