import { Metadata } from "next";
import { House } from "../../models/house";
import { houseService } from "../../lib/api/apiServices";
import CustomButton from "../../components/customButton";
import { linksMap } from "../../data/links";
import { auth0 } from "../../lib/auth0";

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
    <div className="flex flex-col gap-4 py-8 h-full w-full items-center justify-center ">
      <h1 className="text-xl font-bold">Houses of Hogwarts</h1>

      {houses &&
        houses.map((house) => (
          <div
            className="flex flex-col  w-96  bg-white  rounded-lg p-4 text-center items-center"
            key={`card-house-${house.house}`}
          >
            <h2 className="text-lg font-semibold"> {house.house}</h2>
            <p>Animal: {house.animal}</p>
            <CustomButton
              text="Read more"
              url={`${linksMap["houses"].url}/${house.index}`}
              trackText="Read more"
              className="bg-black text-white rounded-lg py-2 px-8 text-sm font-bold mt-2"
            />
          </div>
        ))}
      {!houses && (
        <div className="flex flex-col items-center ">
          <h1 className="text-xl font-bold">Something happened!!!</h1>
          <h1 className="text-xl font-bold">No houses found</h1>
          <h2 className="text-lg font-semibold mt-2">
            Please, come back later
          </h2>
        </div>
        
      )}
    </div>
  );
}
