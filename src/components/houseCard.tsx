import { House } from ".././models/house";
import { linksMap } from "../data/links";
import CustomButton from "./customButton";

export default function HouseCard({ house }: { house: House }) {
  return (
    <div className="flex flex-col gap-2 items-center">
      <div className="flex flex-col gap-2 items-center">
        <h2 className="text-xl font-semibold text-center"> {house.house}</h2>
        <p>Animal: {house.animal}</p>
        <p className="text-5xl text-center">{house.emoji}</p>
        <p>Founder: {house.founder}</p>
        
        {house.colors.length > 0 && (
          <>
            <h2 className="text-lg font-semibold text-center"> Colors</h2>
            <div className="flex flex-col items-center bg-slate-400 rounded-lg p-2">
              {house.colors.map((color) => (
                <p key={`color-${color}`} style={{"color": color}}>{color}</p>
              ))}
            </div>
          </>
        )}
      </div>
    </div>
  );
}
