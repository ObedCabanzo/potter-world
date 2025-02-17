import { houseService } from "../../lib/api/apiServices";
import { House } from "../../models/house";
import HouseCard from "../../components/houseCard";
export default async function HousesPage() {
 
  const houses : House[] = await houseService.getAll();
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
