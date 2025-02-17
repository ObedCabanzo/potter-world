import { House } from ".././models/house";
import { linksMap } from "../data/links";
import CustomButton from "./customButton";

export default function HouseCard({ house }: { house: House }) {
  return (
    <div className="flex flex-col gap-2">
      <div>
        <h2 className="text-xl font-semibold text-center"> {house.name}</h2>
        <p>Animal: {house.animal}</p>
        <p>Colours: {house.houseColours}</p>
      </div>
      <CustomButton
        url={`${linksMap["houses"].url}/${house.id}`}
        text={"Learn More"}
        trackText={`btn-house-${house.name}`}
        className="px-4 py-2 bg-black rounded-lg text-white hover:bg-gray-800 "
      />
    </div>
  );
}
