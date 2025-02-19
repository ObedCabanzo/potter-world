import { House } from "../../../models/house";
import { houseService } from "../../../lib/api/apiServices";
import HouseCard from "../../../components/houseCard";
import { stringToNumber } from "../../../utils/utils";
import { Metadata } from "next";
import {auth0} from "../../../lib/auth0";

type Props = Promise<{ id: string }>;
async function getHouseById(id: string): Promise<House | undefined> {
  const houses: House[] | undefined = await houseService
    .getAll()
    .catch(() => undefined);
  return houses?.find((b) => b.index === stringToNumber(id));
}

export async function generateMetadata({
  params,
}: {
  params: Props;
}): Promise<Metadata> {
  const id = (await params).id
  const house = await getHouseById(id);
  return {
    title: house   ? `${house.house} - Houses` : "Not Found - Houses",
  };
}

export default async function LoadingPage({
  params,
}: {
  params: Props;
}) {
  const id = (await params).id
  const house = await getHouseById(id);
  const session = await auth0.getSession();

  return (
    <div className="flex flex-col gap-4 py-8 h-full w-full items-center justify-center">
      <div className="flex flex-col items-center justify-center gap-4">
        {house ? (
          <HouseCard house={house} session={session} key={`card-${house.index}`} />
        ) : (
          <div className="flex flex-col items-center">
            <h1 className="text-xl font-bold">Something happened!!!</h1>
            <h1 className="text-xl font-bold">No house found</h1>
            <h2 className="text-lg font-semibold mt-2">
              Please, come back later
            </h2>
          </div>
        )}
      </div>
    </div>
  );
}
