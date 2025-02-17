import Link from "next/link";
import { House } from ".././models/house";
import { links } from "../data/links.js";
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
        url={`${links[1].url}/${house.id}`}
        text={"Ver más"}
        trackText={`btn-houseCard-${house.name}`}
        className="px-4 py-2 bg-black rounded-lg text-white hover:bg-gray-800 "
      />
    </div>
  );
}
