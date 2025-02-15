import Link from "next/link";
import { House } from ".././models/house";
import { links } from "../data/links.js";
export default function HouseCard({ house }: { house: House }) {
  return (
    <div className="flex flex-col gap-2">
      <div>
        <h2 className="text-xl font-semibold text-center"> {house.name}</h2>
        <p>Animal: {house.animal}</p>
        <p>Colours: {house.houseColours}</p>
      </div>
      <Link
        className="px-4 py-2 bg-black rounded-lg text-white hover:bg-gray-800 "
        href={`${links[1].url}/${house.id}`}
        key={"btn-house-" + house.name}
      >
        Ver más
      </Link>
    </div>
  );
}
