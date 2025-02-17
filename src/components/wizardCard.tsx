import { Wizard } from ".././models/wizard";
import { linksMap } from "../data/links";
import CustomButton from "./customButton";

export default function HouseCard({ wizard }: { wizard: Wizard }) {
  return (
    <div className="flex flex-col justify-center items-center gap-2">
      <div className="flex flex-col justify-center items-center ">
        <h2 className="text-xl font-semibold text-center">
          {" "}
          {wizard.firstName} {wizard.lastName}{" "}
        </h2>
        <CustomButton
          url={`${linksMap["wizards"].url}/${wizard.id}`}
          text={"Learn More"}
          trackText={`btn-spell-${wizard.firstName}`}
          className="px-4 py-2 bg-black rounded-lg text-white hover:bg-gray-800 w-fit"
        />
      </div>
    </div>
  );
}
