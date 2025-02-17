import { Metadata } from "next";
import { House } from "../../../models/house";
import { houseService } from "../../../lib/api/apiServices";

export async function generateMetadata({
  params,
}: {
  params: { id: string };
}): Promise<Metadata> {
  try {
    const param = await params;
    const house = await houseService.getById(param.id);
    if (house && house.name) {
      return {
        title: house.name,
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

export default async function HousePage({
  params,
}: {
  params: { id: string };
}) {
  const param = await params;
  const house: House | undefined = await houseService.getById(param.id).catch(error => undefined);
 
  return (
    <>
      {house?.id && (
        <div className="flex flex-col gap-4 py-8 h-full w-full items-center justify-center text-center ">
          <div>
            <h1 className="text-xl font-bold  ">{house.name}</h1>
            <div className="flex flex-col items-center">
              <p>Animal: {house.animal}</p>
              <p>Colours: {house.houseColours}</p>
              <p>Founder: {house.founder}</p>
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
        </div>
      )}
      {house?.id === undefined && (
        <div className="flex flex-col gap-4 py-8 h-full w-full items-center justify-center text-center ">
          <h1 className="text-xl font-bold  ">House not found</h1>
        </div>
      )}
    </>
  );
}
