import { Metadata } from "next";
import { House } from "../../models/house";
import HouseCard from "../../components/houseCard";
import { houseService } from "../../lib/api/apiServices";

export const metadata: Metadata = {
  title: {
    default: "Houses",
    template: "%s - Houses",
  },
  description: "Explore the houses of Hogwarts",
};

export default async function Page() {
  const houses: House[] | undefined = await houseService
    .getAll()
    .catch((error) => undefined);

  return (
    <div className="flex flex-col gap-8 py-8 h-full w-full items-center justify-center ">
      <h1 className="text-xl font-bold">Houses of Hogwarts</h1>

      {houses &&
        houses.map((house) => (
          <HouseCard house={house} key={`card-${house.house}`} />
        ))}
      {!houses && (
        <div className="flex flex-col items-center ">
        <h1 className="text-xl font-bold">Something happened!!!</h1>
        <h1 className="text-xl font-bold">No houses found</h1>
        <h2 className="text-lg font-semibold mt-2">Please, come back later</h2>
      </div>
      )}
    </div>
  );
}
