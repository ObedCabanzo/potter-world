import { Metadata } from "next";
import { House } from "../../models/house";
import HouseCard from "../../components/houseCard";
import { houseService } from "../../lib/api/apiServices";


export const metadata: Metadata = {
  title: "Houses",
  description: "Explore the houses of Hogwarts",
};

export default async function Page() {
  const houses: House[] | undefined = await houseService.getAll().catch(error => undefined);

  return (
    <div className="flex flex-col gap-4 py-8 h-full w-full items-center justify-center ">
      <h1 className="text-xl font-bold">Houses of Hogwarts</h1>

      {houses &&
        houses.map((house) => (
          <HouseCard house={house} key={`card-${house.name}`} />
        ))}
    </div>
  );
}
